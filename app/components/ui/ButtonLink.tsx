import type { ReactNode } from "react";

export default function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string }) {
  return <a href={href} className={`button button--${variant} ${className}`}>{children}</a>;
}
