import { EnquiryForm } from '@/components/enquiry-form'
import { FAQSection } from '@/components/faq-section'

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Enquiry Form Section */}
      <section className="py-16 lg:py-24">
        <EnquiryForm />
      </section>

      {/* Google Maps Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Find Us</h2>
            <p className="text-muted-foreground text-lg">
              Visit our facility or get directions to our location
            </p>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-lg border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3495.5316210088786!2d77.54935077550782!3d28.82302857556121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ5JzIyLjkiTiA3N8KwMzMnMDYuOSJF!5e0!3m2!1sen!2sin!4v1776604310600!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shiv Shakti Metals Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}

export default ContactUs