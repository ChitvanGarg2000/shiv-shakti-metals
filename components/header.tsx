

"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { SidebarNav } from "./sidebar-nav"
import Image from "next/image"

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [enterprisesOpen, setEnterprisesOpen] = useState(false)
  const enterprisesDropdownRef = useRef<HTMLDivElement>(null)

  // Close desktop Enterprises dropdown when clicking outside (e.g. on tablets). Skip when mobile menu is open so mobile dropdown links remain clickable.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !mobileMenuOpen &&
        enterprisesOpen &&
        enterprisesDropdownRef.current &&
        !enterprisesDropdownRef.current.contains(event.target as Node)
      ) {
        setEnterprisesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [enterprisesOpen, mobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex h-20 items-center px-4 justify-between md:justify-start">
          {/* Logo */}
          <Link href="/" className="flex font-bold text-center items-center">
            <Image src="/logo.png" alt="site-logo" width={56} height={56} className="me-2" />
            <Image src="/logo-text.png" alt="site-logo" width={48} height={48} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 md:justify-end">
            {/* Enterprises Dropdown - hover (desktop) + click (tablets/touch) */}
            <div className="relative group" ref={enterprisesDropdownRef}>
              <button
                type="button"
                onClick={() => setEnterprisesOpen(!enterprisesOpen)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                aria-expanded={enterprisesOpen}
                aria-haspopup="true"
              >
                Enterprises
                <ChevronDown className={`h-4 w-4 transition-transform ${enterprisesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              <div
                className={`absolute left-0 mt-0 w-48 bg-card border border-border rounded-md shadow-lg transition-all duration-200 ${enterprisesOpen ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
              >
                <Link
                  href="/enterprises/services"
                  className="block px-4 py-2 text-sm text-card-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setEnterprisesOpen(false)}
                >
                  Our Services
                </Link>
                <Link
                  href="/enterprises/sectors"
                  className="block px-4 py-2 text-sm text-card-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border"
                  onClick={() => setEnterprisesOpen(false)}
                >
                  Our Sectors
                </Link>
              </div>
            </div>

            <Link
              href="/about-us"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/consumer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Consumer
            </Link>

            <Link
              href="/faqs"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              FAQs
            </Link>

            <Button asChild>
              <Link href="/make-a-change">Make a Change</Link>
            </Button>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2">
            {/* Sidebar Toggle Button (visible on all screens) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-foreground hover:text-primary transition-colors ms-3 cursor-pointer hidden md:inline-flex"
              aria-label="Open sidebar navigation"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="container mx-auto flex flex-col gap-2 p-4">
              {/* Enterprises Mobile Dropdown */}
              <button
                onClick={() => setEnterprisesOpen(!enterprisesOpen)}
                className="text-sm font-medium text-card-foreground hover:text-primary transition-colors text-left flex items-center justify-between py-2"
              >
                Enterprises
                <ChevronDown className={`h-4 w-4 transition-transform ${enterprisesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {enterprisesOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/enterprises/services"
                    className="text-sm text-card-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/enterprises/sectors"
                    className="text-sm text-card-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Sectors
                  </Link>
                </div>
              )}

              <Link
                href="/about-us"
                className="text-sm font-medium text-card-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/consumer"
                className="text-sm font-medium text-card-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consumer
              </Link>

              <Link
                href="/faqs"
                className="text-sm font-medium text-card-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </Link>

              <Button asChild className="w-full mt-2">
                <Link href="/make-a-change" onClick={() => setMobileMenuOpen(false)}>
                  Make a Change
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Sidebar Navigation */}
      <SidebarNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}
