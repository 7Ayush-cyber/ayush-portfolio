import type { Metadata } from "next";

// Self-hosted fonts (no external network calls at build or runtime).
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

import "./globals.css";
import { content } from "@/content/content";

export const metadata: Metadata = {
  title: `${content.profile.name} | ${content.profile.headline}`,
  description: content.portfolio_copy.one_liner,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
