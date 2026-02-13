'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

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

        <style dangerouslySetInnerHTML={{__html: `
          .swiper-pagination-bullet {
            background: hsl(var(--primary));
            opacity: 0.3;
            width: 8px;
            height: 8px;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            background: hsl(var(--primary));
          }
        `}} />

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            loop={true}
            className="!pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
