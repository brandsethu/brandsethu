import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  "Office Stationery",
  "Industrial Consumables",
  "Janitorial Supplies",
  "Safety Equipment",
  "Printed Collateral",
  "Promotional Items",
  "Packaging Materials",
  "F&B Disposables",
];

const bulletPoints = [
  "Tell us what you need — we'll find the best supplier",
  "Rigorous quality checks before onboarding manufacturers",
  "Competitive pricing through direct manufacturer relationships",
  "Fully customisable products with your branding",
];

export default function ExpandingPortfolio() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-secondary/5 via-background to-teal-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-widest mb-4">
              <Sparkles size={14} /> Growing Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-snug">
              We Add Products <span className="text-teal">You Need.</span> We
              Source the Best.
            </h2>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed">
              BrandSethu's product portfolio is entirely demand-driven. As your
              corporate needs evolve, we proactively identify and onboard the
              best manufacturers or service providers to bridge any supply gap —
              so you always have a single, trusted partner.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground font-medium">
              {bulletPoints.map((item) => (
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
                  {item}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full bg-teal hover:bg-teal-dark text-white font-semibold px-8"
              data-ocid="portfolio.primary_button"
            >
              <a href="#quote">Discuss Your Requirements</a>
            </Button>
          </motion.div>

          {/* Right — category chips */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl border border-border shadow-card p-8">
              <h3 className="text-base font-bold text-foreground mb-2">
                Categories We're Expanding Into
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Based on corporate client demand — and growing.
              </p>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, i) => (
                  <span
                    key={cat}
                    className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                      i % 3 === 0
                        ? "bg-teal text-white border-teal"
                        : i % 3 === 1
                          ? "bg-teal-light text-teal-dark border-teal/20"
                          : "bg-background border-border text-foreground"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
                <span className="text-sm font-medium px-4 py-2 rounded-full border border-dashed border-muted-foreground/40 text-muted-foreground">
                  + Your Category
                </span>
              </div>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2v20M2 12h20"
                      stroke="oklch(0.26 0.07 236)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">
                    Don't see your category?
                  </strong>{" "}
                  We'll source it for you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
