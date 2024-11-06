'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <header className={`fixed w-full z-10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <nav className="container mx-auto flex justify-between items-center p-6 pt-8">
        <Link href="/" className="text-4xl font-bold text-accent">
          The Velvet Ember
        </Link>
        <ul className="flex space-x-8 text-2xl">
          <li>
            <Link href="/" className={`transition duration-300 ${
              isHomePage 
                ? 'text-white hover:text-opacity-80' 
                : 'text-gray-800 hover:text-accent'
            }`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`transition duration-300 ${
              isHomePage 
                ? 'text-white hover:text-opacity-80' 
                : 'text-gray-800 hover:text-accent'
            }`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/menu" className={`transition duration-300 ${
              isHomePage 
                ? 'text-white hover:text-opacity-80' 
                : 'text-gray-800 hover:text-accent'
            }`}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/reserve" className={`transition duration-300 ${
              isHomePage 
                ? 'text-white hover:text-opacity-80' 
                : 'text-gray-800 hover:text-accent'
            }`}>
              Reserve
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`transition duration-300 ${
              isHomePage 
                ? 'text-white hover:text-opacity-80' 
                : 'text-gray-800 hover:text-accent'
            }`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}