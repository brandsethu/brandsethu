import { Calendar, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function AppointmentCTA() {
  const whatsappMsg = encodeURIComponent(
    "Hi BrandSethu! I'd like to schedule a free consultation to discuss my B2B sourcing needs.",
  );
  const emailSubject = encodeURIComponent(
    "Appointment Request - BrandSethu Consultation",
  );
  const emailBody = encodeURIComponent(
    "Hi BrandSethu Team,\n\nI would like to schedule a free consultation.\n\nCompany Name: \nContact Person: \nPhone: \nPreferred Date & Time: \nTopic: \n\nThank you!",
  );

  const actions = [
    {
      icon: MessageCircle,
      label: "WhatsApp Us",
      sublabel: "Instant response",
      href: `https://wa.me/919920989333?text=${whatsappMsg}`,
      external: true,
      bg: "bg-[#25D366] hover:bg-[#1ebe5d]",
      text: "text-white",
    },
    {
      icon: Phone,
      label: "Call Us Now",
      sublabel: "+91 9920989333",
      href: "tel:+919920989333",
      external: false,
      bg: "bg-teal hover:bg-teal-dark",
      text: "text-white",
    },
    {
      icon: Calendar,
      label: "Email to Schedule",
      sublabel: "business@brandsethu.in",
      href: `mailto:business@brandsethu.in?subject=${emailSubject}&body=${emailBody}`,
      external: false,
      bg: "bg-orange-500 hover:bg-orange-600",
      text: "text-white",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-navy via-navy/95 to-teal/80 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ready to Source Smarter?{" "}
            <span className="text-orange-400">Get a Tailored Proposal.</span>
          </h2>
          <p className="mt-5 text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Let our team understand your needs, compare the best options for
            you, and present a tailored proposal at zero cost.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              data-ocid={`appointment.cta.${i}`}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl shadow-lg cursor-pointer transition-all ${action.bg} ${action.text}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <action.icon size={26} strokeWidth={2} />
              </div>
              <div className="text-center">
                <div className="font-bold text-base">{action.label}</div>
                <div className="text-xs opacity-80 mt-0.5">
                  {action.sublabel}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-bold text-sm tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            Our team responds within 2 business hours &nbsp;&middot;&nbsp; Mon
            &ndash; Sat, 9 AM &ndash; 7 PM IST
          </p>
        </motion.div>
      </div>
    </section>
  );
}
