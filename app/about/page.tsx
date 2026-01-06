"use client"

import { CheckCircle, Award, Users, Leaf, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">About MetalCycle</h1>
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
                Founded with a vision to create a sustainable future, MetalCycle has grown to become a trusted name in
                the metal recycling industry. We specialize in collecting, processing, and recycling various types of
                metals, helping businesses and individuals contribute to environmental conservation.
              </p>
              <p>
                With years of experience and a dedicated team of professionals, we have built strong relationships with
                manufacturers, construction companies, and individual clients across the region. Our commitment to
                excellence and environmental responsibility sets us apart in the industry.
              </p>
              <p>
                Today, we operate state-of-the-art recycling facilities equipped with advanced technology to ensure
                efficient processing while maintaining the highest environmental standards. Every ton of metal we
                recycle contributes to reducing carbon emissions and conserving natural resources.
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
                    To provide comprehensive metal recycling solutions that promote environmental sustainability while
                    delivering exceptional value to our clients. We strive to make recycling accessible, efficient, and
                    rewarding for all stakeholders.
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
                    To be the leading metal recycling company recognized for innovation, sustainability, and customer
                    service excellence. We envision a future where metal recycling is integral to every industry's
                    operations, creating a circular economy that benefits everyone.
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
                  title: "Industry Experience",
                  description: "Years of expertise in metal recycling and scrap management",
                },
                {
                  title: "Competitive Pricing",
                  description: "Fair and transparent pricing based on current market rates",
                },
                {
                  title: "Advanced Facilities",
                  description: "State-of-the-art equipment for efficient metal processing",
                },
                {
                  title: "Prompt Service",
                  description: "Quick pickup and processing with minimal downtime",
                },
                {
                  title: "Environmental Compliance",
                  description: "Full adherence to environmental regulations and EPR guidelines",
                },
                {
                  title: "Customer Support",
                  description: "Dedicated team available to assist with all your recycling needs",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Our success is driven by a passionate team of professionals dedicated to environmental sustainability.
              From our collection teams to processing experts, everyone at MetalCycle shares a commitment to excellence
              and customer satisfaction. We invest in continuous training and development to ensure our team stays at
              the forefront of industry innovations.
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
              Join hundreds of satisfied clients who trust us for their metal recycling needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/#enquiry">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
