import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { FloatingCTA } from "@/components/floating-cta"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shiv Shakti Metals - Professional Metal Recycling & Scrap Services",
  description:
    "Leading metal recycling and scrap services. Turn your metal waste into revenue with our sustainable recycling solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingCTA />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
