'use client'

import React from "react"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Recycle,
  Cpu,
  Lock,
  Leaf,
  Truck,
  FileCheck,
  Calendar,
  BatteryWarning,
  WashingMachine
} from 'lucide-react'

interface Service {
  id: string
  title: string
  icon: React.ReactNode
  color: string
}

const services: Service[] = [
  {
    id: 'authorized-waste',
    title: 'Authorized Waste Recycling',
    icon: <Recycle className="h-8 w-8" />,
    color: 'bg-primary',
  },
  {
    id: 'medical-disposal',
    title: 'Medical Machine Disposal',
    icon: <Cpu className="h-8 w-8" />,
    color: 'bg-primary',
  },
  {
    id: 'data-destruction',
    title: 'Secure Data Destruction',
    icon: <Lock className="h-8 w-8" />,
    color: 'bg-primary',
  },
  {
    id: 'epr-compliance',
    title: 'EPR Compliance & Documentation',
    icon: <Leaf className="h-8 w-8" />,
    color: 'bg-primary',
  },
  {
    id: 'bulk-waste',
    title: 'Corporate & Bulk Waste Pickup',
    icon: <Truck className="h-8 w-8" />,
    color: 'bg-primary',
  },
  {
    id: 'ewaste-disposal',
    title: 'E-waste & Battery Waste Manifest',
    icon: <BatteryWarning className="h-8 w-8" />,
    color: 'bg-primary',
  },
  {
    id: 'manifest-disposal',
    title: 'Disposal Certificate',
    icon: <FileCheck className="h-8 w-8" />,
    color: 'bg-primary',
  },
  {
    id: 'machine-disposal',
    title: 'USG Machine Disposal',
    icon: <WashingMachine className="h-8 w-8" />,
    color: 'bg-primary',
  },
  {
    id: 'annual-return',
    title: 'Annual Return Filing',
    icon: <Calendar className="h-8 w-8" />,
    color: 'bg-primary',
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
    transition: {
      duration: 0.5,
    },
  },
}

export function ServicesShowcase() {
  return (
    <section className="py-20">
      <div className="w-full mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive waste management and recycling solutions for enterprises
            and individuals
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <div className="flex items-center gap-4 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors duration-300">
                {/* Geometric Icon */}
                <div className="flex-shrink-0">
                  <div className="relative h-12 w-12 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="relative text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm md:text-base">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
            <Button asChild size="lg">
              <Link href="/enterprises/services">View All Services</Link>
            </Button>
        </motion.div>
      </div>
    </section>
  )
}
