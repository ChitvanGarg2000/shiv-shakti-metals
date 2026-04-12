"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What services does Shiv Shakti Metals provide?",
    answer:
      "We provide a wide range of recycling and disposal services including e-waste recycling, battery waste management, medical equipment disposal, secure data destruction, and corporate bulk waste pickup.",
  },
  {
    question: "What is e-waste and why is it important to recycle it?",
    answer:
      "E-waste includes discarded electronic devices such as computers, laptops, mobiles, servers, and batteries. Recycling prevents environmental pollution and helps recover valuable materials like metals and plastics.",
  },
  {
    question: "Are you an authorized e-waste recycler?",
    answer:
      "Yes, we operate as an authorized waste recycling service provider ensuring compliance with government regulations and environmental standards.",
  },
  {
    question: "Do you provide pickup services for e-waste?",
    answer:
      "Yes, we offer corporate and bulk waste pickup services, making it convenient for businesses and institutions to dispose of their waste responsibly.",
  },
  {
    question: "What types of e-waste do you accept?",
    answer:
      "We accept computers and laptops, mobile phones, servers and IT equipment, batteries, medical electronic equipment, and industrial electronic scrap.",
  },
  {
    question: "How do you ensure secure data destruction?",
    answer:
      "We follow strict protocols for data destruction to ensure that all sensitive data from devices is permanently erased or destroyed before recycling.",
  },
  {
    question: "Do you provide certificates after disposal?",
    answer:
      "Yes, we provide disposal certificates and documentation for compliance and audit purposes after proper recycling.",
  },
  {
    question: "What is EPR compliance and how do you help?",
    answer:
      "EPR (Extended Producer Responsibility) is a regulatory requirement for managing e-waste. We assist companies with documentation, compliance, and reporting for EPR obligations.",
  },
  {
    question: "Can individuals also give e-waste for recycling?",
    answer:
      "Yes, both individuals and businesses can provide e-waste to us. However, bulk and corporate waste are our primary focus.",
  },
  {
    question: "What happens to the e-waste after collection?",
    answer:
      "The waste undergoes segregation, dismantling, material recovery, and recycling or safe disposal. This ensures minimal environmental impact.",
  },
  {
    question: "Do you handle battery recycling?",
    answer:
      "Yes, we manage battery waste and provide proper manifest documentation for safe handling and recycling.",
  },
  {
    question: "Do you recycle medical machines?",
    answer:
      "Yes, we specialize in safe disposal of medical machines like USG and other electronic healthcare equipment.",
  },
  {
    question: "Is your recycling process environmentally safe?",
    answer:
      "Yes, we follow environmentally responsible processes to reduce pollution and maximize resource recovery.",
  },
  {
    question: "How can businesses partner with you?",
    answer:
      "Businesses can contact us for bulk waste pickup, annual recycling contracts, compliance support, and waste management consultation.",
  },
  {
    question: "Do you provide annual return filing support?",
    answer:
      "Yes, we assist companies in filing annual returns related to e-waste compliance.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve corporates and IT companies, hospitals and healthcare facilities, educational institutions, and manufacturing units.",
  },
  {
    question: "How do you determine the value of scrap?",
    answer:
      "The value depends on the type of material (metal, battery, electronic parts), quantity, and prevailing market rates.",
  },
  {
    question: "Why should we choose Shiv Shakti Metals?",
    answer:
      "Because we are an authorized recycler with end-to-end waste management, secure data handling, compliance support, and environment-friendly practices.",
  },
  {
    question: "Where is your company located?",
    answer:
      "Our facility is located in Modinagar, Uttar Pradesh, serving clients across regions.",
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
