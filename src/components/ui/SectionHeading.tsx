"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "ink" | "ivory";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-2",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className={cn("eyebrow", tone === "ivory" && "text-ivory/60")}>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tightest2 md:text-[2.75rem] md:leading-[1.05]",
          tone === "ivory" ? "text-ivory" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", tone === "ivory" ? "text-ivory/70" : "text-muted")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
