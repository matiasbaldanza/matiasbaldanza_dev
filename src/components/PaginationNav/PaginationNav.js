import clsx from 'clsx'
import PaginationButton from './PaginationButton'
import slidingWindow from './slidingWindow'

// Icons
import HIChevronDoubleLeft from '../Icons/HIChevronDoubleLeft'
import HIChevronDoubleRight from '../Icons/HIChevronDoubleRight'
import HIChevronLeft from '../Icons/HIChevronLeft'
import HIChevronRight from '../Icons/HIChevronRight'

function PaginationNav ({
  numPages,
  currentPage,
  setCurrentPage,
  maxButtons,
  ...props
}) {
  const navStyles = 'flex items-center justify-center gap-2 p-4'
  const baseButtonStyles = 'w-12 py-2 rounded-md hover:bg-gray-200'
  const navButtonStyles = 'py-2 px-2 rounded-md hover:bg-gray-200 disabled:opacity-0 disabled:bg-transparent'
  const currentButtonStyles = 'font-bold bg-gray-200'

  const firstButton = (
    <PaginationButton
      onClick={() => setCurrentPage(1)}
      className={navButtonStyles}
      disabled={currentPage === 1}
    ><HIChevronDoubleLeft />
    </PaginationButton>
  )

  const lastButton = (
    <PaginationButton
      onClick={() => setCurrentPage(numPages)}
      className={navButtonStyles}
      disabled={currentPage === numPages}
    ><HIChevronDoubleRight />
    </PaginationButton>
  )

  const previousButton = (
    <PaginationButton
      onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      className={navButtonStyles}
      disabled={currentPage === 1}
    ><HIChevronLeft />
    </PaginationButton>
  )

  const nextButton = (
    <PaginationButton
      onClick={() => currentPage < numPages && setCurrentPage(currentPage + 1)}
      className={navButtonStyles}
      disabled={currentPage === numPages}
    ><HIChevronRight />
    </PaginationButton>
  )

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

  const visibleButtons = slidingWindow(currentPage, pageNumbers, maxButtons)

  return (
    <>
      {numPages > 1 &&
        <nav className={clsx(props.className, navStyles)}>
          {firstButton}
          {previousButton}
          {visibleButtons.map((button) => button)}
          {nextButton}
          {lastButton}
          {/* { pageButtons.ellipsis } */}
        </nav>}
    </>
  )
}

export default PaginationNav
