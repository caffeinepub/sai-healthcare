import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Shield,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  // Home Collection Form
  const [colName, setColName] = useState("");
  const [colPhone, setColPhone] = useState("");
  const [colAddress, setColAddress] = useState("");
  const [colTest, setColTest] = useState("");
  const [colDate, setColDate] = useState("");

  // Inquiry Form
  const [inqName, setInqName] = useState("");
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
    <div className="min-h-screen" id="home">
      {/* ── STICKY HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-primary font-bold text-xl tracking-tight">
              <strong>SAI HEALTHCARE</strong>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid={`nav.${l.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                className="text-foreground hover:text-primary px-3 py-2 text-xs font-semibold tracking-wide transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#collection"
              data-ocid="nav.book_test.button"
              className="ml-3 bg-primary hover:bg-primary-dark text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
            >
              BOOK TEST NOW
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-foreground p-2"
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border px-4 pb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 border-b border-border text-sm font-semibold text-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#collection"
              className="mt-4 block text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-full text-sm"
              data-ocid="nav.mobile_book.link"
            >
              BOOK TEST NOW
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        aria-label="Hero"
        style={{
          background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
          minHeight: "85vh",
        }}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, white, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-white text-center md:text-left">
            <div className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest">
              YOUR HEALTH, OUR COMMITMENT
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-5">
              <strong>SAI HEALTHCARE</strong> —
              <br />
              <span className="text-yellow-300">जिथे आरोग्य सुरू होते</span>
              <br />
              Where Your Health Journey Begins
            </h1>
            <p className="text-white/85 text-base md:text-lg mb-3 leading-relaxed">
              All Types of Blood – Urine – Sputum Tests Available Here
            </p>
            <p className="text-yellow-300 font-semibold text-base mb-8">
              ✓ Free Home Collection Available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a
                href="#packages"
                data-ocid="hero.packages.primary_button"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Health Packages
              </a>
              <a
                href="#collection"
                data-ocid="hero.collection.secondary_button"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <Home className="w-4 h-4" />
                Book Home Collection
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-white/80 text-sm justify-center md:justify-start">
              <a
                href={`tel:+${PHONE}`}
                className="flex items-center gap-2 font-semibold text-yellow-300 hover:text-yellow-200"
              >
                <Phone className="w-4 h-4" /> 9356710760
              </a>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 7:00 AM – 10:00 PM, All Days
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Konark Nagar, Nashik
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section id="about" className="py-20 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-normal text-primary mb-3">
              About Us
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-5 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <strong>SAI HEALTHCARE</strong> is a trusted pathology laboratory
              in Nashik, committed to providing accurate and affordable
              diagnostic services to every family in the region.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Choose <strong>SAI HEALTHCARE</strong>?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Located at Shop No.1, Rutik Arcade, Konark Nagar, Nashik — we
              serve patients with modern lab equipment, trained technicians, and
              prompt report delivery. Whether you need a routine blood test or a
              comprehensive health package, we make quality healthcare
              accessible and affordable.
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
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose 3-col */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyFeatures.map((f, i) => (
              <div
                key={f.title}
                data-ocid={`about.feature.item.${i + 1}`}
                className="text-center p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-5">
                  {f.icon}
                </div>
                <h4 className="font-bold text-lg text-foreground mb-1">
                  {f.title}
                </h4>
                <p className="text-primary text-sm italic mb-3">{f.mr}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEALTH PACKAGES ── */}
      <section id="packages" className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-normal text-primary mb-3">
              Health Packages
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-5 rounded-full" />
            <p className="text-muted-foreground">
              Comprehensive health checkups at unbeatable prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Advance Package */}
            <Card
              className="overflow-hidden border-2 border-primary shadow-lg"
              data-ocid="packages.advance.card"
            >
              <CardHeader
                className="pb-4"
                style={{
                  background: "linear-gradient(135deg, #16a34a, #15803d)",
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl font-bold">
                      Advance Health Checkup
                    </CardTitle>
                    <p className="text-white/80 text-sm italic mt-1">
                      अ‍ॅडव्हान्स हेल्थ चेकअप | संपूर्ण आरोग्य तपासणी
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-white/60 line-through text-sm">
                    MRP ₹5000/-
                  </span>
                  <span className="text-white text-3xl font-bold">₹1499/-</span>
                </div>
                <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full inline-block mt-2">
                  SAVE ₹3501/-
                </div>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Tests Included ({advanceTests.length}):
                </p>
                <ul className="space-y-2 mb-6">
                  {advanceTests.map((t) => (
                    <li
                      key={t.name}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">{t.name}</span>
                        <p className="text-xs text-muted-foreground italic">
                          {t.desc}
                        </p>
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
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full gap-2"
                  data-ocid="packages.advance.primary_button"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Now on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Basic Package */}
            <Card
              className="overflow-hidden border-2 border-border shadow-lg"
              data-ocid="packages.basic.card"
            >
              <CardHeader className="pb-4 bg-muted">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-primary text-xl font-bold">
                      Basic Health Checkup
                    </CardTitle>
                    <p className="text-muted-foreground text-sm italic mt-1">
                      बेसिक हेल्थ चेकअप | मूलभूत आरोग्य तपासणी
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-muted-foreground line-through text-sm">
                    MRP ₹3000/-
                  </span>
                  <span className="text-primary text-3xl font-bold">
                    ₹999/-
                  </span>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full inline-block mt-2">
                  SAVE ₹2001/-
                </div>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Tests Included ({basicTests.length}):
                </p>
                <ul className="space-y-2 mb-6">
                  {basicTests.map((t) => (
                    <li
                      key={t.name}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">{t.name}</span>
                        <p className="text-xs text-muted-foreground italic">
                          {t.desc}
                        </p>
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
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full gap-2"
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

      {/* ── TESTS + BOOKING SPLIT ── */}
      <section id="tests" className="py-20 px-4 bg-lime-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-normal text-primary mb-3">
              Essential Blood Tests
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-5 rounded-full" />
            <p className="text-muted-foreground">
              Individual tests at offer prices — with Marathi names
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Pricing Table */}
            <div className="lg:col-span-3" id="test-menu">
              <div className="rounded-2xl border border-border overflow-hidden shadow-lg">
                <div className="bg-primary px-6 py-4">
                  <h3 className="text-white font-bold text-lg">
                    Essential Blood Test Pricing
                  </h3>
                  <p className="text-white/70 text-sm">
                    आवश्यक रक्त तपासणी किमती
                  </p>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted border-b border-border">
                      <th className="text-left px-5 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wide">
                        Test Name
                      </th>
                      <th className="text-center px-3 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wide">
                        MRP
                      </th>
                      <th className="text-center px-3 py-3 text-xs font-bold text-primary uppercase tracking-wide">
                        Offer
                      </th>
                      <th className="px-3 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {essentialTests.map((test, i) => (
                      <tr
                        key={test.en}
                        data-ocid={`tests.row.item.${i + 1}`}
                        className={i % 2 === 0 ? "bg-white" : "bg-secondary/50"}
                      >
                        <td className="px-5 py-3">
                          <div className="font-medium text-sm text-foreground">
                            {test.en}
                          </div>
                          <div className="text-xs text-muted-foreground italic">
                            {test.mr}
                          </div>
                        </td>
                        <td className="px-3 py-3 text-center">
                          <span className="text-muted-foreground line-through text-xs">
                            ₹{test.mrp}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-center">
                          <span className="text-primary font-bold text-sm">
                            ₹{test.offer}
                          </span>
                        </td>
                        <td className="px-3 py-3">
                          <button
                            type="button"
                            onClick={() =>
                              openWhatsApp(
                                `नमस्कार! मला ${test.en} Test Book करायचे आहे. Offer Price: ₹${test.offer}/-`,
                              )
                            }
                            data-ocid={`tests.book.button.${i + 1}`}
                            className="bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                          >
                            Book
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Home Collection Form */}
            <div className="lg:col-span-2" id="collection">
              <Card className="border-2 border-primary/20 shadow-lg sticky top-24">
                <CardHeader
                  className="pb-4"
                  style={{
                    background: "linear-gradient(135deg, #16a34a, #15803d)",
                  }}
                >
                  <CardTitle className="text-white text-xl font-bold">
                    Home Collection Booking
                  </CardTitle>
                  <p className="text-white/80 text-sm">घरपोच संकलन बुकिंग</p>
                </CardHeader>
                <CardContent className="pt-5">
                  <form onSubmit={handleCollection} className="space-y-4">
                    <div>
                      <Label
                        htmlFor="colName"
                        className="text-sm font-semibold"
                      >
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
                      <Label
                        htmlFor="colPhone"
                        className="text-sm font-semibold"
                      >
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
                    <div>
                      <Label
                        htmlFor="colAddress"
                        className="text-sm font-semibold"
                      >
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
                      <Label
                        htmlFor="colTest"
                        className="text-sm font-semibold"
                      >
                        Test / Package *
                      </Label>
                      <Input
                        id="colTest"
                        value={colTest}
                        onChange={(e) => setColTest(e.target.value)}
                        placeholder="कोणती तपासणी / पॅकेज"
                        required
                        className="mt-1"
                        data-ocid="collection.test.input"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="colDate"
                        className="text-sm font-semibold"
                      >
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
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full gap-2"
                      data-ocid="collection.submit.button"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send Booking via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT + MAP ── */}
      <section id="contact" className="py-20 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-normal text-primary mb-3">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-5 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info + Inquiry */}
            <div className="space-y-8">
              <Card className="p-6 shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-5">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
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
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground text-sm">
                        Shop No.1, Rutik Arcade, Konark Nagar, Nashik
                      </p>
                      <p className="text-muted-foreground text-sm italic">
                        शॉप क्र.१, रुतिक आर्केड, कोनार्क नगर, नाशिक
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground text-sm">
                        7:00 AM – 10:00 PM, All Days (सर्व दिवस)
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp("नमस्कार! SAI HEALTHCARE बद्दल माहिती हवी आहे.")
                  }
                  data-ocid="contact.whatsapp.button"
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-full transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </button>
              </Card>

              {/* Inquiry Form */}
              <Card className="p-6 shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-5">
                  Send an Inquiry
                </h3>
                <form onSubmit={handleInquiry} className="space-y-4">
                  <div>
                    <Label htmlFor="inqName" className="text-sm font-semibold">
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
                    <Label htmlFor="inqPhone" className="text-sm font-semibold">
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
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold rounded-full gap-2"
                    data-ocid="inquiry.submit.button"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send Inquiry via WhatsApp
                  </Button>
                </form>
              </Card>
            </div>

            {/* Google Maps */}
            <div>
              <Card
                className="overflow-hidden shadow-lg h-full"
                data-ocid="contact.map.card"
              >
                <div className="bg-primary px-6 py-4">
                  <h3 className="text-white font-bold text-lg">
                    Find Us on Google Maps
                  </h3>
                  <p className="text-white/70 text-sm">आमचे ठिकाण शोधा</p>
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=Sai+Healthcare+Konark+Nagar+Nashik&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SAI HEALTHCARE Location Map"
                />
                <div className="p-5 border-t border-border">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        Shop No.1, Rutik Arcade, Konark Nagar, Nashik
                      </p>
                      <p className="text-muted-foreground text-xs italic">
                        शॉप क्र.१, रुतिक आर्केड, कोनार्क नगर, नाशिक
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/uQ8MajFENCPZtdBz6"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.directions.button"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-full transition-colors text-sm w-full"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="text-white py-14 px-4"
        style={{
          background: "linear-gradient(135deg, #14532d 0%, #052e16 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted pathology laboratory in Nashik — accurate results,
              affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/65 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white/90">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/50" />
                9356710760
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/50 mt-0.5" />
                <span>
                  Shop No.1, Rutik Arcade,
                  <br />
                  Konark Nagar, Nashik
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/50" />
                7:00 AM – 10:00 PM, All Days
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white/90">Connect</h4>
            <button
              type="button"
              onClick={() =>
                openWhatsApp("नमस्कार! SAI HEALTHCARE बद्दल माहिती हवी आहे.")
              }
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors mb-3"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </button>
            <p className="text-white/50 text-xs">
              सर्व दिवस उपलब्ध
              <br />
              Available All Days
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 text-center text-white/45 text-xs">
          © {new Date().getFullYear()} <strong>SAI HEALTHCARE</strong>. All
          rights reserved. | Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/65 hover:text-white underline"
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
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
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
    </div>
  );
}
