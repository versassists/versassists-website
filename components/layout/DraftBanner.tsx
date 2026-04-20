"use client";

import { usePathname } from "next/navigation";

/**
 * Shows a fixed bar at the top of the page when Next.js draft mode is active.
 * Clicking the "Exit" link disables draft mode and reloads the current page.
 */
export default function DraftBanner() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 inset-x-0 z-[100] bg-amber-500 text-black text-center text-sm font-semibold py-2 px-4 shadow-md">
      Draft Mode —{" "}
      <span className="font-normal">You are viewing unpublished content.</span>{" "}
      <a
        href={`/api/disable-draft?slug=${encodeURIComponent(pathname)}`}
        className="underline font-bold ml-2 hover:text-amber-900"
      >
        Exit Draft Mode
      </a>
    </div>
  );
}
