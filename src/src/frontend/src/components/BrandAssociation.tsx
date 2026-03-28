import { motion } from "motion/react";
import { useState } from "react";

interface Partner {
  name: string;
  initial: string;
  logoUrl: string | null;
  website: string | null;
}

const partners: Partner[] = [
  {
    name: "TruMove",
    initial: "TM",
    logoUrl:
      "https://static.wixstatic.com/media/0794b3_3ab754afe64d4117820f62af273deaeb%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/0794b3_3ab754afe64d4117820f62af273deaeb%7Emv2.png",
    website: "https://www.trumove.in",
  },
  {
    name: "FRESHONES",
    initial: "FO",
    logoUrl:
      "/assets/uploads/freshones-019d30b6-ece1-700b-b0e6-276c29af9494-1.png",
    website: "https://tainwala.net",
  },
  {
    name: "LET'S PAK",
    initial: "LP",
    logoUrl:
      "/assets/uploads/letspac-019d30b1-bb43-725c-8a91-351f3f0d9761-1.png",
    website: "https://letspac.in",
  },
  {
    name: "CORRUGA",
    initial: "CG",
    logoUrl:
      "/assets/uploads/corrug-019d30a6-dc40-7258-b6e4-006aecf1dfa5-2.png",
    website: "https://corruga.in",
  },
  {
    name: "RIYO PARAPACK",
    initial: "RP",
    logoUrl: "/assets/uploads/riyo-019d30a6-dc39-779f-a0f5-a3c766051831-1.png",
    website: "https://riyoindia.in",
  },
  {
    name: "MATRIX",
    initial: "MX",
    logoUrl: null,
    website: null,
  },
  {
    name: "NKB",
    initial: "NK",
    logoUrl: null,
    website: null,
  },
];

function PartnerLogo({ partner }: { partner: Partner }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (partner.logoUrl && !imgFailed) {
    return (
      <img
        src={partner.logoUrl}
        alt={partner.name}
        className="h-14 w-auto max-w-[140px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <span className="text-lg font-extrabold text-muted-foreground group-hover:text-teal transition-colors duration-300">
      {partner.initial}
    </span>
  );
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const inner = (
    <motion.div
      className="group flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={partner.website ? { scale: 1.05 } : {}}
    >
      <PartnerLogo partner={partner} />
      <span
        className={`text-xs font-semibold text-muted-foreground tracking-wide transition-colors duration-200 ${
          partner.website
            ? "group-hover:text-teal group-hover:underline underline-offset-2"
            : "group-hover:text-foreground"
        }`}
      >
        {partner.name}
      </span>
    </motion.div>
  );

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${partner.name} website`}
      >
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}

export default function BrandAssociation() {
  return (
    <section id="brands" className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="text-teal text-xs font-semibold uppercase tracking-widest">
            Our Network
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Our Partners
          </h1>
          <p className="mt-3 text-base text-muted-foreground max-w-lg mx-auto">
            Trusted manufacturers and service providers we work with across
            categories — delivering quality, compliance, and scale.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {partners.map((partner, i) => (
            <PartnerCard key={partner.name} partner={partner} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
