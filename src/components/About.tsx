"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { content } from "@/content/content";

export function About() {
  const { profile, portfolio_copy } = content;

  return (
    <section id="about" className="border-t border-line py-24">
      <div className="container-page grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="eyebrow">Snapshot</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tightest2 md:text-4xl">
            A grounding in engineering, a pull toward building products.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <p className="text-lg leading-relaxed text-muted">{portfolio_copy.about_short}</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-ink">{profile.education.institute}</p>
                <p className="mt-1 text-sm text-muted">{profile.education.major}</p>
                <p className="text-sm text-muted">Minor, {profile.education.minor}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-ink">Based in Guwahati, India</p>
                <p className="mt-1 text-sm text-muted">
                  Working across technical AI systems and product, growth, and strategy execution.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
