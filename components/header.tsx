"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#inicio" className="text-2xl font-bold text-white">
            Juan Sebastian
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#inicio" className="text-[#00D9A3] hover:text-[#00D9A3] transition-colors">
              Inicio
            </Link>
            <Link href="#sobre-mi" className="text-white hover:text-[#00D9A3] transition-colors">
              Sobre Mí
            </Link>
            <Link href="#que-hago" className="text-white hover:text-[#00D9A3] transition-colors">
              Qué Hago
            </Link>
            <Link href="#curriculum" className="text-white hover:text-[#00D9A3] transition-colors">
              Currículum
            </Link>
            <Link href="#contacto" className="text-white hover:text-[#00D9A3] transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00D9A3] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00D9A3] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00D9A3] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <Link
                href="#inicio"
                className="text-[#00D9A3] hover:text-[#00D9A3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="#sobre-mi"
                className="text-white hover:text-[#00D9A3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Mí
              </Link>
              <Link
                href="#que-hago"
                className="text-white hover:text-[#00D9A3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Qué Hago
              </Link>
              <Link
                href="#curriculum"
                className="text-white hover:text-[#00D9A3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Currículum
              </Link>
              <Link
                href="#contacto"
                className="text-white hover:text-[#00D9A3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
