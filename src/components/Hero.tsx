"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import { content } from "@/content/content";
import { hasLink } from "@/lib/utils";
import { LinkButton } from "./ui/Button";
import { EditableImage } from "./ui/EditableImage";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const { profile, hero } = content;
  const { github, linkedin, resume } = profile.contact;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-dotgrid bg-dotgrid opacity-[0.55] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs tracking-wide text-muted">
                open to Data Science, AI/ML and Product roles
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-[2.6rem] font-semibold leading-[1.04] tracking-tightest2 md:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-4 font-heading text-xl font-medium text-slate md:text-2xl"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {hasLink(github) && (
                <LinkButton href={github} variant="primary">
                  <Github size={16} /> GitHub
                </LinkButton>
              )}
              {hasLink(linkedin) && (
                <LinkButton href={linkedin} variant="secondary">
                  <Linkedin size={16} /> LinkedIn
                </LinkButton>
              )}
              {hasLink(resume) && (
                <LinkButton href={resume} variant="ghost">
                  <FileText size={16} /> Resume
                  <ArrowUpRight size={14} />
                </LinkButton>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xs md:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card">
              <EditableImage
                src={hero.image}
                alt={hero.image_alt}
                placeholderLabel={`Add ${hero.image} to fill this frame`}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-line bg-surface px-4 py-3 shadow-card md:block">
              <p className="font-heading text-lg font-semibold leading-none">IIT Guwahati</p>
              <p className="mt-1 text-xs text-muted">{profile.education.major}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
