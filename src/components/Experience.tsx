"use client";

import { motion } from "framer-motion";
import { hasLink } from "@/lib/utils";
import { content } from "@/content/content";
import { SectionHeading } from "./ui/SectionHeading";
import { EditableImage } from "./ui/EditableImage";
import { Chip } from "./ui/Chip";

export function Experience() {
  const { experience_and_leadership: el } = content;

  return (
    <section id="experience" className="border-t border-line py-24">
      <div className="container-page">
        <SectionHeading eyebrow={el.subtitle} title={el.title} description={el.description} />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div className="relative">
            <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line md:block" />

            <div className="space-y-8">
              {el.entries.map((item, i) => (
                <motion.div
                  key={item.title + (item.org ?? "")}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative md:pl-8"
                >
                  <span className="absolute left-0 top-2 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-ivory md:block" />

                  <div className="rounded-xl border border-line bg-surface p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      {hasLink(item.link) ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-heading text-lg font-semibold text-ink transition-colors hover:text-accent"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                      )}
                      {item.duration && (
                        <span className="text-xs font-medium text-muted">{item.duration}</span>
                      )}
                    </div>
                    {item.org && <p className="mt-1 text-xs text-muted">{item.org}</p>}
                    {item.description && (
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                    )}

                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink/85">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                        {item.tags.map((t) => (
                          <Chip key={t}>{t}</Chip>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-28 md:h-fit"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card">
              <EditableImage
                src={el.image}
                alt={el.image_alt ?? "Leadership photo"}
                placeholderLabel={`Add ${el.image} to fill this frame`}
              />
            </div>
            {el.caption && <p className="mt-3 text-center text-sm text-muted">{el.caption}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
