import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Activity,
  BadgeCheck,
  Banknote,
  ChevronRight,
  Clock,
  Droplet,
  FlaskConical,
  Home,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Shield,
  Tag,
  TestTube,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "./hooks/useQueries";

const WHATSAPP_NUMBER = "919356710760";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Sai Healthcare! I would like to enquire about your services.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const SERVICES = [
  {
    icon: Droplet,
    name: "Complete Blood Count (CBC)",
    description:
      "Comprehensive analysis of red cells, white cells, and platelets to assess overall health.",
    marathiDescription:
      "लाल पेशी, पांढऱ्या पेशी आणि प्लेटलेट्सचे सविस्तर विश्लेषण करून एकूण आरोग्याचे मूल्यांकन.",
  },
  {
    icon: Activity,
    name: "Blood Sugar Testing",
    description:
      "Fasting, post-prandial, and random glucose tests for diabetes monitoring and screening.",
    marathiDescription:
      "मधुमेहाच्या तपासणीसाठी उपवास, जेवणानंतर आणि कोणत्याही वेळी रक्तातील साखरेची चाचणी.",
  },
  {
    icon: FlaskConical,
    name: "Lipid Profile",
    description:
      "Cholesterol and triglyceride panel to evaluate cardiovascular risk and heart health.",
    marathiDescription:
      "हृदयविकाराचा धोका ओळखण्यासाठी कोलेस्टेरॉल व ट्रायग्लिसेराइडची तपासणी.",
  },
  {
    icon: FlaskConical,
    name: "Liver Function Test (LFT)",
    description:
      "Enzyme and protein levels to assess liver health, function, and detect disease.",
    marathiDescription:
      "यकृताचे आरोग्य, कार्य आणि आजार शोधण्यासाठी एन्झाइम व प्रथिनांची पातळी तपासणे.",
  },
  {
    icon: Microscope,
    name: "Kidney Function Test (KFT)",
    description:
      "Creatinine, urea, and uric acid levels to monitor kidney performance and health.",
    marathiDescription:
      "मूत्रपिंडाच्या कार्यक्षमतेसाठी क्रिएटिनिन, युरिया आणि यूरिक अॅसिडची पातळी तपासणे.",
  },
  {
    icon: Activity,
    name: "Thyroid Profile",
    description:
      "T3, T4, and TSH measurement for complete thyroid function evaluation and monitoring.",
    marathiDescription: "थायरॉइडच्या संपूर्ण मूल्यांकनासाठी T3, T4 आणि TSH मोजमाप.",
  },
  {
    icon: TestTube,
    name: "Urine Routine & Microscopy",
    description:
      "Complete urine examination including physical, chemical, and microscopic analysis.",
    marathiDescription: "लघवीची शारीरिक, रासायनिक आणि सूक्ष्मदर्शी तपासणी.",
  },
  {
    icon: Droplet,
    name: "HbA1c",
    description:
      "3-month average blood sugar measurement, essential for long-term diabetes management.",
    marathiDescription:
      "दीर्घकालीन मधुमेह व्यवस्थापनासाठी ३ महिन्यांची सरासरी रक्तातील साखर मोजमाप.",
  },
  {
    icon: Shield,
    name: "Serology Tests",
    description:
      "HIV, HBsAg, and VDRL screening for infectious disease detection and monitoring.",
    marathiDescription:
      "एचआयव्ही, एचबीएसएजी आणि व्हीडीआरएल तपासणी संसर्गजन्य आजारांसाठी.",
  },
  {
    icon: Home,
    name: "Home Sample Collection",
    description:
      "Convenient doorstep sample collection by trained phlebotomists at your schedule.",
    marathiDescription: "प्रशिक्षित कर्मचाऱ्यांद्वारे आपल्या घरी सोयीस्करपणे नमुना संकलन.",
  },
];

