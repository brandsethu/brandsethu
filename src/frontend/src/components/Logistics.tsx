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
    label: "FTL & PTL Transportation",
    desc: "Full-truck-load and part-truck-load options for every scale",
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Pan India Coverage",
    desc: "Door-to-door delivery across 18,000+ pincodes",
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
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Managed Warehousing",
    desc: "Flexible storage with real-time inventory management",
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
    label: "In-House Manufacturing",
    desc: "Corrugation carton production with precision machinery",
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
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "24x7 Control Tower",
    desc: "Best-in-class transit TAT with on-time delivery guarantee",
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
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Dedicated Delivery Teams",
    desc: "Last-mile riders for project-specific deployments",
  },
];

export default function Logistics() {
  return (
    <section id="logistics" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            From origin to last mile — we offer integrated logistics and
            warehousing capabilities to support your B2B supply chain at scale.
          </p>
        </motion.div>

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
              alt="Logistics fleet on the road"
              className="w-full h-full object-cover min-h-[280px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-transparent" />
          </div>

          {/* Right: Content */}
          <div
            className="relative p-10 lg:p-14 flex flex-col justify-center"
            style={{ background: "oklch(0.26 0.07 236)" }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-3">
                Your Supply Chain.{" "}
                <span className="text-teal">Fully Managed.</span>
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                BrandSethu coordinates end-to-end logistics and warehousing
                solutions — connecting you with the right capabilities for your
                volume, route, and timeline with complete accountability.
              </p>

              <p className="text-teal text-xs font-bold uppercase tracking-widest mb-4">
                Key Highlights
              </p>

              <ul className="space-y-4 mb-10">
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
                <a href="#contact">Get a Logistics Quote</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
