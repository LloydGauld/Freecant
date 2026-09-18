import { ArrowRight, Trophy } from "lucide-react";
import { Badge, Button, Section, Stat } from "@/components/ui";

export const metadata = {
  title: "freecant — design system",
};

export default function DesignSystemPage() {
  return (
    <>
      {/* Hero — headline scale, one clear CTA */}
      <Section as="header" className="border-b border-border">
        <Badge className="mb-6">Design system preview</Badge>
        <h1 className="max-w-3xl text-balance text-5xl font-semibold sm:text-7xl">
          Play like you mean it.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          1-on-1 Rocket League coaching for players who want to climb faster.
          This page exists to sanity-check the design tokens, not to ship.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#stats" size="lg">
            Book a session
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#buttons" variant="ghost" size="lg">
            See components
          </Button>
        </div>
      </Section>

      {/* Buttons */}
      <Section id="buttons" tight className="border-b border-border">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <p className="mt-2 text-sm text-muted">Primary and ghost, two sizes.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="primary" size="md">
            Primary md
          </Button>
          <Button variant="primary" size="lg">
            Primary lg
          </Button>
          <Button variant="ghost" size="md">
            Ghost md
          </Button>
          <Button variant="ghost" size="lg">
            Ghost lg
          </Button>
          <Button variant="primary" size="md" disabled>
            Disabled
          </Button>
        </div>
      </Section>

      {/* Stats */}
      <Section id="stats" tight className="border-b border-border">
        <h2 className="text-2xl font-semibold">Stats</h2>
        <p className="mt-2 text-sm text-muted">
          Big number + label, with an accent variant for emphasis.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <Stat value="500+" label="Sessions coached" accent />
          <Stat value="1200" label="Students trained" />
          <Stat value="SSL" label="Peak rank" accent />
          <Stat value="4.9/5" label="Average rating" />
        </div>
      </Section>

      {/* Badges */}
      <Section id="badges" tight className="border-b border-border">
        <h2 className="text-2xl font-semibold">Badges</h2>
        <p className="mt-2 text-sm text-muted">
          For the credential line under a headline or in a card footer.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Badge>
            <Trophy className="h-3.5 w-3.5" />
            Grand Champion III
          </Badge>
          <Badge>Coached 500+ players</Badge>
          <Badge filled>Limited spots</Badge>
        </div>
      </Section>

      {/* Section wrapper demo */}
      <Section tight>
        <h2 className="text-2xl font-semibold">Section wrapper</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          This block itself is a <code className="text-foreground">Section</code>{" "}
          with <code className="text-foreground">tight</code> vertical padding
          and the shared <code className="text-foreground">max-w-content</code>{" "}
          reading width — every section on the real site should be built from
          this wrapper so vertical rhythm stays consistent.
        </p>
      </Section>
    </>
  );
}
