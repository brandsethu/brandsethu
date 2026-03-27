import { MapPin } from "lucide-react";
import { motion } from "motion/react";

const roles = [
  {
    title: "Management Trainee (OJT)",
    locations: ["Mumbai"],
    tag: "Now Hiring",
  },
  {
    title: "Corporate Sales – Account Director",
    locations: ["Mumbai", "Bangalore", "Delhi"],
    tag: "",
  },
  {
    title: "HoReCa – Partner Account Manager",
    locations: ["Mumbai"],
    tag: "",
  },
  {
    title: "Inside Sales Support",
    locations: ["Mumbai"],
    tag: "",
  },
];

export default function Careers() {
  return (
    <section
      id="careers"
      className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="text-teal text-xs font-semibold uppercase tracking-widest">
            Join Us
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            We&apos;re Hiring — Come Grow With Us
          </h1>
          <p className="mt-3 text-base text-muted-foreground max-w-xl">
            We are actively hiring{" "}
            <span className="font-semibold text-teal">Management Trainees</span>{" "}
            — structured OJT programme with hands-on exposure across sales,
            operations &amp; sourcing.
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="mb-10 flex flex-col sm:flex-row sm:items-center gap-4 bg-teal-light/40 border border-teal/20 rounded-2xl px-6 py-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="flex-1">
            <p className="text-sm font-semibold text-teal-dark">
              Ready to start your career journey with BrandSethu?
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Send us your CV and we&apos;ll get back to you within 48 hours.
            </p>
          </div>
          <a
            href={`mailto:business@brandsethu.in?subject=${encodeURIComponent("Career Enquiry – BrandSethu")}&body=${encodeURIComponent("Hi BrandSethu Team,\n\nI am interested in exploring career opportunities.\n\nName: \nPhone: \nPosition of Interest: \n\nThank you!")}`}
            className="shrink-0 inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors shadow-sm"
          >
            Apply Now
          </a>
        </motion.div>

        {/* Open Roles */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Open Positions
        </motion.p>
        <div className="flex flex-wrap gap-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              data-ocid={`careers.item.${i + 1}`}
              className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.06 }}
            >
              {role.tag && (
                <span className="text-xs font-bold bg-teal text-white rounded-full px-2 py-0.5">
                  {role.tag}
                </span>
              )}
              <span className="text-sm font-semibold text-foreground">
                {role.title}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin size={10} />
                {role.locations.join(", ")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
