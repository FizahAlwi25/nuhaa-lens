'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar as CalendarIcon, User, Phone, Mail, Instagram, 
  MapPin, MessageSquare, CheckCircle, Camera, Video, Mic, 
  Users, Heart, Sparkles, Zap, ChevronLeft, ChevronRight, 
  Star, Clock, Shield, Award, Gift, ArrowRight, PartyPopper,
  ChevronDown, X, Music2, Facebook, Package,
  HeartHandshake, GraduationCap, Briefcase, PartyPopper as PartyIcon,
  Camera as CameraIcon, Film, Mic2, Crown, Layers,
  Sparkle, Smile
} from 'lucide-react'

type Language = 'en' | 'bm';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  // Navigation
  'home': {
    en: 'Home',
    bm: 'Laman Utama'
  },
  'booking': {
    en: 'Booking',
    bm: 'Tempahan'
  },
  'portfolio': {
    en: 'Portfolio',
    bm: 'Portfolio'
  },
  'services': {
    en: 'Services',
    bm: 'Perkhidmatan'
  },
  'quickLinks': {
    en: 'Quick Links',
    bm: 'Pautan Pantas'
  },
  'followUs': {
    en: 'Follow Us',
    bm: 'Ikuti Kami'
  },
  'rightsReserved': {
    en: 'All rights reserved',
    bm: 'Hak cipta terpelihara'
  },
  
  // Booking Page
  'bookYourServices': {
    en: 'Book Your Services',
    bm: 'Tempah Perkhidmatan Anda'
  },
  'with': {
    en: 'with',
    bm: 'dengan'
  },
  'selectServices': {
    en: 'Select Services',
    bm: 'Pilih Perkhidmatan'
  },
  'yourDetails': {
    en: 'Your Details',
    bm: 'Maklumat Anda'
  },
  'confirmation': {
    en: 'Confirmation',
    bm: 'Pengesahan'
  },
  'selectYourServices': {
    en: 'Select Your Services',
    bm: 'Pilih Perkhidmatan Anda'
  },
  'chooseServicesDesc': {
    en: 'Choose one or multiple services for your event',
    bm: 'Pilih satu atau pelbagai perkhidmatan untuk acara anda'
  },
  'backToHome': {
    en: 'Back to Home',
    bm: 'Kembali ke Laman Utama'
  },
  'continueToDetails': {
    en: 'Continue to Details',
    bm: 'Teruskan ke Maklumat'
  },
  'yourInformation': {
    en: 'Your Information',
    bm: 'Maklumat Anda'
  },
  'selectEventDate': {
    en: 'Select Event Date',
    bm: 'Pilih Tarikh Acara'
  },
  'selected': {
    en: 'Selected',
    bm: 'Dipilih'
  },
  'available': {
    en: 'Available',
    bm: 'Tersedia'
  },
  'partiallyBooked': {
    en: 'Partially Booked',
    bm: 'Sebahagian Ditempah'
  },
  'fullyBooked': {
    en: 'Fully Booked',
    bm: 'Penuh Ditempah'
  },
  'selectedDate': {
    en: 'Selected Date',
    bm: 'Tarikh Dipilih'
  },
  'thisDateHas': {
    en: 'This date has some services booked',
    bm: 'Tarikh ini mempunyai beberapa perkhidmatan yang ditempah'
  },
  'fullName': {
    en: 'Full Name',
    bm: 'Nama Penuh'
  },
  'emailAddress': {
    en: 'Email Address',
    bm: 'Alamat Emel'
  },
  'phoneNumber': {
    en: 'Phone Number',
    bm: 'Nombor Telefon'
  },
  'instagramOptional': {
    en: 'Instagram (optional)',
    bm: 'Instagram (pilihan)'
  },
  'eventLocation': {
    en: 'Event Location',
    bm: 'Lokasi Acara'
  },
  'eventType': {
    en: 'Event Type',
    bm: 'Jenis Acara'
  },
  'specialRequests': {
    en: 'Special Requests or Notes',
    bm: 'Permintaan Khas atau Nota'
  },
  'tellUsAbout': {
    en: 'Tell us about your vision or any special requirements...',
    bm: 'Beritahu kami tentang visi anda atau sebarang keperluan khas...'
  },
  'back': {
    en: 'Back',
    bm: 'Kembali'
  },
  'submitBooking': {
    en: 'Submit Booking',
    bm: 'Hantar Tempahan'
  },
  'bookingReceived': {
    en: 'Booking Received!',
    bm: 'Tempahan Diterima!'
  },
  'thankYouMessage': {
    en: 'Thank you for choosing Nuhaa Lens. We\'ll contact you within 24 hours to confirm your booking and discuss the details.',
    bm: 'Terima kasih kerana memilih Nuhaa Lens. Kami akan menghubungi anda dalam masa 24 jam untuk mengesahkan tempahan dan membincangkan butiran.'
  },
  'bookingSummary': {
    en: 'Booking Summary',
    bm: 'Ringkasan Tempahan'
  },
  'total': {
    en: 'Total',
    bm: 'Jumlah'
  },
  'eventDate': {
    en: 'Event Date',
    bm: 'Tarikh Acara'
  },
  'returnToHome': {
    en: 'Return to Home',
    bm: 'Kembali ke Laman Utama'
  },
  'viewPortfolio': {
    en: 'View Portfolio',
    bm: 'Lihat Portfolio'
  },
  
  // Event Types
  'wedding': {
    en: 'Wedding',
    bm: 'Perkahwinan'
  },
  'engagement': {
    en: 'Engagement',
    bm: 'Pertunangan'
  },
  'corporate': {
    en: 'Corporate Event',
    bm: 'Acara Korporat'
  },
  'birthday': {
    en: 'Birthday Party',
    bm: 'Majlis Hari Jadi'
  },
  'maternity': {
    en: 'Maternity Shoot',
    bm: 'Penggambaran Maternity'
  },
  'aqiqah': {
    en: 'Aqiqah',
    bm: 'Aqiqah'
  },
  'convocation': {
    en: 'Convocation/Graduation',
    bm: 'Konvokesyen'
  },
  'other': {
    en: 'Other',
    bm: 'Lain-lain'
  },
  
  // Photography Categories
  'weddingPhotography': {
    en: 'Wedding Photography',
    bm: 'Fotografi Perkahwinan'
  },
  'weddingPhotographyDesc': {
    en: 'Capture your special day with our comprehensive wedding packages',
    bm: 'Abadikan hari istimewa anda dengan pakej perkahwinan komprehensif kami'
  },
  'engagementPhotography': {
    en: 'Engagement Photography',
    bm: 'Fotografi Pertunangan'
  },
  'engagementPhotographyDesc': {
    en: 'Beautiful engagement shoots to celebrate your love story',
    bm: 'Penggambaran pertunangan indah untuk meraikan kisah cinta anda'
  },
  'convocationPhotography': {
    en: 'Convocation Photography',
    bm: 'Fotografi Konvokesyen'
  },
  'convocationPhotographyDesc': {
    en: 'Professional graduation photos to mark your achievement',
    bm: 'Foto graduasi profesional untuk menandakan pencapaian anda'
  },
  'formalEvents': {
    en: 'Formal Events',
    bm: 'Acara Formal'
  },
  'formalEventsDesc': {
    en: 'Corporate and formal event coverage',
    bm: 'Liputan acara korporat dan formal'
  },
  'otherEvents': {
    en: 'Other Events',
    bm: 'Acara Lain'
  },
  'otherEventsDesc': {
    en: 'Birthday, maternity, aqiqah and more',
    bm: 'Hari jadi, maternity, aqiqah dan banyak lagi'
  },
  'photographyPackages': {
    en: 'Photography Packages',
    bm: 'Pakej Fotografi'
  },
  'packages': {
    en: 'Packages',
    bm: 'Pakej'
  },
  'mostPopular': {
    en: 'Most Popular',
    bm: 'Paling Popular'
  },
  'note': {
    en: 'Note',
    bm: 'Nota'
  },
  'selectThisPackage': {
    en: 'Select This Package',
    bm: 'Pilih Pakej Ini'
  },
  'addAnotherPackage': {
    en: 'Add Another Package',
    bm: 'Tambah Pakej Lain'
  },
  'selectPhotographyPackage': {
    en: 'Select Photography Package',
    bm: 'Pilih Pakej Fotografi'
  },
  
  // Service Names
  'photography': {
    en: 'Photography',
    bm: 'Fotografi'
  },
  'photographyDesc': {
    en: 'Professional photography coverage for all occasions',
    bm: 'Liputan fotografi profesional untuk semua majlis'
  },
  'videography': {
    en: 'Videography',
    bm: 'Videografi'
  },
  'videographyDesc': {
    en: 'Cinematic wedding videography',
    bm: 'Videografi perkahwinan sinematik'
  },
  'emcee': {
    en: 'Emcee Services',
    bm: 'Perkhidmatan Pengacara'
  },
  'emceeDesc': {
    en: 'Professional bilingual emcee',
    bm: 'Pengacara dwibahasa profesional'
  },
  'contentCreator': {
    en: 'Wedding Content Creator',
    bm: 'Pencipta Kandungan Perkahwinan'
  },
  'contentCreatorDesc': {
    en: 'Real-time social media content',
    bm: 'Kandungan media sosial masa nyata'
  },
  'brideAssistant': {
    en: 'Bride Assistant',
    bm: 'Pembantu Pengantin'
  },
  'brideAssistantDesc': {
    en: 'Personal assistant for the bride',
    bm: 'Pembantu peribadi untuk pengantin perempuan'
  },
  'floorManager': {
    en: 'Floor Manager',
    bm: 'Pengurus Lantai'
  },
  'floorManagerDesc': {
    en: 'Event coordination specialist',
    bm: 'Pakar koordinasi acara'
  },
  'liveStreaming': {
    en: 'MCP Live Streaming',
    bm: 'Siaran Langsung MCP'
  },
  'liveStreamingDesc': {
    en: 'Multi-camera live streaming',
    bm: 'Siaran langsung berbilang kamera'
  },
  'websiteDev': {
    en: 'Website Development',
    bm: 'Pembangunan Laman Web'
  },
  'websiteDevDesc': {
    en: 'Custom website development services',
    bm: 'Perkhidmatan pembangunan laman web tersuai'
  },
  
  // Package Features
  'multiplePackages': {
    en: 'Multiple packages available',
    bm: 'Pelbagai pakej tersedia'
  },
  'professionalEditing': {
    en: 'Professional editing',
    bm: 'Suntingan profesional'
  },
  'digitalDelivery': {
    en: 'Digital delivery',
    bm: 'Penghantaran digital'
  },
  'highlightVideo': {
    en: 'Highlight video',
    bm: 'Video sorotan'
  },
  'fullCeremony': {
    en: 'Full ceremony',
    bm: 'Majlis penuh'
  },
  'droneShots': {
    en: 'Drone shots',
    bm: 'Rakaman drone'
  },
  'scriptWriting': {
    en: 'Script writing',
    bm: 'Penulisan skrip'
  },
  'coordination': {
    en: 'Coordination',
    bm: 'Koordinasi'
  },
  'twoLanguages': {
    en: '2 languages',
    bm: '2 bahasa'
  },
  'instagramStories': {
    en: 'Instagram stories',
    bm: 'Cerita Instagram'
  },
  'tiktokReels': {
    en: 'TikTok reels',
    bm: 'Reel TikTok'
  },
  'behindTheScenes': {
    en: 'Behind the scenes',
    bm: 'Di belakang tabir'
  },
  'dressHandling': {
    en: 'Dress handling',
    bm: 'Pengurusan pakaian'
  },
  'emergencyKit': {
    en: 'Emergency kit',
    bm: 'Kit kecemasan'
  },
  'touchUps': {
    en: 'Touch-ups',
    bm: 'Sentuhan akhir'
  },
  'timelineManagement': {
    en: 'Timeline management',
    bm: 'Pengurusan masa'
  },
  'vendorCoordination': {
    en: 'Vendor coordination',
    bm: 'Koordinasi vendor'
  },
  'cueManagement': {
    en: 'Cue management',
    bm: 'Pengurusan isyarat'
  },
  'fourKStreaming': {
    en: '4K streaming',
    bm: 'Siaran 4K'
  },
  'multipleAngles': {
    en: 'Multiple angles',
    bm: 'Pelbagai sudut'
  },
  'recordingIncluded': {
    en: 'Recording included',
    bm: 'Rakaman disertakan'
  },
  'responsiveDesign': {
    en: 'Responsive design',
    bm: 'Reka bentuk responsif'
  },
  'seoOptimized': {
    en: 'SEO optimized',
    bm: 'Dioptimumkan SEO'
  },
  'ecommerceReady': {
    en: 'E-commerce ready',
    bm: 'Sedia e-dagang'
  },
  
  // Calendar
  'sun': {
    en: 'Sun',
    bm: 'Ahd'
  },
  'mon': {
    en: 'Mon',
    bm: 'Isn'
  },
  'tue': {
    en: 'Tue',
    bm: 'Sel'
  },
  'wed': {
    en: 'Wed',
    bm: 'Rab'
  },
  'thu': {
    en: 'Thu',
    bm: 'Kha'
  },
  'fri': {
    en: 'Fri',
    bm: 'Jum'
  },
  'sat': {
    en: 'Sat',
    bm: 'Sab'
  },
  
  // Placeholders
  'enterFullName': {
    en: 'Enter your full name',
    bm: 'Masukkan nama penuh anda'
  },
  'emailPlaceholder': {
    en: 'your@email.com',
    bm: 'anda@email.com'
  },
  'phonePlaceholder': {
    en: '012-3456789',
    bm: '012-3456789'
  },
  'instagramPlaceholder': {
    en: '@yourusername',
    bm: '@namapenggunaanda'
  },
  'locationPlaceholder': {
    en: 'City, Venue',
    bm: 'Bandar, Tempat'
  },
};

