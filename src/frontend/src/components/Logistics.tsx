import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const features = [
  {
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Pan-India Network",
    desc: "Coverage across all major metros and Tier 2 cities",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          x="1"
          y="3"
          width="15"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 8h3l3 4v5h-6V8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="5.5"
          cy="18.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="18.5"
          cy="18.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    label: "Just-In-Time Delivery",
    desc: "Scheduled deliveries aligned to your operational needs",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Real-Time Tracking",
    desc: "Live shipment visibility from dispatch to delivery",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    label: "Inventory Management",
    desc: "Warehousing with stock visibility and replenishment alerts",
  },
];

export default function Logistics() {
  return (
    <section id="logistics" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">
            Logistics & Warehousing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            End-to-End Supply Chain Solutions
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto">
            Our dedicated logistics partner ensures your supply chain runs
            smoothly — from our warehouse to your facility.
          </p>
        </motion.div>

        {/* Featured band */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-card-hover grid lg:grid-cols-2 min-h-[420px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {/* Left: Image */}
          <div className="relative overflow-hidden">
            <img
              src="/assets/generated/logistics-trucks.dim_700x500.jpg"
              alt="BrandSethu logistics fleet"
              className="w-full h-full object-cover min-h-[280px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-transparent" />
          </div>

          {/* Right: Content */}
          <div
            className="relative p-10 lg:p-14 flex flex-col justify-center"
            style={{ background: "oklch(0.26 0.07 236)" }}
          >
            {/* Faded bg text */}
            <div
              className="absolute inset-0 opacity-5 overflow-hidden select-none"
              aria-hidden="true"
            >
              <div className="text-[120px] font-extrabold text-white leading-none">
                LOGISTICS
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-8">
                Efficient. <span className="text-teal">Scalable.</span>{" "}
                Dedicated.
              </h3>

              <ul className="space-y-5 mb-10">
                {features.map((f) => (
                  <li key={f.label} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-teal/20 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                      {f.icon}
                    </span>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {f.label}
                      </div>
                      <div className="text-white/60 text-xs mt-0.5">
                        {f.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="rounded-full bg-teal hover:bg-teal-dark text-white font-semibold px-8"
                data-ocid="logistics.primary_button"
              >
                <a href="#quote">Explore Services</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
