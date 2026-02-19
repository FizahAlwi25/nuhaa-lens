'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar as CalendarIcon, User, Phone, Mail, Instagram, 
  MapPin, MessageSquare, CheckCircle, Camera, Video, Mic, 
  Users, Heart, Sparkles, Zap, ChevronLeft, ChevronRight, 
  Star, Clock, Shield, Award, Gift, ArrowRight, PartyPopper,
  ChevronDown, X, FolderOpen, Music2, Facebook, Package,
  HeartHandshake, GraduationCap, Briefcase, PartyPopper as PartyIcon,
  Camera as CameraIcon, Film, Mic2, Crown, Layers, Baby,
  Coffee, Music, Theater, Utensils, Sparkle, Smile
} from 'lucide-react'

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
      name: "Nikah",
      price: "RM 500",
      duration: "3 hours",
      features: [
        "3 hours of coverage",
        "Unlimited shoot",
        "One Photographer",
        "All Edited Softcopy",
        "Free Outdoor Session",
      ],
    },
    {
      name: "Sanding",
      price: "RM 600",
      duration: "4 hours",
      features: [
        "4 hours of coverage",
        "Unlimited shoot",
        "One Photographer",
        "All Edited Softcopy",
        "Free Outdoor Session",
      ],
    },
    {
      name: "Nikah & Sanding",
      price: "RM 900",
      duration: "7 hours",
      features: [
        "7 hours of coverage",
        "Unlimited shoot",
        "One Photographer",
        "All Edited Softcopy",
        "Different day (add RM 50)",
      ],
      note: "Different day add RM 50",
    },
  ],
  engagement: [
    {
      name: "Rahmah Package",
      price: "RM 350",
      duration: "2 hours",
      features: [
        "2 hours of coverage",
        "Unlimited shoot",
        "One photographer",
        "All edited Softcopy",
      ],
    },
    {
      name: "Basic Package",
      price: "RM 450",
      duration: "3 hours",
      features: [
        "3 hours of coverage",
        "Unlimited shoot",
        "One photographer",
        "All edited Softcopy",
      ],
    },
    {
      name: "Special Package",
      price: "RM 550",
      duration: "4-5 hours",
      features: [
        "4-5 hours of coverage",
        "Unlimited shoot",
        "One photographer",
        "All edited Softcopy",
        "Including Outdoor Session",
      ],
    },
  ],
  convocation: [
    {
      name: "Solo Package",
      price: "RM 120",
      duration: "1 hour",
      features: [
        "1 hour of coverage",
        "Unlimited shoot",
        "All edited Softcopy",
        "1 Place only",
      ],
    },
    {
      name: "Family Package",
      price: "RM 170",
      duration: "1 hour",
      features: [
        "1 hour of coverage",
        "Unlimited shoot",
        "All edited Softcopy",
        "1 Place only",
      ],
    },
    {
      name: "Friend Package",
      price: "RM 55/Head",
      duration: "1.5 hours",
      features: [
        "2 - 4 Pax",
        "1.5 hours of coverage",
        "Unlimited shoot",
        "All edited Softcopy",
        "1 Place only",
      ],
    },
    {
      name: "Group Package",
      price: "RM 45/Head",
      duration: "2 hours",
      features: [
        "5 - 10 Pax",
        "2 hours of coverage",
        "All edited Softcopy",
        "1 Place only",
      ],
    },
  ],
  formalEvents: [
    {
      name: "Formal Events",
      price: "RM 150/hour",
      duration: "Per hour",
      features: [
        "Corporate events",
        "Seminars",
        "Conferences",
        "Awards night",
        "Professional coverage",
      ],
    },
  ],
  otherEvents: [
    {
      name: "Birthday Party",
      price: "RM 120/hour",
      duration: "Per hour",
      features: [
        "Birthday celebrations",
        "Family gatherings",
        "Candid moments",
        "Group photos",
      ],
    },
    {
      name: "Maternity Shoot",
      price: "RM 120/hour",
      duration: "Per hour",
      features: [
        "Beautiful maternity moments",
        "Indoor/outdoor options",
        "Professional editing",
        "All softcopies",
      ],
    },
    {
      name: "Aqiqah",
      price: "RM 120/hour",
      duration: "Per hour",
      features: [
        "Aqiqah ceremony",
        "Family moments",
        "Traditional documentation",
        "All edited photos",
      ],
    },
  ],
  additional: [
    {
      name: "Album/Photobook",
      price: "RM 85",
      duration: "One-time",
      features: [
        "Premium quality",
        "Custom design",
        "20 pages",
        "Hardcover",
      ],
    },
    {
      name: "Add Hours",
      price: "RM 100/hour",
      duration: "Per additional hour",
      features: [
        "Valid for Wedding packages",
        "Valid for Engagement packages",
        "Valid for Convocation packages",
      ],
    },
    {
      name: "Add Outdoor Session",
      price: "RM 120",
      duration: "One session",
      features: [
        "Valid for Wedding packages",
        "Valid for Engagement packages",
        "Additional location",
        "Extra shooting time",
      ],
    },
  ],
}

