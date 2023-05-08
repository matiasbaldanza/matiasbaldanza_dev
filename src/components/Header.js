import Link from 'next/link'
import ThemeToggle from './ui/buttons/ThemeToggle'

export default function Header () {
  return (
    <header className='flex justify-between w-full py-6 mb-10'>
      <Link
        href='/'
        className='flex flex-col gap-1 text-xl font-bold align-center'
      >
        <span>Matías Baldanza</span>
        <span className='no-animation w-md btn btn-xs btn-outline opacity-70 text-[0.7rem]'>
          Building in public
        </span>
      </Link>
      <nav>
        <ul className='flex gap-4'>
          {/*           <li className='text-gray-500 cursor-not-allowed'>Blog</li>
          <li className='text-gray-500 cursor-not-allowed'>Portfolio</li> */}
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  )
}
