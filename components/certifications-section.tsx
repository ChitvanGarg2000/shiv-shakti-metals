'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award } from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    dots: true,
    dotsClass: 'slick-dots custom-dots',
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Certificates</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certified excellence in recycling, environmental management, and quality standards
          </p>
        </motion.div>

        <style>{`
          .slick-slide {
            padding: 0 16px;
          }
          .slick-list {
            margin: 0 -16px;
          }
          .slick-prev,
          .slick-next {
            display: none;
          }
          .custom-dots {
            bottom: -40px;
          }
          .custom-dots li button:before {
            color: var(--color-primary);
            font-size: 8px;
          }
          .custom-dots li.slick-active button:before {
            color: var(--color-primary);
            opacity: 1;
          }
          .custom-dots li button:before {
            opacity: 0.3;
          }
        `}</style>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Slider {...settings}>
            {certificates.map((cert) => (
              <div key={cert.id} className="px-2">
                <motion.div
                  className="relative overflow-hidden rounded-lg border-2 border-muted bg-background shadow-md hover:shadow-xl transition-all duration-300 group h-full"
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <div className="relative aspect-[3/4] bg-muted/50">
                    <Image
                      src={cert.image || '/placeholder.svg'}
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
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  )
}
