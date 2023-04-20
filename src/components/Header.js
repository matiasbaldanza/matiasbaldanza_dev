import Link from "next/link"

export default function Header() {
    return (
        <header className='flex justify-between py-6 mb-10 w-full'>
            <Link
                href='/'
            ><span>Matías Baldanza</span></Link>
            <nav>
                <ul className='flex gap-4'>
                <li className="text-gray-500 cursor-not-allowed">Blog</li>
                <li className="text-gray-500 cursor-not-allowed">Portfolio</li>
                </ul>
            </nav>
        </header>
    )
}