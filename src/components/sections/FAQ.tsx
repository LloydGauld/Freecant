"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui";
import { FAQ_ITEMS } from "@/data/site";

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="faq" className="border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold sm:text-5xl">
          Common questions
        </h2>
      </div>

      <div
        ref={ref}
        className="mx-auto mt-16 max-w-3xl divide-y divide-border rounded-3xl border border-border bg-surface"
      >
        {FAQ_ITEMS.map((item, index) => (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
          >
            <details className="group px-6 py-5 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold">
                {item.question}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
