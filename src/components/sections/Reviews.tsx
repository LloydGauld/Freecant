"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Button, Section } from "@/components/ui";
import { cn } from "@/lib/cn";
import { reviews } from "@/data/reviews";

const METAFY_URL = "https://metafy.gg/@freecant";
const MOBILE_LIMIT = 3;
const DESKTOP_LIMIT = 6;

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  return (
    <Section id="reviews" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold sm:text-5xl">
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
            className={cn(
              "mb-6 break-inside-avoid rounded-3xl border border-border bg-surface p-8",
              !showAll &&
                (index >= DESKTOP_LIMIT
                  ? "hidden"
                  : index >= MOBILE_LIMIT
                    ? "hidden sm:block"
                    : undefined),
            )}
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

      <div className="mt-10 flex flex-col items-center gap-5">
        <Button
          type="button"
          variant="ghost"
          size="md"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show fewer" : "Show all reviews"}
        </Button>

        <a
          href={METAFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted underline-offset-4 hover:text-accent hover:underline"
        >
          Verified reviews on Metafy
        </a>
      </div>
    </Section>
  );
}
