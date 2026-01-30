'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface WasteCategory {
  id: string
  title: string
  description: string
  image: string
  icon: string
}

const wasteCategories: WasteCategory[] = [
  {
    id: '1',
    title: 'E-Waste',
    description: 'Authorized management and recycling of IT assets, electronics, electrical equipment',
    image: '/ewaste.jpeg',
    icon: '💻',
  },
  {
    id: '2',
    title: 'Lead Acid Batteries',
    description: 'Responsible & Compliant Recycling with Regulated disposal',
    image: '/battery-waste.jpeg',
    icon: '🔋',
  },
  {
    id: '3',
    title: 'Non-Ferrous Metals',
    description: 'Recovery and recycling of high-value materials like copper, aluminium & allied materials',
    image: '/non-ferrous.jpeg',
    icon: '⚙️',
  },
  {
    id: '4',
    title: 'Plastic Waste',
    description: 'Scientific segregation and recycling of Industrial & electronic plastic scrap',
    image: '/plastic-waste.jpeg',
    icon: '♻️',
  },
  {
    id: '5',
    title: 'Insulated Wires & Cables',
    description: 'Secure and controlled material recovery of insulated wire and cable scrap',
    image: '/insulated-wire.jpeg',
    icon: '🔌',
  },
]

export function WasteCategoriesSection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="w-full pt-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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

        {/* Carousel */}
        <div className="relative">
          <style>{`
            .slick-slide {
              padding: 0 12px;
            }
            .slick-list {
              margin: 0 -12px;
            }
            .slick-prev:before,
            .slick-next:before {
              display: none;
            }
            .slick-dots {
              bottom: -40px;
            }
            .slick-dots li button:before {
              color: var(--color-primary, #16a34a);
              font-size: 8px;
            }
            .slick-dots li.slick-active button:before {
              color: var(--color-primary, #16a34a);
            }
          `}</style>

          <Slider {...settings}>
            {wasteCategories.map((category) => (
              <div key={category.id} className="px-2">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                    {/* Image Container */}
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={category.image || '/placeholder.svg'}
                        alt={category.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-4xl">{category.icon}</span>
                        <h3 className="text-xl font-bold text-foreground mt-1">{category.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

