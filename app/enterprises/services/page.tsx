'use client'

import { Card } from "@/components/ui/card"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const services = [
  {
    title: 'Authorized Waste Recycling',
    description:
      'We provide comprehensive authorized waste recycling solutions that enable enterprises to manage all types of waste materials responsibly. Our processes ensure full compliance with regulatory standards and complete traceability throughout the recycling lifecycle. We help you achieve your sustainability goals while maintaining transparent records for audit purposes.',
  },
  {
    title: 'Medical Machine Disposal',
    description:
      'Safe and responsible disposal of medical equipment and machinery following strict regulatory guidelines. Our specialized team handles sensitive medical devices with proper decontamination protocols. We ensure all disposals are documented and compliant with healthcare waste management regulations.',
  },
  {
    title: 'Secure Data Destruction',
    description:
      'Complete and certified data destruction services ensuring comprehensive information security and compliance with data protection laws. We use industry-leading methods to permanently destroy all data on electronic devices and storage media. Our process includes certificates of destruction for your compliance records.',
  },
  {
    title: 'EPR Compliance & Documentation',
    description:
      'End-to-end EPR (Extended Producer Responsibility) compliance management with all necessary documentation and certifications. We manage your EPR obligations and maintain detailed records of waste collection and recycling. Our experts ensure you meet all statutory requirements and deadlines.',
  },
  {
    title: 'Corporate & Bulk Waste Pickup',
    description:
      'Scheduled collection and transportation of waste from your premises at convenient times. We provide flexible pickup schedules tailored to your operational needs and waste generation patterns. Our fleet ensures safe and efficient handling of bulk waste materials.',
  },
  {
    title: 'E-waste & Battery Waste Manifest',
    description:
      'Complete manifest documentation and disposal certificates for e-waste and battery materials. We maintain comprehensive records of all e-waste and battery handling for your compliance. Each disposal includes certified documentation for regulatory and audit purposes.',
  },
  {
    title: 'Disposal Certificate',
    description:
      'Comprehensive disposal certificates provided for all waste streams after processing. These certificates serve as proof of proper disposal and are essential for regulatory compliance and corporate responsibility reporting. All certificates are issued by certified auditors.',
  },
  {
    title: 'USG Machine Disposal',
    description:
      'Specialized disposal services for Used/Spent Generator machines with proper handling protocols. We ensure environmentally responsible disposal of complex machinery and equipment. Complete documentation and certification are provided for each disposal.',
  },
  {
    title: 'Annual Return Filing',
    description:
      'Professional assistance with annual return filing and regulatory documentation. We help you compile all necessary data and submit returns to relevant authorities on time. Our team stays updated with changing regulations to ensure your filings are always compliant.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function EnterprisesServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We are your
              <span className="text-primary block text-2xl lg:text-3xl mt-2">Zero Waste Economy</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We enable enterprises to responsibly manage e-waste—achieve
              circularity targets, ensure EPR compliance, and build efficient,
              traceable collection and recycling programs with us.
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive waste management solutions tailored to your enterprise needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full border border-border rounded-lg overflow-hidden">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-6 hover:bg-primary/5 transition-colors">
                    <span className="text-lg font-semibold text-foreground text-left">
                      {service.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 bg-background/50">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Ready to transform your waste management?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our experts and create your zero-waste economy today
            </p>
            <Button asChild size="lg">
              <Link href="/#enquiry">Contact Us Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
