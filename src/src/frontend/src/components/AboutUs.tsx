import { motion } from "motion/react";

const servicesForBrands = [
  "Partner with BrandSethu to expand reach in Institutional Market",
  "Joint Go-To-Market activity into Focused Territory and Named Accounts",
  "Dedicated Project and Sales team",
  "Market Access & Key Customer Acquisition",
  "Revenue Growth Planning and Achievement",
  "New Product Launch support",
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column hero layout */}
        <motion.div
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image column */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format"
                alt="B2B business meeting and handshake"
                className="w-full h-72 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/30 to-transparent" />
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-md">
                <p className="text-teal font-bold text-sm">
                  Enterprise Sales Growth Partner
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Connecting Brands with Corporate Buyers
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="w-full lg:w-1/2">
            <span className="text-teal text-sm font-semibold uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              About BrandSethu
            </h2>
            <p className="mt-2 text-lg text-teal font-semibold">
              Enterprise Sales Growth Partner
            </p>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              BrandSethu is an enterprise sales growth partner that connects
              product brands with institutional and corporate buyers. Founded by
              professionals with strong experience in sales and business
              development, BrandSethu focuses on building structured market
              access and driving revenue growth for brands. We act as an
              extended sales and business growth arm for our partner brands and
              help them expand into key markets while building long-term
              customer relationships.
            </p>
          </div>
        </motion.div>

        {/* Services section — full width for B2B brand partners */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-teal-light/30 rounded-2xl p-8 border border-teal/20 mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-2">
            How We Help Our Brand Partners
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Expand your market reach through our enterprise sales network and
            institutional access
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {servicesForBrands.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-5 h-5 mt-0.5 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Vision, Mission, Team */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Our Vision",
              icon: (
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ),
              text: "To become the most trusted bridge between product brands and institutional markets, driving sustainable growth through strong partnerships.",
            },
            {
              title: "Our Mission",
              icon: (
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
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
              text: "To build and execute structured sales channels that enable brands to acquire customers, expand markets and grow revenue.",
            },
            {
              title: "Our Team",
              icon: (
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
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
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              text: "BrandSethu is founded by experienced sales professionals with strong expertise in Enterprise, SME, Startups and Institutional business. The team specialises in building credible market access, driving revenue growth and creating long-term partnerships.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              data-ocid={`about.item.${i + 1}`}
              className="bg-white rounded-2xl border border-border shadow-card p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
