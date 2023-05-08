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
      <h1 className='text-5xl font-bold text-center'>Notes</h1>
      <section className='mt-10 [&>*]:mb-2'>
        <p>What is this? A blog? <em>How original!</em></p>
        <p>Most of the articles here are things I've learned after breaking things and then having to fix them. I collected them mostly for myself because it's impossible to remember everthing, and I know will need them later on. I also share them to pay forward a little of all the internet generosity I've enjoyed over the years.</p>
        <p>I might include a few blog entries, and the occasional <s>essay</s> <em>rant</em>.</p>
        <p>If you have anything to add to the conversation, please reach out directly through Twitter.</p>
        <ArticleList
          className='mt-10'
          articlesData={articlesData}
        />
      </section>
    </Layout>
  )
}
