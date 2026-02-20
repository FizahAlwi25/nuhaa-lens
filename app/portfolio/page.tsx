"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Camera,
  Cake,
  Heart,
  Sparkles,
  Instagram,
  Facebook,
  Music2,
  ChevronDown,
  X,
  ArrowRight,
  Grid,
  LayoutGrid,
  Video,
  Users,
  Calendar,
  MapPin,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Award,
  Eye,
  ThumbsUp,
  ExternalLink,
  Mic,
  HeartHandshake,
  PartyPopper,
  Briefcase,
  GraduationCap,
  ChevronRight as ChevronRightIcon,
  FolderOpen,
  Image as ImageIcon,
  CheckCircle,
} from "lucide-react";

// Language context and translations
type Language = 'en' | 'bm';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  // Navigation
  'portfolio': {
    en: 'Our Portfolio',
    bm: 'Portfolio Kami'
  },
  'portfolioSubtitle': {
    en: 'Browse our work by service, client, and gallery',
    bm: 'Lihat hasil kerja kami mengikut perkhidmatan, pelanggan, dan galeri'
  },
  'home': {
    en: 'Home',
    bm: 'Laman Utama'
  },
  'services': {
    en: 'Services',
    bm: 'Perkhidmatan'
  },
  'clients': {
    en: 'Clients',
    bm: 'Pelanggan'
  },
  'gallery': {
    en: 'Gallery',
    bm: 'Galeri'
  },
  'viewPortfolio': {
    en: 'View Portfolio',
    bm: 'Lihat Portfolio'
  },
  'photos': {
    en: 'photos',
    bm: 'gambar'
  },
  'featured': {
    en: 'Featured',
    bm: 'Pilihan'
  },
  'backToServices': {
    en: 'Back to Services',
    bm: 'Kembali ke Perkhidmatan'
  },
  'backToClients': {
    en: 'Back to Clients',
    bm: 'Kembali ke Pelanggan'
  },
  'completedProjects': {
    en: 'completed projects',
    bm: 'projek siap'
  },
  
  // Service Categories
  'weddingPhotography': {
    en: 'Wedding Photography',
    bm: 'Fotografi Perkahwinan'
  },
  'weddingDesc': {
    en: 'Beautiful wedding moments captured forever',
    bm: 'Detik perkahwinan indah dirakam selama-lamanya'
  },
  'engagementPhotography': {
    en: 'Engagement Photography',
    bm: 'Fotografi Pertunangan'
  },
  'engagementDesc': {
    en: 'Romantic engagement sessions',
    bm: 'Sesi pertunangan romantis'
  },
  'birthdayPhotography': {
    en: 'Birthday Photography',
    bm: 'Fotografi Hari Jadi'
  },
  'birthdayDesc': {
    en: 'Birthday celebration shoot',
    bm: 'Penggambaran sambutan hari jadi'
  },
  'emceeServices': {
    en: 'Emcee Services',
    bm: 'Perkhidmatan Pengacara'
  },
  'emceeDesc': {
    en: 'Professional event hosting',
    bm: 'Pengacaraan acara profesional'
  },
  'brideAssistant': {
    en: 'Bride Assistant',
    bm: 'Pembantu Pengantin'
  },
  'brideAssistantDesc': {
    en: 'Dedicated support for brides',
    bm: 'Sokongan khusus untuk pengantin perempuan'
  },
  'floorManager': {
    en: 'Floor Manager',
    bm: 'Pengurus Lantai'
  },
  'floorManagerDesc': {
    en: 'Professional event coordination',
    bm: 'Koordinasi acara profesional'
  },

  // Client details
  'weddingDate': {
    en: 'Wedding Date',
    bm: 'Tarikh Perkahwinan'
  },
  'location': {
    en: 'Location',
    bm: 'Lokasi'
  },
  'description': {
    en: 'Description',
    bm: 'Penerangan'
  },
  
  // Footer
  'quickLinks': {
    en: 'Quick Links',
    bm: 'Pautan Pantas'
  },
  'bookNow': {
    en: 'Book Now',
    bm: 'Tempah Sekarang'
  },
  'followUs': {
    en: 'Follow Us',
    bm: 'Ikuti Kami'
  },
  'rightsReserved': {
    en: 'All rights reserved',
    bm: 'Hak cipta terpelihara'
  },
  'creatingMemories': {
    en: 'Creating timeless memories through professional wedding and event services.',
    bm: 'Mencipta kenangan abadi melalui perkhidmatan perkahwinan dan acara profesional.'
  },
};

