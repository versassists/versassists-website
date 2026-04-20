/**
 * Layout override for the /studio route — strips away the site's marketing
 * Header/Footer so the Studio takes the full viewport.
 */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
