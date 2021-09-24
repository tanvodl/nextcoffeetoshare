import Link from 'next/link'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="mb-0">
        <Navbar></Navbar>
      </header>
      
      <div className="bg-gray-50">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Coffee To Share</p>
      </footer>
    </div>
  )
}