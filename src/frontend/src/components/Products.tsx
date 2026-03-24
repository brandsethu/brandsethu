import { motion } from "motion/react";

const products = [
  {
    id: "tissues",
    title: "Tissues & Hygiene Products",
    description:
      "Premium tissue products for offices, hotels, hospitals, and large corporates. Facial tissues, toilet rolls, hand towels, and bulk dispensers sourced from certified manufacturers.",
    icon: (
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="10"
          width="22"
          height="30"
          rx="4"
          fill="oklch(0.93 0.04 192)"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
        />
        <path
          d="M10 18h14M10 24h14M10 30h8"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 16c4 0 14-2 14 8s-10 8-14 8"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    tags: ["Facial Tissue", "Toilet Rolls", "Hand Towels"],
  },
  {
    id: "boxes",
    title: "Corrugated Boxes & Packaging",
    description:
      "Custom corrugated packaging solutions for e-commerce, manufacturing, and distribution. From single-wall to heavy-duty multi-wall boxes, tailored to your product dimensions.",
    icon: (
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="16"
          width="32"
          height="24"
          rx="3"
          fill="oklch(0.93 0.04 192)"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
        />
        <path d="M8 22h32" stroke="oklch(0.63 0.1 192)" strokeWidth="2" />
        <path
          d="M17 8l-9 8M31 8l9 8"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 8h14"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 28h8"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    tags: ["Single Wall", "Multi Wall", "Custom Printing"],
  },
  {
    id: "gifting",
    title: "Corporate Gifting & Merchandising",
    description:
      "Curated corporate gift hampers, branded merchandise, and promotional items for employee rewards, client appreciation, and festive occasions. Fully customisable.",
    icon: (
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="20"
          width="32"
          height="22"
          rx="3"
          fill="oklch(0.93 0.04 192)"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
        />
        <rect
          x="6"
          y="13"
          width="36"
          height="9"
          rx="2"
          fill="oklch(0.93 0.04 192)"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
        />
        <path d="M24 13v29" stroke="oklch(0.63 0.1 192)" strokeWidth="2" />
        <path
          d="M24 13c0 0-4-8 0-8s4 8 0 8"
          stroke="oklch(0.63 0.1 192)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    tags: ["Gift Hampers", "Branded Merch", "Festive Kits"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
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
            What We Supply
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Core Product Categories
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto">
            Carefully sourced from the best manufacturers, delivered directly to
            your corporate doorstep.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7" data-ocid="products.list">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              data-ocid={`products.item.${i + 1}`}
              className="group bg-white rounded-2xl border border-border p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-light flex items-center justify-center mb-6">
                {product.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-teal-light text-teal-dark px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#quote"
                className="mt-6 text-sm font-semibold text-teal hover:text-teal-dark flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
