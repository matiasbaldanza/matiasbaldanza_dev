import PaginatedArticleList from './PaginatedArticleList/PaginatedArticleList'
import clsx from 'clsx'
import Link from '@/components/Link'

function ArticleList ({ articlesData, ...props }) {
  const baseStyles = 'grid h-min-screen place-content-center'
  const styles = clsx(baseStyles, props.className)
  return (
    <>
      {articlesData.length === 0 &&
        <div className={styles}>
          No articles published yet!
        </div>}
      <PaginatedArticleList
        className={styles}
        items={!props.limit ? articlesData : articlesData.slice(0, props.limit)}
        itemsPerPage={10}
      />
      {
        props.limit && articlesData.length > props.limit &&
          <Link
            href='/notes'
            className='block w-full p-4 mt-4 text-center text-gray-200 bg-gray-600 dark:text-gray-800 dark:bg-gray-600'
          >
            And {articlesData.length - props.limit} notes more...
          </Link>
      }
    </>
  )
}

export default ArticleList
