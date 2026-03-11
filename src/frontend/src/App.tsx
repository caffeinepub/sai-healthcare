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
  Stethoscope,
  TestTube,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "./hooks/useQueries";

const SERVICES = [
  {
    icon: Droplet,
    name: "Complete Blood Count (CBC)",
    description:
      "Comprehensive analysis of red cells, white cells, and platelets to assess overall health.",
  },
  {
    icon: Activity,
    name: "Blood Sugar Testing",
    description:
      "Fasting, post-prandial, and random glucose tests for diabetes monitoring and screening.",
  },
  {
    icon: FlaskConical,
    name: "Lipid Profile",
    description:
      "Cholesterol and triglyceride panel to evaluate cardiovascular risk and heart health.",
  },
  {
    icon: FlaskConical,
    name: "Liver Function Test (LFT)",
    description:
      "Enzyme and protein levels to assess liver health, function, and detect disease.",
  },
  {
    icon: Microscope,
    name: "Kidney Function Test (KFT)",
    description:
      "Creatinine, urea, and uric acid levels to monitor kidney performance and health.",
  },
  {
    icon: Activity,
    name: "Thyroid Profile",
    description:
      "T3, T4, and TSH measurement for complete thyroid function evaluation and monitoring.",
  },
  {
    icon: TestTube,
    name: "Urine Routine & Microscopy",
    description:
      "Complete urine examination including physical, chemical, and microscopic analysis.",
  },
  {
    icon: Droplet,
    name: "HbA1c",
    description:
      "3-month average blood sugar measurement, essential for long-term diabetes management.",
  },
  {
    icon: Shield,
    name: "Serology Tests",
    description:
      "HIV, HBsAg, and VDRL screening for infectious disease detection and monitoring.",
  },
  {
    icon: Home,
    name: "Home Sample Collection",
    description:
      "Convenient doorstep sample collection by trained phlebotomists at your schedule.",
  },
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
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

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
              className="flex items-center gap-3 group"
              data-ocid="nav.link"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                <img
                  src="/assets/uploads/IMG-20251117-WA0006-1.jpg"
                  alt="Sai Healthcare Logo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-base font-display font-700 text-primary-dark leading-tight">
                  Sai Healthcare
                </div>
                <div className="text-[10px] text-muted-foreground tracking-wide uppercase">
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
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md hover:bg-secondary"
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
              className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
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
              className="md:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid="nav.link"
                    className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary rounded-md hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="w-full mt-2 bg-primary hover:bg-primary-dark text-white font-semibold"
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
          {/* Background image overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('/assets/generated/hero-bg.dim_1920x700.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Decorative pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Red accent top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Trusted Pathology Lab in Nashik
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] mb-6">
                Accurate Diagnostics,
                <br />
                <span
                  className="text-teal-200"
                  style={{ color: "oklch(0.88 0.08 185)" }}
                >
                  Trusted Results
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-4 font-light tracking-wide">
                Service &nbsp;|&nbsp; Quality &nbsp;|&nbsp; Integrity
              </p>
              <p className="text-base text-white/55 max-w-2xl mx-auto mb-10">
                Comprehensive pathology testing with precision instruments,
                compassionate care, and reports you can trust — available at our
                lab or at your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" data-ocid="hero.primary_button">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-base shadow-lg shadow-accent/30 gap-2"
                  >
                    Book a Test <ChevronRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="tel:+919356710760" data-ocid="hero.secondary_button">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base gap-2 bg-transparent"
                  >
                    <Phone className="w-4 h-4" /> Call Us Now
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
            >
              {[
                ["50+", "Tests Available"],
                ["24hr", "Report Delivery"],
                ["100%", "Trusted Results"],
              ].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white font-display">
                    {val}
                  </div>
                  <div className="text-xs text-white/55 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Wave bottom */}
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
        <section id="about" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
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
                <div className="flex flex-wrap gap-3">
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
                className="relative"
              >
                <div
                  className="rounded-2xl overflow-hidden shadow-teal-lg relative"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.35 0.09 210), oklch(0.51 0.12 200))",
                  }}
                >
                  <div className="p-8">
                    <img
                      src="/assets/uploads/IMG-20251117-WA0006-1.jpg"
                      alt="Sai Healthcare Letterhead"
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-xl px-5 py-3 shadow-lg">
                  <div className="text-2xl font-bold font-display">Since</div>
                  <div className="text-sm font-medium">2021</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="py-20"
          style={{ background: "oklch(0.96 0.01 200)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Comprehensive Diagnostic Tests
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From routine blood work to specialized panels — we offer a full
                range of pathology and diagnostic services under one roof.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                    className="bg-white rounded-xl p-5 shadow-teal-sm hover:shadow-teal-md transition-all duration-300 group border border-border hover:border-primary/30 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-2 leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why-us" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Quality You Can Count On
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                At Sai Healthcare, we don't just run tests — we deliver peace of
                mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_US.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative bg-white rounded-2xl p-6 shadow-teal-sm border border-border text-center group hover:shadow-teal-md transition-all"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors group-hover:scale-110 transition-transform"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.35 0.09 210), oklch(0.51 0.12 200))",
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-3">
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

        {/* Contact */}
        <section
          id="contact"
          className="py-20"
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
              className="text-center mb-12"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Book a test, ask about a service, or request a home sample
                collection. We're here to help.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-teal-md p-8 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-6">
                    Our Location & Contact
                  </h3>

                  <div className="space-y-5">
                    <div className="flex gap-4">
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

                    <div className="flex gap-4 items-center">
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

                    <div className="flex gap-4 items-center">
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
                  </div>

                  <div
                    className="mt-8 p-4 rounded-xl"
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

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-teal-md p-8 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-6">
                    Send an Inquiry
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
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
                          className="border-input focus:border-primary"
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
                          className="border-input focus:border-primary"
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
                        className="border-input focus:border-primary"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message / Tests Required
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Describe the tests you need or any questions..."
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        rows={4}
                        data-ocid="contact.textarea"
                        className="border-input focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitInquiry.isPending}
                      data-ocid="contact.submit_button"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 text-base gap-2"
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
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="text-white py-12"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.07 215), oklch(0.30 0.09 208))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src="/assets/uploads/IMG-20251117-WA0006-1.jpg"
                    alt="Sai Healthcare"
                    className="w-full h-full object-cover object-top"
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

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
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
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Sai Healthcare. All rights reserved.
            </p>
            <p className="text-white/30 text-xs">
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
