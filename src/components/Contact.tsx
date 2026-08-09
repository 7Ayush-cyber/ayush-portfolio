"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import { content } from "@/content/content";
import { hasLink } from "@/lib/utils";
import { SectionHeading } from "./ui/SectionHeading";

export function Contact() {
  const { contact } = content.profile;

  const cards = [
    {
      key: "email_primary",
      label: "Email",
      value: contact.email_primary,
      href: `mailto:${contact.email_primary}`,
      icon: Mail,
      show: hasLink(contact.email_primary),
    },
    {
      key: "email_secondary",
      label: "Alternate email",
      value: contact.email_secondary,
      href: `mailto:${contact.email_secondary}`,
      icon: Mail,
      show: hasLink(contact.email_secondary),
    },
    {
      key: "phone",
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      icon: Phone,
      show: hasLink(contact.phone),
    },
    {
      key: "github",
      label: "GitHub",
      value: "View projects and code",
      href: contact.github,
      icon: Github,
      show: hasLink(contact.github),
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: "Connect professionally",
      href: contact.linkedin,
      icon: Linkedin,
      show: hasLink(contact.linkedin),
    },
    {
      key: "resume",
      label: "Resume",
      value: "Download full resume",
      href: contact.resume,
      icon: FileText,
      show: hasLink(contact.resume),
    },
  ].filter((c) => c.show);

  return (
    <section id="contact" className="border-t border-line bg-ink py-24 text-ivory">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let us build something worth shipping"
          description="Open to Data Science, AI/ML and Product roles, and happy to talk through any of the work above."
          tone="ivory"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.a
              key={c.key}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex items-center justify-between rounded-xl border border-ivory/15 bg-ivory/[0.04] px-5 py-5 transition-colors hover:border-accent/60 hover:bg-ivory/[0.07]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-accent">
                  <c.icon size={17} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ivory/50">{c.label}</p>
                  <p className="mt-0.5 text-sm font-medium text-ivory">{c.value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-ivory/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
