import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articlesData }) {
  return (
    <Layout>
      {console.log(articlesData)}
      <ul className='divide-y-2'>
        <li className='flex justify-between p-4'>
          Título del artículo<span>Fecha</span>
        </li>
        <li className='flex justify-between p-4'>
          Título del artículo<span>Fecha</span>
        </li>
        <li className='flex justify-between p-4'>
          Título del artículo<span>Fecha</span>
        </li>
        <li className='flex justify-between p-4'>
          Título del artículo<span>Fecha</span>
        </li>
        <li className='flex justify-between p-4'>
          Título del artículo<span>Fecha</span>
        </li>
        <li className='flex justify-between p-4'>
          Título del artículo<span>Fecha</span>
        </li>
      </ul>
    </Layout>
  )
}
