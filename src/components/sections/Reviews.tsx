"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Badge, Section } from "@/components/ui";
import { cn } from "@/lib/cn";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="reviews" className="border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <Badge>Reviews</Badge>
        <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
          What players are saying
        </h2>
        <p className="mt-4 flex items-center justify-center gap-1.5 text-muted">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span>
            <strong className="font-semibold text-foreground">9.8</strong>{" "}
            average across{" "}
            <strong className="font-semibold text-foreground">50+</strong>{" "}
            clients
          </span>
        </p>
      </div>

      {/* Fake masonry: CSS columns + break-inside-avoid, since items are
          variable height once real quotes replace the placeholders. */}
      <div
        ref={ref}
        className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3"
      >
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            className="mb-6 break-inside-avoid rounded-3xl border border-border bg-surface p-8"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < review.rating
                      ? "fill-accent text-accent"
                      : "fill-transparent text-border",
                  )}
                />
              ))}
            </div>

            <p className="mt-5 text-lg leading-relaxed text-foreground">
              &ldquo;{review.quote}&rdquo;
            </p>

            <div className="mt-6">
              <p className="font-display text-sm font-semibold">
                {review.name}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-muted">
                {review.rank}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
