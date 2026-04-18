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

type FormErrors = {
  name?: string
  email?: string
  phone?: string
  role?: string
  sector?: string
  otherSector?: string
  message?: string
}

export function EnquiryForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedSector, setSelectedSector] = useState("")
  const [selectedRole, setSelectedRole] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {}

    const name = (formData.get("name") as string)?.trim()
    if (!name) {
      newErrors.name = "Full Name is required."
    }

    const email = (formData.get("email") as string)?.trim()
    if (!email) {
      newErrors.email = "Email is required."
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = "Please enter a valid email address."
    }

    const phone = (formData.get("phone") as string)?.trim()
    const cleanedPhone = phone.replace(/[\s\-()]/g, "")
    if (!phone) {
      newErrors.phone = "Phone Number is required."
    } else if (!/^(\+91|0)?[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phone = "Please enter a valid Indian phone number (e.g. +91 98765 43210)."
    }

    if (!selectedRole) {
      newErrors.role = "Role is required."
    }

    if (!selectedSector) {
      newErrors.sector = "Sector is required."
    }

    if (selectedSector === "other") {
      const otherSector = (formData.get("otherSector") as string)?.trim()
      if (!otherSector) {
        newErrors.otherSector = "Type of Material is required."
      }
    }


    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const validationErrors = validateForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast({
        title: "Please fill in all required fields",
        description: "Some mandatory fields are missing or invalid.",
        variant: "destructive",
      })
      return
    }

    setErrors({})
    setIsSubmitting(true)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      role: selectedRole,
      service: formData.get("service"),
      sector: selectedSector === "other" ? formData.get("otherSector") : selectedSector,
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
      setSelectedSector("")
      setSelectedRole("")
      setErrors({})
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

  const clearError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[field]
        return updated
      })
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
    <section id="enquiry">
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
                Have questions about E-waste & Hazardous waste recycling? Fill out the form and our team will respond promptly
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
                  <p className="text-muted-foreground">+919068951095, +919350754808</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-left">Email</h3>
                  <p className="text-muted-foreground">shivshaktimetals2009@gmail.com, recyclers@shivshaktimetals.com</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-left">Location</h3>
                  <p className="text-muted-foreground text-left">Khasra no 545, Sikheda road, Industrial area , <br />Modinagar, Ghaziabad, Uttar Pradesh 201204</p>
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
                  Fill out the form below and we'll get back to you with pricing information. All fields are mandatory.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                      onChange={() => clearError("name")}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
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
                      aria-invalid={!!errors.email}
                      className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                      onChange={() => clearError("email")}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
                      onChange={() => clearError("phone")}
                    />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <Select
                      name="role"
                      required
                      onValueChange={(value) => {
                        setSelectedRole(value)
                        clearError("role")
                      }}
                    >
                      <SelectTrigger
                        id="role"
                        aria-required="true"
                        aria-invalid={!!errors.role}
                        className={`w-full ${errors.role ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      >
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enterprise">Enterprise Representatives</SelectItem>
                        <SelectItem value="government">Government Representatives</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.role && <p className="text-sm text-destructive">{errors.role}</p>}
                  </div>

                  {/* <div className="space-y-2">
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
                  </div> */}

                  <div className="space-y-2">
                    <Label htmlFor="sector">Sector *</Label>
                    <Select
                      name="sector"
                      required
                      onValueChange={(value) => {
                        setSelectedSector(value)
                        clearError("sector")
                      }}
                    >
                      <SelectTrigger
                        id="sector"
                        aria-required="true"
                        aria-invalid={!!errors.sector}
                        className={`w-full ${errors.sector ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      >
                        <SelectValue placeholder="Select a sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ewaste">E-waste</SelectItem>
                        <SelectItem value="plastic">Plastic waste</SelectItem>
                        <SelectItem value="batteries">Batteries waste</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.sector && <p className="text-sm text-destructive">{errors.sector}</p>}
                  </div>

                  {selectedSector === "other" && (
                    <div className="space-y-2">
                      <Label htmlFor="otherSector">Type of Material *</Label>
                      <Input
                        id="otherSector"
                        name="otherSector"
                        placeholder="e.g., Metal, Glass, Rubber"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.otherSector}
                        className={errors.otherSector ? "border-destructive focus-visible:ring-destructive" : ""}
                        onChange={() => clearError("otherSector")}
                      />
                      {errors.otherSector && <p className="text-sm text-destructive">{errors.otherSector}</p>}
                    </div>
                  )}

                  {/* <div className="space-y-2">
                    <Label htmlFor="metalType">Type of Material</Label>
                    <Input id="metalType" name="metalType" placeholder="e.g., Copper, Steel, Aluminum" />
                  </div> */}

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your scrap metal (quantity, location, pickup requirements, etc.)"
                      rows={4}
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

