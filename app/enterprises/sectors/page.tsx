'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { ClientsCarousel } from '@/components/clients-section'
import { EnquiryForm } from '@/components/enquiry-form'
import { FeaturedEwasteSection } from '@/components/app/FeaturedEWaste'
import Image from 'next/image'
import {
  Battery,
  Radio,
  Zap,
  Cable,
  Radiation,
  Stethoscope
} from 'lucide-react'

const sectors = [
  {
    icon: Radiation,
    title: 'E-Waste Disposal',
    heading: 'Safe E-Waste Recycling',
    description: `E-waste refers to discarded electrical and electronic equipment that has reached the end of its useful life. E-waste includes items such as computers, printers, UPS, AC, Refrigerator, keyboards, hard disks and other electronic devices. With rapid technological upgrades and increasing electronic usage, e-waste is growing day by day. Improper disposal releases harmful substances like lead and mercury, which contaminate soil and water and affect human health. By sending e-waste to authorized recyclers, valuable metals can be recovered safely and environmental pollution can be reduced.`
  },
  {
    icon: Battery,
    title: 'Hazardous waste',
    heading: 'Sustainable Battery Recycling',
    description:
      'Lead acid batteries are rechargeable batteries commonly used in vehicles, inverters, UPS systems, and industrial applications. These batteries mainly include automotive batteries, inverter batteries, UPS batteries, and industrial batteries. The rising use of vehicles and power backup systems has significantly increased battery waste generation. If disposed of improperly, lead and acid can leak into the environment, causing serious soil and water pollution. Recycling through authorized facilities helps recover lead safely and prevents hazardous exposure while conserving natural resources.',
  },
  {
    icon: Radio,
    title: 'Plastic Waste',
    heading: 'Advanced Plastic Waste Management',
    description:
      'Plastic waste in our operations refers to materials recovered from authorized hazardous waste and e-waste streams during their recycling process, rather than domestic or general industrial plastic. Such plastic, if not handled properly, can lead to environmental pollution and potential health risks. We ensure its safe segregation, controlled processing, and compliant recycling, enabling responsible material recovery while minimizing environmental impact.',
  },
  {
    icon: Zap,
    title: 'Non-Ferrous Metals',
    heading: 'Non-Ferrous Metal Recovery',
    description:
      'Non-ferrous scrap refers to metal waste that does not contain iron and is resistant to rust and corrosion. It consists of metals such as aluminum, copper, brass, zinc, and other non-ferrous materials used in various industries. Growing industrial and electrical usage has increased the generation of such scrap materials. When not recycled properly, valuable resources are wasted and unnecessary mining increases environmental damage. Recycling non-ferrous metals saves energy, reduces pollution, and supports sustainable industrial practices.',
  },
  {
    icon: Cable,
    title: 'Insulated Wires',
    heading: 'Wire Processing',
    description:
      'Insulated wire scrap refers to discarded electrical and communication wires covered with protective insulation material. It includes electrical wires, communication wires, power cables, and other insulated conductors. With expanding infrastructure and electrical installations, wire waste is increasing rapidly. Burning wires to extract metal releases toxic fumes that harm human health and the environment. Authorized recycling separates metal and insulation safely, allowing resource recovery while minimizing environmental impact.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Equipment Waste',
    heading: 'Condemned Medical Equipment Disposal',
    description:
      'Condemned medical equipment refers to healthcare devices that have reached end-of-life, are non-functional, or are no longer safe for use. This includes items such as ventilators, USG machines, cardiology machines, patient monitors, and other hospital equipment. If not disposed of properly, such equipment can pose environmental and health risks due to hazardous components. We ensure their safe dismantling, authorized recycling, and proper material recovery, minimizing risks and promoting environmentally responsible disposal practices.',
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

export default function EnterprisessectorsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-28 lg:py-40 overflow-hidden md:min-h-screen">
        {/* Banner Image */}
        <Image
          src="/sector-banner2.png"
          alt="Our Services Banner"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto pt-[70px]"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Begin your
              <span className="text-primary block text-2xl lg:text-3xl mt-2">Zero Waste Economy with us</span>
            </h1>
            {/* <p className="text-lg text-white/80 mb-8">
              Creating scalable, inclusive e-waste circularity and EPR
              solutions—guided by impact, enabled by technology.
            </p> */}
          </motion.div>
        </div>
      </section>
      {/* <section className="relative overflow-hidden bg-muted/30 py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              
              <span className="text-primary block text-2xl lg:text-3xl mt-2">Zero Waste Economy with Us</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Featured E-Waste Section */}

      <FeaturedEwasteSection />


      {/* Sectors */}
      <section className='bg-muted/30 mt-12 py-12'>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-8 lg:p-12">
                    <div className="flex items-start gap-6 mb-6">
                      <IconComponent className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {sector.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary">
                          {sector.heading}
                        </h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {sector.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className='py-15'>
        <ClientsCarousel />
      </section>

      {/* Contact Form */}
      <section className='py-15 bg-muted/30'>
        <EnquiryForm />
      </section>
    </main>
  )
}