// Social media links
const socialLinks = {
  instagram: "https://www.instagram.com/nuhaa_lens?igsh=OWg0cGY2OGtpdTdm",
  tiktok: "https://www.tiktok.com/@nuhaa_lens?_r=1&_t=ZS-941KREHjgiT",
  facebook: "https://www.facebook.com/share/1D3xrpGTAH/",
};

// Types
interface PortfolioImage {
  id: string;
  url: string;
  thumbnail?: string;
  caption?: string;
  category?: string;
}

interface ClientPortfolio {
  id: string;
  clientName: string;
  weddingDate?: string;
  location?: string;
  description?: string;
  coverImage: string;
  images: PortfolioImage[];
  tags: string[];
  featured: boolean;
}

interface ServiceCategory {
  id: string;
  name: { en: string; bm: string };
  icon: React.ReactNode;
  description: { en: string; bm: string };
  color: string;
  clientCount: number;
  clients: ClientPortfolio[];
}

// Portfolio Data Structure with bilingual names
const portfolioData: ServiceCategory[] = [
  {
    id: "wedding",
    name: {
      en: "Wedding Photography",
      bm: "Fotografi Perkahwinan"
    },
    icon: <HeartHandshake className="w-8 h-8" />,
    description: {
      en: "Beautiful wedding moments captured forever",
      bm: "Detik perkahwinan indah dirakam selama-lamanya"
    },
    color: "from-pink-500 to-rose-500",
    clientCount: 8,
    clients: [
      {
        id: "wedding-aina-riz",
        clientName: "Aina & Riz's Wedding",
        weddingDate: "December 2025",
        location: "Dewan Saujana, Shah Alam",
        description: "Beautiful traditional Malay wedding ceremony with modern touches. Captured every precious moment from akad nikah to the sanding ceremony.",
        coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3",
        images: [
          {
            id: "aina-1",
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3",
            caption: "Akad Nikah Ceremony",
            category: "Ceremony"
          },
          {
            id: "aina-2",
            url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3",
            caption: "Bridal Portrait",
            category: "Portrait"
          },
          {
            id: "aina-3",
            url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
            caption: "Sanding Ceremony",
            category: "Ceremony"
          },
          {
            id: "aina-4",
            url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3",
            caption: "Family Portrait",
            category: "Family"
          },
          {
            id: "aina-5",
            url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
            caption: "Couple Portrait",
            category: "Portrait"
          },
          {
            id: "aina-6",
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3",
            caption: "Reception",
            category: "Event"
          }
        ],
        tags: ["Wedding", "Nikah", "Sanding", "Traditional"],
        featured: true,
      },
      {
        id: "wedding-sarah-amir",
        clientName: "Sarah & Amir's Wedding",
        weddingDate: "November 2025",
        location: "Masjid Wilayah, KL",
        description: "Intimate nikah ceremony with family and close friends.",
        coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3",
        images: [
          {
            id: "sarah-1",
            url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3",
            caption: "Nikah Ceremony",
            category: "Ceremony"
          },
          {
            id: "sarah-2",
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3",
            caption: "Bride & Groom",
            category: "Portrait"
          },
          {
            id: "sarah-3",
            url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
            caption: "Family Photo",
            category: "Family"
          }
        ],
        tags: ["Wedding", "Nikah", "Mosque"],
        featured: false,
      },
      {
        id: "wedding-fatin-hafiz",
        clientName: "Fatin & Hafiz Wedding",
        weddingDate: "October 2025",
        location: "Putrajaya Marriott",
        description: "Grand sanding reception with traditional performances.",
        coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
        images: [
          {
            id: "fatin-1",
            url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
            caption: "Sanding Ceremony",
            category: "Ceremony"
          },
          {
            id: "fatin-2",
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3",
            caption: "Couple Portrait",
            category: "Portrait"
          },
          {
            id: "fatin-3",
            url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3",
            caption: "Reception",
            category: "Event"
          }
        ],
        tags: ["Wedding", "Sanding", "Reception"],
        featured: true,
      }
    ]
  },
  {
    id: "engagement",
    name: {
      en: "Engagement Photography",
      bm: "Fotografi Pertunangan"
    },
    icon: <Heart className="w-8 h-8" />,
    description: {
      en: "Romantic engagement sessions",
      bm: "Sesi pertunangan romantis"
    },
    color: "from-purple-500 to-pink-500",
    clientCount: 5,
    clients: [
      {
        id: "engagement-maya-danial",
        clientName: "Maya & Danial Engagement",
        weddingDate: "January 2026",
        location: "Botanical Garden, Putrajaya",
        description: "Romantic engagement shoot at Putrajaya Botanical Garden.",
        coverImage: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3",
        images: [
          {
            id: "maya-1",
            url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3",
            caption: "Garden Session",
            category: "Outdoor"
          },
          {
            id: "maya-2",
            url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3",
            caption: "Couple Portrait",
            category: "Portrait"
          },
          {
            id: "maya-3",
            url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
            caption: "Candid Moment",
            category: "Candid"
          }
        ],
        tags: ["Engagement", "Outdoor", "Couple"],
        featured: true,
      },
      {
        id: "engagement-aisyah-azhar",
        clientName: "Aisyah & Azhar Engagement",
        weddingDate: "December 2025",
        location: "Studio KL",
        description: "Studio engagement session with modern themes.",
        coverImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3",
        images: [
          {
            id: "aisyah-1",
            url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3",
            caption: "Studio Session",
            category: "Studio"
          },
          {
            id: "aisyah-2",
            url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3",
            caption: "Couple Portrait",
            category: "Portrait"
          }
        ],
        tags: ["Engagement", "Studio", "Modern"],
        featured: false,
      }
    ]
  },
  {
    id: "birthday",
    name: {
      en: "Birthday Photography",
      bm: "Fotografi Hari Jadi"
    },
    icon: <Cake className="w-8 h-8" />,
    description: {
      en: "Birthday celebration shoot",
      bm: "Penggambaran sambutan hari jadi"
    },
    color: "from-red-500 to-orange-500",
    clientCount: 5,
    clients: [
      {
        id: "birthday-maya-danial",
        clientName: "Maya & Danial Birthday",
        weddingDate: "January 2026",
        location: "Botanical Garden, Putrajaya",
        description: "Birthday celebration shoot",
        coverImage: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3",
        images: [
          {
            id: "maya-1",
            url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3",
            caption: "Garden Session",
            category: "Outdoor"
          },
          {
            id: "maya-2",
            url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3",
            caption: "Couple Portrait",
            category: "Portrait"
          },
          {
            id: "maya-3",
            url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
            caption: "Candid Moment",
            category: "Candid"
          }
        ],
        tags: ["Birthday", "Outdoor", "Couple"],
        featured: true,
      }
    ]
  },
  {
    id: "emcee",
    name: {
      en: "Emcee Services",
      bm: "Perkhidmatan Pengacara"
    },
    icon: <Mic className="w-8 h-8" />,
    description: {
      en: "Professional event hosting",
      bm: "Pengacaraan acara profesional"
    },
    color: "from-yellow-500 to-orange-500",
    clientCount: 6,
    clients: [
      {
        id: "emcee-corporate-gala",
        clientName: "TechCorp Gala Night",
        weddingDate: "December 2025",
        location: "Shangri-La Hotel, KL",
        description: "Annual corporate dinner and awards ceremony hosted by our professional emcee.",
        coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
        images: [
          {
            id: "gala-1",
            url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
            caption: "Opening Speech",
            category: "Event"
          },
          {
            id: "gala-2",
            url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3",
            caption: "Awards Presentation",
            category: "Event"
          },
          {
            id: "gala-3",
            url: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3",
            caption: "Stage Hosting",
            category: "Performance"
          }
        ],
        tags: ["Corporate", "Gala", "Emcee"],
        featured: true,
      },
      {
        id: "emcee-wedding-reception",
        clientName: "Hannah & Riz's Wedding Reception",
        weddingDate: "November 2025",
        location: "Dewan Convention, KL",
        description: "Wedding reception hosting with bilingual emcee.",
        coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3",
        images: [
          {
            id: "wedding-emcee-1",
            url: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3",
            caption: "Wedding Reception",
            category: "Event"
          },
          {
            id: "wedding-emcee-2",
            url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3",
            caption: "Audience Engagement",
            category: "Event"
          }
        ],
        tags: ["Wedding", "Emcee", "Reception"],
        featured: false,
      }
    ]
  },
  {
    id: "bride-assistant",
    name: {
      en: "Bride Assistant",
      bm: "Pembantu Pengantin"
    },
    icon: <Heart className="w-8 h-8" />,
    description: {
      en: "Dedicated support for brides",
      bm: "Sokongan khusus untuk pengantin perempuan"
    },
    color: "from-red-500 to-pink-500",
    clientCount: 4,
    clients: [
      {
        id: "bride-assistant-1",
        clientName: "Sarah's Wedding Day",
        weddingDate: "December 2025",
        location: "Putrajaya",
        description: "Full-day bride assistance including dress adjustments and coordination.",
        coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
        images: [
          {
            id: "ba-1",
            url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
            caption: "Bride Preparation",
            category: "Preparation"
          },
          {
            id: "ba-2",
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3",
            caption: "Dress Adjustment",
            category: "Assistance"
          }
        ],
        tags: ["Bride Assistant", "Wedding"],
        featured: true,
      }
    ]
  },
  {
    id: "floor-manager",
    name: {
      en: "Floor Manager",
      bm: "Pengurus Lantai"
    },
    icon: <Users className="w-8 h-8" />,
    description: {
      en: "Professional event coordination",
      bm: "Koordinasi acara profesional"
    },
    color: "from-green-500 to-emerald-500",
    clientCount: 3,
    clients: [
      {
        id: "floor-manager-1",
        clientName: "Grand Wedding Reception",
        weddingDate: "January 2026",
        location: "KL Convention Centre",
        description: "Full event coordination for 500-guest wedding reception.",
        coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
        images: [
          {
            id: "fm-1",
            url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
            caption: "Event Setup",
            category: "Preparation"
          },
          {
            id: "fm-2",
            url: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3",
            caption: "Event Coordination",
            category: "Event"
          }
        ],
        tags: ["Floor Manager", "Event"],
        featured: false,
      }
    ]
  }
];

