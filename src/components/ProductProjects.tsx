"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/content/content";
import { hasLink } from "@/lib/utils";
import { SectionHeading } from "./ui/SectionHeading";
import { Chip } from "./ui/Chip";

export function ProductProjects() {
  return (
    <section id="product" className="border-t border-line bg-[#F1EADA] py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Product and business"
          title="Product, growth and strategy work"
          description="Where I have worked outside the notebook: product thinking, go-to-market, user research, and hands-on execution."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {content.product_business_projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate/15 bg-surface pl-7 pr-6 py-7"
            >
              <span className="absolute left-0 top-0 h-full w-1.5 bg-slate" />

              {hasLink(p.link) ? (
                <a
                  href={p.link}
                  target={p.link.startsWith("http") ? "_blank" : undefined}
                  rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex w-fit items-start gap-1.5"
                >
                  <h3 className="font-heading text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={15}
                    className="mt-1 shrink-0 -translate-y-0.5 translate-x-0 text-accent opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </a>
              ) : (
                <h3 className="font-heading text-lg font-semibold text-ink">{p.title}</h3>
              )}

              <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.summary}</p>

              <ul className="mt-5 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink/85">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.focus.map((f) => (
                  <Chip key={f} tone="slate">
                    {f}
                  </Chip>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
