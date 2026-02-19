"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Camera,
  Video,
  Mic,
  Users,
  Layout,
  Zap,
  Heart,
  Sparkles,
  Instagram,
  Facebook,
  Music2,
  ChevronDown,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  Award,
  Shield,
  Clock,
  Smile,
  Camera as CameraIcon,
  Film,
  Mic2,
  Sparkle,
  Crown,
  Gift,
  PartyPopper,
  Package,
  ChevronRight,
  X,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  PartyPopper as PartyIcon,
} from "lucide-react";

// Social media links
const socialLinks = {
  instagram: "https://www.instagram.com/nuhaa_lens?igsh=OWg0cGY2OGtpdTdm",
  tiktok: "https://www.tiktok.com/@nuhaa_lens?_r=1&_t=ZS-941KREHjgiT",
  facebook: "https://www.facebook.com/share/1D3xrpGTAH/",
};

// Photography Packages Data
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
};

// Photography Categories
const photographyCategories = [
  {
    id: "wedding",
    name: "Wedding Photography",
    icon: <HeartHandshake className="w-6 h-6" />,
    description: "Capture your special day with our comprehensive wedding packages",
    color: "from-pink-500 to-rose-500",
    packages: photographyPackages.wedding,
  },
  {
    id: "engagement",
    name: "Engagement Photography",
    icon: <Heart className="w-6 h-6" />,
    description: "Beautiful engagement shoots to celebrate your love story",
    color: "from-purple-500 to-pink-500",
    packages: photographyPackages.engagement,
  },
  {
    id: "convocation",
    name: "Convocation Photography",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Professional graduation photos to mark your achievement",
    color: "from-blue-500 to-cyan-500",
    packages: photographyPackages.convocation,
  },
  {
    id: "formalEvents",
    name: "Formal Events",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Corporate and formal event coverage",
    color: "from-gray-600 to-gray-800",
    packages: photographyPackages.formalEvents,
  },
  {
    id: "otherEvents",
    name: "Other Events",
    icon: <PartyIcon className="w-6 h-6" />,
    description: "Birthday, maternity, aqiqah and more",
    color: "from-green-500 to-emerald-500",
    packages: photographyPackages.otherEvents,
  },
];

// Floating particles for background
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

// Main Photography Modal Component
interface PhotographyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: any) => void;
}

// Main Photography Modal Component
interface PhotographyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: any) => void;
}

