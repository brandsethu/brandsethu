import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
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
                Trusted B2B Supply Partner
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-foreground leading-[1.15] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Your Reliable Bridge from{" "}
              <span className="text-teal">Manufacturer</span> to Corporate.
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              BrandSethu connects corporates with the best manufacturers for
              tissues, corrugated boxes, corporate gifting, and a growing
              portfolio of sourced products — all backed by an end-to-end
              logistics and warehousing network.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-teal hover:bg-teal-dark text-white font-semibold px-8 shadow-sm"
                data-ocid="hero.primary_button"
              >
                <a href="#products" className="flex items-center gap-2">
                  Explore Products <ArrowRight size={16} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-teal text-teal hover:bg-teal-light font-semibold px-8"
                data-ocid="hero.secondary_button"
              >
                <a href="#logistics" className="flex items-center gap-2">
                  Our Services <ChevronRight size={16} />
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {[
                { value: "500+", label: "Corporate Clients" },
                { value: "50+", label: "Product Categories" },
                { value: "Pan-India", label: "Delivery Network" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl font-extrabold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
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
                src="/assets/generated/hero-warehouse.dim_900x700.jpg"
                alt="BrandSethu warehouse and logistics"
                className="w-full h-[520px] object-cover"
              />
              {/* Overlay accent */}
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
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"
                    stroke="oklch(0.63 0.1 192)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">
                  On-Time Delivery
                </div>
                <div className="text-xs text-muted-foreground">
                  JIT & Pan-India Network
                </div>
              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-4 -right-4 bg-teal rounded-2xl shadow-card-hover px-5 py-4">
              <div className="text-white text-xs font-semibold opacity-80">
                Quality Assured
              </div>
              <div className="text-white text-lg font-extrabold">
                ISO Verified
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
