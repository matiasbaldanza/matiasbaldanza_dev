import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { getArticlesDataSorted } from '@/utils/articles'
import Footer from '@/components/Footer'

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
        { articlesData.map( ({ slug, title, publishedAt }) => {
          return (
            <li className='flex justify-between p-4 gap-2'>
              {title}<span className='text-right min-w-max'>{publishedAt}</span>
            </li>
          )
          })}
      </ul>
      <Footer />
    </Layout>

  )
}
