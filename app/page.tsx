"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import ContactFormModal from "@/components/contact-form-modal"

export default function Page() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  useEffect(() => {
    // Open on initial load
    setIsContactFormOpen(true)

    // Open when tab is focused
    const handleFocus = () => {
      setIsContactFormOpen(true)
    }

    window.addEventListener("focus", handleFocus)
    return () => window.removeEventListener("focus", handleFocus)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Header onOpenContactForm={() => setIsContactFormOpen(true)} />
      <Hero onOpenContactForm={() => setIsContactFormOpen(true)} />
      <Benefits />
      <Features />
      <CTA onOpenContactForm={() => setIsContactFormOpen(true)} />
      <Footer />
      <ContactFormModal isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </main>
  )
}