// Language Toggle Component
interface LanguageToggleProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <motion.div
      className="fixed z-50"
      style={{ 
        top: '2vh', 
        right: '2vw',
        position: 'fixed' // Explicitly set fixed positioning
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
// Social media links
const socialLinks = {
  instagram: "https://www.instagram.com/nuhaa_lens?igsh=OWg0cGY2OGtpdTdm",
  tiktok: "https://www.tiktok.com/@nuhaa_lens?_r=1&_t=ZS-941KREHjgiT",
  facebook: "https://www.facebook.com/share/1D3xrpGTAH/",
};

// Import photography packages data from home page
const photographyPackages = {
  wedding: [
    {
      name: { en: "Nikah", bm: "Nikah" },
      price: "RM 500",
      duration: { en: "3 hours", bm: "3 jam" },
      features: {
        en: [
          "3 hours of coverage",
          "Unlimited shoot",
          "One Photographer",
          "All Edited Softcopy",
          "Free Outdoor Session",
        ],
        bm: [
          "Liputan 3 jam",
          "Gambar tanpa had",
          "Seorang Jurugambar",
          "Semua Salinan Lembut Diedit",
          "Sesi Luar Percuma",
        ]
      },
    },
    {
      name: { en: "Sanding", bm: "Sanding" },
      price: "RM 600",
      duration: { en: "4 hours", bm: "4 jam" },
      features: {
        en: [
          "4 hours of coverage",
          "Unlimited shoot",
          "One Photographer",
          "All Edited Softcopy",
          "Free Outdoor Session",
        ],
        bm: [
          "Liputan 4 jam",
          "Gambar tanpa had",
          "Seorang Jurugambar",
          "Semua Salinan Lembut Diedit",
          "Sesi Luar Percuma",
        ]
      },
    },
    {
      name: { en: "Nikah & Sanding", bm: "Nikah & Sanding" },
      price: "RM 900",
      duration: { en: "7 hours", bm: "7 jam" },
      features: {
        en: [
          "7 hours of coverage",
          "Unlimited shoot",
          "One Photographer",
          "All Edited Softcopy",
          "Different day (add RM 50)",
        ],
        bm: [
          "Liputan 7 jam",
          "Gambar tanpa had",
          "Seorang Jurugambar",
          "Semua Salinan Lembut Diedit",
          "Hari berbeza (tambah RM 50)",
        ]
      },
      note: { en: "Different day add RM 50", bm: "Hari berbeza tambah RM 50" },
    },
  ],
  engagement: [
    {
      name: { en: "Rahmah Package", bm: "Pakej Rahmah" },
      price: "RM 350",
      duration: { en: "2 hours", bm: "2 jam" },
      features: {
        en: [
          "2 hours of coverage",
          "Unlimited shoot",
          "One photographer",
          "All edited Softcopy",
        ],
        bm: [
          "Liputan 2 jam",
          "Gambar tanpa had",
          "Seorang jurugambar",
          "Semua Salinan Lembut Diedit",
        ]
      },
    },
    {
      name: { en: "Basic Package", bm: "Pakej Asas" },
      price: "RM 450",
      duration: { en: "3 hours", bm: "3 jam" },
      features: {
        en: [
          "3 hours of coverage",
          "Unlimited shoot",
          "One photographer",
          "All edited Softcopy",
        ],
        bm: [
          "Liputan 3 jam",
          "Gambar tanpa had",
          "Seorang jurugambar",
          "Semua Salinan Lembut Diedit",
        ]
      },
    },
    {
      name: { en: "Special Package", bm: "Pakej Istimewa" },
      price: "RM 550",
      duration: { en: "4-5 hours", bm: "4-5 jam" },
      features: {
        en: [
          "4-5 hours of coverage",
          "Unlimited shoot",
          "One photographer",
          "All edited Softcopy",
          "Including Outdoor Session",
        ],
        bm: [
          "Liputan 4-5 jam",
          "Gambar tanpa had",
          "Seorang jurugambar",
          "Semua Salinan Lembut Diedit",
          "Termasuk Sesi Luar",
        ]
      },
    },
  ],
  convocation: [
    {
      name: { en: "Solo Package", bm: "Pakej Solo" },
      price: "RM 120",
      duration: { en: "1 hour", bm: "1 jam" },
      features: {
        en: [
          "1 hour of coverage",
          "Unlimited shoot",
          "All edited Softcopy",
          "1 Place only",
        ],
        bm: [
          "Liputan 1 jam",
          "Gambar tanpa had",
          "Semua Salinan Lembut Diedit",
          "1 Tempat sahaja",
        ]
      },
    },
    {
      name: { en: "Family Package", bm: "Pakej Keluarga" },
      price: "RM 170",
      duration: { en: "1 hour", bm: "1 jam" },
      features: {
        en: [
          "1 hour of coverage",
          "Unlimited shoot",
          "All edited Softcopy",
          "1 Place only",
        ],
        bm: [
          "Liputan 1 jam",
          "Gambar tanpa had",
          "Semua Salinan Lembut Diedit",
          "1 Tempat sahaja",
        ]
      },
    },
    {
      name: { en: "Friend Package", bm: "Pakej Rakan" },
      price: "RM 55/Head",
      duration: { en: "1.5 hours", bm: "1.5 jam" },
      features: {
        en: [
          "2 - 4 Pax",
          "1.5 hours of coverage",
          "Unlimited shoot",
          "All edited Softcopy",
          "1 Place only",
        ],
        bm: [
          "2 - 4 Orang",
          "Liputan 1.5 jam",
          "Gambar tanpa had",
          "Semua Salinan Lembut Diedit",
          "1 Tempat sahaja",
        ]
      },
    },
    {
      name: { en: "Group Package", bm: "Pakej Kumpulan" },
      price: "RM 45/Head",
      duration: { en: "2 hours", bm: "2 jam" },
      features: {
        en: [
          "5 - 10 Pax",
          "2 hours of coverage",
          "All edited Softcopy",
          "1 Place only",
        ],
        bm: [
          "5 - 10 Orang",
          "Liputan 2 jam",
          "Semua Salinan Lembut Diedit",
          "1 Tempat sahaja",
        ]
      },
    },
  ],
  formalEvents: [
    {
      name: { en: "Formal Events", bm: "Acara Formal" },
      price: "RM 150/hour",
      duration: { en: "Per hour", bm: "Setiap jam" },
      features: {
        en: [
          "Corporate events",
          "Seminars",
          "Conferences",
          "Awards night",
          "Professional coverage",
        ],
        bm: [
          "Acara korporat",
          "Seminar",
          "Persidangan",
          "Malam anugerah",
          "Liputan profesional",
        ]
      },
    },
  ],
  otherEvents: [
    {
      name: { en: "Birthday Party", bm: "Majlis Hari Jadi" },
      price: "RM 120/hour",
      duration: { en: "Per hour", bm: "Setiap jam" },
      features: {
        en: [
          "Birthday celebrations",
          "Family gatherings",
          "Candid moments",
          "Group photos",
        ],
        bm: [
          "Sambutan hari jadi",
          "Perhimpunan keluarga",
          "Detik candid",
          "Foto kumpulan",
        ]
      },
    },
    {
      name: { en: "Maternity Shoot", bm: "Penggambaran Maternity" },
      price: "RM 120/hour",
      duration: { en: "Per hour", bm: "Setiap jam" },
      features: {
        en: [
          "Beautiful maternity moments",
          "Indoor/outdoor options",
          "Professional editing",
          "All softcopies",
        ],
        bm: [
          "Detik maternity indah",
          "Pilihan dalam/luar",
          "Suntingan profesional",
          "Semua salinan lembut",
        ]
      },
    },
    {
      name: { en: "Aqiqah", bm: "Aqiqah" },
      price: "RM 120/hour",
      duration: { en: "Per hour", bm: "Setiap jam" },
      features: {
        en: [
          "Aqiqah ceremony",
          "Family moments",
          "Traditional documentation",
          "All edited photos",
        ],
        bm: [
          "Majlis aqiqah",
          "Detik keluarga",
          "Dokumentasi tradisional",
          "Semua foto diedit",
        ]
      },
    },
  ],
  additional: [
    {
      name: { en: "Album/Photobook", bm: "Album/Buku Foto" },
      price: "RM 85",
      duration: { en: "One-time", bm: "Sekali" },
      features: {
        en: [
          "Premium quality",
          "Custom design",
          "20 pages",
          "Hardcover",
        ],
        bm: [
          "Kualiti premium",
          "Reka bentuk tersuai",
          "20 muka surat",
          "Kulit keras",
        ]
      },
    },
    {
      name: { en: "Add Hours", bm: "Tambah Jam" },
      price: "RM 100/hour",
      duration: { en: "Per additional hour", bm: "Setiap jam tambahan" },
      features: {
        en: [
          "Valid for Wedding packages",
          "Valid for Engagement packages",
          "Valid for Convocation packages",
        ],
        bm: [
          "Sah untuk pakej Perkahwinan",
          "Sah untuk pakej Pertunangan",
          "Sah untuk pakej Konvokesyen",
        ]
      },
    },
    {
      name: { en: "Add Outdoor Session", bm: "Tambah Sesi Luar" },
      price: "RM 120",
      duration: { en: "One session", bm: "Satu sesi" },
      features: {
        en: [
          "Valid for Wedding packages",
          "Valid for Engagement packages",
          "Additional location",
          "Extra shooting time",
        ],
        bm: [
          "Sah untuk pakej Perkahwinan",
          "Sah untuk pakej Pertunangan",
          "Lokasi tambahan",
          "Masa penggambaran tambahan",
        ]
      },
    },
  ],
}

// Photography Categories with icons and colors
const photographyCategories = (t: (key: string) => string) => [
  {
    id: "wedding",
    name: t('weddingPhotography'),
    icon: HeartHandshake,
    description: t('weddingPhotographyDesc'),
    color: "from-pink-500 to-rose-500",
    packages: photographyPackages.wedding,
    eventTypes: ["wedding", "nikah", "sanding", "reception"]
  },
  {
    id: "engagement",
    name: t('engagementPhotography'),
    icon: Heart,
    description: t('engagementPhotographyDesc'),
    color: "from-purple-500 to-pink-500",
    packages: photographyPackages.engagement,
    eventTypes: ["engagement", "proposal", "pre-wedding"]
  },
  {
    id: "convocation",
    name: t('convocationPhotography'),
    icon: GraduationCap,
    description: t('convocationPhotographyDesc'),
    color: "from-blue-500 to-cyan-500",
    packages: photographyPackages.convocation,
    eventTypes: ["convocation", "graduation", "commencement"]
  },
  {
    id: "formalEvents",
    name: t('formalEvents'),
    icon: Briefcase,
    description: t('formalEventsDesc'),
    color: "from-gray-600 to-gray-800",
    packages: photographyPackages.formalEvents,
    eventTypes: ["corporate", "seminar", "conference", "awards", "gala"]
  },
  {
    id: "otherEvents",
    name: t('otherEvents'),
    icon: PartyIcon,
    description: t('otherEventsDesc'),
    color: "from-green-500 to-emerald-500",
    packages: photographyPackages.otherEvents,
    eventTypes: ["birthday", "maternity", "aqiqah", "family", "celebration"]
  },
]

// Update the services array to include all photography categories with translations
const services = (t: (key: string) => string) => [
  { 
    id: 'photography', 
    name: t('photography'), 
    basePrice: 'From RM 120', 
    icon: Camera,
    description: t('photographyDesc'),
    features: [t('multiplePackages'), t('professionalEditing'), t('digitalDelivery')],
    color: 'from-blue-500 to-cyan-500',
    hasSubServices: true,
  },
  { 
    id: 'videography', 
    name: t('videography'), 
    basePrice: 'RM 2500', 
    icon: Video,
    description: t('videographyDesc'),
    features: [t('highlightVideo'), t('fullCeremony'), t('droneShots')],
    color: 'from-purple-500 to-pink-500',
    hasSubServices: false
  },
  { 
    id: 'emcee', 
    name: t('emcee'), 
    basePrice: 'RM 250', 
    icon: Mic,
    description: t('emceeDesc'),
    features: [t('scriptWriting'), t('coordination'), t('twoLanguages')],
    color: 'from-yellow-500 to-orange-500',
    hasSubServices: false
  },
  { 
    id: 'content-creator', 
    name: t('contentCreator'), 
    basePrice: 'RM 180', 
    icon: Sparkles,
    description: t('contentCreatorDesc'),
    features: [t('instagramStories'), t('tiktokReels'), t('behindTheScenes')],
    color: 'from-pink-500 to-rose-500',
    hasSubServices: false
  },
  { 
    id: 'bride-assistant', 
    name: t('brideAssistant'), 
    basePrice: 'From RM 150', 
    icon: Heart,
    description: t('brideAssistantDesc'),
    features: [t('dressHandling'), t('emergencyKit'), t('touchUps')],
    color: 'from-red-500 to-pink-500',
    hasSubServices: false
  },
  { 
    id: 'floor-manager', 
    name: t('floorManager'), 
    basePrice: 'From RM 700', 
    icon: Users,
    description: t('floorManagerDesc'),
    features: [t('timelineManagement'), t('vendorCoordination'), t('cueManagement')],
    color: 'from-green-500 to-emerald-500',
    hasSubServices: false
  },
  { 
    id: 'live-streaming', 
    name: t('liveStreaming'), 
    basePrice: 'From RM 2000', 
    icon: Zap,
    description: t('liveStreamingDesc'),
    features: [t('fourKStreaming'), t('multipleAngles'), t('recordingIncluded')],
    color: 'from-indigo-500 to-blue-500',
    hasSubServices: false
  },
  {
    id: 'website-dev',
    name: t('websiteDev'),
    basePrice: 'From RM 2500',
    icon: Layers,
    description: t('websiteDevDesc'),
    features: [t('responsiveDesign'), t('seoOptimized'), t('ecommerceReady')],
    color: 'from-red-500 to-orange-500',
    hasSubServices: false
  },
]

// Add additional services - FIXED: Now returns proper structure with language-specific names
const additionalServices = (t: (key: string) => string, language: Language) => photographyPackages.additional.map(item => ({
  id: item.name.en.toLowerCase().replace(/\s+/g, '-'),
  name: item.name[language], // This now returns a string, not an object
  basePrice: item.price,
  icon: Package,
  description: item.features[language].join(' · '), // This now returns a string
  features: item.features[language], // This now returns an array of strings
  color: 'from-green-500 to-emerald-500',
  hasSubServices: false,
  isAdditional: true
}))

// Interface for selected photography package
interface SelectedPhotoPackage {
  serviceId: string;
  categoryId: string;
  categoryName: string;
  packageIndex: number;
  packageName: string;
  price: string;
  duration: string;
  features: string[];
}

// Mock booking data with more details
const mockBookings = [
  { date: '2026-03-15', status: 'fully-booked', services: ['photography', 'videography', 'emcee'] },
  { date: '2026-03-20', status: 'partially-booked', services: ['photography'] },
  { date: '2026-03-22', status: 'fully-booked', services: ['videography', 'live-streaming', 'content-creator'] },
  { date: '2026-03-25', status: 'partially-booked', services: ['emcee', 'bride-assistant'] },
  { date: '2026-03-28', status: 'fully-booked', services: ['photography', 'videography', 'emcee', 'floor-manager'] },
  { date: '2026-04-05', status: 'partially-booked', services: ['photography'] },
  { date: '2026-04-10', status: 'fully-booked', services: ['videography', 'live-streaming'] },
  { date: '2026-04-15', status: 'partially-booked', services: ['content-creator', 'bride-assistant'] },
]

// Floating particles for background effect
const FloatingParticle = ({ delay = 0, size = 4, left = '0%', top = '0%' }) => (
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
      ease: "easeInOut"
    }}
  />
)

