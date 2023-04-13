import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='container mx-auto px-6 lg:max-w-5xl flex flex-col min-h-screen'>
        <header className='flex justify-between py-6 mb-10'>
          <span>😁 Matías Baldanza</span>
          <nav>
            <ul className='flex gap-4'>
              <li>Blog</li>
              <li>Portfolio</li>
            </ul>
          </nav>
        </header>
        <main className='max-h-screen flex-1'>
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
            <li className='flex justify-between p-4'>
              Título del artículo<span>Fecha</span>
            </li>
            <li className='flex justify-between p-4'>
              Título del artículo<span>Fecha</span>
            </li>
          </ul>
        </main>
        <footer className='py-6 flex flex-col gap-2'>
          <p>Call to action1</p>
          <p>Call to action2</p>
          <p>Call to action3</p>
          <p>Contact - Copyright, etc.</p>
        </footer>
      </div>
  )
}
