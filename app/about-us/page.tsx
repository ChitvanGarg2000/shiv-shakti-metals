"use client"

import { CheckCircle, Award, Users, Leaf, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { CertificationsSection } from "@/components/certifications-section"
import { EnquiryForm } from "@/components/enquiry-form"

const facilityImages = [
  { src: "/gallery1.jpeg", alt: "Battery waste recycling" },
  { src: "/gallery2.jpeg", alt: "Consumer waste handling" },
  { src: "/gallery3.jpeg", alt: "Facility image 0619" },
  { src: "/gallery4.jpeg", alt: "E-waste section" },
  { src: "/gallery5.jpeg", alt: "Facility image 0630" },
  { src: "/gallery6.jpeg", alt: "Medical equipment recycling" },
  { src: "/gallery7.jpeg", alt: "Service banner" },
  { src: "/gallery8.jpeg", alt: "Consumer waste collection" },
  { src: "/battery-waste.jpeg", alt: "Battery waste recycling" },
  { src: "/medical-waste.jpeg", alt: "Medical waste recycling" },
]

export default function AboutPage() {
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full relative h-[450px] overflow-hidden md:min-h-[calc(100vh-80px)]">

        <Image
          src="/about-us.jpeg"
          alt="Shiv Shakti Metals about us banner"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover object-[center_-200px]"
        />
        <div className="absolute inset-0 bg-linear-to-r min-h-full flex flex-col justify-center items-center md:items-start from-black/80 via-black/50 to-transparent sm:ps-[100px]">
          <div className="mb-8 w-[90%] mx-auto sm:w-full flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance text-center">Shiv Shakti Metals</h1>
            <p className="w-full mx-auto mt-3 text-center text-base md:text-lg text-white/80 max-w-2xl mx-auto sm:mx-0">
              Leading the way in sustainable metal recycling and scrap management solutions
            </p>
          </div>
          {/* <Countdown /> */}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-justify">
                Shiv Shakti Metals is a professionally managed, government-authorized recycling company delivering end-to-end, fully compliant waste management solutions across India. With 17+ years of proven industry experience, we partner with corporates, banks, hospitals, hotels, PSUs, manufacturers, and bulk waste generators to ensure waste is recycled scientifically, securely, and responsibly—without legal risk or environmental compromise.
              </p>
              <p className="text-justify">
                Every material handled by us is processed through authorized, transparent, and environmentally sound recycling systems, ensuring complete traceability, ethical operations, and regulatory compliance. Our commitment to excellence and environmental responsibility sets us apart in the industry, allowing us to deliver superior outcomes for both clients and the environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 items-stretch">
              <Card className="w-full sm:w-1/2 h-auto flex flex-col">
                <CardContent className="p-8 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our core mission is to serve as the definitive
                    partner for organisations navigating the
                    complexities of waste management and
                    environmental compliance.
                    We are dedicated to providing a suite of recycling
                    solutions that are fundamentally secure, fully
                    authorised, and completely compliant regulations.
                    This commitment ensures that our partners can
                    confidently and effortlessly meet their mandatory
                    statutory requirements, including the stringent
                    demands of Extended Producer Responsibility
                    (EPR) legislation.
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-1/2 h-auto overflow-hidden">
                <CardContent className="p-0 h-full relative">
                  <Image src="/mission.jpeg" alt="Mission" fill className="object-fill"/>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 items-stretch">
              <Card className="w-full sm:w-1/2 h-auto overflow-hidden">
                <CardContent className="p-0 h-full relative">
                  <Image src="/vision.jpeg" alt="Vision" fill className="object-cover"/>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-1/2 h-auto flex flex-col">
                <CardContent className="p-8 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognised as India's most trusted and
                    prominent recycling partner, not just by the
                    volume of material we process, but by the
                    integrity and excellence embedded in every facet
                    of our operations.
                    Our vision extends beyond mere compliance; we
                    are relentlessly focused on establishing new
                    industry standards for environmental
                    responsibility, operational excellence, and circular
                    resource recovery.
                    By consistently delivering measurable, verifiable,
                    and sustainable positive impact—both for our
                    clients and the planet—we seek to drive
                    meaningful change, foster a culture of resource
                    efficiency, and solidify our position as the
                    undisputed leader in ethical and compliant
                    resource management.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Our Core Values
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Environmental responsibility is at the heart of everything we do, from collection to processing.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest standards in service quality, safety, and operational efficiency.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transparent pricing, honest dealings, and ethical business practices guide our partnership.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Why Choose Us
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Government - authorised recycling partner since 2009",
                  description: "",
                },
                {
                  title: "17+ years of trusted industry experience",
                  description: "",
                },
                {
                  title: "End-to-end, fully compliant waste management solutions",
                  description: "",
                },
                {
                  title: "Strong expertise in EPR and statutory compliance",
                  description: "",
                },
                {
                  title: "Secure, ethical, and transparent recycling processes",
                  description: "",
                },
                {
                  title: "Audit-ready documentation and complete traceability",
                  description: "",
                },
                {
                  title: "Skilled, safety-trained, compliance-focused workforce",
                  description: "",
                },
                {
                  title: "Zero tolerance for informal handling or shortcuts",
                  description: "",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-foreground">{item.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plant Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Recycling Facility
            </h2>
            <p className="text-lg text-muted-foreground">
              State-of-the-art infrastructure for safe and compliant waste processing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl border border-border/60 bg-background"
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={18}
              slidesPerView={1.1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={4500}
              loop={true}
              className="!py-6"
            >
              {facilityImages.map((image, index) => (
                <SwiperSlide key={`${image.src}-${index}`} className="!h-auto">
                  <div className="h-full px-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted/40 shadow-md border border-border/50">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className=" mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto text-center"
          >
            <CertificationsSection />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Certified excellence in recycling, environmental management, and quality standards. All certifications are regularly audited and maintained to ensure compliance with ISO standards. Our government authorization since 2009 reflects our unwavering commitment to regulatory excellence and industry leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty">
              Join hundreds of satisfied clients who trust us for their zero-waste economy solutions
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href="/contact-us">Contact Our Experts</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <section className="py-15">
          <EnquiryForm />
      </section>
    </div>
  )
}
