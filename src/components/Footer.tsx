import { content } from "@/content/content";

export function Footer() {
  return (
    <footer className="bg-ink py-8 text-ivory/50">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
        <p>
          {content.profile.name}, {new Date().getFullYear()}
        </p>
        <p>Built with Next.js, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  );
}
