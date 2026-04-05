import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  FlaskConical,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Search,
  Shield,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const PHONE = "919356710760";
const WA_BASE = `https://wa.me/${PHONE}`;

function openWhatsApp(text: string) {
  window.open(`${WA_BASE}?text=${encodeURIComponent(text)}`, "_blank");
}

const essentialTests = [
  { en: "CBC-(28)", mr: "संपूर्ण रक्त गणना", mrp: 200, offer: 169 },
  { en: "Lipid Profile", mr: "लिपिड प्रोफाईल", mrp: 799, offer: 299 },
  { en: "Thyroid Profile", mr: "थायरॉईड प्रोफाईल", mrp: 500, offer: 299 },
  {
    en: "LFT (Liver Function Test)",
    mr: "यकृत कार्य चाचणी",
    mrp: 1045,
    offer: 399,
  },
  { en: "Kidney Profile", mr: "मूत्रपिंड कार्य चाचणी", mrp: 800, offer: 399 },
  { en: "HbA1c (Whole Blood)", mr: "एचबीए१सी", mrp: 500, offer: 299 },
  { en: "Vitamin B12", mr: "व्हिटॅमिन बी१२", mrp: 1200, offer: 499 },
  { en: "25 OH Vitamin D", mr: "व्हिटॅमिन डी", mrp: 1400, offer: 699 },
  { en: "Serum Creatinine", mr: "सीरम क्रिएटिनाईन", mrp: 220, offer: 99 },
  { en: "Calcium", mr: "कॅल्शियम", mrp: 160, offer: 99 },
  { en: "Uric Acid", mr: "युरिक अ‍ॅसिड", mrp: 220, offer: 99 },
  { en: "Urea", mr: "युरिया", mrp: 165, offer: 99 },
  {
    en: "Blood Sugar Fasting & Post Prandial",
    mr: "उपाशीपोटी व जेवणानंतर रक्तशर्करा",
    mrp: 140,
    offer: 99,
  },
];

const advanceTests = [
  { name: "Iron Studies", desc: "लोहाची पातळी व ॲनिमिया तपासणी" },
  { name: "LFT (Liver Function Test)", desc: "यकृताचे कार्य तपासते" },
  { name: "Lipid Profile", desc: "कोलेस्टेरॉल व हृदयाचा धोका" },
  { name: "Thyroid Profile", desc: "थायरॉईड संप्रेरकांची पातळी" },
  { name: "Kidney Profile", desc: "मूत्रपिंडाचे कार्य तपासते" },
  { name: "CBC-(28)", desc: "संपूर्ण रक्त तपासणी" },
  { name: "HbA1c", desc: "३ महिन्यांची रक्तशर्करा सरासरी" },
  { name: "25 OH Vitamin D", desc: "व्हिटॅमिन डी ची कमतरता तपासते" },
  { name: "Vitamin B12", desc: "मज्जातंतू व ऊर्जेसाठी जीवनसत्त्व" },
  { name: "Serum Electrolyte Profile", desc: "सोडियम, पोटॅशियम संतुलन" },
];

const basicTests = [
  { name: "TSH", desc: "थायरॉईड उत्तेजक संप्रेरक" },
  { name: "CBC-(28)", desc: "संपूर्ण रक्त तपासणी" },
  { name: "Sugar Fasting", desc: "मधुमेह तपासणी" },
  { name: "Kidney Profile", desc: "मूत्रपिंडाचे कार्य तपासते" },
  { name: "Lipid Profile", desc: "कोलेस्टेरॉलची पातळी" },
  { name: "LFT (Liver Function Test)", desc: "यकृताचे आरोग्य मूल्यांकन" },
];

const popularTests = [
  { en: "CBC (Complete Blood Count)", mr: "संपूर्ण रक्त गणना", price: 169 },
  {
    en: "Blood Sugar Fasting & Post Prandial",
    mr: "उपाशीपोटी व जेवणानंतर रक्तशर्करा",
    mrp: 140,
    price: 99,
  },
  { en: "HbA1c", mr: "मधुमेह ३ महिन्यांची तपासणी", price: 299 },
  { en: "Thyroid Profile (TSH)", mr: "थायरॉईड प्रोफाईल", price: 299 },
  { en: "Lipid Profile", mr: "कोलेस्टेरॉल तपासणी", price: 299 },
  { en: "Vitamin D", mr: "व्हिटॅमिन डी", price: 699 },
  { en: "Vitamin B12", mr: "व्हिटॅमिन बी १२", price: 499 },
  { en: "Kidney Function Test", mr: "मूत्रपिंड कार्य चाचणी", price: 399 },
];

