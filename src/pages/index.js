import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Components
import Layout from '@/components/Layout'
import ArticleList from '@/components/ArticleList'

// Utils
import { getArticlesDataSorted } from '@/utils/articles'

export async function getStaticProps() {
  const articlesData = getArticlesDataSorted()
  return {
    props: {
      articlesData,
    }
  }
}

export default function Home({ articlesData }) {
  return (
    <Layout>
        <ArticleList articlesData={articlesData} />
    </Layout>

    

  )
}
