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
      <section className='mt-10'>
        <h3 className='mb-4 text-xl font-bold tracking-tight text-left'>
          Latest Notes
        </h3>
        <ArticleList
          className='mt-10'
          limit={3}
          articlesData={articlesData}
        />
      </section>
    </Layout>
  )
}
