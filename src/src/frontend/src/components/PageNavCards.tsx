import { Building2, Factory, LayoutGrid, Mail } from "lucide-react";
import { motion } from "motion/react";

const pages = [
  {
    page: "about",
    label: "About Us",
    icon: Building2,
    description: "Our story & values",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    page: "products",
    label: "Products & Services",
    icon: LayoutGrid,
    description: "What we offer",
    color: "bg-teal-50 text-teal-700 border-teal-200",
    iconBg: "bg-teal-100",
  },
  {
    page: "industries",
    label: "Industries",
    icon: Factory,
    description: "Sectors we serve",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "bg-amber-100",
  },
  {
    page: "contact",
    label: "Contact Us",
    icon: Mail,
    description: "Get in touch",
    color: "bg-orange-50 text-orange-700 border-orange-200",
    iconBg: "bg-orange-100",
  },
];

interface PageNavCardsProps {
  onNavigate: (page: string) => void;
}

export default function PageNavCards({ onNavigate }: PageNavCardsProps) {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
          Explore BrandSethu
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map((item, i) => (
            <motion.button
              key={item.page}
              type="button"
              onClick={() => onNavigate(item.page)}
              data-ocid={`nav.${item.page}.button`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 cursor-pointer transition-shadow hover:shadow-md ${item.color}`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg}`}
              >
                <item.icon size={22} />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold leading-tight">
                  {item.label}
                </div>
                <div className="text-xs opacity-70 mt-0.5">
                  {item.description}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
