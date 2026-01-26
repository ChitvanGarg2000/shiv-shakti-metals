import { HeroSlider } from "@/components/hero-slider"
import { EnquiryForm } from "@/components/enquiry-form"
import { FAQSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {Services} from "@/components/Services"
import { CertificationsSection } from "@/components/certifications-section"
import { ClientsCarousel } from "@/components/clients-section"
import { TestimonialsSection } from "../components/testimonial-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <Services />
        <ClientsCarousel />
        <CertificationsSection />
        <TestimonialsSection />
        <EnquiryForm />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
