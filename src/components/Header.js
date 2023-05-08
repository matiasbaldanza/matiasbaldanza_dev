import Link from 'next/link'
import ThemeToggle from './ui/buttons/ThemeToggle'

export default function Header () {
  return (
    <header className='flex justify-between w-full py-6 mb-10'>
      <div className='flex flex-col gap-1 align-center'>
        <Link
          href='/'
          className='text-xl font-bold'
        >
          Matías Baldanza
        </Link>
        <button className='w-md btn btn-xs btn-outline opacity-70 text-[0.7rem]'>
          Building in public
        </button>
      </div>
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
