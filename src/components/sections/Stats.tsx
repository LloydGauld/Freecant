"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { Section, Stat } from "@/components/ui";

type CountUpProps = {
  isInView: boolean;
  target: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
};

function CountUp({ isInView, target, decimals = 0, suffix = "", duration = 1.4 }: CountUpProps) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, target, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(value.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [isInView, target, decimals, duration, motionValue]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

const STATS = [
  { target: 50, decimals: 0, suffix: "+", label: "Clients coached" },
  { target: 9.8, decimals: 1, suffix: " / 10", label: "Review Rating" },
  { target: 200, decimals: 0, suffix: "+", label: "Sessions delivered" },
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
            <Stat
              accent
              value={
                <CountUp
                  isInView={isInView}
                  target={stat.target}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              }
              label={stat.label}
            />
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
