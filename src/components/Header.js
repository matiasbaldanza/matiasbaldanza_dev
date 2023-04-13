import Link from "next/link"

export default function Header() {
    return (
        <header className='flex justify-between py-6 mb-10'>
            <span>😁 Matías Baldanza</span>
            <nav>
                <ul className='flex gap-4'>
                <li>Blog</li>
                <li>Portfolio</li>
                </ul>
            </nav>
        </header>
    )
}