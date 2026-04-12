import { HeroSlider } from "@/components/hero-slider"
import { EnquiryForm } from "@/components/enquiry-form"
import { Header } from "@/components/header"
import { ServicesShowcase } from "@/components/services-showcase"
import { Footer } from "@/components/footer"
import {WasteCategoriesSection} from "@/components/Services"
import { CertificationsSection } from "@/components/certifications-section"
import { ClientsCarousel } from "@/components/clients-section"
import { TestimonialsSection } from "../components/testimonial-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSlider />
        <WasteCategoriesSection />
        <ServicesShowcase />
        <section className="w-full bg-muted/30 py-15">
          <ClientsCarousel />
        </section>
        <section className="py-15">
          <CertificationsSection />
        </section>
          <TestimonialsSection />
        <section className="py-15">
          <EnquiryForm />
        </section>
      </main>
    </div>
  )
}
