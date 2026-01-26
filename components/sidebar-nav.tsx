'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Info, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface SidebarNavProps {
  isOpen: boolean
  onClose: () => void
}

export function SidebarNav({ isOpen, onClose }: SidebarNavProps) {
  const pathname = usePathname()

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
    },
    {
      label: 'About Us',
      href: '/about',
      icon: Info,
    },
    {
      label: 'Contact Now',
      href: '/#enquiry',
      icon: Phone,
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed right-0 top-0 z-50 h-screen w-64 border-l border-border/40 bg-card pt-20 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Close sidebar"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 p-6">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
