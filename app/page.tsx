import Link from 'next/link'
import { Camera, Video, Mic, Users, Layout, Zap, Heart, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3')",
            opacity: 0.5
          }}
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-light mb-4">Nuhaa Lens</h1>
          <p className="text-2xl md:text-3xl mb-6 opacity-90">Complete Wedding & Event Solutions</p>
          <p className="text-lg md:text-xl mb-10 opacity-80">Photography • Videography • Emcee • Bride Assistant • Floor Manager • Live Streaming • Content Creator</p>
          <div className="space-x-4">
            <Link 
              href="/book" 
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition inline-block"
            >
              Book a Service
            </Link>
            <Link 
              href="#services" 
              className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition inline-block"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive wedding and event coverage tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Photography */}
          <ServiceCard 
            icon={<Camera className="w-8 h-8" />}
            title="Photography"
            description="Professional wedding and event photography capturing every precious moment with artistic vision and technical expertise."
            features={["Pre-wedding shoots", "Actual day coverage", "Edited high-res images", "Online gallery"]}
            price="From RM 1800"
          />

          {/* Videography */}
          <ServiceCard 
            icon={<Video className="w-8 h-8" />}
            title="Videography"
            description="Cinematic wedding videos that tell your unique love story, from highlights to full documentation."
            features={["Highlight video", "Full ceremony", "Same day edit", "Drone footage"]}
            price="From RM 2500"
          />

          {/* Emcee */}
          <ServiceCard 
            icon={<Mic className="w-8 h-8" />}
            title="Emcee Services"
            description="Professional bilingual emcee to host your wedding or event with charm, wit, and perfect timing."
            features={["Bilingual (ENG/BM)", "Script writing", "Coordinate with vendors", "Rehearsal included"]}
            price="From RM 800"
          />

          {/* Bride Assistant */}
          <ServiceCard 
            icon={<Heart className="w-8 h-8" />}
            title="Bride Assistant"
            description="Dedicated personal assistant for the bride, ensuring everything runs smoothly so you can enjoy your day."
            features={["Dress adjustments", "Touch-ups", "Bridal party coordination", "Emergency kit"]}
            price="From RM 600"
          />

          {/* Floor Manager */}
          <ServiceCard 
            icon={<Users className="w-8 h-8" />}
            title="Floor Manager"
            description="Professional event coordinator to manage the flow of your reception and keep everything on schedule."
            features={["Vendor coordination", "Timeline management", "Guest coordination", "Problem solving"]}
            price="From RM 700"
          />

          {/* MCP Live Streaming */}
          <ServiceCard 
            icon={<Zap className="w-8 h-8" />}
            title="MCP Live Streaming"
            description="Multi-Camera Production live streaming for guests who can't attend in person."
            features={["Multi-camera setup", "Professional switching", "Private YouTube link", "Recording included"]}
            price="From RM 1500"
          />

          {/* Wedding Content Creator */}
          <ServiceCard 
            icon={<Sparkles className="w-8 h-8" />}
            title="Wedding Content Creator"
            description="Behind-the-scenes content creation for your social media, capturing raw and real moments."
            features={["Instagram/TikTok ready", "BTS moments", "Same day previews", "Digital delivery"]}
            price="From RM 900"
          />

          {/* Custom Package */}
          <ServiceCard 
            icon={<Layout className="w-8 h-8" />}
            title="Custom Packages"
            description="Mix and match services to create your perfect wedding package."
            features={["Any combination", "Bulk discount", "Consultation included", "Tailored to you"]}
            price="Contact for quote"
            highlight={true}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Why Choose Nuhaa Lens?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">10+ Years Experience</h3>
              <p className="text-gray-600">Professional service you can trust</p>
            </div>
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">All-in-One Solution</h3>
              <p className="text-gray-600">Everything you need, one team</p>
            </div>
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="font-semibold mb-2">Stress-Free Planning</h3>
              <p className="text-gray-600">We handle the details</p>
            </div>
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="font-semibold mb-2">Personalized Service</h3>
              <p className="text-gray-600">Tailored to your vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center bg-black text-white">
        <h2 className="text-4xl mb-4">Ready to Plan Your Perfect Day?</h2>
        <p className="text-xl mb-8 opacity-90">Let's discuss how we can bring your vision to life</p>
        <Link 
          href="/book" 
          className="bg-white text-black px-10 py-4 rounded-full text-lg hover:bg-gray-200 transition inline-block"
        >
          Book a Free Consultation
        </Link>
      </section>
    </main>
  )
}

// Define the type for ServiceCard props
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  highlight?: boolean;
}

// Update the function with the type
function ServiceCard({ icon, title, description, features, price, highlight = false }: ServiceCardProps) {
  return (
    <div className={`border rounded-xl p-6 ${highlight ? 'border-black shadow-lg scale-105 bg-white' : 'hover:shadow-lg'} transition`}>
      <div className="text-black mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <p className="text-xl font-bold mb-4">{price}</p>
      <Link 
        href="/book" 
        className="block text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Book Now
      </Link>
    </div>
  )
}