import { getSiteSettings } from "@/sanity/lib/fetchSiteSettings";
import HeaderClient from "./HeaderClient";

/**
 * Server component wrapper for the site header.
 * Fetches Site Settings from Sanity (with fallback) and passes them to the
 * client-side HeaderClient which handles interactive state (mobile menu, scroll).
 */
export default async function Header() {
  const settings = await getSiteSettings();
  return (
    <HeaderClient
      navLinks={settings.navLinks}
      calendlyUrl={settings.calendlyUrl}
      logoUrl={settings.logoUrl}
      companyName={settings.companyName}
    />
  );
}
