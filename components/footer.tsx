import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Shiv Shakti Metals Logo" width={40} height={40} className="rounded-full" />
              <span className="font-bold text-lg">Shiv Shakti Metals</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional metal recycling services. Turn your scrap into value while supporting environmental
              sustainability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Authorized Waste Recycling
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Medical Machine Disposal
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Secure Data Destruction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  EPR Compliance & Documentation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Corporate & Bulk Waste Pickup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">More Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  E-waste & Battery Waste Manifest
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Disposal Certificate
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  USG Machine Disposal
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Annual Return Filing
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#enquiry" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+919068951095">+919068951095</a></li>
              <li><a href="mailto:shivshaktimetals2009@gmail.com">shivshaktimetals2009@gmail.com</a></li>
              <li className="leading-relaxed">
                Khasra no 545, Sikheda road, industrial area Vill, Modinagar, Uttar Pradesh 201204
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shiv Shakti Metals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
