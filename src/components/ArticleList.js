import PaginatedArticleList from './PaginatedArticleList/PaginatedArticleList'

function ArticleList ({ articlesData }) {
  return (
    <>
      {articlesData.length === 0 &&
        <div className='grid h-min-screen place-content-center'>
          No articles published yet!
        </div>}
      <PaginatedArticleList
        items={articlesData}
        itemsPerPage={10}
      />
    </>
  )
}

export default ArticleList
