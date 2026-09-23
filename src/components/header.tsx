"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border-b border-border"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <Zap className="h-5 w-5 text-accent" />
          <span>freecant</span>
        </div>
      </div>
    </motion.header>
  );
}
