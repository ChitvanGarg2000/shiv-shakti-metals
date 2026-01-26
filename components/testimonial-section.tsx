'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    company: 'TechCorp Industries',
    role: 'Operations Manager',
    content:
      'Shiv Shakti Metals has been an exceptional partner for our e-waste disposal needs. Their professionalism, compliance documentation, and quick turnaround time have made our operations seamless.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    company: 'Manufacturing Solutions Ltd',
    role: 'Sustainability Officer',
    content:
      'Their EPR compliance services have saved us considerable time and effort. The team is knowledgeable and always ready to provide comprehensive support for our recycling initiatives.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Amit Patel',
    company: 'Global Electronics Inc',
    role: 'Facility Manager',
    content:
      'The bulk waste pickup service is incredibly convenient and efficient. They handle everything from collection to documentation with utmost professionalism.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Neha Verma',
    company: 'Premier Corporate Group',
    role: 'CSR Manager',
    content:
      'Outstanding commitment to environmental sustainability. Shiv Shakti Metals not only recycles efficiently but also educates us on sustainable practices.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Vikram Singh',
    company: 'Industrial Solutions Pvt Ltd',
    role: 'Environmental Head',
    content:
      'Professional, reliable, and environmentally conscious. Their secure data destruction service gives us complete peace of mind regarding sensitive information.',
    rating: 5,
  },
]

export function TestimonialsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            change is collaborative. Look from our partners
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
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2">
                <motion.div
                  className="bg-card border border-border rounded-lg p-8 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -4 }}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-base leading-relaxed mb-6 flex-grow">
                    {`"${testimonial.content}"`}
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
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
