"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ServicesShowcase } from "./services-showcase"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">India’s Trusted Authorized Recycling Partner</h2>
          <div className="text-sm text-muted-foreground mb-4">
            CPCB & UPPCB Approved | ISO Certified | EPR Compliance Experts
          </div>
          <p className="text-xl text-primary font-semibold mb-2">
          SSM’s mission is to deliver authorized, transparent, and environmentally responsible
          recycling solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <ServicesShowcase />
        </motion.div>
      </div>
    </section>
  )
}
