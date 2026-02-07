'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import {
  BookOpen,
  Users,
  Target,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'

const initiatives = [
  {
    icon: BookOpen,
    title: 'Environmental Education',
    description:
      'Structured programs and workshops to build awareness about e-waste and environmental impact among students.',
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description:
      'Interactive initiatives that encourage participation in collection drives and sustainability campaigns.',
  },
  {
    icon: Target,
    title: 'Behavioral Change',
    description:
      'Long-term programs fostering responsible disposal practices and circular economy mindset.',
  },
  {
    icon: Globe,
    title: 'Social Impact',
    description:
      'Knowledge-sharing programs aligned with sustainable development goals and community protection.',
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

export default function MakeAChangePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Make recycling a part of
              <span className="text-primary block">living</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Driving Sustainable Development Through Education & Action
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At SHIV SHAKTI METALS, sustainability goes beyond responsible recycling—it is
              about creating long-term environmental awareness and social impact. In collaboration
              with a dedicated Sneh charitable trust focused on sustainable development, we are
              building a future where responsible e-waste management and environmental
              consciousness begin at the grassroots level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Collaborative Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              This partnership combines industry expertise in e-waste recycling with the trust's mission to educate and empower communities.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A key focus of this collaboration is to promote sustainability awareness among students through structured programs, workshops, and interactive initiatives. By engaging schools, colleges, and educational institutions, we help students understand how their everyday choices can contribute to environmental protection and resource conservation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{initiative.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Creating Measurable Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Through joint initiatives, we enable meaningful change in our communities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {[
              'Organized and traceable e-waste collection drives',
              'Safe and compliant recycling of collected materials',
              'Knowledge-sharing programs aligned with SDGs',
              'Community participation in responsible waste management',
            ].map((impact, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground font-medium">{impact}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Be A Change
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in creating a sustainable future through environmental education and action
            </p>
            <Button
              asChild
              size="lg"
              className="mb-8"
            >
              <Link href="https://snehcharitabletrust.org" target="_blank" rel="noopener noreferrer">
                Be A Change / Get Involved
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Inspire the Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow us on social media for updates on sustainability initiatives
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {[
              {
                icon: Facebook,
                name: 'Facebook',
                href: '#',
              },
              {
                icon: Instagram,
                name: 'Instagram',
                href: '#',
              },
              {
                icon: Linkedin,
                name: 'LinkedIn',
                href: '#',
              },
              {
                icon: Twitter,
                name: 'Twitter',
                href: '#',
              },
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={social.href}
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent className="h-6 w-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Contact our experts
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              And create your zero-waste economy
            </p>
            <Button asChild size="lg">
              <Link href="/#enquiry">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
