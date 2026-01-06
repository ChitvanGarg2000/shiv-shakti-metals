"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What types of metals do you accept?",
    answer:
      "We accept all ferrous metals (steel, iron, cast iron) and non-ferrous metals including copper, aluminum, brass, bronze, stainless steel, lead, zinc, and nickel alloys. Contact us if you have specific materials not listed.",
  },
  {
    question: "How do you determine pricing for scrap metal?",
    answer:
      "Our pricing is based on current market rates for specific metal types, weight, and purity. We use certified scales and provide transparent pricing. Prices fluctuate with the commodity market, so we recommend calling for current rates.",
  },
  {
    question: "Do you offer pickup services?",
    answer:
      "Yes, we provide convenient pickup services for both residential and commercial customers. Pickup availability depends on location and quantity. Contact us to schedule a pickup and discuss any minimum requirements.",
  },
  {
    question: "How should I prepare my scrap metal?",
    answer:
      "Separate different types of metals when possible to maximize value. Remove any non-metal attachments (plastic, wood, rubber). Clean metals typically fetch better prices. Our team can advise on preparation for your specific materials.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open Monday through Friday from 7:00 AM to 5:00 PM, and Saturdays from 8:00 AM to 2:00 PM. We are closed on Sundays and major holidays. Special pickup arrangements can be made for large commercial loads.",
  },
  {
    question: "Do I need to sort my scrap metal?",
    answer:
      "While not required, sorting your metals can increase their value significantly. We accept mixed loads, but separated metals by type (copper, aluminum, steel, etc.) receive higher per-pound rates.",
  },
  {
    question: "Is there a minimum quantity required?",
    answer:
      "We accept loads of all sizes. For drop-off, there is no minimum. For pickup services, we typically require a minimum quantity depending on your location. Contact us to discuss your specific situation.",
  },
  {
    question: "What environmental certifications do you hold?",
    answer:
      "We are fully licensed and comply with all EPA and state environmental regulations. Our facility follows responsible recycling practices to minimize environmental impact and promote sustainability in the metal recycling industry.",
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
            Find answers to common questions about our metal recycling services.
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
