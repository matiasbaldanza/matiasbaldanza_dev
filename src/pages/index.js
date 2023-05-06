// Components
import Layout from '@/components/Layout'
import ArticleList from '@/components/ArticleList'

// Utils
import { getArticlesDataSorted } from '@/utils/articleUtils'

export async function getStaticProps () {
  const articlesData = getArticlesDataSorted()
  return {
    props: {
      articlesData
    }
  }
}

export default function Home ({ articlesData }) {
  return (
    <Layout>
      <ArticleList articlesData={articlesData} />
    </Layout>
  )
}
