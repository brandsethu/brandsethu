import { motion } from "motion/react";

const industries = [
  {
    name: "FMCG & Consumer Goods",
    description: "Bulk tissue, packaging & hygiene supplies for FMCG brands",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 10a4 4 0 01-8 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Pharma & Healthcare",
    description:
      "Compliant packaging, office & hygiene supplies for healthcare",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M22 12h-4l-3 9L9 3l-3 9H2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "E-commerce & Logistics",
    description: "Corrugated boxes, honeycomb mailers & last-mile packaging",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="12"
          x2="12"
          y2="16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="14"
          x2="14"
          y2="14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Manufacturing & Industrial",
    description:
      "Pallet solutions, corner protectors & bulk packaging materials",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M2 20h20M4 20V10l8-6 8 6v10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 20v-5h6v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Hospitality & HoReCa",
    description:
      "Premium tissues, bamboo products & sustainable hygiene supplies",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 11l19-9-9 19-2-8-8-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Retail & Modern Trade",
    description: "Corporate gifting, branded packaging & display solutions",
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 20a1 1 0 100 2 1 1 0 000-2zM20 20a1 1 0 100 2 1 1 0 000-2z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function IndustriesWeServe() {
  return (
    <section
      id="industries"
      className="py-20 lg:py-28 bg-background"
      data-ocid="industries.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">
            Sectors We Cover
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            From FMCG to hospitality, we bring the right products and supply
            chain expertise to every sector.
          </p>
        </motion.div>

        {/* Decorative banner image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden mb-10 w-full"
        >
          <div className="relative w-full max-h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format"
              alt="Industries we serve — business collaboration"
              className="w-full max-h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal/60 to-transparent flex items-center">
              <div className="px-8 lg:px-14">
                <p className="text-white font-bold text-xl sm:text-2xl lg:text-3xl max-w-sm leading-tight">
                  Serving India's Leading Industries
                </p>
                <p className="text-white/80 text-sm mt-2 max-w-xs">
                  B2B supply chain expertise across sectors
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              data-ocid={`industries.item.${i + 1}`}
              className="group bg-white rounded-2xl border border-border p-6 shadow-card cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 40px rgba(15,53,83,0.12)",
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-4 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                {industry.icon}
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1.5">
                {industry.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
