import { Button } from "@/components/ui/button";
import { Building2, CalendarCheck } from "lucide-react";
import { motion } from "motion/react";

const forBrands = [
  "Enterprise Sales Setup",
  "Institutional Market Access",
  "Key Account Management",
  "Revenue Growth Planning & Achievement",
  "New Product Launch",
  "Joint Go-To-Market into Focused Territory",
];

interface ExpandingPortfolioProps {
  onNavigate: (page: string) => void;
}

export default function ExpandingPortfolio({
  onNavigate,
}: ExpandingPortfolioProps) {
  const whatsappMsg = encodeURIComponent(
    "Hi BrandSethu! I'm interested in partnering with you. Please share details.",
  );

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-secondary/5 via-background to-teal-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">
            Our Approach
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            What We Do
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto">
            B2B Enterprise Sales Solutions
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl border border-border shadow-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center">
                <Building2 size={20} className="text-teal" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  For Corporate Clients (B2B)
                </h3>
                <p className="text-xs text-muted-foreground">
                  Owners · Founders · CFO · Procurement
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {forBrands.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-teal-light flex items-center justify-center flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="oklch(0.63 0.1 192)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-foreground font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                onClick={() => onNavigate("contact")}
                size="lg"
                className="flex-1 rounded-full bg-teal hover:bg-teal-dark text-white font-semibold gap-2"
                data-ocid="whatwedo.book_appointment_button"
              >
                <CalendarCheck size={18} />
                Book Free Consultation
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex-1 rounded-full border-teal text-teal hover:bg-teal-light font-semibold gap-2"
                data-ocid="whatwedo.whatsapp_button"
              >
                <a
                  href={`https://wa.me/919920989333?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
