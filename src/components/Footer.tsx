import Link from "next/link";
import { Zap } from "lucide-react";
import {
  DiscordIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons/social-icons";

// TODO: paste real TikTok handle — the rest are live.
const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/Freecant", icon: XIcon },
  { label: "YouTube", href: "https://www.youtube.com/@Freecant10", icon: YouTubeIcon },
  { label: "TikTok", href: "#", icon: TikTokIcon },
  { label: "Discord", href: "https://discord.gg/KrWuKuqcDt", icon: DiscordIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-semibold tracking-tight"
          >
            <Zap className="h-5 w-5 text-accent" />
            <span>freecant</span>
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

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <span>&copy; {new Date().getFullYear()} freecant. All rights reserved.</span>
          <span>Rocket League coaching, done right.</span>
        </div>
      </div>
    </footer>
  );
}
