import { Button } from "@/components/ui/button";
import { Button as Btn } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const interests = [
  "Logistics & Transport (TruMove)",
  "Hygiene Products (FRESHONES)",
  "Packaging Solutions (LET'S PAC)",
  "Corporate Gifting (CORRUGA / MATRIX)",
  "Export Solutions (NKB)",
  "Brand Partnership / Enterprise Sales",
  "Multiple Products / Services",
];

const contactDetails = [
  {
    label: "Email Us",
    value: "business@brandsethu.in",
    href: "mailto:business@brandsethu.in",
    external: true,
    icon: (
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+91 9920989333",
    href: "tel:+919920989333",
    icon: (
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp Us",
    value: "+91 9920989333",
    href: "https://wa.me/919920989333",
    external: true,
    icon: (
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-[#25D366]"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Our Website",
    value: "www.brandsethu.in",
    href: "https://www.brandsethu.in",
    external: true,
    icon: (
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Quote Request from ${form.companyName} — ${form.interest}`,
    );
    const body = encodeURIComponent(
      `Company: ${form.companyName}\nContact Person: ${form.contactPerson}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:business@brandsethu.in?subject=${subject}&body=${body}`;
    setSuccess(true);
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-teal text-sm font-semibold uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-snug">
              Request a Quote
            </h2>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed">
              Tell us about your requirements and our team will get back to you
              within 24 hours with a tailored proposal.
            </p>

            <div className="mt-10 space-y-6">
              {contactDetails.map((contact) => (
                <div key={contact.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-light text-teal flex items-center justify-center flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {contact.label}
                    </div>
                    <a
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-foreground hover:text-teal transition-colors mt-0.5 block"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {success ? (
              <div
                className="rounded-2xl border border-teal/20 bg-teal-light p-12 flex flex-col items-center text-center"
                data-ocid="quote.success_state"
              >
                <CheckCircle
                  className="text-teal mb-4"
                  size={56}
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Opening Email Client...
                </h3>
                <p className="text-muted-foreground text-sm">
                  Your email client should open with your request pre-filled.
                  Send it to complete your submission.
                </p>
                <Btn
                  variant="outline"
                  className="mt-6 rounded-full border-teal text-teal hover:bg-white"
                  onClick={() => setSuccess(false)}
                  data-ocid="quote.secondary_button"
                >
                  Submit Another Request
                </Btn>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border shadow-card p-8 space-y-5"
                data-ocid="quote.panel"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="companyName"
                      className="text-xs font-semibold text-foreground uppercase tracking-wide"
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Acme Corp Pvt Ltd"
                      value={form.companyName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, companyName: e.target.value }))
                      }
                      required
                      className="rounded-xl border-border"
                      data-ocid="quote.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contactPerson"
                      className="text-xs font-semibold text-foreground uppercase tracking-wide"
                    >
                      Contact Person *
                    </Label>
                    <Input
                      id="contactPerson"
                      placeholder="John Smith"
                      value={form.contactPerson}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          contactPerson: e.target.value,
                        }))
                      }
                      required
                      className="rounded-xl border-border"
                      data-ocid="quote.input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs font-semibold text-foreground uppercase tracking-wide"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@acme.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                      className="rounded-xl border-border"
                      data-ocid="quote.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-xs font-semibold text-foreground uppercase tracking-wide"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9920989333"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      required
                      className="rounded-xl border-border"
                      data-ocid="quote.input"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Product / Service Interest *
                  </Label>
                  <Select
                    value={form.interest}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, interest: v }))
                    }
                    required
                  >
                    <SelectTrigger
                      className="rounded-xl border-border"
                      data-ocid="quote.select"
                    >
                      <SelectValue placeholder="Select a category..." />
                    </SelectTrigger>
                    <SelectContent>
                      {interests.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-xs font-semibold text-foreground uppercase tracking-wide"
                  >
                    Message / Requirements
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your requirements, quantities, delivery timeline..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="rounded-xl border-border resize-none"
                    data-ocid="quote.textarea"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!form.interest}
                  className="w-full rounded-full bg-teal hover:bg-teal-dark text-white font-semibold shadow-sm"
                  data-ocid="quote.submit_button"
                >
                  Send Quote Request
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  This will open your email client with the form pre-filled to
                  send to business@brandsethu.in
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
