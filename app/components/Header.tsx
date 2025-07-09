import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 bg-gray-900 text-white">
      <nav className="flex gap-6 justify-center">
        <Link href="/">Home</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
