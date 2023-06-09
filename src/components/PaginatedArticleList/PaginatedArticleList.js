import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import DateLabel from '@/components/DateLabel'
import Balancer from 'react-wrap-balancer'
import PaginationNav from '../PaginationNav/PaginationNav'

function PaginatedArticleList ({ items, itemsPerPage, ...props }) {
  const baseStyles = 'flex flex-col divide-y-[1px] border-y-[1px] selection:divide-gray-200'
  const styles = clsx(baseStyles, props.className)
  const [currentPage, setCurrentPage] = React.useState(1)

  const numPages = Math.ceil(items.length / itemsPerPage)

  const sliceStart = (currentPage - 1) * itemsPerPage
  const sliceEnd = sliceStart + itemsPerPage
  const itemsCurrentPage = items.slice(sliceStart, sliceEnd)

  return (
    <>
      <ul className={styles}>
        {itemsCurrentPage.map(({ slug, title, tags, publishedAt }) => {
          return (
            <Link key={slug} href={`${slug}`}>
              <li className='flex items-center justify-between gap-10 p-4 text-sm hover:bg-gray-100 sm:text-lg'>
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
          )
        })}
      </ul>

      {/* Pagination footer */}
      <PaginationNav
        className='mt-auto'
        numPages={numPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxButtons={5}
      />
    </>
  )
}

export default PaginatedArticleList