const HEALTH_PACKAGES = [
  {
    name: "Advance Health Checkup",
    marathiName: "अॅडव्हान्स आरोग्य तपासणी",
    marathiDesc:
      "संपूर्ण आरोग्य तपासणीसाठी १० महत्त्वाच्या चाचण्या एकत्र — लोह, यकृत, लिपिड, थायरॉइड, किडनी, सीबीसी, एचबीए१सी, व्हिटॅमिन D, B12 आणि इलेक्ट्रोलाइट.",
    mrp: "5000",
    offer: "1499",
    color: "oklch(0.35 0.09 210)",
    badge: "Best Value",
    tests: [
      "Iron Studies",
      "LFT (Liver Function Test)",
      "Lipid Profile",
      "Thyroid Profile",
      "Kidney Profile",
      "CBC-(28)",
      "HbA1c",
      "25 OH Vitamin D",
      "Vitamin B12",
      "Serum Electrolyte Profile",
    ],
    marathiTests: [
      "आयर्न स्टडीज (लोह तपासणी)",
      "एलएफटी (यकृत कार्य चाचणी)",
      "लिपिड प्रोफाइल",
      "थायरॉइड प्रोफाइल",
      "किडनी प्रोफाइल",
      "सीबीसी-(२८)",
      "एचबीए१सी",
      "२५ ओएच व्हिटॅमिन डी",
      "व्हिटॅमिन बी१२",
      "सीरम इलेक्ट्रोलाइट प्रोफाइल",
    ],
  },
  {
    name: "Basic Health Checkup",
    marathiName: "बेसिक आरोग्य तपासणी",
    marathiDesc:
      "दैनंदिन आरोग्य देखरेखीसाठी ६ आवश्यक चाचण्या — TSH, सीबीसी, साखर, किडनी, लिपिड आणि यकृत.",
    mrp: "3000",
    offer: "999",
    color: "oklch(0.45 0.13 150)",
    badge: "Popular",
    tests: [
      "TSH",
      "CBC-(28)",
      "Sugar Fasting",
      "Kidney Profile",
      "Lipid Profile",
      "LFT (Liver Function Test)",
    ],
    marathiTests: [
      "टीएसएच",
      "सीबीसी-(२८)",
      "साखर (उपाशी)",
      "किडनी प्रोफाइल",
      "लिपिड प्रोफाइल",
      "एलएफटी (यकृत कार्य चाचणी)",
    ],
  },
];

const ESSENTIALS_TESTS = [
  { name: "CBC-(28)", mrp: "200", offer: "169", marathiName: "सीबीसी-(२८)" },
  {
    name: "Lipid Profile",
    mrp: "799",
    offer: "299",
    marathiName: "लिपिड प्रोफाइल",
  },
  {
    name: "Thyroid Profile",
    mrp: "500",
    offer: "299",
    marathiName: "थायरॉइड प्रोफाइल",
  },
  {
    name: "LFT (Liver Function Test)",
    mrp: "1045",
    offer: "399",
    marathiName: "एलएफटी (यकृत कार्य चाचणी)",
  },
  {
    name: "Kidney Profile",
    mrp: "800",
    offer: "399",
    marathiName: "किडनी प्रोफाइल",
  },
  {
    name: "HbA1c (Whole Blood)",
    mrp: "500",
    offer: "299",
    marathiName: "एचबीए१सी (संपूर्ण रक्त)",
  },
  { name: "Vitamin B12", mrp: "1200", offer: "499" },
  { name: "25 OH Vitamin D", mrp: "1400", offer: "699" },
  { name: "Serum Creatinine", mrp: "220", offer: "99" },
  { name: "Calcium", mrp: "160", offer: "99" },
  { name: "Uric Acid", mrp: "220", offer: "99" },
  { name: "Urea", mrp: "165", offer: "99" },
];

