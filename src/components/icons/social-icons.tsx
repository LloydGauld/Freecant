/**
 * lucide-react ships generic UI icons only — no brand marks (X, YouTube,
 * TikTok, Discord). These are small hand-authored SVGs sized to match
 * lucide's 24x24 viewBox so they sit consistently alongside it.
 */
import type { SVGProps } from "react";

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.498 6.186a2.999 2.999 0 0 0-2.113-2.122C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.385.52A2.999 2.999 0 0 0 .502 6.186 31.26 31.26 0 0 0 0 12a31.26 31.26 0 0 0 .502 5.814 2.999 2.999 0 0 0 2.113 2.122c1.88.52 9.385.52 9.385.52s7.505 0 9.385-.52a2.999 2.999 0 0 0 2.113-2.122A31.26 31.26 0 0 0 24 12a31.26 31.26 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 0h-3.3v14.74a3.17 3.17 0 1 1-2.25-3.03V8.36a6.42 6.42 0 1 0 5.55 6.36V6.69a8.16 8.16 0 0 0 4.7 1.49V4.86A4.83 4.83 0 0 1 16.5 0z" />
    </svg>
  );
}

export function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.196.35-.42.82-.578 1.196a18.27 18.27 0 0 0-5.487 0A12.6 12.6 0 0 0 9.24 3a19.74 19.74 0 0 0-4.435 1.372C1.578 9.045.914 13.579 1.244 18.057a19.9 19.9 0 0 0 6.03 3.04c.487-.657.92-1.354 1.293-2.086a12.84 12.84 0 0 1-2.037-.975c.17-.124.338-.253.5-.386 3.927 1.8 8.18 1.8 12.061 0 .163.133.331.262.5.386-.65.39-1.335.716-2.038.975.373.732.807 1.43 1.294 2.086a19.83 19.83 0 0 0 6.03-3.04c.412-5.194-.696-9.685-2.93-13.688ZM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.947 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419Z" />
    </svg>
  );
}
