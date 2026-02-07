
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Zap } from 'lucide-react'

export function FeaturedEwasteSection() {
    const stats = [
        {
            label: 'E-Waste Collected',
            value: '10,000+',
            unit: 'Tonnes',
        },
        {
            label: 'Clients Partner',
            value: '40+',
            unit: 'Global Brands',
        },
    ]

    return (
        <section className="w-full py-20 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto px-4">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-6">
                            <span className="text-primary font-semibold text-lg">E-Waste</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                                Building Zero E-Waste Solutions
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p>
                                India's E-Waste Rules have introduced the concept of Extended Producer Responsibility (EPR).
                                Collective expertise from global technology brands and deep insight into the Indian waste ecosystem,
                                SHIV SHAKTI METALS has created a zero E-waste solution that strengthens governance and transparency.
                            </p>

                            <p>
                                Together with 40+ clients, we have built a diverse, scalable, and fully traceable collection ecosystem,
                                supported by robust auditing mechanisms across the entire e-waste value chain. Our programs ensure
                                complete traceability of material movement while delivering compliant, impact-driven outcomes.
                            </p>

                            <div className="space-y-3 pt-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Complete governance and transparency mechanisms</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Fully traceable collection ecosystem</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Robust auditing mechanisms across the value chain</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Compliant, impact-driven outcomes</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <Zap className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                                            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                                            <p className="text-sm text-primary font-medium mt-1">{stat.unit}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative h-64 lg:h-80 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <Image src="/eWaste.png" alt="Featured E-Waste" width={500} height={500} className='w-full h-full object-cover'/>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Impact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-primary/5 border border-primary/20 rounded-lg p-8 lg:p-12"
                >
                    <h3 className="text-2xl font-bold text-foreground mb-6">Our Impact</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-primary font-semibold text-sm mb-2">Traceability</p>
                            <p className="text-muted-foreground">
                                Complete material movement tracking from collection to final processing with full audit trails
                            </p>
                        </div>
                        <div>
                            <p className="text-primary font-semibold text-sm mb-2">Compliance</p>
                            <p className="text-muted-foreground">
                                Fully compliant with EPR regulations and India's E-Waste Rules with all required certifications
                            </p>
                        </div>
                        <div>
                            <p className="text-primary font-semibold text-sm mb-2">Scalability</p>
                            <p className="text-muted-foreground">
                                Diverse ecosystem supporting businesses of all sizes with flexible, scalable solutions
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}