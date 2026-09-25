import Link from "next/link";
import {
  DiscordIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons/social-icons";
import { DISCORD_URL } from "@/data/site";

// TODO: add TikTok back once there's a real handle to link to.
const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/Freecant", icon: XIcon },
  { label: "YouTube", href: "https://www.youtube.com/@Freecant10", icon: YouTubeIcon },
  { label: "Discord", href: DISCORD_URL, icon: DiscordIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Link href="/" aria-label="freecant — back to top">
            {/* eslint-disable-next-line @next/next/no-img-element -- static
                vector logo, no benefit from next/image's raster optimizer */}
            <img src="/brand/freecant-logo.svg" alt="freecant" className="h-9 w-auto" />
          </Link>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <span>&copy; {new Date().getFullYear()} freecant. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link
              href="/policies"
              className="underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Refunds and rescheduling
            </Link>
            <Link
              href="/tip"
              className="underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Tip your coach
            </Link>
          </div>
          <span>Rocket League coaching, done right.</span>
        </div>
      </div>
    </footer>
  );
}
