import { Inter } from 'next/font/google'
import Image from 'next/image'

// Components
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'

// Utils
import { getArticlesDataSorted } from '@/utils/articles'

const inter = Inter({ subsets: ['latin'] })

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
      {console.log(articlesData)}
      <ul className='divide-y-2'>
        { articlesData.length === 0 && 
          <div className='grid h-min-screen place-content-center'>
            No articles published yet!
          </div> }
        { articlesData.map( ({ slug, title, publishedAt }) => {
          return (
            <li 
              key={slug}
              className='flex justify-between p-4 gap-2'
            >
              {title}<span className='text-right min-w-max'>{publishedAt}</span>
            </li>
          )
          })}
      </ul>
    </Layout>

  )
}
