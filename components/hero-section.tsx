"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Settings } from "lucide-react"

export function HeroSection() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Juan Sebastian Gualdron"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-10-06%20155848-g7gdqHPam9ZvjQICCQO2m2efqHyPY8.png"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-white text-lg mb-4">Bienvenido</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Soy {text}
          {showCursor && <span className="text-white">|</span>}
        </h1>
        <p className="text-white text-lg mb-8">ubicado en Bucaramanga, Santander, Colombia.</p>
        <a
          href="#contacto"
          className="inline-block px-8 py-3 border-2 border-[#00D9A3] text-[#00D9A3] rounded-full hover:bg-[#00D9A3] hover:text-white transition-all duration-300"
        >
          Contrátame
        </a>
      </div>

      {/* Settings Button */}
      <button className="fixed bottom-8 right-8 z-20 bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
        <Settings className="w-6 h-6 text-white" />
      </button>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </div>
    </section>
  )
}
