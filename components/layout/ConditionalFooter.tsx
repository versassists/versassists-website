"use client";

import { usePathname } from "next/navigation";

/**
 * Client-side pathname gate. Receives the Footer (async server component)
 * as children so we can conditionally render it without converting Footer
 * itself to a client component.
 */
export default function ConditionalFooter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) return null;
  return <>{children}</>;
}
