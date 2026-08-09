"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { content } from "@/content/content";
import { SectionHeading } from "./ui/SectionHeading";

export function Achievements() {
  return (
    <section className="border-t border-line py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Achievements" title="A few competitions worth mentioning" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {content.achievements.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex items-center gap-3.5 rounded-xl border border-line bg-surface px-5 py-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Trophy size={16} />
              </span>
              <p className="text-sm font-medium text-ink">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
