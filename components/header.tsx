"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  onOpenContactForm: () => void
}

export default function Header({ onOpenContactForm }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // use your actual logo path (you can upload the provided one as /public/logo.png)
            alt="MQL Experts Logo"
            width={120} // smaller, balanced look
            height={30}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            onClick={onOpenContactForm}
            className="rounded-full bg-[#0055FF] px-5 py-2 text-sm font-medium text-white hover:bg-[#0044cc] transition shadow-sm"
          >
            Get a Demo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-slate-900" />
          ) : (
            <Menu className="h-6 w-6 text-slate-900" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white/90 backdrop-blur-md px-4 py-4 md:hidden">
          <button
            onClick={onOpenContactForm}
            className="w-full rounded-full bg-[#0055FF] px-6 py-2 text-sm font-medium text-white hover:bg-[#0044cc] transition"
          >
            Get a Demo
          </button>
        </div>
      )}
    </header>
  )
}
