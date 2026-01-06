"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, FileCheck, Leaf, Users, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function EPRPage() {
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
        <section className="bg-gradient-to-b from-muted/50 to-background py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Extended Producer Responsibility (EPR) Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Comprehensive EPR compliance services to help your business meet environmental regulations and
                sustainability goals through responsible metal recycling.
              </p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Button asChild size="lg">
                  <Link href="#contact">Get EPR Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What is EPR Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">What is EPR?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Extended Producer Responsibility (EPR) is an environmental policy approach where producers take
                responsibility for the entire lifecycle of their products, especially for treatment and disposal at the
                end of their useful life. In the metal industry, EPR ensures that metal products and packaging are
                collected, recycled, and disposed of in an environmentally sound manner.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our EPR services help businesses comply with government regulations while contributing to a circular
                economy through sustainable metal recycling practices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center text-foreground mb-12"
            >
              Why Choose Our EPR Services?
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <Shield className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                    <CardTitle>Regulatory Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      Stay compliant with all national and state EPR regulations and avoid penalties.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <FileCheck className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                    <CardTitle>Complete Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      Comprehensive reporting and certification for audit trails and compliance proof.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <Leaf className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                    <CardTitle>Environmental Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      Reduce your carbon footprint and contribute to sustainable development goals.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <Users className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                    <CardTitle>Expert Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      Dedicated team to guide you through EPR registration and implementation process.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our EPR Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="max-w-4xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-foreground mb-8">
                Our EPR Services
              </motion.h2>
              <div className="space-y-6">
                {[
                  {
                    title: "EPR Registration & Authorization",
                    description:
                      "Complete assistance with EPR registration on government portals and obtaining necessary authorizations for metal waste management.",
                  },
                  {
                    title: "Collection & Recycling",
                    description:
                      "Efficient collection, segregation, and recycling of metal waste including ferrous and non-ferrous metals across multiple locations.",
                  },
                  {
                    title: "Annual Reporting",
                    description:
                      "Comprehensive annual EPR reports with detailed documentation of collected and recycled materials for regulatory submission.",
                  },
                  {
                    title: "Target Achievement",
                    description:
                      "Strategic planning and execution to meet government-mandated recycling targets and extended producer responsibility obligations.",
                  },
                  {
                    title: "Audit & Compliance Support",
                    description:
                      "Ongoing support during regulatory audits with complete documentation and compliance verification services.",
                  },
                ].map((service, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-foreground mb-8 text-center"
              >
                Industries We Serve
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
                    title: "Manufacturing",
                    description:
                      "Metal product manufacturers, automotive parts, appliances, and industrial equipment producers.",
                  },
                  {
                    title: "Electronics",
                    description: "Electronics manufacturers, IT hardware companies, and consumer electronics brands.",
                  },
                  {
                    title: "Packaging",
                    description:
                      "Metal packaging producers, beverage can manufacturers, and industrial packaging companies.",
                  },
                  {
                    title: "Construction",
                    description:
                      "Building material suppliers, steel structure manufacturers, and construction equipment producers.",
                  },
                ].map((industry, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{industry.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed">{industry.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get EPR Compliant?</h2>
              <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
                Contact us today for a consultation and learn how we can help your business meet EPR obligations
                efficiently and sustainably.
              </p>
              <Button asChild size="lg">
                <Link href="/#enquiry">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