// Photography Categories with icons and colors
const photographyCategories = [
  {
    id: "wedding",
    name: "Wedding Photography",
    icon: HeartHandshake,
    description: "Capture your special day with our comprehensive wedding packages",
    color: "from-pink-500 to-rose-500",
    packages: photographyPackages.wedding,
    eventTypes: ["wedding", "nikah", "sanding", "reception"]
  },
  {
    id: "engagement",
    name: "Engagement Photography",
    icon: Heart,
    description: "Beautiful engagement shoots to celebrate your love story",
    color: "from-purple-500 to-pink-500",
    packages: photographyPackages.engagement,
    eventTypes: ["engagement", "proposal", "pre-wedding"]
  },
  {
    id: "convocation",
    name: "Convocation Photography",
    icon: GraduationCap,
    description: "Professional graduation photos to mark your achievement",
    color: "from-blue-500 to-cyan-500",
    packages: photographyPackages.convocation,
    eventTypes: ["convocation", "graduation", "commencement"]
  },
  {
    id: "formalEvents",
    name: "Formal Events",
    icon: Briefcase,
    description: "Corporate and formal event coverage",
    color: "from-gray-600 to-gray-800",
    packages: photographyPackages.formalEvents,
    eventTypes: ["corporate", "seminar", "conference", "awards", "gala"]
  },
  {
    id: "otherEvents",
    name: "Other Events",
    icon: PartyIcon,
    description: "Birthday, maternity, aqiqah and more",
    color: "from-green-500 to-emerald-500",
    packages: photographyPackages.otherEvents,
    eventTypes: ["birthday", "maternity", "aqiqah", "family", "celebration"]
  },
]

// Update the services array to include all photography categories
const services = [
  { 
    id: 'photography', 
    name: 'Photography', 
    basePrice: 'From RM 120', 
    icon: Camera,
    description: 'Professional photography coverage for all occasions',
    features: ['Multiple packages available', 'Professional editing', 'Digital delivery'],
    color: 'from-blue-500 to-cyan-500',
    hasSubServices: true,
    categories: photographyCategories
  },
  { 
    id: 'videography', 
    name: 'Videography', 
    basePrice: 'RM 2500', 
    icon: Video,
    description: 'Cinematic wedding videography',
    features: ['Highlight video', 'Full ceremony', 'Drone shots'],
    color: 'from-purple-500 to-pink-500',
    hasSubServices: false
  },
  { 
    id: 'emcee', 
    name: 'Emcee Services', 
    basePrice: 'RM 250', 
    icon: Mic,
    description: 'Professional bilingual emcee',
    features: ['Script writing', 'Coordination', '2 languages'],
    color: 'from-yellow-500 to-orange-500',
    hasSubServices: false
  },
  { 
    id: 'content-creator', 
    name: 'Wedding Content Creator', 
    basePrice: 'RM 180', 
    icon: Sparkles,
    description: 'Real-time social media content',
    features: ['Instagram stories', 'TikTok reels', 'Behind the scenes'],
    color: 'from-pink-500 to-rose-500',
    hasSubServices: false
  },
  { 
    id: 'bride-assistant', 
    name: 'Bride Assistant', 
    basePrice: 'From RM 150', 
    icon: Heart,
    description: 'Personal assistant for the bride',
    features: ['Dress handling', 'Emergency kit', 'Touch-ups'],
    color: 'from-red-500 to-pink-500',
    hasSubServices: false
  },
  { 
    id: 'floor-manager', 
    name: 'Floor Manager', 
    basePrice: 'From RM 700', 
    icon: Users,
    description: 'Event coordination specialist',
    features: ['Timeline management', 'Vendor coordination', 'Cue management'],
    color: 'from-green-500 to-emerald-500',
    hasSubServices: false
  },
  { 
    id: 'live-streaming', 
    name: 'MCP Live Streaming', 
    basePrice: 'From RM 2000', 
    icon: Zap,
    description: 'Multi-camera live streaming',
    features: ['4K streaming', 'Multiple angles', 'Recording included'],
    color: 'from-indigo-500 to-blue-500',
    hasSubServices: false
  },
  {
    id: 'website-dev',
    name: 'Website Development',
    basePrice: 'From RM 2500',
    icon: Layers,
    description: 'Custom website development services',
    features: ['Responsive design', 'SEO optimized', 'E-commerce ready'],
    color: 'from-red-500 to-orange-500',
    hasSubServices: false
  },
]

