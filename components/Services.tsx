"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Battery, Cable, Cpu, Recycle, Trash2 } from "lucide-react"

const recyclingCategories = [
  {
    icon: Cpu,
    title: "E-Waste",
    description: "Computers, laptops, servers, printers, IT & electronic scrap, etc.",
  },
  {
    icon: Battery,
    title: "Battery Waste",
    description: "Lead Acid Batteries, UPS batteries, automotive & industrial batteries, etc.",
  },
  {
    icon: Recycle,
    title: "Non-Ferrous Metals",
    description: "Copper, aluminium, brass and other valuable non-ferrous metals",
  },
  {
    icon: Cable,
    title: "Insulated Wires & Cables",
    description: "Copper and aluminium cables with insulation",
  },
  {
    icon: Trash2,
    title: "Plastic Scrap",
    description: "Recovered plastic waste from dismantling and segregation processes",
  },
]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Recycle</h2>
          <p className="text-xl text-primary font-semibold mb-2">
            Creating a Sustainable Future with Shiv Shakti Metals
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
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">End-to-End Recycling Solutions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {recyclingCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{category.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
