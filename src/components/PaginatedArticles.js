import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import DateLabel from '@/components/DateLabel'
import Balancer from 'react-wrap-balancer'


function PaginatedArticles({ items, itemsPerPage }) {
  const [currentPage, setCurrentPage] = React.useState(1)
  
  const numPages = Math.ceil(items.length / itemsPerPage)
  
  const sliceStart = (currentPage - 1) * itemsPerPage
  const sliceEnd = sliceStart + itemsPerPage
  const itemsCurrentPage = items.slice(sliceStart, sliceEnd)

  const pagesLinks = Array.from({ length: numPages }, (_, i) => {
    const pageNumber = i + 1
    const isCurrentPageLink = currentPage === pageNumber
    const baseStyles = 'px-4 py-2 rounded-md hover:bg-gray-200'
    const currentStyles = 'font-bold bg-gray-200'

    return (
      <button
        key={pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
        className={clsx(baseStyles, isCurrentPageLink && currentStyles)}
      >
        {pageNumber}
      </button> 
    )
  })

  return (
    <>
      <ul className='flex flex-col divide-y-2 border-y-2 selection:divide-gray-200'>
      { itemsCurrentPage.map( ({ slug, title, publishedAt }) => {
        return (
          <Link
          key={slug}
          href={`${slug}`}
          >
            <li
                className='flex items-center justify-between gap-10 p-4 hover:bg-gray-100'
            >
                <Balancer>{title}</Balancer>
                {/* TODO: split by year or show year for articles not of current year */}
                <DateLabel 
                className='text-sm text-right text-gray-500 min-w-max'
                options={{ month: 'short', day: 'numeric' }}
                >
                {publishedAt}
                </DateLabel>
            </li>
          </Link>
          )})}
      </ul>

      {/* Pagination footer */}
      { numPages > 1 &&
          <ul
            className='flex items-center justify-center gap-4 p-4 mt-auto'
          >
           {pagesLinks.map((link) => {
              return link
            })}        
          </ul>
      }
    </>
  )
}

export default PaginatedArticles