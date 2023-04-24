import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import DateLabel from '@/components/DateLabel'
import Balancer from 'react-wrap-balancer'

// Components
import Layout from '@/components/Layout'

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
      <ul className='flex flex-col divide-y-2 border-y-2 selection:divide-gray-200'>
        { articlesData.length === 0 && 
          <div className='grid h-min-screen place-content-center'>
            No articles published yet!
          </div> }
        { articlesData.map( ({ slug, title, publishedAt }) => {
          return (
            <Link
              key={slug}
              href={`${slug}`}
            >
              <li
                className='flex items-center justify-between gap-10 p-4 hover:bg-gray-100'
              >
                <Balancer>{title}</Balancer>
                {/* TODO: split by year or show year for articles not of current year */}
                <DateLabel 
                  className='text-sm text-right text-gray-500 min-w-max'
                  options={{ month: 'short', day: 'numeric' }}
                >
                  {publishedAt}
                </DateLabel>
              </li>
            </Link>
          )
          })}
      </ul>
    </Layout>

    

  )
}
