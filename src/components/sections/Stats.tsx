"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, Stat } from "@/components/ui";

const STATS = [
  { value: "50+", label: "Clients coached" },
  { value: "9.8 / 10", label: "Review Rating" },
  { value: "200+", label: "Sessions delivered" },
] as const;

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section tight className="border-t border-border">
      <div
        ref={ref}
        className="grid grid-cols-2 gap-x-8 gap-y-12 text-center sm:grid-cols-4"
      >
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
          >
            <Stat accent value={stat.value} label={stat.label} />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: STATS.length * 0.08 }}
        >
          <Stat accent value="Bronze → RLCS" label="Rank range coached" />
        </motion.div>
      </div>
    </Section>
  );
}
