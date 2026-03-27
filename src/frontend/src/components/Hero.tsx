import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const whyFeatures = [
  "One vendor, all your supply needs — office, packaging, gifting, logistics",
  "Best pricing through direct manufacturer tie-ups",
  "Support CSR goals with bamboo & eco-friendly products",
  "Pan-India delivery with GST invoice on all orders",
];

const valuePills = [
  { icon: "💰", label: "Cost Savings Guaranteed" },
  { icon: "🌿", label: "CSR & Sustainability" },
  { icon: "🏢", label: "Single Vendor Advantage" },
  { icon: "🚚", label: "Pan-India Delivery" },
];

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-20 lg:pt-0 min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-teal-light/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 py-20 lg:py-28">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-teal-light text-teal-dark text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                Enterprise Sales Growth Partner
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-foreground leading-[1.15] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Connecting <span className="text-teal">Brands</span> to
              Institutional & Corporate Markets
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              BrandSethu acts as an extended sales and business growth arm for
              partner brands — helping them expand into key markets while
              building long-term customer relationships.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-teal hover:bg-teal-dark text-white font-semibold px-8 shadow-sm"
                data-ocid="hero.primary_button"
                onClick={() => onNavigate("contact")}
              >
                <span className="flex items-center gap-2">
                  Get a Free Quote <ArrowRight size={16} />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-teal text-teal hover:bg-teal-light font-semibold px-8"
                data-ocid="hero.secondary_button"
                onClick={() => onNavigate("products")}
              >
                <span className="flex items-center gap-2">
                  View Our Products <ChevronRight size={16} />
                </span>
              </Button>
            </motion.div>

            {/* Value Pills */}
            <motion.div
              className="flex flex-wrap gap-2 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {valuePills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 bg-white border border-teal text-teal text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <span>{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </motion.div>

            {/* Feature card */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div className="bg-teal-light/50 rounded-xl p-4 border border-teal/20">
                <div className="text-xs font-bold text-teal-dark uppercase tracking-widest mb-2">
                  Why Choose BrandSethu?
                </div>
                <ul className="space-y-1">
                  {whyFeatures.map((f) => (
                    <li
                      key={f}
                      className="text-xs text-foreground flex items-center gap-1.5"
                    >
                      <span className="text-teal flex-shrink-0">✅</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Warehouse Image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(15,53,83,0.18)]">
              <img
                src="/assets/generated/hero-trumove-trucks.dim_900x700.jpg"
                alt="BrandSethu enterprise sales and logistics"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-card-hover px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    stroke="oklch(0.63 0.1 192)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">
                  Best Pricing
                </div>
                <div className="text-xs text-muted-foreground">
                  Guaranteed Savings
                </div>
              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-4 -right-4 bg-teal rounded-2xl shadow-card-hover px-5 py-4">
              <div className="text-white text-xs font-semibold opacity-80">
                Delivery Network
              </div>
              <div className="text-white text-lg font-extrabold">Pan-India</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
