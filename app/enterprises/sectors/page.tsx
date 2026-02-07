'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { ClientsCarousel } from '@/components/clients-section'
import { EnquiryForm } from '@/components/enquiry-form'
import { FeaturedEwasteSection } from '@/components/app/FeaturedEWaste'
import {
  Battery,
  Radio,
  Zap,
  Cable,
} from 'lucide-react'

const sectors = [
  {
    icon: Battery,
    title: 'Lead Acid Batteries',
    heading: 'Sustainable Battery Recycling',
    description:
      'Comprehensive lead acid battery recycling solutions ensuring safe handling, environmental protection, and complete material recovery.',
  },
  {
    icon: Radio,
    title: 'Plastic Waste',
    heading: 'Advanced Plastic Waste Management',
    description:
      'Specialized plastic waste segregation and recycling to reduce environmental impact and promote circular economy.',
  },
  {
    icon: Zap,
    title: 'Non-Ferrous Metals',
    heading: 'Non-Ferrous Metal Recovery',
    description:
      'Expert recovery and recycling of non-ferrous metals including copper, aluminum, and other valuable materials.',
  },
  {
    icon: Cable,
    title: 'Insulated Wires & Cables',
    heading: 'Copper Cable Processing',
    description:
      'Complete processing of insulated wires and cables to recover valuable copper and other materials.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function EnterprisessectorsPage() {
  return (
    <main className="min-h-screen pt-10 lg:pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Begin your
              <span className="text-primary block text-2xl lg:text-3xl mt-2">Zero Waste Economy with Us</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Creating scalable, inclusive e-waste circularity and EPR
              solutions—guided by impact, enabled by technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured E-Waste Section */}
      <FeaturedEwasteSection />

      {/* Sectors */}
      <section>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-8 lg:p-12">
                    <div className="flex items-start gap-6 mb-6">
                      <IconComponent className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {sector.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary">
                          {sector.heading}
                        </h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {sector.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Clients Carousel */}
      <ClientsCarousel />

      {/* Contact Form */}
      <EnquiryForm />
    </main>
  )
}
