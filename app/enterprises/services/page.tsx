'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import DOMPurify from 'dompurify'
import { ClientsCarousel } from '@/components/clients-section'
import { EnquiryForm } from '@/components/enquiry-form'

const services = [
  {
    title: 'Authorized Waste Recycling',
    description:
      `We are a government-authorized recycler specializing in the scientific recycling of Electrical & Electronic Waste, Battery Waste, Plastic Waste, Insulated Wires, and Non-Ferrous Metals.
All materials are handled strictly as per CPCB and UPPCB guidelines, ensuring environmentally sound recycling with complete traceability and documentation
`,
  },
  {
    title: 'Medical Machine Disposal',
    description:`We provide safe and authorized disposal of obsolete and end-of-life medical machines and healthcare equipment such as Ultrasound Machines, Ventilators, MRI Machines, ECG Units, X-Ray Equipment, and other medical, diagnostic, therapeutic, and life-support equipment.
Our disposal process ensures regulatory compliance, data safety (where applicable), and zero environmental risk.
`
  },
  {
    title: 'Secure Data Destruction',
    description:
      `<p>We provide certified and secure data destruction services for data-bearing assets, including hard drives, servers, storage devices, and IT equipment, ensuring complete and irreversible data elimination.</p>
<p>All data destruction activities are carried out using approved methods, maintaining strict confidentiality and supported by proper certification for audit and compliance purposes.</p>
`,
  },
  {
    title: 'EPR Compliance & Documentation',
    description:`<p>We provide end-to-end support for Extended Producer Responsibility (EPR) compliance, including authorized collection, recycling, documentation, and provision of EPR credits as per applicable guidelines.</p>
<p>
Our structured processes and transparent reporting help producers, importers, and brand owners meet statutory obligations and remain audit-ready at all times.
</p>`
  },
  {
    title: 'Corporate & Bulk Waste Pickup',
    description:`<p>We provide scheduled pickup services for corporates, institutions, bulk waste generators, manufacturers etc.</p>
<p>
Our logistics operations ensure safe handling, timely collection, and full compliance throughout the waste movement process.
</p>`
  },
  {
    title: 'E-waste & Battery Waste Manifest',
    description:`<p>We issue CPCB-compliant E-Waste and Battery Waste manifests along with authorized recycling and disposal certificates.</p>`
  },
  {
    title: 'Disposal Certificate',
    description:`<p>
These documents ensure legal traceability, regulatory compliance, and confidence during inspections and audits.
</p>`
  },
  {
    title: 'USG Machine Disposal',
    description:
      `<p>We undertake authorised collection, decontamination, and dismantling of end-of-life USG machines in accordance with applicable e-waste management rules.</p>
<p>
All components are processed through secure, compliant recycling channels to ensure environmental safety and regulatory compliance.</p>`,
  },
  {
    title: 'Annual Return Filing',
    description:`<p>We assist organizations in accurate and timely filing of annual returns as required under applicable environmental laws.</p>
<p>Our expert support helps clients remain compliant, avoid penalties, and maintain a strong compliance record.</p>
`
  },
]

// Helper function to sanitize HTML safely in both SSR and client environments
function sanitizeHTML(html: string): string {
  if (typeof window === 'undefined') {
    // During SSR, return the HTML as-is (it's already safe from your data)
    // Or you could use a simple regex to strip script tags if needed
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  }
  // In browser environment, use DOMPurify
  return DOMPurify.sanitize(html)
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
                    <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: sanitizeHTML(service.description) }}>
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section id="clients">
              <ClientsCarousel />
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
            <EnquiryForm />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
