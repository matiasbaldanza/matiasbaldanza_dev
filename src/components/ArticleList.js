import React from 'react'
import PaginatedArticles from './PaginatedArticles'

function ArticleList({ articlesData }) {
  return (
      <>
        { articlesData.length === 0 && 
        <div className='grid h-min-screen place-content-center'>
          No articles published yet!
        </div> }
        <PaginatedArticles 
            items={articlesData}
            itemsPerPage={5}
        />
      </>
  )
}

export default ArticleList