function PhotographyModal({ isOpen, onClose, onSelectCategory }: PhotographyModalProps) {
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
        {/* Header - Fixed at top */}
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
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {photographyCategories.map((category, index) => (
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
                        {category.icon}
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
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-light mb-4">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {photographyPackages.additional.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <h4 className="font-semibold mb-1">{item.name}</h4>
                  <p className="text-green-600 font-bold mb-2">{item.price}</p>
                  <ul className="space-y-1">
                    {item.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-center">
                        <ChevronRight className="w-3 h-3 text-green-500 mr-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Category Packages Modal Component
interface CategoryPackagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: any;
}

// Category Packages Modal Component
function CategoryPackagesModal({ isOpen, onClose, category }: CategoryPackagesModalProps) {
  if (!isOpen || !category) return null;

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
        {/* Header - Fixed at top */}
        <div className={`flex-shrink-0 bg-gradient-to-r ${category.color} p-6 flex justify-between items-center text-white rounded-t-2xl`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              {category.icon}
            </div>
            <h2 className="text-2xl font-semibold">{category.name}</h2>
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
                className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow relative overflow-hidden group"
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

                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
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

                <Link href="/booking">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg font-medium relative overflow-hidden`}
                  >
                    <span className="relative z-10">Book Now</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPhotographyModalOpen, setIsPhotographyModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openPhotographyModal = () => {
    setIsPhotographyModalOpen(true);
  };

  const closePhotographyModal = () => {
    setIsPhotographyModalOpen(false);
  };

  const handleSelectCategory = (category: any) => {
    setSelectedCategory(category);
    setIsCategoryModalOpen(true);
  };

  const closeCategoryModal = () => {
    setIsCategoryModalOpen(false);
    setSelectedCategory(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Photography Modals */}
      <PhotographyModal
        isOpen={isPhotographyModalOpen}
        onClose={closePhotographyModal}
        onSelectCategory={handleSelectCategory}
      />

      <CategoryPackagesModal
        isOpen={isCategoryModalOpen}
        onClose={closeCategoryModal}
        category={selectedCategory}
      />

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
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            scale: heroScale,
            y: heroY,
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </motion.div>

        {/* Animated overlay */}
        <motion.div
          className="absolute inset-0 z-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 pt-20 md:pt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-7xl md:text-8xl font-light mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Nuhaa Lens
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-white mx-auto mb-6"
            animate={{ width: ["6rem", "12rem", "6rem"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.p
            className="text-3xl md:text-4xl mb-4 opacity-90 font-light"
            variants={itemVariants}
          >
            Complete Wedding & Event Solutions
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl mb-6 opacity-80 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Photography · Emcee · Content Creator · Bride Assistant · Floor Manager
            · Live Streaming 
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 mb-8"
            variants={itemVariants}
          >
            {/* Top row with two buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white text-black px-10 py-4 rounded-full text-lg font-medium overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Book a Service
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="group border-2 border-white px-10 py-4 rounded-full text-lg font-medium relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore Services
                  <ChevronDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.1 }}
                />
              </motion.button>
            </div>

            {/* Portfolio button centered below */}
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-full text-lg font-medium overflow-hidden shadow-lg shadow-green-500/30"
              >
                <span className="relative z-10 flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Portfolio
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 ml-2" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Media Icons - Positioned below buttons */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Music2 className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-white" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
          >
            <Sparkle className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-light mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive wedding and event coverage tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Photography - Main Card */}
          <ServiceCard
            icon={<Camera className="w-8 h-8" />}
            title="Photography"
            description="Complete photography solutions for all your special moments. From weddings to events, we've got you covered."
            features={[
              "Wedding & Engagement",
              "Convocation",
              "Formal Events",
              "Birthday & Maternity",
            ]}
            price="Packages from RM 120"
            color="from-blue-500 to-cyan-500"
            onViewPackages={openPhotographyModal}
            isMainPhotography={true}
          />

          {/* Emcee */}
          <ServiceCard
            icon={<Mic className="w-8 h-8" />}
            title="Emcee Services"
            description="Professional bilingual emcee to host your wedding or event with charm, wit, and perfect timing."
            features={[
              "Malay Language",
              "Script writing",
              "Coordinate with vendors",
              "Rehearsal included",
            ]}
            price="RM 250"
            color="from-yellow-500 to-orange-500"
          />

          {/* Wedding Content Creator */}
          <ServiceCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Wedding Content Creator"
            description="Behind-the-scenes content creation for your social media, capturing raw and real moments."
            features={[
              "Instagram/TikTok ready",
              "BTS moments",
              "Same day previews",
              "Digital delivery",
            ]}
            price="RM 180"
            color="from-pink-500 to-rose-500"
          />

          {/* Bride Assistant */}
          <ServiceCard
            icon={<Heart className="w-8 h-8" />}
            title="Bride Assistant"
            description="Dedicated personal assistant for the bride, ensuring everything runs smoothly so you can enjoy your day."
            features={[
              "Dress adjustments",
              "Touch-ups",
              "Bridal party coordination",
              "Emergency kit",
            ]}
            price="From RM 150"
            color="from-red-500 to-pink-500"
          />

          {/* Floor Manager */}
          <ServiceCard
            icon={<Users className="w-8 h-8" />}
            title="Floor Manager"
            description="Professional event coordinator to manage the flow of your reception and keep everything on schedule."
            features={[
              "Vendor coordination",
              "Timeline management",
              "Guest coordination",
              "Problem solving",
            ]}
            price="From RM 700"
            color="from-green-500 to-emerald-500"
          />

          {/* MCP Live Streaming */}
          <ServiceCard
            icon={<Zap className="w-8 h-8" />}
            title="MCP Live Streaming"
            description="Multi-Camera Production live streaming for guests who can't attend in person."
            features={[
              "Multi-camera setup",
              "Professional switching",
              "Private YouTube link",
              "Recording included",
            ]}
            price="From RM 2000"
            color="from-indigo-500 to-blue-500"
          />

          {/* Website Developer */}
          <ServiceCard
            icon={<Zap className="w-8 h-8" />}
            title="Website Development"
            description="Custom website development services to showcase your brand and services."
            features={[
              "Responsive design",
              "SEO optimized",
              "E-commerce ready",
              "Content management system",
            ]}
            price="From RM 2500"
            color="from-red-500 to-orange-500"
          />

          {/* Custom Package */}
          <ServiceCard
            icon={<Layout className="w-8 h-8" />}
            title="Custom Packages"
            description="Mix and match services to create your perfect wedding package."
            features={[
              "Any combination",
              "Bulk discount",
              "Consultation included",
              "Tailored to you",
            ]}
            price="Contact for quote"
            color="from-green-600 to-emerald-600"
            highlight={true}
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-5xl text-center mb-16 font-light"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose{" "}
            <span className="font-normal bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
              Nuhaa Lens?
            </span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "1+ Year Experience",
                desc: "Professional service you can trust",
                color: "from-green-400 to-emerald-400",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "All-in-One Solution",
                desc: "Everything you need, one team",
                color: "from-teal-400 to-green-400",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Stress-Free Planning",
                desc: "We handle the details",
                color: "from-emerald-400 to-teal-400",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Personalized Service",
                desc: "Tailored to your vision",
                color: "from-green-400 to-teal-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 relative shadow-lg shadow-green-500/30`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-white">{item.icon}</div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-green-100">
                  {item.title}
                </h3>
                <p className="text-green-200/80">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                number: "4+",
                label: "Weddings",
                icon: <Heart className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500",
              },
              {
                number: "3+",
                label: "Events",
                icon: <PartyPopper className="w-6 h-6" />,
                color: "from-emerald-500 to-teal-500",
              },
              {
                number: "1+",
                label: "Vendors",
                icon: <Users className="w-6 h-6" />,
                color: "from-teal-500 to-green-500",
              },
              {
                number: "100%",
                label: "Satisfaction",
                icon: <Smile className="w-6 h-6" />,
                color: "from-green-500 to-teal-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-green-500/30`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl font-bold text-green-800 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-green-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 px-4 bg-gray-900 text-white">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-400" />
            <span>+60 10-816 3414</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <span>nurnuha08@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span>Kota Kinabalu, Sabah</span>
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="hover:text-pink-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="hover:text-pink-400 transition"
            >
              <Music2 className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="hover:text-pink-400 transition"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 text-center bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating leaves or sparkles effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(74,222,128,0.1) 0%, transparent 30%)",
              "radial-gradient(circle at 70% 60%, rgba(16,185,129,0.1) 0%, transparent 30%)",
              "radial-gradient(circle at 30% 40%, rgba(74,222,128,0.1) 0%, transparent 30%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 relative"
          >
            <Calendar className="w-12 h-12 text-white" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Plan Your Perfect Day?
          </motion.h2>

          <motion.p
            className="text-2xl mb-10 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Let's discuss how we can bring your vision to life
          </motion.p>

          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-green-600 px-12 py-5 rounded-full text-xl font-medium relative overflow-hidden shadow-lg shadow-green-500/30"
            >
              <span className="relative z-10 flex items-center">
                Book a Free Consultation
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="w-6 h-6 ml-3 text-green-500" />
                </motion.div>
              </span>

              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>
          </Link>

          {/* Trust badges or additional text */}
          <motion.div
            className="flex justify-center gap-6 mt-12 text-sm text-green-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" /> No hidden fees
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" /> Free consultation
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" /> 100% satisfaction
            </span>
          </motion.div>
        </motion.div>

        {/* Decorative corner elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-green-400/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section>

      {/* Footer with Social Media */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-light mb-4">Nuhaa Lens</h3>
              <p className="text-gray-400 text-sm">
                Creating timeless memories through professional wedding and
                event services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="hover:text-white transition">
                    Book Now
                  </Link>
                </li>
                <li>
                  <button
                    onClick={scrollToServices}
                    className="hover:text-white transition"
                  >
                    Services
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Photography</li>
                <li>Content Creator</li>
                <li>Emcee</li>
                <li>Bride Assistant</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
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
            <p>&copy; 2026 Nuhaa Lens. All rights reserved.</p>
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

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  color: string;
  highlight?: boolean;
  onViewPackages?: () => void;
  isMainPhotography?: boolean;
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  price,
  color,
  highlight = false,
  onViewPackages,
  isMainPhotography = false,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        initial: { scale: 1, y: 0 },
        hover: {
          scale: 1.03,
          y: -10,
          transition: { type: "spring", stiffness: 400, damping: 17 },
        },
      }}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative rounded-2xl p-8 overflow-hidden ${
        highlight
          ? "bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-2xl scale-105 ring-2 ring-green-300 ring-offset-2 ring-offset-green-50"
          : "bg-white hover:shadow-2xl"
      } transition-all duration-300`}
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10`}
        animate={{
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? 180 : 0,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Icon */}
      <motion.div
        className={`mb-4 ${highlight ? "text-white" : "text-gray-800"}`}
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
            highlight ? "from-green-400 to-emerald-400" : color
          } flex items-center justify-center text-white shadow-lg ${
            highlight ? "shadow-green-500/50" : ""
          }`}
        >
          {icon}
        </div>
      </motion.div>

      {/* Content */}
      <h3
        className={`text-2xl font-semibold mb-3 ${
          highlight ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h3>
      <p className={`mb-4 ${highlight ? "text-green-50" : "text-gray-600"}`}>
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature: string, i: number) => (
          <motion.li
            key={i}
            className={`flex items-center text-sm ${
              highlight ? "text-green-100" : "text-gray-600"
            }`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <CheckCircle
              className={`w-4 h-4 mr-2 flex-shrink-0 ${
                highlight ? "text-green-200" : "text-green-500"
              }`}
            />
            {feature}
          </motion.li>
        ))}
      </ul>

      <div className="flex items-center justify-between mb-4">
        <p
          className={`text-2xl font-bold ${
            highlight ? "text-white" : "text-gray-800"
          }`}
        >
          {price}
        </p>
        {highlight && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-green-500/30 p-2 rounded-full"
          >
            <Star className="w-5 h-5 text-yellow-300 fill-current" />
          </motion.div>
        )}
      </div>

      {isMainPhotography && onViewPackages ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewPackages}
          className={`w-full py-3 rounded-lg font-medium relative overflow-hidden flex items-center justify-center gap-2 ${
            highlight
              ? "bg-white text-green-600 hover:bg-green-50"
              : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
        >
          <Package className="w-4 h-4" />
          <span className="relative z-10">View All Packages</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>
      ) : (
        <Link href="/booking">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-lg font-medium relative overflow-hidden ${
              highlight
                ? "bg-white text-green-600 hover:bg-green-50"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            <span className="relative z-10">Book Now</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        </Link>
      )}

      {/* Decorative elements for highlight card */}
      {highlight && (
        <>
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-green-400/20 rounded-full filter blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/20 rounded-full filter blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </>
      )}
    </motion.div>
  );
}