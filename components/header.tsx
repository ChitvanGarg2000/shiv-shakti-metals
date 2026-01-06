"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Recycle } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image src="/logo.png" alt="SSK Metals Logo" width={60} height={60} />
          <h2>Shiv Shakti Metals</h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link href="/epr" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            EPR
          </Link>
          <Link
            href="/#enquiry"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Get Quote
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
          <Button asChild size="sm">
            <Link href="/#enquiry">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container mx-auto flex flex-col gap-4 p-4">
            <Link
              href="/about"
              className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/epr"
              className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              EPR
            </Link>
            <Link
              href="/#enquiry"
              className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button asChild className="w-full">
              <Link href="/#enquiry" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
