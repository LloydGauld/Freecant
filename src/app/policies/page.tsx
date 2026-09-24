import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui";
import { REFUND_POLICY } from "@/data/site";

export const metadata: Metadata = {
  title: "Refunds and rescheduling",
};

export default function PoliciesPage() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to freecant
        </Link>

        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
          Refunds and rescheduling
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted">
          {REFUND_POLICY}
        </p>
      </div>
    </Section>
  );
}
