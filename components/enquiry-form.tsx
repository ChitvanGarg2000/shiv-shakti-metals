"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function EnquiryForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      role: formData.get("role"),
      service: formData.get("service"),
      sector: formData.get("sector"),
      metalType: formData.get("metalType"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit enquiry")
      }

      toast({
        title: "Enquiry Submitted Successfully",
        description: "We'll get back to you within 24 hours.",
      })

      e.currentTarget.reset()
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Get In Touch</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Have questions about our metal recycling services? Fill out the form and our team will respond promptly
                with competitive pricing and scheduling options.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-4 pt-4">
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-left">Phone</h3>
                  <p className="text-muted-foreground">+919068951095</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-left">Email</h3>
                  <p className="text-muted-foreground">shivshaktimetals2009@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-left">Location</h3>
                  <p className="text-muted-foreground text-left">Khasra no 545, Sikheda road, industrial area Vill, <br />Modinagar, Uttar Pradesh 201204</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-border/50 py-6">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription className="pb-4">
                  Fill out the form below and we'll get back to you with pricing information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" placeholder="John Doe" required aria-required="true" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <Select name="role" required>
                      <SelectTrigger id="role" aria-required="true" className="w-full">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enterprise">Enterprise Representatives</SelectItem>
                        <SelectItem value="government">Government Representatives</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Services Interested In *</Label>
                    <Select name="service" required>
                      <SelectTrigger id="service" aria-required="true" className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Authorized Waste Recycling">Authorized Waste Recycling</SelectItem>
                        <SelectItem value="Medical Machine Disposal">Medical Machine Disposal</SelectItem>
                        <SelectItem value="Secure Data Destruction">Secure Data Destruction</SelectItem>
                        <SelectItem value="EPR Compliance & Documentation">EPR Compliance & Documentation</SelectItem>
                        <SelectItem value="Corporate & Bulk Waste Pickup">Corporate & Bulk Waste Pickup</SelectItem>
                        <SelectItem value="E-waste & Battery Waste Manifest">E-waste & Battery Waste Manifest</SelectItem>
                        <SelectItem value="Disposal Certificate">Disposal Certificate</SelectItem>
                        <SelectItem value="USG Machine Disposal">USG Machine Disposal</SelectItem>
                        <SelectItem value="Annual Return Filing">Annual Return Filing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sector">Sector *</Label>
                    <Select name="sector" required>
                      <SelectTrigger id="sector" aria-required="true" className="w-full">
                        <SelectValue placeholder="Select a sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ewaste">E-waste</SelectItem>
                        <SelectItem value="plastic">Plastic waste</SelectItem>
                        <SelectItem value="batteries">Batteries waste</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metalType">Type of Metal</Label>
                    <Input id="metalType" name="metalType" placeholder="e.g., Copper, Steel, Aluminum" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your scrap metal (quantity, location, pickup requirements, etc.)"
                      rows={4}
                      required
                      aria-required="true"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
