"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/cn";

type LiteYouTubeProps = {
  videoId: string;
  title: string;
  className?: string;
};

/**
 * Shows a static thumbnail + play button until clicked, then swaps in the
 * real YouTube iframe. Avoids loading YouTube's player JS for every visitor
 * — only those who actually press play pay that cost.
 */
export default function LiteYouTube({ videoId, title, className }: LiteYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div
        className={cn(
          "aspect-video w-full overflow-hidden rounded-3xl border border-border bg-surface",
          className,
        )}
      >
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={cn(
        "group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- single external thumbnail, not worth remotePatterns config */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        onError={(event) => {
          event.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/40 transition-colors group-hover:bg-background/25" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-transform group-hover:scale-105">
        <Play className="h-6 w-6 translate-x-0.5 text-foreground" />
      </span>
    </button>
  );
}
