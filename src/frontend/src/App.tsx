import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  FileText,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Star,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const PHONE = "919356710760";
const WA_LINK = `https://wa.me/${PHONE}`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Booking form state
  const [bookName, setBookName] = useState("");
  const [bookPhone, setBookPhone] = useState("");
  const [bookTests, setBookTests] = useState("");
  const [bookTime, setBookTime] = useState("");
  const [bookAddress, setBookAddress] = useState("");

  // Inquiry form state
  const [inqName, setInqName] = useState("");
  const [inqPhone, setInqPhone] = useState("");
  const [inqMessage, setInqMessage] = useState("");

  function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    const msg = `नमस्कार, मला Home Collection Booking करायची आहे.\n\nनाव: ${bookName}\nफोन: ${bookPhone}\nतपासण्या: ${bookTests}\nवेळ: ${bookTime}\nपत्ता: ${bookAddress}`;
    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  }

  function handleInquiry(e: React.MouseEvent) {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(`नमस्कार!\n\nनाव: ${inqName}\nफोन: ${inqPhone}\nसंदेश: ${inqMessage}`)}`;
    window.open(whatsappUrl, "_blank");
  }

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Book", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ];

  const essentialTests = [
    { en: "Complete Blood Count (CBC)", mr: "संपूर्ण रक्त गणना", price: "₹120" },
    { en: "Blood Sugar (Fasting/PP)", mr: "रक्तातील साखर", price: "₹60" },
    { en: "Thyroid (TSH)", mr: "थायरॉईड", price: "₹200" },
    { en: "Liver Function Test (LFT)", mr: "यकृत कार्य चाचणी", price: "₹350" },
    {
      en: "Kidney Function Test (KFT)",
      mr: "मूत्रपिंड कार्य चाचणी",
      price: "₹350",
    },
    { en: "Lipid Profile", mr: "लिपिड प्रोफाईल", price: "₹350" },
    { en: "HbA1c", mr: "एचबीए१सी", price: "₹250" },
    { en: "Uric Acid", mr: "युरिक अॅसिड", price: "₹100" },
    { en: "Vitamin D", mr: "व्हिटॅमिन डी", price: "₹500" },
    { en: "Vitamin B12", mr: "व्हिटॅमिन बी१२", price: "₹400" },
    { en: "Urine Routine", mr: "मूत्र तपासणी", price: "₹80" },
    { en: "CRP (C-Reactive Protein)", mr: "सीआरपी", price: "₹300" },
  ];

  const whyCards = [
    {
      icon: <Home className="w-7 h-7" />,
      title: "Home Collection",
      desc: "Sample collection at your doorstep — no need to visit the lab.",
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "Quick Reports",
      desc: "Accurate reports delivered quickly via WhatsApp or in-person.",
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: "Affordable Prices",
      desc: "Quality diagnostics at the most reasonable prices in Nashik.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "All Days Open",
      desc: "Open 7 AM to 10 PM every day — including Sundays and holidays.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Experienced Staff",
      desc: "Trained and certified lab technicians with years of experience.",
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Accurate Results",
      desc: "Modern equipment ensuring precise and reliable test results.",
    },
  ];

  return (
    <div className="min-h-screen bg-background" id="home">
      {/* Meta tags */}
      <head>
        <meta
          name="google-site-verification"
          content="KwPUWleI7vzMQgrjEZGBHZ_8rKfx-uKBeimw1R1tTZo"
        />
        <meta
          name="google-site-verification"
          content="MgN_NljNN0kV1YlZycp0vHos7AbHhCLeJ7psa785Zg8"
        />
        <meta
          name="google-site-verification"
          content="xmltjmvs_z8Ncac7g5bLkyDtpw653oZRfo5FlQYFIzg"
        />
      </head>

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-primary shadow-red-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/assets/uploads/IMG-20251117-WA0006-1.jpg"
              alt="Sai Healthcare Logo"
              className="h-12 w-auto rounded object-contain bg-white p-0.5"
            />
            <span className="text-primary-foreground font-display font-bold text-xl leading-tight">
              Sai Healthcare
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid={`nav.${l.label.toLowerCase().replace(" ", "-")}.link`}
                className="text-primary-foreground/90 hover:text-primary-foreground px-3 py-2 rounded text-sm font-medium transition-colors hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.whatsapp.button"
              className="ml-2 flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary-foreground p-2"
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-primary-dark px-4 pb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-primary-foreground py-3 border-b border-white/10 text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        className="relative bg-primary text-primary-foreground py-20 md:py-32 px-4 overflow-hidden"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, white 0%, transparent 60%)",
          }}
        />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/70 mb-3 font-body">
              Nashik&apos;s Trusted Pathology Lab
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
              Sai Healthcare
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 font-body leading-relaxed">
              Accurate diagnostics, quick reports &amp; home collection — making
              quality healthcare affordable for every family in Nashik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                data-ocid="hero.book_collection.primary_button"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-4 rounded-full text-base transition-all hover:bg-white/90 hover:shadow-lg min-h-[50px]"
              >
                <Home className="w-5 h-5" />
                Book Home Collection
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp.button"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-full text-base transition-all hover:shadow-lg min-h-[50px]"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-white/80 text-sm font-body">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 7 AM – 10 PM, All Days
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" /> 9356710760
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Konark Nagar, Nashik
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/uploads/Creat-a-Profile-for-Sai-Healthcare-1.jpg"
              alt="Sai Healthcare"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/30 shadow-red-lg"
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              About Sai Healthcare
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Sai Healthcare is a trusted pathology laboratory in Nashik,
              dedicated to providing accurate and affordable diagnostic
              services. We serve patients across Konark Nagar and nearby areas
              with quality blood tests, health packages, and home collection
              facilities.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Our lab is equipped with modern instruments and operated by
              experienced, certified technicians. We believe that good
              healthcare should be accessible and affordable for everyone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-secondary rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold text-sm text-foreground">
                  7:00 AM – 10:00 PM
                </p>
                <p className="text-xs text-muted-foreground">All Days</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold text-sm text-foreground">
                  9356710760
                </p>
                <p className="text-xs text-muted-foreground">Call / WhatsApp</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold text-sm text-foreground">
                  Konark Nagar
                </p>
                <p className="text-xs text-muted-foreground">Nashik</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/uploads/IMG-20251117-WA0006-1.jpg"
              alt="Sai Healthcare Letterhead"
              className="rounded-xl shadow-red-md w-full max-w-sm object-contain border border-border"
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
              Our Services
            </h2>
            <p className="text-muted-foreground font-body">
              Comprehensive diagnostics at affordable prices
            </p>
          </div>

          {/* Health Packages */}
          <h3 className="text-2xl font-display font-bold text-primary mb-6">
            Health Packages
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Advance Package */}
            <Card className="border-2 border-primary shadow-red-md overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-display">
                      Advance Package
                    </CardTitle>
                    <p className="italic text-white/80 text-sm mt-1">
                      अॅडव्हान्स पॅकेज
                    </p>
                  </div>
                  <span className="text-2xl font-bold">₹1499/-</span>
                </div>
                <p className="text-white/85 text-sm mt-1">संपूर्ण आरोग्य तपासणी</p>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Tests Included:
                </p>
                <ul className="grid grid-cols-2 gap-1.5">
                  {[
                    "CBC",
                    "LFT",
                    "KFT",
                    "Lipid Profile",
                    "Thyroid (TSH)",
                    "Blood Sugar (Fasting & PP)",
                    "HbA1c",
                    "Uric Acid",
                    "Calcium",
                    "Vitamin D",
                    "Vitamin B12",
                    "Urine R/M",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${PHONE}?text=${encodeURIComponent("नमस्कार, मला Advance Package (₹1499) बद्दल माहिती हवी आहे.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="services.advance_package.button"
                  className="mt-5 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 px-4 rounded-full transition-colors w-full text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Book This Package
                </a>
              </CardContent>
            </Card>

            {/* Basic Package */}
            <Card className="border-2 border-border shadow-red-sm overflow-hidden">
              <CardHeader className="bg-muted">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-display text-primary">
                      Basic Package
                    </CardTitle>
                    <p className="italic text-muted-foreground text-sm mt-1">
                      बेसिक पॅकेज
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    ₹999/-
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  आवश्यक रक्त तपासण्या
                </p>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Tests Included:
                </p>
                <ul className="grid grid-cols-2 gap-1.5">
                  {[
                    "CBC",
                    "Blood Sugar (Fasting & PP)",
                    "LFT",
                    "KFT",
                    "Thyroid (TSH)",
                    "Urine R/M",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${PHONE}?text=${encodeURIComponent("नमस्कार, मला Basic Package (₹999) बद्दल माहिती हवी आहे.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="services.basic_package.button"
                  className="mt-5 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 px-4 rounded-full transition-colors w-full text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Book This Package
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Essentials Blood Tests */}
          <h3 className="text-2xl font-display font-bold text-primary mb-6">
            Essentials Blood Tests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {essentialTests.map((test, i) => (
              <Card
                key={test.en}
                className="text-center shadow-red-sm hover:shadow-red-md transition-shadow"
                data-ocid={`services.test.item.${i + 1}`}
              >
                <CardContent className="pt-5 pb-4">
                  <p className="font-semibold text-foreground text-sm leading-snug">
                    {test.en}
                  </p>
                  <p className="italic text-muted-foreground text-xs mt-1">
                    {test.mr}
                  </p>
                  <p className="text-primary font-bold text-lg mt-3">
                    {test.price}
                  </p>
                  <p className="text-green-600 text-xs mt-0.5">Offer Price</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="why" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
              Why Choose Sai Healthcare?
            </h2>
            <p className="text-muted-foreground font-body">आम्ही का निवडायचे?</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((c, i) => (
              <Card
                key={c.title}
                className="p-6 shadow-red-sm hover:shadow-red-md transition-shadow border border-border"
                data-ocid={`why.feature.item.${i + 1}`}
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {c.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {c.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOME COLLECTION BOOKING FORM ── */}
      <section id="booking" className="py-16 px-4 bg-primary">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
              Book Home Collection
            </h2>
            <p className="text-white/80 font-body">घरबसल्या तपासणी बुक करा</p>
          </div>
          <Card className="shadow-red-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleBooking} className="space-y-5">
                <div>
                  <Label htmlFor="bookName" className="text-sm font-medium">
                    Patient Name *
                  </Label>
                  <Input
                    id="bookName"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    placeholder="आपले नाव"
                    required
                    className="mt-1.5 h-12"
                    data-ocid="booking.name.input"
                  />
                </div>
                <div>
                  <Label htmlFor="bookPhone" className="text-sm font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="bookPhone"
                    type="tel"
                    value={bookPhone}
                    onChange={(e) => setBookPhone(e.target.value)}
                    placeholder="मोबाईल नंबर"
                    required
                    className="mt-1.5 h-12"
                    data-ocid="booking.phone.input"
                  />
                </div>
                <div>
                  <Label htmlFor="bookTests" className="text-sm font-medium">
                    Tests Required *
                  </Label>
                  <Textarea
                    id="bookTests"
                    value={bookTests}
                    onChange={(e) => setBookTests(e.target.value)}
                    placeholder="कोणत्या तपासण्या हव्या आहेत?"
                    required
                    className="mt-1.5 min-h-[90px]"
                    data-ocid="booking.tests.textarea"
                  />
                </div>
                <div>
                  <Label htmlFor="bookTime" className="text-sm font-medium">
                    Preferred Time Slot *
                  </Label>
                  <Select value={bookTime} onValueChange={setBookTime} required>
                    <SelectTrigger
                      className="mt-1.5 h-12"
                      data-ocid="booking.time.select"
                    >
                      <SelectValue placeholder="वेळ निवडा" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7AM-9AM">7:00 AM – 9:00 AM</SelectItem>
                      <SelectItem value="9AM-12PM">
                        9:00 AM – 12:00 PM
                      </SelectItem>
                      <SelectItem value="12PM-3PM">
                        12:00 PM – 3:00 PM
                      </SelectItem>
                      <SelectItem value="3PM-6PM">3:00 PM – 6:00 PM</SelectItem>
                      <SelectItem value="6PM-10PM">
                        6:00 PM – 10:00 PM
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bookAddress" className="text-sm font-medium">
                    Address *
                  </Label>
                  <Textarea
                    id="bookAddress"
                    value={bookAddress}
                    onChange={(e) => setBookAddress(e.target.value)}
                    placeholder="घराचा पत्ता"
                    required
                    className="mt-1.5 min-h-[80px]"
                    data-ocid="booking.address.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-13 bg-green-500 hover:bg-green-600 text-white font-bold text-base rounded-full gap-2"
                  data-ocid="booking.submit.button"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Booking via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── SEND AN INQUIRY ── */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
              Send an Inquiry
            </h2>
            <p className="text-muted-foreground font-body">
              चौकशी करा — आम्ही मदत करू
            </p>
          </div>
          <Card className="shadow-red-md">
            <CardContent className="pt-6">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="inqName" className="text-sm font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="inqName"
                    value={inqName}
                    onChange={(e) => setInqName(e.target.value)}
                    placeholder="आपले नाव"
                    className="mt-1.5 h-12"
                    data-ocid="contact.name.input"
                  />
                </div>
                <div>
                  <Label htmlFor="inqPhone" className="text-sm font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="inqPhone"
                    type="tel"
                    value={inqPhone}
                    onChange={(e) => setInqPhone(e.target.value)}
                    placeholder="मोबाईल नंबर"
                    className="mt-1.5 h-12"
                    data-ocid="contact.phone.input"
                  />
                </div>
                <div>
                  <Label htmlFor="inqMessage" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="inqMessage"
                    value={inqMessage}
                    onChange={(e) => setInqMessage(e.target.value)}
                    placeholder="आपला संदेश"
                    className="mt-1.5 min-h-[100px]"
                    data-ocid="contact.message.textarea"
                  />
                </div>
                <Button
                  onClick={handleInquiry}
                  className="w-full h-13 bg-green-500 hover:bg-green-600 text-white font-bold text-base rounded-full gap-2"
                  data-ocid="contact.send_inquiry.button"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Inquiry via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── GOOGLE MAPS ── */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-primary mb-2">
              Find Us
            </h2>
            <p className="text-muted-foreground font-body">आमचे ठिकाण</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-red-md border border-border">
            <iframe
              src="https://maps.google.com/maps?q=Sai+Healthcare+Konark+Nagar+Nashik&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sai Healthcare Location"
            />
          </div>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Shop No.1, Rutik Arcade, Konark Nagar, Nashik
              </p>
              <p className="text-muted-foreground text-sm mt-1 ml-6">
                शॉप नं.१, रुतिक आर्केड, कोणार्क नगर, नाशिक
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/uQ8MajFENCPZtdBz6"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="location.get_directions.button"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-5 py-3 rounded-full transition-colors whitespace-nowrap text-sm"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-3">
              Sai Healthcare
            </h3>
            <p className="text-white/75 text-sm font-body leading-relaxed">
              Your trusted pathology laboratory in Nashik. Accurate results,
              affordable prices.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-white/80 text-sm font-body">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 9356710760
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
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
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 text-sm transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-white/60 text-sm font-body">
          © {new Date().getFullYear()} Sai Healthcare. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white underline"
          >
            caffeine.ai
          </a>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.floating.button"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:shadow-xl"
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
      </a>
    </div>
  );
}
