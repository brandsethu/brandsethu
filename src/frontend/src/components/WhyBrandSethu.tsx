import { motion } from "motion/react";

const features = [
  {
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Structured Market Access",
    description:
      "Joint go-to-market into focused territory and named accounts with dedicated project and sales teams.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Revenue Growth",
    description:
      "We build and execute structured sales channels that enable brands to acquire customers and expand markets.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Quality Supply for Buyers",
    description:
      "Reliable supply of quality and best-of-industry products and services at competitive pricing.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Dedicated Partnership",
    description:
      "Extended sales arm with deep expertise in Enterprise, SME, Startups and Institutional markets.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M21 21l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11 8v3l2 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Best Pricing, Guaranteed",
    description:
      "Our research team compares capabilities, compliance, and market rates so you always get the best-in-class output at the most competitive price.",
  },
];

export default function WhyBrandSethu({
  onNavigate,
}: { onNavigate?: (page: string, anchor?: string) => void }) {
  return (
    <section id="why" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Why Partner with BrandSethu
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            The Bridge Between Brands and Markets.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              data-ocid={`why.item.${i + 1}`}
              className="group bg-white rounded-2xl border border-border p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white transition-colors duration-200">
                {f.icon}
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Research & Pricing Intelligence band */}
        <motion.div
          className="mt-12 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div
            className="relative px-8 py-10 lg:px-14 lg:py-12 flex flex-col lg:flex-row items-center gap-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.95 0.04 195) 0%, oklch(0.97 0.03 60) 100%)",
              borderLeft: "4px solid oklch(0.58 0.14 195)",
            }}
          >
            {/* Icon accent */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ background: "oklch(0.58 0.14 195)", color: "white" }}
            >
              <svg
                aria-hidden="true"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 11h6M11 8v6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Text content */}
            <div className="flex-1 text-center lg:text-left">
              <h3
                className="text-xl sm:text-2xl font-extrabold mb-2 tracking-tight"
                style={{ color: "oklch(0.26 0.07 236)" }}
              >
                We Do the Hard Work For You
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed mb-4 max-w-2xl"
                style={{ color: "oklch(0.38 0.05 236)" }}
              >
                Our dedicated research team evaluates vendor capabilities,
                compliance requirements, and market benchmarks — so you receive
                the best solution at the right price, every time. No guesswork.
                No compromise.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {["Research", "Analysis", "Compliance", "Results"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "oklch(0.58 0.14 195 / 0.12)",
                        color: "oklch(0.38 0.12 195)",
                      }}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Research team photo */}
            <div className="hidden lg:block flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&auto=format"
                alt="BrandSethu research and analysis team"
                className="w-40 h-40 rounded-2xl object-cover shadow-md border-2 border-white"
              />
            </div>

            {/* Decorative corner accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full"
              style={{ background: "oklch(0.58 0.14 60)" }}
            />
          </div>
        </motion.div>

        {/* Bottom CTA band */}
        <motion.div
          className="mt-10 rounded-2xl p-10 lg:p-14 text-center"
          style={{ background: "oklch(0.26 0.07 236)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Grow Your Business?
          </h3>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            Join brands and corporates who trust BrandSethu as their enterprise
            sales partner.
          </p>
          <button
            type="button"
            onClick={() => onNavigate?.("contact", "quote")}
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3.5 rounded-full shadow-sm transition-colors text-sm"
            data-ocid="why.primary_button"
          >
            Get Started Today
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
