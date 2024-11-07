'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false)
          setIsMenuOpen(false) // Close the menu when scrolling down
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl md:text-4xl font-bold text-accent">
            The Velvet Ember
          </Link>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={`${isHomePage ? 'text-white' : 'text-gray-800'} hover:text-accent`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className={`md:flex md:space-x-8 text-xl ${
            isMenuOpen 
              ? 'absolute top-full left-0 right-0 bg-white shadow-md p-4 space-y-4 md:space-y-0' 
              : 'hidden'
          }`}>
            {['Home', 'About', 'Menu', 'Reserve', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`block transition duration-300 ${
                    isHomePage && !isMenuOpen
                      ? 'text-white hover:text-opacity-80'
                      : 'text-gray-800 hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}