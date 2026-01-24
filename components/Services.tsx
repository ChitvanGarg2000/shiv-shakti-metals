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
          <div className="text-sm text-muted-foreground">
            CPCB & UPPCB Approved | ISO Certified | EPR Compliance Experts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">India’s Trusted Authorized Recycling Partner</h2>
          <p className="text-xl text-primary font-semibold mb-2">
          SSM’s mission is to deliver authorized, transparent, and environmentally responsible
          recycling solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/serviceOffer.jpeg"
              alt="Recycling facility with sustainable practices"
              width={400}
              height={250}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg leading-relaxed">
              Shiv Shakti Metals is more than just a recycling company — we are a responsible environmental partner
              working towards a cleaner, safer, and sustainable future.
            </p>
            <p className="text-lg leading-relaxed">
              We help industries, corporates, and institutions manage their waste in an environmentally compliant manner
              while protecting natural resources and reducing pollution. Our focus is not only on recycling materials
              but also on creating long-term positive impact on the environment and society.
            </p>
            <p className="text-lg leading-relaxed">
              With a trained workforce, authorised recycling facilities, and transparent processes, we ensure that every
              step — from collection to final recycling — is handled safely and responsibly.
            </p>
          </motion.div>
        </div>

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
