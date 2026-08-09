"use client";

import { useEffect, useState } from "react";
import { content } from "@/content/content";
import { hasLink } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#product", label: "Product" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { resume } = content.profile.contact;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-ivory/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink font-heading text-sm font-semibold text-ivory">
            AK
          </span>
          <span className="hidden font-heading text-sm font-medium tracking-tight sm:inline">
            Ayush Kumar
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {hasLink(resume) && (
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-ink px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-ivory"
            >
              Resume
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
