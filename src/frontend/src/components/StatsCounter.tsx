import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number | null;
  suffix: string;
  prefix: string;
  label: string;
  display?: string;
}

const stats: StatItem[] = [
  { value: 4, suffix: "+", prefix: "", label: "Product & Service Categories" },
  {
    value: null,
    suffix: "",
    prefix: "",
    label: "Delivery Network",
    display: "Pan-India",
  },
  { value: 100, suffix: "%", prefix: "", label: "Compliance Guaranteed" },
  {
    value: null,
    suffix: "",
    prefix: "",
    label: "Response Time",
    display: "< 2 Hours",
  },
];

function Counter({
  target,
  suffix,
  prefix,
  display,
  isActive,
}: {
  target: number | null;
  suffix: string;
  prefix: string;
  display?: string;
  isActive: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive || target === null) return;
    setCount(0);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isActive, target]);

  if (display) {
    return <span>{display}</span>;
  }

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-16 bg-teal-dark relative overflow-hidden"
      data-ocid="stats.section"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
              data-ocid={`stats.item.${index + 1}`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 tabular-nums tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  display={stat.display}
                  isActive={isInView}
                />
              </div>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
              <div className="mt-3 w-8 h-0.5 bg-orange-500 mx-auto rounded-full opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