const faqItems = [
  {
    q: "Home Collection available आहे का?",
    a: "हो! SAI HEALTHCARE मध्ये मोफत Home Collection उपलब्ध आहे. आपण WhatsApp वर 9356710760 ला message करा, आमचे technician आपल्या घरी येतील.",
  },
  {
    q: "Report कधी मिळेल?",
    a: "बहुतेक tests चे report त्याच दिवशी WhatsApp वर पाठवले जातात. काही special tests साठी 24-48 तास लागू शकतात.",
  },
  {
    q: "Lab कोणत्या वेळी उघडे असते?",
    a: "SAI HEALTHCARE रोज 7:00 AM ते 10:00 PM उघडे असते — सर्व सण आणि सुट्टीच्या दिवशी सुद्धा.",
  },
  {
    q: "Advance आणि Basic Package मध्ये काय फरक आहे?",
    a: "Advance Package (₹1499/-) मध्ये 80+ tests समाविष्ट आहेत जसे Iron Studies, Lipid Profile, Thyroid, Vitamin D, B12 इत्यादी. Basic Package (₹999/-) मध्ये 60+ मुख्य tests आहेत. दोन्ही packages मध्ये Free Home Collection आहे.",
  },
  {
    q: "Test साठी Fasting (उपवास) आवश्यक आहे का?",
    a: "Blood Sugar Fasting, Lipid Profile सारख्या काही tests साठी 8-12 तास उपवास आवश्यक आहे. इतर tests साठी उपवासाची गरज नाही. Booking च्या वेळी आम्ही आपल्याला सांगू.",
  },
  {
    q: "Payment कसे करायचे?",
    a: "Cash, UPI (Google Pay, PhonePe, Paytm) सर्व प्रकारचे payment स्वीकारले जातात. Home Collection साठी technician येतात तेव्हा payment करता येते.",
  },
];

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "PACKAGES", href: "#packages" },
  { label: "TEST MENU", href: "#tests" },
  { label: "HOME COLLECTION", href: "#collection" },
  { label: "CONTACT US", href: "#contact" },
];

const whyFeatures = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Accurate Reports",
    mr: "अचूक अहवाल",
    desc: "Modern instruments and certified technicians ensuring precise, reliable results every time.",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Free Home Collection",
    mr: "मोफत घरपोच संकलन",
    desc: "Sample collection at your doorstep — no need to visit the lab, we come to you.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Affordable Prices",
    mr: "परवडणाऱ्या किमती",
    desc: "Quality diagnostics at the most reasonable prices in Nashik — health for every family.",
  },
];

