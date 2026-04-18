'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import {
  Recycle,
  Heart,
  HandHeart,
  ArrowRight,
  CheckCircle2,
  Leaf,
  GraduationCap,
  Stethoscope,
  Sprout,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'

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

const processSteps = [
  {
    number: '01',
    title: 'Waste Collection',
    description:
      'The waste is processed through authorized and compliant recycling systems.',
    icon: Recycle,
  },
  {
    number: '02',
    title: 'Value Recovery',
    description:
      'Valuable materials are recovered and converted into economic value.',
    icon: Sprout,
  },
  {
    number: '03',
    title: 'Social Welfare',
    description:
      'A portion of this value is channelled towards social welfare initiatives through Sneh Charitable Trust.',
    icon: Heart,
  },
]

const impactAreas = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Welfare',
    description: 'Supporting healthcare and community welfare programs',
  },
  {
    icon: GraduationCap,
    title: 'Education & Awareness',
    description: 'Promoting education and awareness initiatives',
  },
  {
    icon: Leaf,
    title: 'Environmental Health',
    description: 'Improving environmental and public health conditions',
  },
  {
    icon: HandHeart,
    title: 'Sustainable Livelihoods',
    description: 'Creating sustainable livelihood opportunities',
  },
]

const visionPoints = [
  'Build environmentally responsible communities',
  'Promote a circular economy',
  'Turn waste into a resource for social good',
  'Create a healthier and more sustainable future',
]

export default function MakeAChangePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-15 overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              <Recycle className="h-4 w-4" />
              MAKE A CHANGE
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Turning Waste into
              <span className="text-primary block mt-2">Welfare</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Shiv Shakti Metals, we believe that sustainability is not just about recycling
              — it&apos;s about creating meaningful impact for society.
            </p>
            <div className="flex justify-center gap-4 items-center mt-8">
              <Image src="/ssk.png" alt="Shiv Shakti Metals" width={250} height={250} className='w-[100px] md:w-[250px]' />
              <Image src="/collab.png" alt="handshake" width={100} height={100} className='w-[50px] md:w-[100px]' />
              <Image src="/sneh-charitable.png" alt="Sneh Charitable Trust" width={200} height={200} className='w-[100px] md:w-[200px]' />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              In collaboration with <span className="text-foreground font-semibold">Sneh Charitable Trust</span>,
              we have built a model where responsible recycling directly contributes to social
              welfare and community development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Collaboration Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Collaboration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              This initiative connects environmental responsibility with humanitarian efforts.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              When individuals and organizations donate their E-waste or hazardous waste to Shiv Shakti Metals:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10"
          >
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 text-center group">
                    <div className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors mb-4">
                      {step.number}
                    </div>
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors mx-auto">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-primary/30" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground max-w-2xl mx-auto text-lg italic"
          >
            This ensures that your waste does not just get recycled — it creates <span className="text-foreground font-semibold not-italic">real impact</span> in people&apos;s lives.
          </motion.p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How Your Contribution Creates Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your waste donation helps in:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 text-center group border-primary/10 hover:border-primary/30">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors mx-auto">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Two Ways to Contribute Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Two Ways to Contribute
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Donate Your Waste */}
            <motion.div variants={itemVariants}>
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Recycle className="h-7 w-7" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">Option 1</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Donate Your Waste
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Give your E-waste & hazardous waste to Shiv Shakti Metals for safe recycling and social impact.
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <Link href="/#enquiry">
                      Donate Your E-Waste
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Donate Directly */}
            <motion.div variants={itemVariants}>
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Heart className="h-7 w-7" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">Option 2</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Donate Directly
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    You can also directly support social causes by donating through Sneh Charitable Trust.
                  </p>
                  <Button asChild size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="https://snehcharity.com/" target="_blank" rel="noopener noreferrer">
                      Support Sneh Charitable Trust
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Shared Vision Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Shared Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Together, <span className="text-foreground font-semibold">Shiv Shakti Metals + Sneh Charitable Trust</span> aim to:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {visionPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{point}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Make a Change Today CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Make a Change Today
            </h2>
            <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
              Every device you discard, every battery you recycle —
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              can help transform lives and protect the environment.
            </p>
            <p className="text-xl font-semibold text-foreground mb-10">
              Recycle with purpose. Donate with impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/#enquiry">
                  <Recycle className="mr-2 h-5 w-5" />
                  Donate Your E-Waste
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="https://snehcharity.com/" target="_blank" rel="noopener noreferrer">
                  <Heart className="mr-2 h-5 w-5" />
                  Make a Change Today
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 lg:py-16">
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
                href: 'https://www.instagram.com/snehcharitabletrust?igsh=MWttZWVyOWw0Nzlldg==',
              }
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
      <section className="bg-card/50 mb-12">
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
