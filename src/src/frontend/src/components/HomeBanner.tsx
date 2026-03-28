import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HomeBannerProps {
  onNavigate: (page: string) => void;
}

export default function HomeBanner({ onNavigate }: HomeBannerProps) {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden shadow-xl min-h-[280px] sm:min-h-[320px] flex items-center"
        >
          {/* Background Image */}
          <img
            src="/assets/generated/homepage-banner.dim_1400x420.jpg"
            alt="BrandSethu B2B Sourcing"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-teal/50" />

          {/* Content */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              Trusted B2B Partner
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
            >
              Your Trusted B2B{" "}
              <span className="text-orange-400">Sourcing Partner</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/85 text-base sm:text-lg leading-relaxed mb-8"
            >
              From packaging to logistics — we research, compare and deliver the
              best for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                type="button"
                onClick={() => onNavigate("contact")}
                data-ocid="banner.primary_button"
                className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 text-base shadow-lg hover:shadow-xl transition-all gap-2"
                size="lg"
              >
                Get a Quote <ArrowRight size={18} />
              </Button>
              <Button
                type="button"
                onClick={() => onNavigate("products")}
                data-ocid="banner.secondary_button"
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-white text-white bg-white/10 hover:bg-white/20 font-semibold px-8"
              >
                Our Services
              </Button>
            </motion.div>
          </div>

          {/* Decorative right side accent */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-4">
            {[
              { label: "Pan-India Network", icon: "🌐" },
              { label: "Best Pricing Guaranteed", icon: "✅" },
              { label: "Research-Driven Sourcing", icon: "🔍" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-white font-semibold text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