export default function App() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerSlides = [
    {
      src: "/assets/generated/banner1.dim_1200x450.jpg",
      badge: "🩺 Health Packages",
      title: "Advance Health Package",
      subtitle: "CBC, Sugar, Thyroid, Lipid, LFT, KFT + more",
      offer: "SAVE ₹3501",
      price: "Only ₹1499/-",
      cta: "Book Now on WhatsApp",
    },
    {
      src: "/assets/generated/banner2.dim_1200x450.jpg",
      badge: "🔬 Lab Tests",
      title: "Basic Health Package",
      subtitle: "CBC, Blood Sugar, Urine Routine + more",
      offer: "SAVE ₹2001",
      price: "Only ₹999/-",
      cta: "Book Now on WhatsApp",
    },
    {
      src: "/assets/generated/banner3.dim_1200x450.jpg",
      badge: "🏠 Home Collection",
      title: "घरपोच नमुना संकलन",
      subtitle: "आरामात घरी बसून रक्त तपासणी करा",
      offer: "FREE Home Visit",
      price: "Available 7AM–10PM",
      cta: "Call / WhatsApp",
    },
    {
      src: "/assets/generated/banner4.dim_1200x450.jpg",
      badge: "✅ Trusted Lab",
      title: "100% Accurate Reports",
      subtitle: "Same Day Reports | ISO Quality Standards",
      offer: "ALL DAYS OPEN",
      price: "7:00 AM – 10:00 PM",
      cta: "Get Directions",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const [colName, setColName] = useState("");
  const [colPhone, setColPhone] = useState("");
  const [colAddress, setColAddress] = useState("");
  const [colTest, setColTest] = useState("");
  const [colDate, setColDate] = useState("");

  const [inqName, setInqName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [inqPhone, setInqPhone] = useState("");
  const [inqMessage, setInqMessage] = useState("");

  function handleCollection(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Home Collection Request:\nName: ${colName}\nPhone: ${colPhone}\nAddress: ${colAddress}\nTest: ${colTest}\nDate: ${colDate}`;
    openWhatsApp(msg);
  }

  function handleInquiry(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Inquiry:\nName: ${inqName}\nPhone: ${inqPhone}\nMessage: ${inqMessage}`;
    openWhatsApp(msg);
  }

  return (
    <div className="min-h-screen bg-white pb-20" id="home">
      {/* ── TOP INFO BAR ── */}
      <div className="topbar text-white text-xs py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919356710760"
              className="flex items-center gap-1.5 hover:text-white/80"
            >
              <Phone className="w-3 h-3" />
              9356710760
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              7:00 AM – 10:00 PM, All Days
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Konark Nagar, Nashik
            </span>
          </div>
          <button
            type="button"
            onClick={() =>
              openWhatsApp("नमस्कार! SAI HEALTHCARE बद्दल माहिती हवी आहे.")
            }
            className="flex items-center gap-1.5 btn-yellow text-xs font-semibold px-3 py-1 rounded-full transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
            WhatsApp Us
          </button>
        </div>
      </div>

      {/* ── STICKY NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center flex-shrink-0">
            <img
              src="/assets/generated/sai-healthcare-logo-transparent.dim_600x200.png"
              alt="SAI HEALTHCARE Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid={`nav.${l.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                className="text-gray-600 hover:text-primary px-3 py-2 text-xs font-heading font-semibold tracking-widest uppercase transition-colors rounded-md hover:bg-primary/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="tel:+919356710760"
              className="flex items-center gap-2 text-primary font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              9356710760
            </a>
            <a
              href="#collection"
              data-ocid="nav.book_test.button"
              className="ml-2 btn-yellow text-xs font-bold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
            >
              BOOK TEST NOW
            </a>
          </div>

          <button
            className="lg:hidden text-gray-600 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
            data-ocid="nav.menu.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 border-b border-gray-100 text-sm font-semibold text-gray-700 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919356710760"
              className="flex items-center gap-2 mt-4 text-primary font-bold"
            >
              <Phone className="w-4 h-4" /> 9356710760
            </a>
            <a
              href="#collection"
              className="mt-3 block text-center btn-yellow font-bold py-3 rounded-full text-sm"
              data-ocid="nav.mobile_book.link"
            >
              BOOK TEST NOW
            </a>
          </div>
        )}
      </header>

      {/* ── QUICK ACTIONS ROW ── */}
      <div className="bg-white border-b border-gray-100 py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4 min-w-max sm:min-w-0 sm:justify-center">
          <a
            href="#contact"
            data-ocid="quickaction.lab.link"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors text-center"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
              Find Our Lab
            </span>
          </a>
          <div className="w-px h-10 bg-gray-200" />
          <a
            href="#collection"
            data-ocid="quickaction.collection.link"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors text-center"
          >
            <Home className="w-5 h-5 text-primary" />
            <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
              Home Collection
            </span>
          </a>
          <div className="w-px h-10 bg-gray-200" />
          <a
            href="tel:+919356710760"
            data-ocid="quickaction.call.link"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors text-center"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
              Call Us
            </span>
          </a>
          <div className="w-px h-10 bg-gray-200" />
          <button
            type="button"
            onClick={() =>
              openWhatsApp("नमस्कार! SAI HEALTHCARE बद्दल माहिती हवी आहे.")
            }
            data-ocid="quickaction.whatsapp.button"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors text-center"
          >
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
              WhatsApp
            </span>
          </button>
          <div className="w-px h-10 bg-gray-200" />
          <div className="flex flex-col items-center gap-1 px-4 py-2 text-center">
            <Clock className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
              Open All Days
            </span>
          </div>
        </div>
      </div>

      {/* ── STATS BANNER ── */}
      <div className="py-6 px-4" style={{ backgroundColor: "#00984A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "5000+", en: "Happy Patients", mr: "खूश रुग्ण" },
            { num: "120+", en: "Tests Available", mr: "चाचण्या उपलब्ध" },
            { num: "365", en: "Days Open", mr: "दिवस उघडे" },
            { num: "FREE", en: "Home Collection", mr: "घरपोच संकलन" },
          ].map((stat) => (
            <div key={stat.en} className="flex flex-col items-center gap-0.5">
              <span className="text-white font-extrabold text-3xl md:text-4xl leading-none">
                {stat.num}
              </span>
              <span className="text-white font-semibold text-sm mt-1">
                {stat.en}
              </span>
              <span className="text-white/70 text-xs">{stat.mr}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── IMAGE BANNER CAROUSEL ── */}
      <div
        className="relative w-full overflow-hidden bg-gray-100"
        style={{ height: "clamp(260px, 55vw, 620px)" }}
      >
        {/* Slides container */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${bannerIndex * 100}%)` }}
        >
          {bannerSlides.map((slide, i) => (
            <div
              key={slide.src}
              className="relative w-full h-full flex-shrink-0"
              style={{ minWidth: "100%" }}
            >
              <img
                src={slide.src}
                alt={`SAI HEALTHCARE Banner ${i + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
              {/* Offer content */}
              <div className="absolute bottom-6 left-5 md:left-12 z-10 max-w-[55%] flex flex-col gap-2">
                <span
                  className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full w-fit"
                  style={{ background: "#00984A" }}
                >
                  {slide.badge}
                </span>
                <h2 className="text-white font-bold text-lg md:text-2xl leading-tight drop-shadow">
                  {slide.title}
                </h2>
                <p className="text-white/80 text-xs md:text-sm leading-snug">
                  {slide.subtitle}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "#007a3d" }}
                  >
                    {slide.offer}
                  </span>
                  <span className="text-white font-semibold text-sm md:text-base">
                    {slide.price}
                  </span>
                </div>
                <a
                  href="https://wa.me/919356710760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full w-fit mt-1 transition-opacity hover:opacity-90 btn-yellow"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        <button
          type="button"
          onClick={() =>
            setBannerIndex(
              (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length,
            )
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 hover:bg-white/90 flex items-center justify-center shadow transition-colors z-10"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        {/* Right Arrow */}
        <button
          type="button"
          onClick={() =>
            setBannerIndex((prev) => (prev + 1) % bannerSlides.length)
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 hover:bg-white/90 flex items-center justify-center shadow transition-colors z-10"
          aria-label="Next banner"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {bannerSlides.map((slide2, i) => (
            <button
              key={slide2.src}
              type="button"
              onClick={() => setBannerIndex(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                background:
                  i === bannerIndex ? "#00984A" : "rgba(255,255,255,0.7)",
              }}
              aria-label={`Go to banner ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="bg-white py-12 md:py-20 px-4" aria-label="Hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
                <Award className="w-3.5 h-3.5" />
                NABL CERTIFIED PATHOLOGY LAB · NASHIK
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                <strong className="text-primary">SAI HEALTHCARE</strong>
                <span className="block text-sm text-primary font-normal">
                  साई हेल्थकेअर
                </span>
                <br />
                <span className="text-gray-700 text-2xl sm:text-3xl md:text-4xl">
                  जिथे आरोग्य सुरू होते
                </span>
              </h1>
              <p className="text-gray-500 text-base italic mb-2">
                Where Your Health Journey Begins
              </p>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                All Types of Blood – Urine – Sputum Tests Available Here.
                <br />
                <span className="text-primary font-semibold">
                  ✓ Free Home Collection Available
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="#packages"
                  data-ocid="hero.packages.primary_button"
                  className="btn-primary shadow-md"
                >
                  View Health Packages
                </a>
                <a
                  href="#collection"
                  data-ocid="hero.collection.secondary_button"
                  className="btn-outline"
                >
                  <Home className="w-4 h-4" />
                  Book Home Collection
                </a>
              </div>
              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    label: "Certified Lab",
                  },
                  {
                    icon: <Home className="w-5 h-5" />,
                    label: "Free Home Collection",
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5" />,
                    label: "Accurate Reports",
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    label: "365 Days Open",
                  },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center gap-1.5 p-3 bg-gray-50 rounded-xl border border-gray-100 text-center"
                  >
                    <span className="text-primary">{b.icon}</span>
                    <span className="text-xs font-semibold text-gray-700 leading-tight">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── SEARCH BAR ── */}
              <div className="mt-6 relative">
                <p className="text-xs text-gray-500 mb-2 font-semibold">
                  Test किंवा Package शोधा —{" "}
                  <span className="text-primary">Search a Test or Package</span>
                </p>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="CBC, Blood Sugar, Thyroid, Vitamin D..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchOpen(e.target.value.length > 0);
                    }}
                    onFocus={() =>
                      searchQuery.length > 0 && setSearchOpen(true)
                    }
                    onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-primary rounded-xl text-sm outline-none transition-colors"
                    data-ocid="hero.search.input"
                  />
                </div>
                {searchOpen && (
                  <div className="absolute z-30 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                    {(() => {
                      const q = searchQuery.toLowerCase();
                      const results: Array<{
                        name: string;
                        mr?: string;
                        price?: number;
                      }> = [];
                      for (const t of essentialTests) {
                        if (
                          t.en.toLowerCase().includes(q) ||
                          t.mr.includes(searchQuery)
                        ) {
                          results.push({
                            name: t.en,
                            mr: t.mr,
                            price: t.offer,
                          });
                        }
                      }
                      for (const t of [...advanceTests, ...basicTests]) {
                        if (
                          t.name.toLowerCase().includes(q) ||
                          t.desc.includes(searchQuery)
                        ) {
                          if (!results.find((r) => r.name === t.name)) {
                            results.push({ name: t.name, mr: t.desc });
                          }
                        }
                      }
                      for (const t of popularTests) {
                        if (
                          t.en.toLowerCase().includes(q) ||
                          t.mr.includes(searchQuery)
                        ) {
                          if (!results.find((r) => r.name === t.en)) {
                            results.push({
                              name: t.en,
                              mr: t.mr,
                              price: t.price,
                            });
                          }
                        }
                      }
                      const shown = results.slice(0, 6);
                      if (shown.length === 0) {
                        return (
                          <div className="px-4 py-3 text-sm text-gray-400 text-center">
                            कोणतीही चाचणी सापडली नाही / No test found
                          </div>
                        );
                      }
                      return shown.map((r) => (
                        <div
                          key={r.name}
                          className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                        >
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              {r.name}
                            </p>
                            {r.mr && (
                              <p className="text-xs text-gray-400 italic">
                                {r.mr}
                              </p>
                            )}
                            {r.price && (
                              <p className="text-xs text-primary font-bold">
                                ₹{r.price}
                              </p>
                            )}
                          </div>
                          <button
                            type="button"
                            onMouseDown={() =>
                              openWhatsApp(
                                `नमस्कार! मला ${r.name} Test Book करायचे आहे.${r.price ? ` Offer Price: ₹${r.price}/-` : ""}`,
                              )
                            }
                            className="ml-3 btn-yellow text-xs font-bold px-3 py-1.5 rounded-full transition-colors flex-shrink-0"
                            data-ocid="hero.search.book.button"
                          >
                            Book
                          </button>
                        </div>
                      ));
                    })()}
                  </div>
                )}
              </div>
            </div>

            {/* Right: teal gradient info card */}
            <div className="hero-card rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-xl font-bold mb-1">
                <strong>SAI HEALTHCARE</strong>
                <span className="block text-white/80 text-sm font-normal">
                  साई हेल्थकेअर
                </span>
              </h2>
              <p className="text-white/70 text-sm italic mb-6">
                Nashik's Trusted Pathology Lab
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/70">Call / WhatsApp</p>
                    <a href="tel:+919356710760" className="font-bold text-base">
                      9356710760
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/70">Working Hours</p>
                    <p className="font-bold text-sm">
                      7:00 AM – 10:00 PM, All Days
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/70">Location</p>
                    <p className="font-bold text-sm">
                      शॉप क्र.१, रुतिक आर्केड, कोनार्क नगर, नाशिक
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    "नमस्कार! SAI HEALTHCARE मध्ये Test Book करायची आहे.",
                  )
                }
                className="w-full btn-yellow font-bold py-3 rounded-full transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Book Test on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALTH PACKAGES ── */}
      <section id="packages" className="py-20 px-4 bg-[#EEF3FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Best Value
            </span>
            <h2 className="section-heading text-2xl md:text-3xl mt-1 mb-4">
              Health Packages
            </h2>
            <p className="text-gray-500 text-sm">
              Comprehensive health checkups at unbeatable prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Advance Package */}
            <Card
              className="overflow-hidden border-0 shadow-lg"
              data-ocid="packages.advance.card"
            >
              <div className="pkg-advance-header p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-extrabold">
                      Advance Health Checkup
                    </h3>
                    <p className="text-white/75 text-sm italic mt-0.5">
                      अ‍ॅडव्हान्स हेल्थ चेकअप | संपूर्ण आरोग्य तपासणी
                    </p>
                  </div>
                  <span className="offer-badge text-xs font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap ml-2">
                    SAVE ₹3501
                  </span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-extrabold">₹1499</span>
                  <div className="pb-1">
                    <span className="text-white/60 line-through text-sm block">
                      MRP ₹5000
                    </span>
                    <span className="text-yellow-300 text-xs font-bold">
                      80+ Tests Included
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="pt-5 pb-6">
                <ul className="space-y-2 mb-6">
                  {advanceTests.map((t) => (
                    <li key={t.name} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-800">
                          {t.name}
                        </span>
                        <p className="text-xs text-gray-500 italic">{t.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() =>
                    openWhatsApp(
                      "नमस्कार! मला Advance Health Checkup Package (₹1499/-) Book करायचे आहे. कृपया मदत करा.",
                    )
                  }
                  className="w-full btn-yellow font-bold rounded-full gap-2"
                  data-ocid="packages.advance.primary_button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Now on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Basic Package */}
            <Card
              className="overflow-hidden border-0 shadow-lg"
              data-ocid="packages.basic.card"
            >
              <div className="pkg-basic-header p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-extrabold">
                      Basic Health Checkup
                    </h3>
                    <p className="text-white/75 text-sm italic mt-0.5">
                      बेसिक हेल्थ चेकअप | मूलभूत आरोग्य तपासणी
                    </p>
                  </div>
                  <span className="offer-badge text-xs font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap ml-2">
                    SAVE ₹2001
                  </span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-extrabold">₹999</span>
                  <div className="pb-1">
                    <span className="text-white/60 line-through text-sm block">
                      MRP ₹3000
                    </span>
                    <span className="text-yellow-300 text-xs font-bold">
                      60+ Tests Included
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="pt-5 pb-6">
                <ul className="space-y-2 mb-6">
                  {basicTests.map((t) => (
                    <li key={t.name} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-800">
                          {t.name}
                        </span>
                        <p className="text-xs text-gray-500 italic">{t.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() =>
                    openWhatsApp(
                      "नमस्कार! मला Basic Health Checkup Package (₹999/-) Book करायचे आहे. कृपया मदत करा.",
                    )
                  }
                  className="w-full btn-yellow font-bold rounded-full gap-2"
                  data-ocid="packages.basic.primary_button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Now on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── ESSENTIAL TESTS ── */}
      <section id="tests" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Offer Prices
            </span>
            <h2 className="section-heading text-2xl md:text-3xl mt-1 mb-4">
              Essential Blood Tests
            </h2>
            <p className="text-gray-500 text-sm">
              आवश्यक रक्त तपासणी — Individual tests at special prices
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {essentialTests.map((test, i) => {
              const savePct = Math.round(
                ((test.mrp - test.offer) / test.mrp) * 100,
              );
              return (
                <div
                  key={test.en}
                  data-ocid={`tests.row.item.${i + 1}`}
                  className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-sm leading-tight">
                        {test.en}
                      </p>
                      <p className="text-primary text-xs italic mt-0.5">
                        {test.mr}
                      </p>
                    </div>
                    <span className="offer-badge text-xs font-extrabold px-2 py-0.5 rounded-full ml-2 whitespace-nowrap">
                      {savePct}% OFF
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-primary font-extrabold text-xl">
                        ₹{test.offer}
                      </span>
                      <span className="text-gray-400 line-through text-xs">
                        ₹{test.mrp}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        openWhatsApp(
                          `नमस्कार! मला ${test.en} Test Book करायचे आहे. Offer Price: ₹${test.offer}/-`,
                        )
                      }
                      data-ocid={`tests.book.button.${i + 1}`}
                      className="w-full btn-yellow text-xs font-bold py-2 rounded-full transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── POPULAR TESTS ── */}
      <section id="popular" className="py-20 px-4 bg-[#EEF3FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Most Booked
            </span>
            <h2 className="section-heading text-2xl md:text-3xl mt-1 mb-4">
              Popular Tests
            </h2>
            <p className="text-gray-500 text-sm">
              वारंवार बुक केल्या जाणाऱ्या चाचण्या — Frequently booked tests at offer
              prices
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularTests.map((test, i) => (
              <div
                key={test.en}
                data-ocid={`popular.item.${i + 1}`}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 flex-shrink-0"
                  style={{ backgroundColor: "#00984A1A" }}
                >
                  <FlaskConical
                    className="w-5 h-5"
                    style={{ color: "#00984A" }}
                  />
                </div>
                <p className="font-bold text-gray-900 text-sm leading-tight mb-0.5">
                  {test.en}
                </p>
                <p className="text-xs italic text-gray-500 mb-2">{test.mr}</p>
                <div className="flex items-baseline gap-2 mt-auto mb-3">
                  <span className="text-primary font-extrabold text-lg">
                    ₹{test.price}
                  </span>
                  {test.mrp && (
                    <span className="text-gray-400 line-through text-xs">
                      ₹{test.mrp}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      `नमस्कार! मला ${test.en} Test Book करायचे आहे. Price: ₹${test.price}/-`,
                    )
                  }
                  data-ocid={`popular.book.button.${i + 1}`}
                  className="w-full btn-yellow text-xs font-bold py-2 rounded-full transition-colors"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOME COLLECTION BOOKING ── */}
      <section id="collection" className="py-16 px-4 bg-[#EEF3FF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Doorstep Service
            </span>
            <h2 className="section-heading text-2xl md:text-3xl mt-1 mb-4">
              Book Home Collection
            </h2>
            <p className="text-gray-500 text-sm">
              घरपोच नमुना संकलन — We come to you, free of charge
            </p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="pkg-advance-header px-6 py-5 flex items-center gap-3">
              <Home className="w-6 h-6 text-white" />
              <div>
                <CardTitle className="text-white text-lg font-extrabold">
                  Home Collection Booking
                </CardTitle>
                <p className="text-white/75 text-sm">घरपोच संकलन बुकिंग</p>
              </div>
            </div>
            <CardContent className="p-6">
              <form
                onSubmit={handleCollection}
                className="grid sm:grid-cols-2 gap-4"
              >
                <div>
                  <Label htmlFor="colName" className="text-sm font-semibold">
                    Patient Name *
                  </Label>
                  <Input
                    id="colName"
                    value={colName}
                    onChange={(e) => setColName(e.target.value)}
                    placeholder="आपले पूर्ण नाव"
                    required
                    className="mt-1"
                    data-ocid="collection.name.input"
                  />
                </div>
                <div>
                  <Label htmlFor="colPhone" className="text-sm font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="colPhone"
                    type="tel"
                    value={colPhone}
                    onChange={(e) => setColPhone(e.target.value)}
                    placeholder="मोबाईल नंबर"
                    required
                    className="mt-1"
                    data-ocid="collection.phone.input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="colAddress" className="text-sm font-semibold">
                    Address *
                  </Label>
                  <Textarea
                    id="colAddress"
                    value={colAddress}
                    onChange={(e) => setColAddress(e.target.value)}
                    placeholder="घराचा पूर्ण पत्ता"
                    required
                    className="mt-1 min-h-[72px]"
                    data-ocid="collection.address.textarea"
                  />
                </div>
                <div>
                  <Label htmlFor="colTest" className="text-sm font-semibold">
                    Test / Package *
                  </Label>
                  <Input
                    id="colTest"
                    type="text"
                    value={colTest}
                    onChange={(e) => setColTest(e.target.value)}
                    placeholder="तपासणी / पॅकेजचे नाव लिहा"
                    required
                    className="mt-1"
                    data-ocid="collection.test.input"
                  />
                </div>
                <div>
                  <Label htmlFor="colDate" className="text-sm font-semibold">
                    Preferred Date *
                  </Label>
                  <Input
                    id="colDate"
                    type="date"
                    value={colDate}
                    onChange={(e) => setColDate(e.target.value)}
                    required
                    className="mt-1"
                    data-ocid="collection.date.input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    className="w-full btn-yellow font-bold rounded-full gap-2 py-3"
                    data-ocid="collection.submit.button"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send Booking via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── ABOUT / WHY CHOOSE US ── */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              About Us
            </span>
            <h2 className="section-heading text-2xl md:text-3xl mt-1 mb-4">
              Why Choose <strong>SAI HEALTHCARE</strong>{" "}
              <span className="font-normal text-gray-500 text-sm">
                | साई हेल्थकेअर
              </span>
              ?
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              <strong>SAI HEALTHCARE</strong> is a trusted pathology laboratory
              in Nashik, committed to providing accurate and affordable
              diagnostic services to every family in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Located at Shop No.1, Rutik Arcade, Konark Nagar, Nashik — we
                serve patients with modern lab equipment, trained technicians,
                and prompt report delivery. Whether you need a routine blood
                test or a comprehensive health package, we make quality
                healthcare accessible and affordable.
              </p>
              <ul className="space-y-3">
                {[
                  "All types of blood, urine & sputum tests",
                  "Free home collection service",
                  "Reports via WhatsApp — fast & convenient",
                  "Open 7 AM to 10 PM, all 365 days",
                  "Affordable prices with no hidden charges",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {whyFeatures.map((f, i) => (
                <div
                  key={f.title}
                  data-ocid={`about.feature.item.${i + 1}`}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-sm">
                      {f.title}
                    </h4>
                    <p className="text-primary text-xs italic mb-1">{f.mr}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="section-heading text-2xl md:text-3xl mt-1 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">वारंवार विचारले जाणारे प्रश्न</p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            data-ocid="faq.panel"
          >
            {faqItems.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-${i}`}
                data-ocid={`faq.item.${i + 1}`}
                className="border border-gray-200 rounded-xl px-5 overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-gray-800 py-4 hover:no-underline [&>svg]:text-primary [&>svg]:w-5 [&>svg]:h-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CONTACT + MAP ── */}
      <section id="contact" className="py-16 px-4 bg-[#EEF3FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="section-heading text-2xl md:text-3xl mt-1 mb-4">
              Contact Us
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {/* Contact info card */}
              <Card className="border-0 shadow-md overflow-hidden">
                <div className="pkg-advance-header px-6 py-4">
                  <CardTitle className="text-white font-extrabold">
                    Get In Touch
                  </CardTitle>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Phone
                      </p>
                      <a
                        href="tel:+919356710760"
                        className="text-primary font-bold text-lg hover:underline"
                      >
                        9356710760
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Address
                      </p>
                      <p className="text-gray-600 text-sm">
                        Shop No.1, Rutik Arcade, Konark Nagar, Nashik
                      </p>
                      <p className="text-gray-500 text-xs italic">
                        शॉप क्र.१, रुतिक आर्केड, कोनार्क नगर, नाशिक
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Hours
                      </p>
                      <p className="text-gray-600 text-sm">
                        7:00 AM – 10:00 PM, All Days (सर्व दिवस)
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsApp("नमस्कार! SAI HEALTHCARE बद्दल माहिती हवी आहे.")
                    }
                    data-ocid="contact.whatsapp.button"
                    className="w-full flex items-center justify-center gap-2 btn-yellow font-bold py-3 rounded-full transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </button>
                </CardContent>
              </Card>

              {/* Inquiry form */}
              <Card className="border-0 shadow-md overflow-hidden">
                <div className="bg-gray-800 px-6 py-4">
                  <CardTitle className="text-white font-extrabold">
                    Send an Inquiry
                  </CardTitle>
                </div>
                <CardContent className="p-6">
                  <form onSubmit={handleInquiry} className="space-y-4">
                    <div>
                      <Label
                        htmlFor="inqName"
                        className="text-sm font-semibold"
                      >
                        Your Name *
                      </Label>
                      <Input
                        id="inqName"
                        value={inqName}
                        onChange={(e) => setInqName(e.target.value)}
                        placeholder="आपले नाव"
                        required
                        className="mt-1"
                        data-ocid="inquiry.name.input"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="inqPhone"
                        className="text-sm font-semibold"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="inqPhone"
                        type="tel"
                        value={inqPhone}
                        onChange={(e) => setInqPhone(e.target.value)}
                        placeholder="मोबाईल नंबर"
                        required
                        className="mt-1"
                        data-ocid="inquiry.phone.input"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="inqMessage"
                        className="text-sm font-semibold"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="inqMessage"
                        value={inqMessage}
                        onChange={(e) => setInqMessage(e.target.value)}
                        placeholder="आपला संदेश लिहा"
                        className="mt-1 min-h-[90px]"
                        data-ocid="inquiry.message.textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full btn-yellow font-bold rounded-full gap-2"
                      data-ocid="inquiry.submit.button"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send Inquiry via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card
              className="overflow-hidden border-0 shadow-md"
              data-ocid="contact.map.card"
            >
              <div className="pkg-advance-header px-6 py-4">
                <CardTitle className="text-white font-extrabold">
                  Find Us on Google Maps
                </CardTitle>
                <p className="text-white/70 text-sm">आमचे ठिकाण शोधा</p>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Sai+Healthcare+Konark+Nagar+Nashik&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAI HEALTHCARE Location Map"
              />
              <div className="p-5 border-t border-gray-100">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Shop No.1, Rutik Arcade, Konark Nagar, Nashik
                    </p>
                    <p className="text-gray-500 text-xs italic">
                      शॉप क्र.१, रुतिक आर्केड, कोनार्क नगर, नाशिक
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/uQ8MajFENCPZtdBz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.directions.button"
                  className="flex items-center justify-center gap-2 btn-yellow font-bold py-3 rounded-full transition-colors text-sm w-full"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="text-white py-12 px-4"
        style={{ backgroundColor: "#1D3A66" }}
      >
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-3">
              <img
                src="/assets/generated/sai-healthcare-logo-transparent.dim_600x200.png"
                alt="SAI HEALTHCARE Logo"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted pathology laboratory in Nashik — accurate results,
              affordable prices.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-sm mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-sm mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 9356710760
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  Shop No.1, Rutik Arcade,
                  <br />
                  Konark Nagar, Nashik
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 7:00 AM – 10:00 PM, All Days
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-sm mb-4 text-white">Connect</h4>
            <button
              type="button"
              onClick={() =>
                openWhatsApp("नमस्कार! SAI HEALTHCARE बद्दल माहिती हवी आहे.")
              }
              className="flex items-center gap-2 btn-yellow text-sm font-semibold px-5 py-2.5 rounded-full transition-colors mb-4"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </button>
            <p className="text-gray-500 text-xs">
              सर्व दिवस उपलब्ध
              <br />
              Available All Days
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} <strong>SAI HEALTHCARE</strong> (साई
          हेल्थकेअर). All rights reserved. | Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white underline"
          >
            caffeine.ai
          </a>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <button
        type="button"
        onClick={() =>
          openWhatsApp("नमस्कार! SAI HEALTHCARE बद्दल माहिती हवी आहे.")
        }
        data-ocid="whatsapp.floating.button"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-6 z-50 bg-primary hover:bg-primary-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      >
        <svg
          role="img"
          aria-label="WhatsApp"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <title>WhatsApp</title>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>

      {/* ── STICKY BOOK HOME VISIT BAR ── */}
      <div
        data-ocid="home_visit.bar"
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 shadow-2xl"
        style={{ backgroundColor: "#00984A" }}
      >
        <div className="flex flex-col">
          <span className="text-white/80 text-xs leading-tight">
            घरी येऊन टेस्ट करा!
          </span>
          <span className="text-white font-bold text-base">
            Book a Home Visit Now
          </span>
        </div>
        <button
          type="button"
          data-ocid="home_visit.primary_button"
          onClick={() =>
            openWhatsApp("नमस्कार! मला घरी येऊन टेस्ट करायची आहे. कृपया माहिती द्या.")
          }
          className="flex items-center gap-2 bg-[#00984a] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:bg-[#007a3d] transition-all active:scale-95"
        >
          📞 Book Now
        </button>
      </div>
    </div>
  );
}