// Category Selection Modal
interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: ReturnType<typeof photographyCategories>;
  onSelectCategory: (category: any) => void;
  t: (key: string) => string;
  language: Language;
}

function CategorySelectionModal({ isOpen, onClose, categories, onSelectCategory, t }: CategoryModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-3xl font-light bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {t('photographyPackages')}
          </h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-800" />
          </motion.button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    onSelectCategory(category);
                    onClose();
                  }}
                  className="group cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white hover:shadow-xl transition-shadow relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                          {category.packages.length} {t('packages')}
                        </span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Package Selection Modal
interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: any;
  onSelectPackage: (categoryId: string, categoryName: string, packageIndex: number, pkg: any) => void;
  t: (key: string) => string;
  language: Language;
}

function PackageSelectionModal({ isOpen, onClose, category, onSelectPackage, t, language }: PackageModalProps) {
  if (!isOpen || !category) return null;

  const IconComponent = category.icon

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex-shrink-0 bg-gradient-to-r ${category.color} p-6 flex justify-between items-center text-white rounded-t-2xl`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              <p className="text-white/80 text-sm">{category.description}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.packages.map((pkg: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow relative overflow-hidden group cursor-pointer"
                onClick={() => {
                  onSelectPackage(category.id, category.name, index, pkg);
                  onClose();
                }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5`}
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                {/* Popular tag for highest package */}
                {index === category.packages.length - 1 && category.packages.length > 1 && (
                  <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {t('mostPopular')}
                  </motion.div>
                )}

                <h3 className="text-xl font-semibold mb-2 text-gray-900">{pkg.name[language]}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-green-600">
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm">{pkg.duration[language]}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features[language].map((feature: string, i: number) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {pkg.note && (
                  <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded-lg mb-4">
                    {t('note')}: {pkg.note[language]}
                  </p>
                )}

                <button
                  className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg font-medium relative overflow-hidden`}
                >
                  <span className="relative z-10">{t('selectThisPackage')}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BookingPage() {
  const [language, setLanguage] = useState<Language>('en');
  const [step, setStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedPhotoPackages, setSelectedPhotoPackages] = useState<SelectedPhotoPackage[]>([])
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  
  // Modal states
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    eventDate: '',
    eventLocation: '',
    eventType: 'wedding',
    message: '',
  })
  
  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [calendarDays, setCalendarDays] = useState<Date[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [dateBookings, setDateBookings] = useState<any>(null)

  // Translation function
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  // Get services with translations
  const servicesList = services(t);
  const additionalServicesList = additionalServices(t, language);
  const allServices = [...servicesList, ...additionalServicesList];
  const categories = photographyCategories(t);

  // Generate calendar days for current month
  useEffect(() => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    
    const days: Date[] = []
    
    // Add previous month days to fill the first week
    const firstDayOfWeek = firstDay.getDay()
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month, -i)
      days.push(date)
    }
    
    // Add current month days
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d))
    }
    
    // Add next month days to fill the last week
    const lastDayOfWeek = lastDay.getDay()
    for (let i = 1; i < 7 - lastDayOfWeek; i++) {
      const date = new Date(year, month + 1, i)
      days.push(date)
    }
    
    setCalendarDays(days)
  }, [currentMonth])

  const getBookingStatusForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    return mockBookings.find(b => b.date === dateStr)
  }

  const isDateSelectable = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today
  }

  const handleDateSelect = (date: Date) => {
    if (!isDateSelectable(date)) return
    
    setSelectedDate(date)
    const status = getBookingStatusForDate(date)
    setDateBookings(status)
    
    // Update form data with selected date
    setFormData(prev => ({
      ...prev,
      eventDate: date.toISOString().split('T')[0]
    }))
  }

  const handleServiceToggle = (serviceId: string) => {
    const service = allServices.find(s => s.id === serviceId)
    
    if (service?.hasSubServices) {
      // For photography, open category selection modal
      setIsCategoryModalOpen(true)
    } else {
      // For regular services, just toggle
      setSelectedServices(prev =>
        prev.includes(serviceId)
          ? prev.filter(id => id !== serviceId)
          : [...prev, serviceId]
      )
    }
  }

  const handleSelectCategory = (category: any) => {
    setSelectedCategory(category)
    setIsPackageModalOpen(true)
  }

  const handleSelectPackage = (categoryId: string, categoryName: string, packageIndex: number, pkg: any) => {
    // Create selected package object
    const selectedPackage: SelectedPhotoPackage = {
      serviceId: 'photography',
      categoryId,
      categoryName,
      packageIndex,
      packageName: pkg.name[language],
      price: pkg.price,
      duration: pkg.duration[language],
      features: pkg.features[language]
    }

    // Check if we already have a package from this category
    const existingIndex = selectedPhotoPackages.findIndex(
      p => p.categoryId === categoryId
    )

    if (existingIndex >= 0) {
      // Replace existing package in this category
      const updatedPackages = [...selectedPhotoPackages]
      updatedPackages[existingIndex] = selectedPackage
      setSelectedPhotoPackages(updatedPackages)
    } else {
      // Add new package
      setSelectedPhotoPackages([...selectedPhotoPackages, selectedPackage])
    }

    // Ensure photography is in selected services
    if (!selectedServices.includes('photography')) {
      setSelectedServices(prev => [...prev, 'photography'])
    }
  }

  const handleRemovePhotoPackage = (index: number) => {
    const updatedPackages = selectedPhotoPackages.filter((_, i) => i !== index)
    setSelectedPhotoPackages(updatedPackages)
    
    // If no more photo packages, optionally remove photography from selected services
    if (updatedPackages.length === 0) {
      setSelectedServices(prev => prev.filter(id => id !== 'photography'))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you'll later integrate with Supabase
    console.log('Booking submitted:', { 
      selectedServices, 
      selectedPhotoPackages,
      formData 
    })
    
    // Move to confirmation step
    setStep(3)
  }

  const calculateTotalPrice = () => {
    let total = 0
    
    // Add prices from regular services (excluding photography)
    selectedServices.forEach(serviceId => {
      if (serviceId !== 'photography') {
        const service = allServices.find(s => s.id === serviceId)
        if (service) {
          const priceStr = service.basePrice
            .replace('RM ', '')
            .replace('From ', '')
            .replace('/hour', '')
            .replace('/Head', '')
          const price = parseInt(priceStr) || 0
          total += price
        }
      }
    })
    
    // Add prices from photography packages
    selectedPhotoPackages.forEach(pkg => {
      const priceStr = pkg.price
        .replace('RM ', '')
        .replace('/hour', '')
        .replace('/Head', '')
      const price = parseInt(priceStr) || 0
      total += price
    })
    
    return total
  }

  const totalPrice = calculateTotalPrice()

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const weekDays = [t('sun'), t('mon'), t('tue'), t('wed'), t('thu'), t('fri'), t('sat')]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  const serviceCardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -5,
      transition: { stiffness: 400, damping: 17 }
    },
    tap: { scale: 0.98 }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Language Toggle */}
      <LanguageToggle language={language} setLanguage={setLanguage} />

      {/* Category Selection Modal */}
      <CategorySelectionModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        categories={categories}
        onSelectCategory={handleSelectCategory}
        t={t}
        language={language}
      />

      {/* Package Selection Modal */}
      <PackageSelectionModal
        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        category={selectedCategory}
        onSelectPackage={handleSelectPackage}
        t={t}
        language={language}
      />

      {/* Floating Particles Background */}
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
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
          >
            <Gift className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl font-light mb-4"
            animate={{ textShadow: ['0 0 20px rgba(255,255,255,0.5)', '0 0 40px rgba(255,255,255,0.8)', '0 0 20px rgba(255,255,255,0.5)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t('bookYourServices')}
          </motion.h1>
          <p className="text-2xl md:text-3xl opacity-90 font-light tracking-wide">
            {t('with')} <span className="font-normal bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Nuhaa Lens</span>
          </p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mt-6"
            animate={{ width: ['6rem', '12rem', '6rem'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.section>

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{t('home')}</span>
            </motion.button>
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-green-700 font-semibold flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            {t('booking')}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto relative z-10">
        {/* Progress Steps */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between mb-12 max-w-2xl mx-auto"
        >
          {[t('selectServices'), t('yourDetails'), t('confirmation')].map((label, i) => (
            <motion.div 
              key={i} 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 relative overflow-hidden ${
                  step > i + 1 ? 'bg-gradient-to-br from-green-500 to-emerald-500 border-green-500 text-white' : 
                  step === i + 1 ? 'bg-gradient-to-br from-green-500 to-emerald-500 border-green-500 text-white shadow-lg shadow-green-500/30' : 'border-gray-300 text-gray-600'
                }`}
                animate={step === i + 1 ? {
                  scale: [1, 1.1, 1],
                  boxShadow: ['0 0 0 0 rgba(16,185,129,0)', '0 0 20px 5px rgba(16,185,129,0.3)', '0 0 0 0 rgba(16,185,129,0)']
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {step > i + 1 ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    ✓
                  </motion.div>
                ) : i + 1}
                {step === i + 1 && (
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
              <motion.span 
                className={`ml-3 hidden sm:inline font-medium ${
                  step >= i + 1 ? 'text-gray-800' : 'text-gray-500'
                }`}
                animate={step >= i + 1 ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              >
                {label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Step 1: Select Services */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="animate-fadeIn"
            >
              <motion.div variants={itemVariants} className="text-center mb-10">
                <h2 className="text-5xl md:text-6xl font-light bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  {t('selectYourServices')}
                </h2>
                <p className="text-gray-600 text-lg font-medium">{t('chooseServicesDesc')}</p>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                {allServices.map((service) => {
                  const IconComponent = service.icon
                  const isSelected = selectedServices.includes(service.id)
                  const isHovered = hoveredService === service.id
                  
                  // Get photo packages for this service if it's photography
                  const photoPackages = service.id === 'photography' ? selectedPhotoPackages : []
                  
                  return (
                    <motion.div
                      key={service.id}
                      variants={serviceCardVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      onHoverStart={() => setHoveredService(service.id)}
                      onHoverEnd={() => setHoveredService(null)}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`group relative border-2 rounded-xl p-6 cursor-pointer overflow-hidden ${
                        isSelected
                          ? `bg-gradient-to-br ${service.color} text-white border-transparent shadow-lg`
                          : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-xl'
                      }`}
                    >
                      {/* Animated background effect */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r from-white/5 to-transparent ${isSelected ? 'opacity-20' : ''}`}
                        animate={{
                          x: isHovered ? ['0%', '100%'] : '0%',
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <motion.div 
                              className={`p-3 rounded-full relative overflow-hidden ${
                                isSelected ? 'bg-white/20' : `bg-gradient-to-br ${service.color} bg-opacity-10`
                              }`}
                              animate={isSelected ? {
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                              } : {}}
                              transition={{ duration: 0.5 }}
                            >
                              <IconComponent className="w-6 h-6 text-white transition-colors duration-300" />
                              {isSelected && (
                                <motion.div 
                                  className="absolute inset-0 bg-white/30"
                                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                              )}
                            </motion.div>
                            <div>
                              <h3 className={`font-bold text-xl transition-colors duration-300 ${
                                isSelected ? 'text-white' : 'text-gray-800'
                              }`}>{service.name}</h3>
                              <p className={`transition-colors duration-300 font-bold text-lg ${
                                isSelected ? 'text-white' : 'text-green-600'
                              }`}>{service.basePrice}</p>
                              
                              {/* Show selected photo packages */}
                              {photoPackages.length > 0 && (
                                <div className="mt-2 space-y-1">
                                  {photoPackages.map((pkg, idx) => (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="text-sm bg-white/20 p-1 rounded"
                                    >
                                      <span className="font-semibold text-white">{pkg.categoryName}:</span> {pkg.packageName} ({pkg.price})
                                    </motion.div>
                                  ))}
                                </div>
                              )}
                              
                              <motion.p 
                                className={`text-sm mt-1 max-w-xs font-medium ${
                                  isSelected ? 'text-white/90' : 'text-gray-600'
                                }`}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {service.description}
                              </motion.p>
                            </div>
                          </div>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring" }}
                            >
                              <CheckCircle className="w-6 h-6 text-white" />
                            </motion.div>
                          )}
                        </div>

                        {/* Package selection buttons for photography */}
                        {service.id === 'photography' && (
                          <div className="mt-4 space-y-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setIsCategoryModalOpen(true)
                              }}
                              className={`w-full py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 ${
                                isSelected
                                  ? 'bg-white/20 hover:bg-white/30 text-white'
                                  : 'bg-green-100 hover:bg-green-200 text-green-800'
                              }`}
                            >
                              <Package className="w-4 h-4" />
                              {photoPackages.length > 0 ? t('addAnotherPackage') : t('selectPhotographyPackage')}
                            </button>
                            
                            {/* List selected packages with remove buttons */}
                            {photoPackages.map((pkg, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className={`flex-1 text-xs ${
                                  isSelected ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-600'
                                } p-2 rounded-lg`}>
                                  <span className="font-semibold">{pkg.categoryName}:</span> {pkg.packageName}
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleRemovePhotoPackage(idx)
                                  }}
                                  className={`p-1 rounded-full ${
                                    isSelected ? 'bg-white/20 hover:bg-white/30' : 'bg-red-100 hover:bg-red-200'
                                  }`}
                                >
                                  <X className={`w-4 h-4 ${
                                    isSelected ? 'text-white' : 'text-red-600'
                                  }`} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Features popup on hover */}
                      <AnimatePresence>
                        {isHovered && !isSelected && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${service.color} text-white p-3 text-sm font-medium rounded-b-xl`}
                          >
                            {service.features.map((feature, i) => (
                              <span key={i} className="inline-flex items-center mr-3">
                                <Star className="w-3 h-3 mr-1 text-white/90" /> {feature}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Selected Services Summary */}
              <AnimatePresence>
                {(selectedServices.length > 0 || selectedPhotoPackages.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl mb-8 border border-green-400"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="text-black font-bold block mb-3 text-lg">
                          {t('services')}: {selectedServices.length + selectedPhotoPackages.length}
                        </span>
                        
                        {/* List regular services */}
                        <div className="space-y-2 mb-3">
                          {selectedServices
                            .filter(id => id !== 'photography')
                            .map((id, i) => {
                              const service = allServices.find(s => s.id === id)
                              const Icon = service?.icon
                              const color = service?.color || 'from-green-500 to-emerald-500'
                              return (
                                <motion.div
                                  key={id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <div className={`w-6 h-6 bg-gradient-to-br ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                    {Icon && <Icon className="w-3 h-3 text-white" />}
                                  </div>
                                  <span className="text-black font-medium">{service?.name}</span>
                                </motion.div>
                              )
                            })}
                        </div>
                        
                        {/* List photography packages */}
                        {selectedPhotoPackages.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-sm font-bold text-black">{t('photographyPackages')}:</span>
                            {selectedPhotoPackages.map((pkg, index) => {
                              const category = categories.find(c => c.id === pkg.categoryId)
                              return (
                                <motion.div
                                  key={`${pkg.categoryId}-${index}`}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  className="flex items-center gap-2 text-sm ml-4"
                                >
                                  <div className={`w-4 h-4 bg-gradient-to-br ${category?.color || 'from-green-500 to-emerald-500'} rounded-full flex items-center justify-center flex-shrink-0`}>
                                    <Camera className="w-2 h-2 text-white" />
                                  </div>
                                  <span className="text-black">
                                    {pkg.categoryName}: {pkg.packageName} ({pkg.price})
                                  </span>
                                </motion.div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                      
                      <motion.div 
                        className="text-right ml-4 flex-shrink-0"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <span className="text-black font-medium text-sm">{t('total')}</span>
                        <span className="text-4xl font-bold text-green-700 block">RM {totalPrice}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-4">
                <Link href="/" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full border-2 border-gray-600 text-black font-bold py-4 rounded-lg text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">{t('backToHome')}</span>
                    <motion.div 
                      className="absolute inset-0 bg-gray-200"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={selectedServices.length > 0 ? { scale: 1.02 } : {}}
                  whileTap={selectedServices.length > 0 ? { scale: 0.98 } : {}}
                  onClick={() => setStep(2)}
                  disabled={selectedServices.length === 0}
                  className={`flex-1 py-4 rounded-lg text-lg font-bold tracking-wide transition-all duration-300 relative overflow-hidden group ${
                    selectedServices.length > 0
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/30'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {t('continueToDetails')}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </span>
                  {selectedServices.length > 0 && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Client Details */}
          {step === 2 && (
            <motion.form
              key="step2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              onSubmit={handleSubmit}
              className="animate-fadeIn"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-5xl md:text-6xl font-light bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center mb-8"
              >
                {t('yourInformation')}
              </motion.h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Calendar */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-green-600" />
                      {t('selectEventDate')}
                      {formData.eventDate && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-2 text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full"
                        >
                          {t('selected')}
                        </motion.span>
                      )}
                    </h3>
                    
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.05)' }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </motion.button>
                      <motion.h4 
                        className="text-gray-800 font-bold text-lg"
                        key={`${currentMonth.getMonth()}-${currentMonth.getFullYear()}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </motion.h4>
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.05)' }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </motion.button>
                    </div>
                    
                    {/* Week Days */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {weekDays.map(day => (
                        <div key={day} className="text-center text-sm font-bold text-gray-600 py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((date, index) => {
                        const dateStr = date.toISOString().split('T')[0]
                        const isCurrentMonth = date.getMonth() === currentMonth.getMonth()
                        const booking = getBookingStatusForDate(date)
                        const isSelectable = isDateSelectable(date)
                        const isSelected = selectedDate?.toDateString() === date.toDateString()
                        
                        let statusColor = 'text-gray-400'
                        if (isCurrentMonth && isSelectable) {
                          if (booking?.status === 'fully-booked') statusColor = 'text-red-600 bg-red-50 font-bold'
                          else if (booking?.status === 'partially-booked') statusColor = 'text-yellow-700 bg-yellow-50 font-bold'
                          else statusColor = 'text-gray-700 hover:bg-green-50 hover:text-green-700 font-bold'
                        }
                        
                        return (
                          <motion.button
                            key={index}
                            whileHover={isCurrentMonth && isSelectable && booking?.status !== 'fully-booked' ? { scale: 1.1 } : {}}
                            whileTap={isCurrentMonth && isSelectable && booking?.status !== 'fully-booked' ? { scale: 0.95 } : {}}
                            type="button"
                            onClick={() => handleDateSelect(date)}
                            disabled={!isCurrentMonth || !isSelectable || booking?.status === 'fully-booked'}
                            className={`
                              relative aspect-square flex items-center justify-center text-sm rounded-lg transition-all
                              ${!isCurrentMonth ? 'text-gray-300' : ''}
                              ${isSelectable && isCurrentMonth && !booking ? 'cursor-pointer' : ''}
                              ${booking?.status === 'fully-booked' ? 'cursor-not-allowed opacity-50' : ''}
                              ${booking?.status === 'partially-booked' ? 'cursor-pointer' : ''}
                              ${isSelected ? 'ring-2 ring-green-500 bg-green-50 text-green-700 font-bold' : ''}
                              ${statusColor}
                            `}
                          >
                            {date.getDate()}
                            {booking?.status === 'partially-booked' && (
                              <motion.span 
                                className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-500 rounded-full"
                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                            )}
                          </motion.button>
                        )
                      })}
                    </div>
                    
                    {/* Legend */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap gap-4 text-sm">
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-3 h-3 bg-green-100 rounded-full mr-2 border border-green-600" />
                          <span className="text-gray-600 font-semibold">{t('available')}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div 
                            className="w-3 h-3 bg-yellow-100 rounded-full mr-2 border border-yellow-600"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-gray-600 font-semibold">{t('partiallyBooked')}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-3 h-3 bg-red-100 rounded-full mr-2 border border-red-600" />
                          <span className="text-gray-600 font-semibold">{t('fullyBooked')}</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Date Selection Info */}
                  <AnimatePresence>
                    {selectedDate && dateBookings && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-400"
                      >
                        <h4 className="text-gray-800 font-bold mb-2 flex items-center">
                          <PartyPopper className="w-4 h-4 mr-2 text-yellow-600" />
                          {t('selectedDate')}: {selectedDate.toLocaleDateString(language === 'en' ? 'en-US' : 'ms-MY', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </h4>
                        {dateBookings.status === 'partially-booked' && (
                          <>
                            <p className="text-yellow-700 font-bold text-sm mb-2">{t('thisDateHas')}:</p>
                            <div className="space-y-1">
                              {servicesList
                                .filter(s => dateBookings.services.includes(s.id))
                                .map((service, i) => (
                                  <motion.div 
                                    key={service.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-sm text-gray-600 font-medium flex items-center"
                                  >
                                    <motion.span 
                                      className="w-1 h-1 bg-yellow-600 rounded-full mr-2"
                                      animate={{ scale: [1, 1.5, 1] }}
                                      transition={{ duration: 1, repeat: Infinity }}
                                    />
                                    {service.name}
                                  </motion.div>
                                ))}
                            </div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* Right Column - Form Fields */}
                <motion.div variants={itemVariants} className="space-y-6">
                  {/* Name */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">{t('fullName')} *</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder={t('enterFullName')}
                      />
                      <motion.div 
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        whileHover={{ boxShadow: '0 0 20px rgba(16,185,129,0.1)' }}
                      />
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">{t('emailAddress')} *</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder={t('emailPlaceholder')}
                      />
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">{t('phoneNumber')} *</label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder={t('phonePlaceholder')}
                      />
                    </div>
                  </motion.div>

                  {/* Instagram */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">{t('instagramOptional')}</label>
                    <div className="relative group">
                      <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder={t('instagramPlaceholder')}
                      />
                    </div>
                  </motion.div>

                  {/* Event Location */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">{t('eventLocation')} *</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="text"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder={t('locationPlaceholder')}
                      />
                    </div>
                  </motion.div>

                  {/* Event Type */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">{t('eventType')} *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium transition-all"
                    >
                      <option value="wedding">{t('wedding')}</option>
                      <option value="engagement">{t('engagement')}</option>
                      <option value="corporate">{t('corporate')}</option>
                      <option value="birthday">{t('birthday')}</option>
                      <option value="maternity">{t('maternity')}</option>
                      <option value="aqiqah">{t('aqiqah')}</option>
                      <option value="convocation">{t('convocation')}</option>
                      <option value="other">{t('other')}</option>
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">{t('specialRequests')}</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder={t('tellUsAbout')}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div 
                variants={itemVariants}
                className="flex gap-4 mt-10"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">{t('back')}</span>
                  <motion.div 
                    className="absolute inset-0 bg-gray-200"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button
                  whileHover={formData.eventDate ? { scale: 1.02 } : {}}
                  whileTap={formData.eventDate ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={!formData.eventDate}
                  className={`flex-1 py-3 rounded-lg font-bold transition-all relative overflow-hidden ${
                    formData.eventDate
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/30'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {t('submitBooking')}
                    {formData.eventDate && (
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Gift className="w-5 h-5 ml-2" />
                      </motion.div>
                    )}
                  </span>
                  {formData.eventDate && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              <motion.div 
                className="bg-gradient-to-br from-green-500 to-emerald-500 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 relative shadow-xl shadow-green-500/30"
                animate={{ 
                  rotate: 360,
                  boxShadow: ['0 0 20px rgba(16,185,129,0.3)', '0 0 40px rgba(16,185,129,0.6)', '0 0 20px rgba(16,185,129,0.3)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <CheckCircle className="w-16 h-16 text-white" />
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-light bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t('bookingReceived')}
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 font-medium mb-10 max-w-md mx-auto text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {t('thankYouMessage')}
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl mb-10 max-w-md mx-auto border border-green-400 shadow-lg"
              >
                <h3 className="font-bold text-2xl mb-6 text-gray-800">{t('bookingSummary')}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-green-400">
                    <span className="text-gray-600 font-bold">{t('services')}:</span>
                    <span className="text-gray-800 font-extrabold">{selectedServices.length + selectedPhotoPackages.length}</span>
                  </div>
                  
                  {/* List selected services */}
                  <div className="text-left space-y-3 pb-2 border-b border-green-400">
                    {/* Regular services */}
                    {selectedServices
                      .filter(id => id !== 'photography')
                      .map((id, i) => {
                        const service = allServices.find(s => s.id === id)
                        return (
                          <div key={id} className="flex justify-between text-sm">
                            <span className="text-gray-600">{service?.name}</span>
                            <span className="text-gray-800 font-semibold">{service?.basePrice}</span>
                          </div>
                        )
                      })}
                    
                    {/* Photography packages */}
                    {selectedPhotoPackages.length > 0 && (
                      <div className="mt-2">
                        <span className="text-sm font-bold text-gray-600 block mb-2">{t('photographyPackages')}:</span>
                        {selectedPhotoPackages.map((pkg, i) => (
                          <div key={`pkg-${i}`} className="flex justify-between text-sm ml-2">
                            <span className="text-gray-600">{pkg.categoryName} - {pkg.packageName}</span>
                            <span className="text-gray-800 font-semibold">{pkg.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-bold">{t('total')}:</span>
                    <motion.span 
                      className="text-3xl text-green-700 font-extrabold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      RM {totalPrice}
                    </motion.span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t border-green-400">
                    <span className="text-gray-600 font-bold">{t('eventDate')}:</span>
                    <span className="text-gray-800 font-extrabold">
                      {new Date(formData.eventDate).toLocaleDateString(language === 'en' ? 'en-US' : 'ms-MY', { 
                        weekday: 'short', 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 justify-center"
              >
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all text-lg font-bold tracking-wide relative overflow-hidden shadow-lg shadow-green-500/30"
                  >
                    <span className="relative z-10">{t('returnToHome')}</span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.button>
                </Link>
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-green-500 text-green-600 font-bold px-8 py-4 rounded-lg hover:bg-green-50 transition-all text-lg tracking-wide"
                  >
                    {t('viewPortfolio')}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer with Social Media */}
      <footer className="py-12 px-4 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-light mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Nuhaa Lens
              </h3>
              <p className="text-gray-400 text-sm">
                Creating timeless memories through professional wedding and
                event services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{t('quickLinks')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-green-400 transition">
                    {t('home')}
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-green-400 transition">
                    {t('portfolio')}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-green-400 transition">
                    {t('services')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{t('services')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('photography')}</li>
                <li>{t('videography')}</li>
                <li>{t('emcee')}</li>
                <li>{t('brideAssistant')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{t('followUs')}</h4>
              <div className="flex gap-4">
                <motion.a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                </motion.a>
                <motion.a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Music2 className="w-5 h-5 text-gray-400 hover:text-white" />
                </motion.a>
                <motion.a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
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
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full shadow-lg z-50 shadow-green-500/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="w-5 h-5 rotate-180" />
      </motion.button>
    </main>
  )
}