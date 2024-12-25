"'use client'"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Sun, Moon, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  // const { theme, setTheme } = useTheme()  Removed as ThemeToggle handles theme
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            Mantr Production
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="#services" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Services</Link>
            <Link href="#gallery" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Gallery</Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</Link>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="#services" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Services</Link>
            <Link href="#gallery" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Gallery</Link>
            <Link href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

