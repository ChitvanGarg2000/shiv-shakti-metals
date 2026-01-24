'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ClientLogo {
  id: string
  name: string
  logo: string
}

const clientLogos: ClientLogo[] = [
  {
    id: '1',
    name: 'Client 1',
    logo: '/aakah.jpeg',
  },
  {
    id: '2',
    name: 'Client 2',
    logo: '/airtel.jpeg',
  },
  {
    id: '3',
    name: 'Client 3',
    logo: '/apollo-hospital.jpeg',
  },
  {
    id: '4',
    name: 'Client 4',
    logo: '/bsnl.jpeg',
  },
  {
    id: '5',
    name: 'Client 5',
    logo: '/ds-group.jpeg',
  },
  {
    id: '6',
    name: 'Client 6',
    logo: '/exide.jpeg',
  },
  {
    id: '7',
    name: 'Client 7',
    logo: '/fortis.jpeg',
  },
  {
    id: '8',
    name: 'Client 8',
    logo: '/hero-housing.jpeg',
  },
  {
    id: '9',
    name: 'Client 9',
    logo: '/icici-prudential.jpeg',
  },
  {
    id: '10',
    name: 'Client 10',
    logo: '/icici.jpeg',
  },
  {
    id: '11',
    name: 'Client 11',
    logo: '/ilbs.jpeg',
  },
  {
    id: '12',
    name: 'Client 12',
    logo: '/itc-hotels.jpeg',
  },
  {
    id: '13',
    name: 'Client 13',
    logo: '/luminous.jpeg',
  },
  {
    id: '14',
    name: 'Client 14',
    logo: '/mtnl.jpeg',
  },
  {
    id: '15',
    name: 'Client 15',
    logo: '/nlu.jpeg',
  },
  {
    id: '16',
    name: 'Client 16',
    logo: '/pnb.jpeg',
  },
  {
    id: '17',
    name: 'Client 17',
    logo: '/pullman.jpeg',
  },
  {
    id: '18',
    name: 'Client 18',
    logo: '/radisson.jpeg',
  },
  {
    id: '19',
    name: 'Client 19',
    logo: '/railways.jpeg',
  },
  {
    id: '20',
    name: 'Client 20',
    logo: '/reliance.jpeg',
  },
  {
    id: '21',
    name: 'Client 21',
    logo: '/rosewalk.jpeg',
  },
  {
    id: '22',
    name: 'Client 22',
    logo: '/stephen.jpeg',
  },
  {
    id: '23',
    name: 'Client 23',
    logo: '/tata.jpeg',
  },
  {
    id: '24',
    name: 'Client 24',
    logo: '/venkateshwar.jpeg',
  },
  {
    id: '25',
    name: 'Client 25',
    logo: '/yes-bank.jpeg',
  }  
]

export function ClientsCarousel() {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leaders who trusts us
          </p>
        </motion.div>

        <div className="relative">
          <style>{`
            .slick-slide {
              padding: 0 16px;
            }
            .slick-list {
              margin: 0 -16px;
            }
            .slick-prev:before,
            .slick-next:before {
              display: none;
            }
          `}</style>

          <Slider {...settings}>
            {clientLogos.map((client) => (
              <div key={client.id} className="px-2">
                <motion.div
                  className="bg-card border border-border rounded-lg flex items-center justify-center p-6 h-32 hover:border-primary hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo || '/placeholder.svg'}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 120px, 200px"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
