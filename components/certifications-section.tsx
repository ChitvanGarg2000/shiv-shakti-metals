"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award } from "lucide-react"

const certificates = [
  {
    id: 1,
    title: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/COR.jpeg",
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    description: "Environmental Management",
    image: "/COR2.jpeg",
  },
  {
    id: 3,
    title: "ISO/IEC 27001:2022",
    description: "Information Security Management",
    image: "/COC.jpeg",
  },
  {
    id: 4,
    title: "ISO 45001:2018",
    description: "Occupational Health and Safety Management",
    image: "/COR3.jpeg",
  },
]

export function CertificationsSection() {
  const duplicatedCertificates = [...certificates, ...certificates, ...certificates]

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 m-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Certificates</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certified excellence in recycling, environmental management, and quality standards
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: [0, `-${100 / 3}%`],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedCertificates.map((cert, index) => (
              <div key={`${cert.id}-${index}`} className="flex-shrink-0 w-[280px] md:w-[320px] group">
                <div className="relative overflow-hidden rounded-lg border-2 border-muted bg-background shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-[3/4] bg-muted/50">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm md:text-base">
            All certifications are regularly audited and maintained to ensure compliance with international standards
          </p>
        </motion.div>
      </div>
    </section>
  )
}
