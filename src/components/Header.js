import Link from 'next/link'
import ThemeToggle from './ui/buttons/ThemeToggle'

export default function Header () {
  return (
    <header className='flex justify-between w-full py-6 mb-10'>
      <Link
        href='/'
      ><span>Matías Baldanza</span>
      </Link>
      <nav>
        <ul className='flex gap-4'>
          <li className='text-gray-500 cursor-not-allowed'>Blog</li>
          <li className='text-gray-500 cursor-not-allowed'>Portfolio</li>
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  )
}
