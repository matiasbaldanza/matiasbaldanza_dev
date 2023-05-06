import Layout from '@/components/Layout'
import ArticleContent from '@/components/ArticleContent'
import DateLabel from '@/components/DateLabel'
import Balancer from 'react-wrap-balancer'
import Head from 'next/head'

// Utils
import { getArticlesSlugs, getArticleContent } from '@/utils/articles'
import { capitalizeFirstLetter } from '@/lib/caseUtils'

export default function Article ({ articleContent }) {
  const dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <Layout>
      <Head>
        <title>{articleContent.title} — Matías Baldanza</title>
      </Head>

      <div className='mb-10 text-center'>
        <DateLabel
          className='text-gray-500' options={dateFormatOptions}
          callback={capitalizeFirstLetter}
        >
          {articleContent.publishedAt}
        </DateLabel>
        <h1 className='mb-4 text-4xl font-bold'>
          <Balancer>{articleContent.title}</Balancer>
        </h1>
      </div>
      <ArticleContent content={articleContent.articleContentHtml} />
    </Layout>
  )
}

export async function getStaticPaths () {
  const paths = getArticlesSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const articleContent = await getArticleContent(params.slug)
  return {
    props: {
      articleContent
    }
  }
}
