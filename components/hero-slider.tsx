"use client"

import { useRef, useState } from "react"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic"

const Countdown = dynamic(() => import("./app/CountDown"), { ssr: false })

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
  {
    image: "/slide4.jpeg",
    title: "Sustainable Metal Solutions",
    description:
      "We recycle all types of metals: steel, copper, aluminum, brass, and more. Contributing to a greener future.",
  },
  {
    image: "/slide5.jpeg",
    title: "Expert Scrap Metal Services",
    description:
      "Over 20 years of experience in metal recycling. Fast pickup, fair pricing, and exceptional customer service.",
  },
]

const CustomPrevArrow = ({
  className,
  style,
  onClick,
}: {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background transition-colors z-10"
    aria-label="Previous slide"
  >
    <ChevronLeft className="h-6 w-6" />
  </button>
)

const CustomNextArrow = ({
  className,
  style,
  onClick,
}: {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm hover:bg-background transition-colors z-10"
    aria-label="Next slide"
  >
    <ChevronRight className="h-6 w-6" />
  </button>
)

/* ---------- Custom Dot ---------- */

const Dot = ({ active }: { active: boolean }) => {
  return (
    <button
      type="button"
      className={`h-2 rounded-full transition-all ${active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50"
        }`}
      aria-label="Go to slide"
    />
  )
}

/* ---------- Main Component ---------- */

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => <Dot active={i === currentSlide} />,
  }

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[500px] md:h-[600px] lg:h-[700px]"
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 bg-linear-to-r min-h-full flex flex-col justify-center items-center md:items-start from-black/80 via-black/50 to-transparent sm:ps-[100px]">
        <div className="mb-8 w-[90%] mx-auto sm:w-full">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white/70">
            Act today • Protect tomorrow
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-white">
            Time is now, lets create{" "}
            <div className="bg-gradient-to-r from-green-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">
              Zero- Waste economy
            </div>
          </h2>

          <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl mx-auto sm:mx-0">
            Every second counts—reduce, reuse, recycle and build a cleaner future.
          </p>
        </div>
        <Countdown />
      </div>
    </section>
  )
}