const WHY_US = [
  {
    icon: BadgeCheck,
    title: "Accurate Reports",
    description:
      "State-of-the-art equipment and ISO-aligned quality standards ensure highly precise diagnostic results every time.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Most routine tests reported within 24 hours. Urgent reports available on priority basis.",
  },
  {
    icon: Home,
    title: "Home Collection",
    description:
      "Book a home visit and our trained phlebotomists collect samples from the comfort of your home.",
  },
  {
    icon: Banknote,
    title: "Affordable Pricing",
    description:
      "Transparent, competitive pricing with no hidden charges. Quality diagnostics accessible to all.",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Offers", href: "#offers" },
  { label: "Why Us", href: "#why-us" },
  { label: "Book Home", href: "#home-collection" },
  { label: "Contact", href: "#contact" },
];

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.504L4 29l7.724-1.809A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10S21.523 25 16 25c-1.91 0-3.696-.535-5.217-1.463l-.373-.23-4.585 1.073 1.104-4.46-.245-.386A9.953 9.953 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.3 5.5c-.2 0-.52.075-.795.375-.274.3-1.045 1.02-1.045 2.488s1.07 2.887 1.22 3.087c.15.2 2.07 3.263 5.08 4.45 2.51.99 3.012.793 3.554.743.542-.05 1.747-.713 1.993-1.403.246-.69.246-1.28.172-1.403-.075-.124-.274-.2-.574-.35-.3-.15-1.747-.863-2.02-.963-.272-.1-.47-.15-.67.15-.198.3-.772.963-.946 1.163-.174.2-.348.225-.648.075-.3-.15-1.265-.466-2.41-1.485-.891-.793-1.493-1.773-1.668-2.073-.174-.3-.018-.463.131-.612.134-.134.3-.35.45-.524.15-.175.2-.3.3-.5.1-.2.05-.374-.025-.524-.075-.15-.66-1.618-.91-2.213-.24-.578-.487-.5-.67-.51-.174-.008-.374-.01-.574-.01z" />
    </svg>
  );
}

const TIME_SLOTS = [
  "Morning 7AM–10AM",
  "Afternoon 11AM–2PM",
  "Evening 3PM–6PM",
  "Night 7PM–10PM",
];

const TEST_OPTIONS = [
  "CBC - Complete Blood Count",
  "Lipid Profile",
  "Blood Sugar (Fasting)",
  "HbA1c",
  "Thyroid Profile (T3/T4/TSH)",
  "Vitamin D",
  "Vitamin B12",
  "Liver Function Test",
  "Kidney Function Test",
  "Basic Health Package ₹999",
  "Advance Health Package ₹1499",
  "Other",
];

