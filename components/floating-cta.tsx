"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCTA() {
  const phoneNumber = "+919068951095" // Replace with actual business phone
  const whatsappNumber = "9068951095" // Replace with actual WhatsApp number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your metal recycling services.`,
      "_blank",
    )
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground p-0"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Call Button */}
      <Button
        onClick={handleCall}
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground p-0"
        aria-label="Call us now"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  )
}
