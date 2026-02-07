'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import {
  CheckCircle,
  Truck,
  FileCheck,
  Shield,
  Trash2,
  BookOpen,
  Lock,
} from 'lucide-react'
import { ClientsCarousel } from '@/components/clients-section'

const services = [
  {
    icon: Shield,
    title: 'Compliance Management',
  },
  {
    icon: Truck,
    title: 'Waste Pick-up',
  },
  {
    icon: BookOpen,
    title: 'Training & Awareness Webinars',
  },
  {
    icon: FileCheck,
    title: 'Disposal Certificate',
  },
  {
    icon: Lock,
    title: 'Data Destruction',
  },
  {
    icon: Trash2,
    title: 'Annual Return Filing',
  },
  {
    icon: CheckCircle,
    title: 'Creating a Change',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function ConsumerPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We bring zero-waste economy
              <span className="block font-bold">accessible for everyone</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              By 2030, global E-Waste generation is projected to reach approximately 82 million
              tonnes. Join with us for making recycling a habit of living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bulk Consumer Section */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Bulk Consumer
              </h2>
              <p className="text-sm text-muted-foreground mb-2 font-semibold">
                Over 75% of e-waste in India comes from public or private organisations
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We help startups, corporates, hotels, colleges or government institutions in disposing waste responsibly. If you're a bulk consumer, Shiv Shakti Metals can help you in:
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {services.map((service, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
                    <service.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/#enquiry">Schedule a Pick up</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="/recycling-facility-sustainable-environment.png"
                alt="Recycling facility"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plant Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Recycling Facility
            </h2>
            <p className="text-lg text-muted-foreground">
              State-of-the-art infrastructure for safe and compliant waste processing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/industrial-metal-recycling-facility-scrap-metal.jpg"
              alt="Recycling plant"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
    <ClientsCarousel />
    </main>
  )
}
