"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Truck, Scale, Leaf, Zap, Shield, Clock, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const mainServices = [
  {
    icon: Factory,
    title: "Industrial Metal Recycling",
    description:
      "Large-scale recycling services for manufacturing facilities, construction sites, and industrial operations.",
    features: [
      "High-volume processing capacity",
      "On-site container placement",
      "Regular scheduled pickups",
      "Detailed recycling reports",
      "Customized recycling programs",
    ],
  },
  {
    icon: Truck,
    title: "Scrap Metal Pickup",
    description:
      "Convenient pickup services for your scrap metal. We handle everything from small loads to full containers.",
    features: [
      "Free pickup for large quantities",
      "Flexible scheduling options",
      "Professional handling",
      "Container rental available",
      "Same-day service available",
    ],
  },
  {
    icon: Scale,
    title: "Fair Weight & Pricing",
    description: "Certified scales and transparent pricing. Get the best market rates for your recyclable metals.",
    features: [
      "Certified scale systems",
      "Real-time market pricing",
      "Instant payment options",
      "Transparent weight tickets",
      "Competitive rates guaranteed",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "Environmentally responsible recycling processes that reduce waste and support the circular economy.",
    features: [
      "Zero-waste processing",
      "Environmental compliance",
      "Carbon footprint reduction",
      "Sustainability reporting",
      "Green certification support",
    ],
  },
]

const metalTypes = [
  { name: "Ferrous Metals", items: ["Steel", "Iron", "Stainless Steel", "Cast Iron"] },
  { name: "Non-Ferrous Metals", items: ["Aluminum", "Copper", "Brass", "Bronze", "Lead"] },
  { name: "Precious Metals", items: ["Silver", "Gold", "Platinum", "Palladium"] },
  { name: "Specialty Alloys", items: ["Titanium", "Nickel Alloys", "Zinc", "Tin"] },
]

const benefits = [
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Quick turnaround times with efficient sorting and processing systems.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "Safe and secure handling of all materials with full insurance coverage.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service and emergency pickup services.",
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Decades of experience with the highest industry standards and certifications.",
  },
]

export default function ServicesPage() {
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                Comprehensive Metal Recycling Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                From small scrap pickups to large industrial recycling programs, we provide sustainable solutions for
                all your metal recycling needs.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Button asChild size="lg">
                  <Link href="/#enquiry">Get a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#faq">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Our Core Services</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Complete metal recycling solutions tailored to your specific needs and industry requirements.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-2"
            >
              {mainServices.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-border/50 hover:border-primary/50 transition-colors h-full">
                    <CardHeader>
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <service.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Metal Types Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Metals We Accept</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                We process a wide range of ferrous and non-ferrous metals, ensuring maximum value for your materials.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
            >
              {metalTypes.map((category, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-border/50 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Experience the difference with our professional service and industry-leading expertise.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-border/50 text-center h-full">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                        <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Start Recycling?</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Get in touch with our team today for a free consultation and competitive quote on your metal recycling
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/#enquiry">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/epr">EPR Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
