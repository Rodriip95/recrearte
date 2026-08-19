"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type AnalyticsProperties = Record<string, string | number | boolean>;

export default function ButtonLink({ href, children, variant = "primary", className = "", analyticsEvent, analyticsProperties }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string; analyticsEvent?: string; analyticsProperties?: AnalyticsProperties }) {
  return (
    <a
      href={href}
      className={`button button--${variant} ${className}`}
      onClick={() => {
        if (analyticsEvent) track(analyticsEvent, analyticsProperties);
      }}
    >
      {children}
    </a>
  );
}
