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

/* ---------- Main Component ---------- */

export function HeroSlider() {

  return (
    <section className="w-full relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
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