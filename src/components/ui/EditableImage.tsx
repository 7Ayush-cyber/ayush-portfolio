"use client";

import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { cn, isPlaceholder } from "@/lib/utils";

export function EditableImage({
  src,
  alt,
  placeholderLabel,
  className,
  imgClassName,
}: {
  src?: string;
  alt: string;
  placeholderLabel: string;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  const empty = isPlaceholder(src) || failed;

  if (empty) {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(135deg,#F6F1E7,#F6F1E7_10px,#EFE7D6_10px,#EFE7D6_20px)] text-center",
          className
        )}
      >
        <ImagePlus size={20} className="text-muted" />
        <span className="px-6 text-xs text-muted">{placeholderLabel}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={cn("h-full w-full object-cover", imgClassName)}
    />
  );
}
