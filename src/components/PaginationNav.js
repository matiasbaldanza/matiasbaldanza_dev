import React from 'react'
import clsx from 'clsx'
import PaginationButton from './PaginationButton'

function PaginationNav({ numPages, 
                    currentPage, 
                    setCurrentPage, 
                    maxButtons, 
                    ...props }) {
                    
    const navStyles = 'flex items-center justify-center gap-4 p-4'
    const baseButtonStyles = 'w-12 py-2 rounded-md hover:bg-gray-200'
    const currentButtonStyles = 'font-bold bg-gray-200'
    
    const firstButton = <PaginationButton
                    onClick={() => setCurrentPage(1)}
                    className={baseButtonStyles}
                  >&lt;&lt;</PaginationButton>
    
    const lastButton = <PaginationButton
                    onClick={() => setCurrentPage(numPages)}
                    className={baseButtonStyles}
                    >&gt;&gt;</PaginationButton>
    
    const previousButton = <PaginationButton
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    className={baseButtonStyles}
                    >&lt;</PaginationButton>
    
    const nextButton = <PaginationButton
                    onClick={() => currentPage < numPages && setCurrentPage(currentPage + 1)}
                    className={baseButtonStyles}
                    >&gt;</PaginationButton>

    const pageNumbers = Array.from({ length: numPages }, (_, i) => {
                          const pageNumber = i + 1
                          const isCurrentPageLink = currentPage === pageNumber
                      
                          return (
                            <PaginationButton
                              key={pageNumber}
                              disabled={isCurrentPageLink}
                              onClick={() => setCurrentPage(pageNumber)}
                              className={clsx(baseButtonStyles, isCurrentPageLink && currentButtonStyles)}
                            >
                              {pageNumber}
                            </PaginationButton> 
                          )
    })

    const pageButtons = {
        first: firstButton,
        last: lastButton,
        prev: previousButton,
        next: nextButton,
        ellipsis: <PaginationButton 
                    disabled={true}
                  >...</PaginationButton>,
        pages: pageNumbers
    }

    /* const filteredButtons = pageButtons.pages.length > maxButtons 
                            ? 
                            : */

    return <>
      { numPages > 1 &&
          <ul className={clsx(props.className, navStyles)} >
            { pageButtons.first }
            { pageButtons.prev }
            { pageButtons.pages.map((button) => button) } 
            { pageButtons.next }
            { pageButtons.last }
            {/* { pageButtons.ellipsis } */}
          </ul>
      }
    </>
}

export default PaginationNav