// Floating particle for background
const FloatingParticle = ({ delay = 0, size = 4, left = "0%", top = "0%" }) => (
  <motion.div
    className="absolute rounded-full bg-white/20"
    style={{ left, top, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Language Toggle Component
function LanguageToggle({ language, setLanguage }: { language: Language; setLanguage: (lang: Language) => void }) {
  return (
    <motion.div
      className="fixed z-50"
      style={{ 
        top: 'calc(2vh)', 
        right: 'calc(2vw)' 
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        className="relative flex items-center bg-black/20 backdrop-blur-md rounded-lg overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.button
          onClick={() => setLanguage('en')}
          className={`relative px-4 py-2 text-sm font-light tracking-wider transition-all duration-300 ${
            language === 'en' 
              ? 'text-white bg-white/20' 
              : 'text-white/50 hover:text-white/80 hover:bg-white/5'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">EN</span>
          {language === 'en' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"
              layoutId="languageUnderline"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>

        <motion.button
          onClick={() => setLanguage('bm')}
          className={`relative px-4 py-2 text-sm font-light tracking-wider transition-all duration-300 ${
            language === 'bm' 
              ? 'text-white bg-white/20' 
              : 'text-white/50 hover:text-white/80 hover:bg-white/5'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">BM</span>
          {language === 'bm' && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"
              layoutId="languageUnderline"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// Service Categories Grid Component
function ServiceCategoriesGrid({ 
  onSelectCategory,
  language,
  t
}: { 
  onSelectCategory: (category: ServiceCategory) => void;
  language: Language;
  t: (key: string) => string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioData.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onSelectCategory(category)}
          className="group cursor-pointer"
        >
          <div className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white hover:shadow-xl transition-shadow relative overflow-hidden`}>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{category.name[language]}</h3>
                  <p className="text-white/80 text-sm">{category.clientCount} {t('clients').toLowerCase()}</p>
                </div>
              </div>
              
              <p className="text-white/90 text-sm mb-4">{category.description[language]}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {t('viewPortfolio')}
                </span>
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full filter blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full filter blur-xl" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Client List Component
function ClientList({ 
  category, 
  onSelectClient,
  onBack,
  language,
  t
}: { 
  category: ServiceCategory;
  onSelectClient: (client: ClientPortfolio) => void;
  onBack: () => void;
  language: Language;
  t: (key: string) => string;
}) {
  return (
    <div className="space-y-6">
      {/* Category header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-r ${category.color} rounded-2xl p-8 text-white`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            {category.icon}
          </div>
          <div>
            <h2 className="text-3xl font-bold">{category.name[language]}</h2>
            <p className="text-white/90">{category.description[language]}</p>
          </div>
        </div>
        <p className="text-white/80 text-sm">
          {category.clientCount} {t('completedProjects')}
        </p>
      </motion.div>

      {/* Client grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {category.clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectClient(client)}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={client.coverImage}
                  alt={client.clientName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {client.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {t('featured')}
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{client.clientName}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{client.weddingDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{client.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">
                    {client.images.length} {t('photos')}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    {t('viewPortfolio')}
                    <ChevronRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Image Gallery Component
function ImageGallery({ 
  client, 
  onBack,
  language,
  t
}: { 
  client: ClientPortfolio;
  onBack: () => void;
  language: Language;
  t: (key: string) => string;
}) {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: PortfolioImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % client.images.length;
    setSelectedImage(client.images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + client.images.length) % client.images.length;
    setSelectedImage(client.images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="space-y-6">
      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {client.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          <div className="absolute top-6 left-6 z-50 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {client.images.length}
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.caption || client.clientName}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>

          {selectedImage.caption && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-full">
              {selectedImage.caption}
            </div>
          )}
        </motion.div>
      )}

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        {t('backToClients')}
      </motion.button>

      {/* Client header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-24 h-24 rounded-xl overflow-hidden">
            <img
              src={client.coverImage}
              alt={client.clientName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{client.clientName}</h2>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{client.weddingDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{client.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <ImageIcon className="w-4 h-4" />
                <span>{client.images.length} {t('photos')}</span>
              </div>
            </div>
            {client.description && (
              <p className="mt-4 text-white/70">{client.description}</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {client.images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => openLightbox(image, index)}
            className="group cursor-pointer"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 relative">
              <img
                src={image.url}
                alt={image.caption || `Photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs truncate">{image.caption}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<"services" | "clients" | "gallery">("services");
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedClient, setSelectedClient] = useState<ClientPortfolio | null>(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Translation function
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const handleSelectCategory = (category: ServiceCategory) => {
    setSelectedCategory(category);
    setCurrentView("clients");
  };

  const handleSelectClient = (client: ClientPortfolio) => {
    setSelectedClient(client);
    setCurrentView("gallery");
  };

  const handleBackToServices = () => {
    setCurrentView("services");
    setSelectedCategory(null);
    setSelectedClient(null);
  };

  const handleBackToClients = () => {
    setCurrentView("clients");
    setSelectedClient(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Language Toggle */}
      <LanguageToggle language={language} setLanguage={setLanguage} />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingParticle delay={0} size={6} left="5%" top="10%" />
        <FloatingParticle delay={2} size={8} left="15%" top="30%" />
        <FloatingParticle delay={4} size={4} left="25%" top="60%" />
        <FloatingParticle delay={1} size={10} left="75%" top="20%" />
        <FloatingParticle delay={3} size={5} left="85%" top="50%" />
        <FloatingParticle delay={5} size={7} left="45%" top="70%" />
        <FloatingParticle delay={2.5} size={6} left="65%" top="80%" />
        <FloatingParticle delay={4.5} size={8} left="90%" top="15%" />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
          >
            <FolderOpen className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-light mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t('portfolio')}
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-6"
            animate={{ width: ["6rem", "12rem", "6rem"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t('portfolioSubtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb with Home */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 text-gray-500 hover:text-green-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{t('home')}</span>
            </motion.button>
          </Link>

          <ChevronRightIcon className="w-4 h-4 text-gray-300" />

          <button
            onClick={handleBackToServices}
            className={`hover:text-green-600 transition flex items-center gap-1 ${
              currentView === "services" ? "text-green-600 font-medium" : "text-gray-500"
            }`}
          >
            <FolderOpen className="w-4 h-4" />
            <span className="font-semibold">{t('services')}</span> 
          </button>

          {selectedCategory && (
            <>
              <ChevronRightIcon className="w-4 h-4 text-gray-300" />
              <button
                onClick={handleBackToClients}
                className={`hover:text-green-600 transition flex items-center gap-1 ${
                  currentView === "clients" ? "text-green-600 font-medium" : "text-gray-500"
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>{selectedCategory.name[language]}</span>
              </button>
            </>
          )}

          {selectedClient && (
            <>
              <ChevronRightIcon className="w-4 h-4 text-gray-300" />
              <span className="text-green-600 font-medium flex items-center gap-1">
                <Camera className="w-4 h-4" />
                {selectedClient.clientName}
              </span>
            </>
          )}
        </div>

        {/* Dynamic Content */}
        {currentView === "services" && (
          <ServiceCategoriesGrid 
            onSelectCategory={handleSelectCategory} 
            language={language}
            t={t}
          />
        )}

        {currentView === "clients" && selectedCategory && (
          <ClientList
            category={selectedCategory}
            onSelectClient={handleSelectClient}
            onBack={handleBackToServices}
            language={language}
            t={t}
          />
        )}

        {currentView === "gallery" && selectedClient && (
          <ImageGallery
            client={selectedClient}
            onBack={handleBackToClients}
            language={language}
            t={t}
          />
        )}
      </section>

      {/* Footer with Social Media */}
      <footer className="py-12 px-4 bg-gray-900 text-white mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-light mb-4">Nuhaa Lens</h3>
              <p className="text-gray-400 text-sm">
                {t('creatingMemories')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('quickLinks')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    {t('home')}
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="hover:text-white transition">
                    {t('bookNow')}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition">
                    {t('services')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('services')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('weddingPhotography')}</li>
                <li>{t('engagementPhotography')}</li>
                <li>{t('emceeServices')}</li>
                <li>{t('brideAssistant')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('followUs')}</h4>
              <div className="flex gap-4">
                <motion.a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors"
                >
                  <Music2 className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Nuhaa Lens. {t('rightsReserved')}.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="w-5 h-5 rotate-180" />
      </motion.button>
    </main>
  );
}