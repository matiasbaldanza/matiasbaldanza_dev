import Head from 'next/head'

// Components
import Layout from '@/components/Layout'
import ArticleContent from '@/components/ArticleContent'
import ArticleHeader from '@/components/ArticleHeader'

// Utils
import { getArticlesSlugs, getArticleContent } from '@/utils/articles'

export default function Article ({ articleContent }) {
  return (
    <Layout>
      <Head>
        <title>{articleContent.title} — Matías Baldanza</title>
      </Head>

      <ArticleHeader {...articleContent} />
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
