"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/content/content";
import { hasLink } from "@/lib/utils";
import { FeaturedProject } from "@/types/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Chip } from "./ui/Chip";

function ProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
      className="group flex flex-col rounded-2xl border border-line bg-surface p-7 shadow-card transition-shadow duration-300 hover:shadow-cardHover"
    >
      <span className="eyebrow mb-4">{project.category}</span>

      {hasLink(project.link) ? (
        <a
          href={project.link}
          target={project.link.startsWith("http") ? "_blank" : undefined}
          rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex w-fit items-start gap-1.5"
        >
          <h3 className="font-heading text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className="mt-1 shrink-0 -translate-y-0.5 translate-x-0 text-accent opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
          />
        </a>
      ) : (
        <h3 className="font-heading text-xl font-semibold leading-snug text-ink">{project.title}</h3>
      )}

      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

      <ul className="mt-5 space-y-2">
        {project.bullets.map((b) => (
          <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink/85">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech_stack.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  return (
    <section id="work" className="border-t border-line py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured work"
          title="Data Science and AI/ML projects"
          description="A short list of projects that best show how I turn data and models into working systems."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {content.featured_projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
