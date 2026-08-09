"use client";

import { motion } from "framer-motion";
import { content } from "@/content/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Chip } from "./ui/Chip";

export function Skills() {
  const groups = Object.entries(content.skills);

  return (
    <section id="skills" className="border-t border-line bg-[#F1EADA] py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Skills" title="Tools and methods I work with" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(([label, items], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-slate">
                {label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Chip key={skill} tone="accent">
                    {skill}
                  </Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
