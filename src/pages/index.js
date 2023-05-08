// Components
import Layout from '@/components/Layout'
import ArticleList from '@/components/ArticleList'
import Hero from '@/components/Hero'

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
      <Hero />
      <h2
        className='mb-6 text-3xl font-bold tracking-tight text-center'
      >
        Latest articles</h2>
      <ArticleList articlesData={articlesData} />
    </Layout>
  )
}
