"use client"

import { CheckCircle, Award, Users, Leaf, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { CertificationsSection } from "@/components/certifications-section"
import { EnquiryForm } from "@/components/enquiry-form"

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Shiv Shakti Metals</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Leading the way in sustainable metal recycling and scrap management solutions
            </p>
          </motion.div>
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
              <p>
                Shiv Shakti Metals is a professionally managed, government-authorized recycling company delivering end-to-end, fully compliant waste management solutions across India. With 15+ years of proven industry experience, we partner with corporates, banks, hospitals, PSUs, manufacturers, and bulk waste generators to ensure waste is recycled scientifically, securely, and responsibly—without legal risk or environmental compromise.
              </p>
              <p>
                Every material handled by us is processed through authorized, transparent, and environmentally sound recycling systems, ensuring complete traceability, ethical operations, and regulatory compliance. Our commitment to excellence and environmental responsibility sets us apart in the industry, allowing us to deliver superior outcomes for both clients and the environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver secure, authorized, and fully compliant recycling solutions that enable organizations to meet their statutory and EPR obligations with confidence through transparent and ethical practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be India's most trusted recycling partner, setting benchmarks in compliance excellence, environmental responsibility, and circular resource recovery, while creating measurable and sustainable impact.
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
                  Transparent pricing, honest dealings, and ethical business practices guide our relationships.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted py-16 md:py-20">
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
                  title: "Government-authorized recycling partner since 2009",
                  description: "",
                },
                {
                  title: "15+ years of trusted industry experience",
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

      {/* Team Section */}
      <section className="py-16 md:py-20">
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
              Certified excellence in recycling, environmental management, and quality standards. All certifications are regularly audited and maintained to ensure compliance with international standards. Our government authorization since 2009 reflects our unwavering commitment to regulatory excellence and industry leadership.
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
              <Link href="#enquiry">Contact Our Experts</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <EnquiryForm />
    </div>
  )
}
