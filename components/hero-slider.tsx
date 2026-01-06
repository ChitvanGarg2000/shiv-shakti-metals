"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/slide1.jpeg",
    title: "Turn Metal Waste Into Revenue",
    description:
      "Professional metal recycling services for businesses and individuals. Competitive rates, reliable service.",
  },
  {
    image: "/slide2.jpeg",
    title: "Sustainable Metal Solutions",
    description:
      "We recycle all types of metals: steel, copper, aluminum, brass, and more. Contributing to a greener future.",
  },
  {
    image: "/slide3.jpeg",
    title: "Expert Scrap Metal Services",
    description:
      "Over 20 years of experience in metal recycling. Fast pickup, fair pricing, and exceptional customer service.",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
              aria-hidden={index !== currentSlide}
            >
              <img src={slide.image || "/placeholder.svg"} alt="" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              {/* <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl space-y-4"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-lg md:text-xl text-muted-foreground text-pretty max-w-xl"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex gap-4 pt-4"
                    >
                      <Button size="lg" asChild>
                        <a href="#enquiry">Get a Quote</a>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href="/services">Our Services</a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div> */}
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>

      {/* Dots Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentSlide}
            role="tab"
          />
        ))}
      </div>
    </section>
  )
}
