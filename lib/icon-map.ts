/**
 * Maps string icon names (stored in Sanity) back to Lucide React icon components.
 * Keep this list in sync with the `iconName` option list in `sanity/schemas/service.ts`.
 */
import {
  Mail,
  Calendar,
  Share2,
  Palette,
  Globe,
  Headphones,
  PenTool,
  Bot,
  TrendingUp,
  Users,
  Shield,
  Clock,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Calendar,
  Share2,
  Palette,
  Globe,
  Headphones,
  PenTool,
  Bot,
  TrendingUp,
  Users,
  Shield,
  Clock,
};

export function resolveIcon(name: string | undefined | null): LucideIcon {
  if (!name) return Sparkles;
  return iconMap[name] ?? Sparkles;
}
