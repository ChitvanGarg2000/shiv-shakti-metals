import { HeroSlider } from "@/components/hero-slider"
import { EnquiryForm } from "@/components/enquiry-form"
import { FAQSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {Services} from "@/components/Services"
import { CertificationsSection } from "@/components/certifications-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <Services />
        <CertificationsSection />
        <EnquiryForm />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
