import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    id: "tissues",
    image: "/assets/generated/section-tissues-bamboo.dim_800x500.jpg",
    imageAlt: "Tissues, bamboo products and office supplies",
    category: "Hygiene, Office Supplies & Sustainability",
    title: "Tissues, Office Supplies & Bamboo Products",
    description:
      "Comprehensive range of hygiene and office consumables for institutional and corporate procurement — facial tissues, napkins, tissue rolls, hand rolls, and general office supplies in bulk. We also offer eco-friendly bamboo tissue products to support your organisation's CSR and sustainability goals. Bamboo is a fast-regenerating, low-water resource — a measurable step toward responsible procurement and ESG commitments.",
    tags: [
      "Facial Tissues",
      "Tissue Rolls",
      "Office Supplies",
      "Bamboo-Based",
      "ESG Ready",
      "GST Invoice",
      "Pan India Delivery",
    ],
    accentLight: "bg-teal-light text-teal-dark",
  },
  {
    id: "packaging",
    image: "/assets/generated/section-packaging.dim_800x500.jpg",
    imageAlt: "Corrugated boxes, honeycomb packaging and pallets",
    category: "Packaging & Material Handling",
    title: "Corrugated, Honeycomb & Pallets",
    description:
      "End-to-end packaging and material handling solutions under one roof. Corrugated cartons in 3-ply, 5-ply, and 7-ply with custom sizing and print. Honeycomb paperboard for lightweight, high-strength transit protection — an eco-conscious alternative to foam and bubble wrap. Paper pallets and corner protectors for safe stacking, warehousing, dispatch, and export — available in standard and custom dimensions.",
    tags: [
      "3PLY / 5PLY / 7PLY",
      "Honeycomb Board",
      "Paper Pallets",
      "Corner Protectors",
      "Custom Print",
      "GST Invoice",
      "Pan India Delivery",
    ],
    accentLight: "bg-secondary/10 text-secondary",
  },
  {
    id: "giftings",
    image: "/assets/generated/section-gifting.dim_800x500.jpg",
    imageAlt: "Corporate gift hampers and branded merchandise",
    category: "Corporate Gifting",
    title: "Corporate Gift Solutions",
    description:
      "Curated gifting solutions for employee rewards, client appreciation, festive seasons, and brand activations. Custom gift hampers, branded merchandise, and promotional kits — fully customizable to your brand identity and budget.",
    tags: ["Gift Hampers", "Branded Merch", "Festive Kits"],
    accentLight: "bg-amber-100 text-amber-800",
  },
  {
    id: "logistics",
    image: "/assets/generated/section-logistics.dim_800x500.jpg",
    imageAlt: "Logistics warehouse and delivery trucks",
    category: "Logistics & Supply Chain",
    title: "Logistics & Warehousing",
    description:
      "Reliable PTL and FTL logistics solutions combined with flexible warehousing capabilities — ensuring your goods move efficiently across India. We coordinate trusted transportation and managed storage partners to deliver on-time, end-to-end visibility, proper handling, and scalable solutions matching your volume and timeline.",
    tags: ["PTL", "FTL", "Pan-India", "Warehousing", "Last-Mile", "B2B"],
    accentLight: "bg-blue-50 text-blue-800",
  },
];

interface ProductsProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  return (
    <section id="products" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">
            Our Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Products &amp; Services
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto">
            A focused range of products and solutions for institutional and
            corporate buyers &mdash; sourced from trusted manufacturers and
            delivered with reliability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              id={product.id}
              data-ocid={`products.item.${i + 1}`}
              className="group bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {/* Card image */}
              <div className="relative w-full h-44 overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest text-white/90 drop-shadow">
                  {product.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-extrabold text-foreground leading-tight mb-3">
                  {product.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {product.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`text-xs font-medium px-3 py-1 rounded-full ${product.accentLight}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate?.("contact")}
                  data-ocid={`products.${product.id}.button`}
                  className="mt-auto flex items-center gap-1.5 text-teal font-semibold text-sm hover:gap-2.5 transition-all group/btn"
                >
                  Get a Quote
                  <ArrowRight
                    size={15}
                    className="group-hover/btn:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
