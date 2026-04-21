"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "What is e-waste and why is it important to recycle it?",
    answer:
      "E-waste refers to discarded electrical and electronic equipment that has reached the end of its useful life. Recycling prevents environmental pollution and helps recover valuable materials like metals and plastics.",
  },
  {
    question: "What types of e-waste do you accept?",
    answer: (
      <>
        We accept:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>All type of IT Equipments</li>
          <li>All type of Large &amp; Small Electronic and Electrical Equipments</li>
          <li>Electrical and Electronic Tools &amp; Machines</li>
          <li>Electrical and Electronic Toys, Leisure, &amp; Sports Equipment</li>
          <li>Electrical and Electronic Laboratory Equipments &amp; Instruments</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do you ensure secure data destruction?",
    answer:
      "We follow strict protocols for data destruction to ensure that all sensitive data from devices is permanently erased or destroyed before recycling.",
  },
  {
    question: "What is Battery waste and why is it important to recycle it?",
    answer:
      "Battery waste consists of discarded batteries containing hazardous materials. If not recycled properly, it can cause serious environmental pollution and health risks. Recycling helps recover valuable materials, reduces pollution, and ensures safe and sustainable waste management.",
  },
  {
    question: "Do you recycle medical equipment waste?",
    answer:
      "Yes, we specialize in safe disposal of medical machines like USG machines, MRI machines, X-ray machines and other medical equipment waste.",
  },
  {
    question: "Are you government authorized waste recycler?",
    answer:
      "Yes, we operate as government authorized waste recycling service provider ensuring compliance with government regulations and environmental standards.",
  },
  {
    question: "What services do Shiv Shakti Metals provide?",
    answer:
      "We provide a wide range of recycling and disposal services including waste recycling, scheduled Pick-up, safe transportation, medical equipment disposal, secure data destruction, and corporate bulk waste pickup.",
  },
  {
    question: "Do you provide compliances after disposal?",
    answer:
      "Yes, we provide e-waste & hazardous waste manifest, disposal certificates and documentation for compliance and audit purposes after proper recycling.",
  },
  {
    question: "What happens to the waste after collection?",
    answer: (
      <>
        The waste undergoes:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Segregation</li>
          <li>Dismantling</li>
          <li>Material recovery</li>
          <li>Recycling or safe disposal</li>
        </ul>
        <p className="mt-2">This ensures minimal environmental impact.</p>
      </>
    ),
  },
  {
    question: "Do you provide annual return filing support?",
    answer:
      "Yes, we assist corporates in filing annual returns related to e-waste & battery waste compliance.",
  },
  {
    question: "What industries do you serve?",
    answer: (
      <>
        We serve:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Corporates &amp; IT companies</li>
          <li>Hospitals &amp; healthcare facilities</li>
          <li>Educational institutions</li>
          <li>Manufacturing units</li>
          <li>Government Sectors</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do you determine the value of scrap?",
    answer: (
      <>
        The value depends on:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Type of material (metal, battery, electronic parts)</li>
          <li>Quantity</li>
          <li>Market rates</li>
        </ul>
      </>
    ),
  },
  {
    question: "Why should we choose Shiv Shakti Metals?",
    answer: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Authorized recycler</li>
        <li>Scheduled Pick-up</li>
        <li>Safe Transportation</li>
        <li>End-to-end waste management</li>
        <li>Secure data handling</li>
        <li>Compliance support</li>
        <li>Environment-friendly practices</li>
      </ul>
    ),
  },
  {
    question: "Where is your company located?",
    answer:
      "Our facility is located in Khasra No. 545, Sikheda Road, Industrial Area, Modinagar, Ghaziabad, 201204, Uttar Pradesh serving clients across regions.",
  },
  {
    question: "How can we contact you?",
    answer:
      "You can contact us via phone, email, or website enquiry form to request quotes or services.",
  },
]

export function FAQSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Find answers to common questions about our e-waste recycling and compliance services.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border border-border/50 rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-4">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
