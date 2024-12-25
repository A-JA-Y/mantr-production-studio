"'use client'"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    gsap.from(hero, { opacity: 0, y: 50, duration: 1, delay: 0.5 })
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Capture Your Moments</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">Professional Photography & Videography Services</p>
        <a href="#contact" className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          Book Now
        </a>
      </div>
    </section>
  )
}