// Add additional services
const additionalServices = photographyPackages.additional.map(item => ({
  id: item.name.toLowerCase().replace(/\s+/g, '-'),
  name: item.name,
  basePrice: item.price,
  icon: Package,
  description: item.features.join(' · '),
  features: item.features,
  color: 'from-green-500 to-emerald-500',
  hasSubServices: false,
  isAdditional: true
}))

// Combine all services
const allServices = [...services, ...additionalServices]

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
  categories: typeof photographyCategories;
  onSelectCategory: (category: any) => void;
}

function CategorySelectionModal({ isOpen, onClose, categories, onSelectCategory }: CategoryModalProps) {
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
            Photography Packages
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
                          {category.packages.length} Packages
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
}

function PackageSelectionModal({ isOpen, onClose, category, onSelectPackage }: PackageModalProps) {
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
                    Most Popular
                  </motion.div>
                )}

                <h3 className="text-xl font-semibold mb-2 text-gray-900">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-green-600">
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm">{pkg.duration}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {pkg.note && (
                  <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded-lg mb-4">
                    Note: {pkg.note}
                  </p>
                )}

                <button
                  className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg font-medium relative overflow-hidden`}
                >
                  <span className="relative z-10">Select This Package</span>
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
      packageName: pkg.name,
      price: pkg.price,
      duration: pkg.duration,
      features: pkg.features
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
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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
        animation: "spring",
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
      {/* Category Selection Modal */}
      <CategorySelectionModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        categories={photographyCategories}
        onSelectCategory={handleSelectCategory}
      />

      {/* Package Selection Modal */}
      <PackageSelectionModal
        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        category={selectedCategory}
        onSelectPackage={handleSelectPackage}
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
            Book Your Services
          </motion.h1>
          <p className="text-2xl md:text-3xl opacity-90 font-light tracking-wide">
            with <span className="font-normal bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Nuhaa Lens</span>
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
              <span>Home</span>
            </motion.button>
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-green-700 font-semibold flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            Booking
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
          {['Select Services', 'Your Details', 'Confirmation'].map((label, i) => (
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
                  Select Your Services
                </h2>
                <p className="text-gray-600 text-lg font-medium">Choose one or multiple services for your event</p>
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
                              {photoPackages.length > 0 ? 'Add Another Package' : 'Select Photography Package'}
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
          <span className="text-black font-bold block mb-3 text-lg"> {/* Changed from text-gray-800 */}
            Selected Services: {selectedServices.length + selectedPhotoPackages.length}
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
                    <span className="text-black font-medium">{service?.name}</span> {/* Changed from text-gray-700 */}
                  </motion.div>
                )
              })}
          </div>
          
          {/* List photography packages */}
          {selectedPhotoPackages.length > 0 && (
            <div className="space-y-2">
              <span className="text-sm font-bold text-black">Photography Packages:</span> {/* Changed from text-gray-700 */}
              {selectedPhotoPackages.map((pkg, index) => {
                const category = photographyCategories.find(c => c.id === pkg.categoryId)
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
                    <span className="text-black"> {/* Changed from text-gray-700 */}
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
          <span className="text-black font-medium text-sm">Total</span> {/* Changed from text-gray-600 */}
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
    <span className="relative z-10">Back to Home</span>
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
                    Continue to Details
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
                Your Information
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
                      Select Event Date
                      {formData.eventDate && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-2 text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full"
                        >
                          Selected
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
                          <span className="text-gray-600 font-semibold">Available</span>
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
                          <span className="text-gray-600 font-semibold">Partially Booked</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-3 h-3 bg-red-100 rounded-full mr-2 border border-red-600" />
                          <span className="text-gray-600 font-semibold">Fully Booked</span>
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
                          Selected Date: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </h4>
                        {dateBookings.status === 'partially-booked' && (
                          <>
                            <p className="text-yellow-700 font-bold text-sm mb-2">This date has some services booked:</p>
                            <div className="space-y-1">
                              {services
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
                    <label className="block text-sm font-bold mb-2 text-gray-700">Full Name *</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder="Enter your full name"
                      />
                      <motion.div 
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        whileHover={{ boxShadow: '0 0 20px rgba(16,185,129,0.1)' }}
                      />
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Email Address *</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Phone Number *</label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder="012-3456789"
                      />
                    </div>
                  </motion.div>

                  {/* Instagram */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Instagram (optional)</label>
                    <div className="relative group">
                      <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder="@yourusername"
                      />
                    </div>
                  </motion.div>

                  {/* Event Location */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Event Location *</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <input
                        type="text"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder="City, Venue"
                      />
                    </div>
                  </motion.div>

                  {/* Event Type */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Event Type *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium transition-all"
                    >
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="maternity">Maternity Shoot</option>
                      <option value="aqiqah">Aqiqah</option>
                      <option value="convocation">Convocation/Graduation</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Special Requests or Notes</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 font-medium placeholder-gray-400 transition-all"
                        placeholder="Tell us about your vision or any special requirements..."
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
                  <span className="relative z-10">Back</span>
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
                    Submit Booking
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
                Booking Received!
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 font-medium mb-10 max-w-md mx-auto text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Thank you for choosing Nuhaa Lens. We'll contact you within 24 hours to confirm your booking and discuss the details.
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl mb-10 max-w-md mx-auto border border-green-400 shadow-lg"
              >
                <h3 className="font-bold text-2xl mb-6 text-gray-800">Booking Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-green-400">
                    <span className="text-gray-600 font-bold">Services:</span>
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
                        <span className="text-sm font-bold text-gray-600 block mb-2">Photography Packages:</span>
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
                    <span className="text-gray-600 font-bold">Total:</span>
                    <motion.span 
                      className="text-3xl text-green-700 font-extrabold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      RM {totalPrice}
                    </motion.span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t border-green-400">
                    <span className="text-gray-600 font-bold">Event Date:</span>
                    <span className="text-gray-800 font-extrabold">
                      {new Date(formData.eventDate).toLocaleDateString('en-US', { 
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
                    <span className="relative z-10">Return to Home</span>
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
                    View Portfolio
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 px-4 bg-gray-900 text-white mt-20">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">+60 10-816 3414</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">nurnuha08@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">Kota Kinabalu, Sabah</span>
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="hover:text-pink-400 transition text-gray-400"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="hover:text-pink-400 transition text-gray-400"
            >
              <Music2 className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="hover:text-pink-400 transition text-gray-400"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
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
              <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-green-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-green-400 transition">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-green-400 transition">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Photography</li>
                <li>Videography</li>
                <li>Emcee</li>
                <li>Bride Assistant</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Follow Us</h4>
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
            <p>&copy; 2026 Nuhaa Lens. All rights reserved.</p>
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