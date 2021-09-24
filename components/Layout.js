import Link from 'next/link'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="mb-0">
        <Navbar></Navbar>
      </header>
      
      <div className="m-20 ">
        { children }
      </div>

      <footer className="m-1 py-5 bg-black">
        <h1 className="text-center text-white">COFFEE TO SHARE </h1>
        <p className="text-center text-white">Copyright © 2021. Alright Reserved</p>
      </footer>
    </div>
  )
}