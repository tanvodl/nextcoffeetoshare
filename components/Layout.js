import Link from 'next/link'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-bl from-cool-gray-100 to-cool-gray-300">
      <div className="">
        <header className="mx-5 md:mx-20">
          <Navbar></Navbar>
        </header>
      </div>
      
      <div className="m-5 md:m-20 md:px-5">
        { children }
      </div>

      <footer className="m-1 py-5 bg-black">
        <h1 className="text-center text-white">COFFEE TO SHARE </h1>
        <p className="text-center text-white">Copyright © 2021. Alright Reserved</p>
      </footer>
    </div>
  )
}