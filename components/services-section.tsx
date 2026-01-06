import { Factory, Truck, Scale, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Factory,
    title: "Industrial Metal Recycling",
    description:
      "Large-scale recycling services for manufacturing facilities, construction sites, and industrial operations.",
  },
  {
    icon: Truck,
    title: "Scrap Metal Pickup",
    description:
      "Convenient pickup services for your scrap metal. We handle everything from small loads to full containers.",
  },
  {
    icon: Scale,
    title: "Fair Weight & Pricing",
    description: "Certified scales and transparent pricing. Get the best market rates for your recyclable metals.",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "Environmentally responsible recycling processes that reduce waste and support the circular economy.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Our Metal Recycling Services</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Comprehensive recycling solutions for all types of metals. We accept ferrous and non-ferrous materials.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 bg-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
