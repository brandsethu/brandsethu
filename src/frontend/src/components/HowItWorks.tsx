import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us what you need: product specs, quantity, compliance needs, and delivery timelines.",
    icon: "📋",
  },
  {
    number: "02",
    title: "We Research & Source",
    description:
      "Our team analyzes the market, shortlists top manufacturers, and compares pricing and quality.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Best Offer Delivered",
    description:
      "We present you the best-in-class options — vetted, compliant, and competitively priced.",
    icon: "✅",
  },
  {
    number: "04",
    title: "Seamless Fulfillment",
    description:
      "From order confirmation to last-mile delivery, we handle logistics and warehousing end to end.",
    icon: "🚚",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-20 bg-muted/30" ref={ref}>
      {/* Banner image at top of section */}
      <div className="relative w-full max-h-64 overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format"
          alt="Business process and workflow"
          className="w-full max-h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-muted/30 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold tracking-wide uppercase mb-3">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How It Works
            </h2>
            <p className="text-white/80 text-base mt-2 max-w-xl mx-auto">
              From requirement to delivery — we handle it all.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline */}
        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange/30 to-transparent"
            style={{ top: "3rem" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
                className="relative flex flex-col items-center text-center group"
                data-ocid={`how_it_works.item.${index + 1}`}
              >
                {/* Mobile vertical connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-24 w-0.5 h-8 bg-gradient-to-b from-orange/40 to-transparent" />
                )}

                {/* Circle */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-card border border-border flex items-center justify-center mb-6 group-hover:shadow-md group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-3xl">{step.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-52">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