function HomeCollectionForm() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [date, setDate] = React.useState("");
  const [timeSlot, setTimeSlot] = React.useState("");
  const [test, setTest] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Home Collection Booking Request*\n\nPatient Name: ${name}\nPhone: ${phone}\nAddress: ${address}\nPreferred Date: ${date}\nTime Slot: ${timeSlot}\nTest/Service: ${test}`,
    );
    window.open(`https://wa.me/919356710760?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        data-ocid="home-collection.success_state"
        className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-10 text-center"
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
          Booking Sent!
        </h3>
        <p className="text-muted-foreground mb-6">
          Your booking details have been sent via WhatsApp. We will confirm your
          slot shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          data-ocid="home-collection.secondary_button"
          className="min-h-[44px] px-6"
        >
          Book Another
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-5 sm:p-8 md:p-10 shadow-sm space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="hc-name">
            Patient Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="hc-name"
            data-ocid="home-collection.input"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="min-h-[44px]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="hc-phone">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="hc-phone"
            type="tel"
            data-ocid="home-collection.input"
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit phone number"
            className="min-h-[44px]"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="hc-address">
          Address <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="hc-address"
          data-ocid="home-collection.textarea"
          placeholder="Full address for home collection"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          rows={3}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="hc-date">
            Preferred Date <span className="text-destructive">*</span>
          </Label>
          <Input
            id="hc-date"
            type="date"
            data-ocid="home-collection.input"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="min-h-[44px]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="hc-time">
            Preferred Time Slot <span className="text-destructive">*</span>
          </Label>
          <select
            id="hc-time"
            data-ocid="home-collection.select"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select a time slot</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="hc-test">
          Test / Service <span className="text-destructive">*</span>
        </Label>
        <select
          id="hc-test"
          data-ocid="home-collection.select"
          value={test}
          onChange={(e) => setTest(e.target.value)}
          required
          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select a test or service</option>
          {TEST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full min-h-[48px] text-base"
        data-ocid="home-collection.submit_button"
      >
        📲 Send Booking via WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Your details will be sent to our team on WhatsApp. We'll confirm your
        appointment shortly.
      </p>
    </motion.form>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const submitInquiry = useSubmitInquiry();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitInquiry.mutateAsync({
        name: form.name,
        phoneNumber: form.phone,
        email: form.email,
        message: form.message,
      });
      toast.success("Inquiry submitted! We'll contact you shortly.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error("Failed to submit. Please call us directly.");
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Toaster position="top-right" />

      {/* WhatsApp Floating Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.primary_button"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bc5a] text-white rounded-full shadow-lg px-4 py-3 font-semibold text-sm transition-colors min-h-[48px]"
        style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.45)" }}
      >
        <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
        <span className="hidden sm:inline">Chat with us</span>
      </motion.a>

      {/* Sticky Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-teal-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 sm:gap-3 group"
              data-ocid="nav.link"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                <img
                  src="/assets/uploads/Creat-a-Profile-for-Sai-Healthcare-1.jpg"
                  alt="Sai Healthcare Logo"
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <div>
                <div className="text-sm sm:text-base font-display font-700 text-primary-dark leading-tight">
                  Sai Healthcare
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground tracking-wide uppercase">
                  Pathology Lab · Nashik
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" data-ocid="nav.primary_button">
                <Button
                  size="sm"
                  className="ml-2 bg-primary hover:bg-primary-dark text-white font-semibold"
                >
                  Book a Test
                </Button>
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden p-2.5 rounded-md text-foreground hover:bg-secondary min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border overflow-hidden shadow-lg"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid="nav.link"
                    className="px-4 py-3.5 text-sm font-medium text-foreground/70 hover:text-primary rounded-md hover:bg-secondary active:bg-secondary/80 min-h-[44px] flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="w-full mt-2 mb-1 bg-primary hover:bg-primary-dark text-white font-semibold min-h-[48px]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book a Test
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.25 0.08 210) 0%, oklch(0.35 0.1 205) 40%, oklch(0.48 0.12 198) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('/assets/generated/hero-bg.dim_1920x700.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs sm:text-sm font-medium mb-5 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Trusted Pathology Lab in Nashik
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.08] mb-5 sm:mb-6">
                Accurate Diagnostics,
                <br />
                <span style={{ color: "oklch(0.88 0.08 185)" }}>
                  Trusted Results
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-3 sm:mb-4 font-light tracking-wide">
                Service &nbsp;|&nbsp; Quality &nbsp;|&nbsp; Integrity
              </p>
              <p className="text-sm sm:text-base text-white/55 max-w-2xl mx-auto mb-8 sm:mb-10">
                Comprehensive pathology testing with precision instruments,
                compassionate care, and reports you can trust — available at our
                lab or at your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                <a
                  href="#contact"
                  data-ocid="hero.primary_button"
                  className="block sm:inline-block"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-bold px-6 sm:px-8 py-6 text-base shadow-lg shadow-accent/30 gap-2 min-h-[52px]"
                  >
                    Book a Test <ChevronRight className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href="#packages"
                  data-ocid="hero.secondary_button"
                  className="block sm:inline-block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-6 text-base gap-2 bg-transparent min-h-[52px]"
                  >
                    <Tag className="w-4 h-4" /> View Packages
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto"
            >
              {[
                ["50+", "Tests Available"],
                ["24hr", "Report Delivery"],
                ["100%", "Trusted Results"],
              ].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-display">
                    {val}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/55 mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 60"
              aria-hidden="true"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
                fill="oklch(0.98 0.005 200)"
              />
            </svg>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                  About Us
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-5 sm:mb-6 leading-tight">
                  Nashik's Trusted Pathology Laboratory
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sai Healthcare is a modern pathology and diagnostic centre
                  located in the heart of Konark Nagar, Nashik. Established with
                  the mission of making accurate diagnostics accessible to every
                  household, we bring together advanced technology and
                  experienced professionals.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We believe that timely and precise reports are the cornerstone
                  of good healthcare. Our laboratory maintains the highest
                  standards of quality control, ensuring every result you
                  receive is reliable, clear, and delivered with the care your
                  health deserves.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "NABL Quality Standards",
                    "Certified Lab Technicians",
                    "Digital Reports",
                    "Home Collection",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mt-6 md:mt-0"
              >
                <div
                  className="rounded-2xl overflow-hidden shadow-teal-lg relative"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.35 0.09 210), oklch(0.51 0.12 200))",
                  }}
                >
                  <div className="p-6 sm:p-8">
                    <img
                      src="/assets/uploads/Creat-a-Profile-for-Sai-Healthcare-1.jpg"
                      alt="Sai Healthcare Profile"
                      className="w-full rounded-xl shadow-lg object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-accent text-white rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg">
                  <div className="text-xl sm:text-2xl font-bold font-display">
                    Since
                  </div>
                  <div className="text-sm font-medium">2021</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="py-12 sm:py-16 md:py-20"
          style={{ background: "oklch(0.96 0.01 200)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Our Services
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Comprehensive Diagnostic Tests
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                From routine blood work to specialized panels — we offer a full
                range of pathology and diagnostic services under one roof.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    data-ocid={`services.item.${i + 1}`}
                    className="bg-white rounded-xl p-4 sm:p-5 shadow-teal-sm hover:shadow-teal-md transition-all duration-300 group border border-border hover:border-primary/30 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-2 leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    {service.marathiDescription && (
                      <p className="text-xs text-muted-foreground italic mt-1 leading-relaxed">
                        {service.marathiDescription}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Health Packages */}
        <section
          id="packages"
          className="py-12 sm:py-16 md:py-20 bg-background"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Health Packages
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Complete Health Checkup Packages
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                Affordable bundled health packages designed to give you a
                complete picture of your health — at unbeatable prices.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {HEALTH_PACKAGES.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  data-ocid={`packages.item.${i + 1}`}
                  className="relative bg-white rounded-2xl shadow-teal-md border border-border overflow-hidden"
                >
                  {/* Header */}
                  <div
                    className="px-5 sm:px-6 py-4 sm:py-5 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${pkg.color}, oklch(0.55 0.14 195))`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-semibold uppercase tracking-widest mb-2">
                          {pkg.badge}
                        </span>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-tight">
                          {pkg.name}
                        </h3>
                        {pkg.marathiName && (
                          <p className="text-white/80 text-sm font-medium mt-0.5">
                            {pkg.marathiName}
                          </p>
                        )}
                        <p className="text-white/70 text-xs mt-1">
                          {pkg.tests.length} tests included
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-white/60 text-xs line-through">
                          MRP ₹{pkg.mrp}/-
                        </div>
                        <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                          ₹{pkg.offer}/-
                        </div>
                        <div className="text-yellow-300 text-xs font-semibold">
                          Save ₹
                          {(
                            Number.parseInt(pkg.mrp) -
                            Number.parseInt(pkg.offer)
                          ).toLocaleString()}
                          /-
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tests List */}
                  <div className="px-5 sm:px-6 py-4 sm:py-5">
                    {pkg.marathiDesc && (
                      <p className="text-xs text-muted-foreground italic mb-4 leading-relaxed">
                        {pkg.marathiDesc}
                      </p>
                    )}
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Tests Included
                    </p>
                    <ul className="space-y-2 mb-5 sm:mb-6">
                      {pkg.tests.map((testItem, ti) => (
                        <li
                          key={testItem}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          <span>
                            {testItem}
                            {pkg.marathiTests?.[ti] && (
                              <span className="block text-xs text-muted-foreground italic">
                                {pkg.marathiTests[ti]}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact">
                      <Button
                        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold gap-2 min-h-[48px]"
                        data-ocid={`packages.primary_button.${i + 1}`}
                      >
                        Book This Package <ChevronRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Essentials Blood Test Offers */}
        <section
          id="offers"
          className="py-12 sm:py-16 md:py-20"
          style={{ background: "oklch(0.96 0.01 200)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs uppercase tracking-widest mb-4">
                <Zap className="w-3.5 h-3.5" /> Special Offers
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Essentials Blood Test — Offer Prices
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                Limited-time offer prices on the most commonly requested blood
                tests. Free home collection available.
              </p>
            </motion.div>

            {/* Offer Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.25 0.08 210), oklch(0.40 0.12 200))",
              }}
            >
              <div className="text-white text-center sm:text-left">
                <div className="font-display font-bold text-lg">
                  Free Home Collection
                </div>
                <div className="text-white/70 text-sm">
                  Any Enquiry — Call:{" "}
                  <span className="text-yellow-300 font-bold">9356710760</span>
                </div>
              </div>
              <div className="text-white/80 text-sm text-center">
                All Types of Blood · Urine · Sputum Tests Available
              </div>
              <a href="tel:+919356710760" className="w-full sm:w-auto">
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold gap-2 flex-shrink-0 w-full sm:w-auto min-h-[44px]">
                  <Phone className="w-4 h-4" /> Call Now
                </Button>
              </a>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {ESSENTIALS_TESTS.map((essentialTest, i) => (
                <motion.div
                  key={essentialTest.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  data-ocid={`offers.item.${i + 1}`}
                  className="bg-white rounded-xl border border-border shadow-teal-sm hover:shadow-teal-md transition-all flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 gap-3 group hover:border-accent/30 min-h-[64px]"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <TestTube className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm text-foreground leading-snug">
                        {essentialTest.name}
                      </div>
                      {essentialTest.marathiName && (
                        <div className="text-xs text-muted-foreground mt-0.5 leading-tight">
                          {essentialTest.marathiName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-muted-foreground text-xs line-through">
                      ₹{essentialTest.mrp}/-
                    </div>
                    <div className="text-accent font-display font-bold text-base">
                      ₹{essentialTest.offer}/-
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-6 sm:mt-8"
            >
              <a href="#contact" className="block sm:inline-block">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold px-8 gap-2 min-h-[48px]"
                  data-ocid="offers.primary_button"
                >
                  Book an Offer Test <ChevronRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why-us" className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Quality You Can Count On
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                At Sai Healthcare, we don't just run tests — we deliver peace of
                mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {WHY_US.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-teal-sm border border-border text-center group hover:shadow-teal-md transition-all"
                  >
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.35 0.09 210), oklch(0.51 0.12 200))",
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Home Collection */}
        <section
          id="home-collection"
          className="py-12 sm:py-16 md:py-20 bg-background"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Home Collection
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Book a Home Sample Collection
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                Our trained phlebotomists will visit your home at your preferred
                time slot to collect samples — fast, safe, and convenient.
              </p>
            </motion.div>
            <HomeCollectionForm />
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-12 sm:py-16 md:py-20"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.96 0.01 200) 0%, oklch(0.93 0.015 200) 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Contact Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                Book a test, ask about a service, or request a home sample
                collection. We're here to help.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-teal-md p-5 sm:p-8 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-5 sm:mb-6">
                    Our Location & Contact
                  </h3>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-1">
                          Address
                        </div>
                        <div className="text-muted-foreground text-sm leading-relaxed">
                          Shop No.1, Rutik Arcade,
                          <br />
                          Near Maheshwari Super Shopee,
                          <br />
                          Konark Nagar, Adgaon Shivar,
                          <br />
                          Nashik — 422 003
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 items-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-1">
                          Phone
                        </div>
                        <a
                          href="tel:+919356710760"
                          className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
                        >
                          +91 93567 10760
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 items-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-1">
                          Email
                        </div>
                        <a
                          href="mailto:saihealthcare62021@gmail.com"
                          className="text-primary hover:text-primary-dark text-sm font-medium transition-colors break-all"
                        >
                          saihealthcare62021@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp contact row */}
                    <div className="flex gap-3 sm:gap-4 items-center">
                      <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-1">
                          WhatsApp
                        </div>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:text-[#20bc5a] text-sm font-medium transition-colors"
                        >
                          +91 93567 10760
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.35 0.09 210), oklch(0.51 0.12 200))",
                    }}
                  >
                    <p className="text-white text-sm text-center font-medium">
                      🕐 Lab Hours: All Days, 7:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-teal-md p-5 sm:p-8 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-5 sm:mb-6">
                    Send an Inquiry
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          required
                          data-ocid="contact.input"
                          className="border-input focus:border-primary min-h-[44px]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="10-digit number"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, phone: e.target.value }))
                          }
                          required
                          data-ocid="contact.input"
                          className="border-input focus:border-primary min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        data-ocid="contact.input"
                        className="border-input focus:border-primary min-h-[44px]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        required
                        rows={4}
                        data-ocid="contact.textarea"
                        className="border-input focus:border-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitInquiry.isPending}
                      data-ocid="contact.submit_button"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 text-base gap-2 min-h-[52px]"
                    >
                      {submitInquiry.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Send Inquiry <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    {submitInquiry.isSuccess && (
                      <div
                        data-ocid="contact.success_state"
                        className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm text-center"
                      >
                        Your inquiry has been sent! We'll be in touch soon.
                      </div>
                    )}
                    {submitInquiry.isError && (
                      <div
                        data-ocid="contact.error_state"
                        className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm text-center"
                      >
                        Could not submit. Please call us at +91 93567 10760.
                      </div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 sm:mt-10 rounded-2xl overflow-hidden shadow-teal-md border border-border"
              data-ocid="contact.map_marker"
            >
              <iframe
                title="Sai Healthcare Location"
                src="https://maps.google.com/maps?q=20.021471,73.847043&z=17&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[240px] sm:h-[320px] md:h-[380px]"
              />
            </motion.div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/uQ8MajFENCPZtdBz6"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.primary_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white shadow-md min-h-[48px] text-sm sm:text-base"
                style={{ background: "oklch(0.55 0.18 208)" }}
              >
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-center gap-1">
                <span>
                  📍 Shop No.1, Rutik Arcade, Konark Nagar, Nashik — 422 003
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                शॉप नं.१, रुतिक आर्केड, कोणार्क नगर, नाशिक — ४२२ ००३
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="text-white py-10 sm:py-12"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.07 215), oklch(0.30 0.09 208))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src="/assets/uploads/Creat-a-Profile-for-Sai-Healthcare-1.jpg"
                    alt="Sai Healthcare"
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-white">
                    Sai Healthcare
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wide">
                    Pathology Lab · Nashik
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Service · Quality · Integrity
              </p>
              <p className="text-white/50 text-xs mt-2 leading-relaxed">
                Providing accurate diagnostic services to the Nashik community
                with compassion and precision.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-white mb-4">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-1 sm:gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/60 hover:text-white transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-display font-semibold text-white mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40" />
                  <span>
                    Shop No.1, Rutik Arcade, Konark Nagar, Nashik — 422 003
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone className="w-4 h-4 flex-shrink-0 text-white/40" />
                  <a
                    href="tel:+919356710760"
                    className="hover:text-white transition-colors"
                  >
                    +91 93567 10760
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <Mail className="w-4 h-4 flex-shrink-0 text-white/40" />
                  <a
                    href="mailto:saihealthcare62021@gmail.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    saihealthcare62021@gmail.com
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0 text-[#25D366]" />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Sai Healthcare. All rights reserved.
            </p>
            <p className="text-white/30 text-xs text-center">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/60 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
