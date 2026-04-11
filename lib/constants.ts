import {
  Mail,
  Calendar,
  Share2,
  Palette,
  Globe,
  Headphones,
  PenTool,
  Bot,
  Clock,
  Shield,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

// ─── Services ────────────────────────────────────────────────────────
export interface Service {
  icon: LucideIcon;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  // Landing-page SEO content
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  longDescription: string[];
  benefits: { title: string; desc: string }[];
  idealFor: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    icon: Mail,
    slug: "email-management-virtual-assistant",
    title: "Email Management",
    shortTitle: "Email Management VA",
    description:
      "Our AI-enhanced email management keeps your inbox organized, prioritizes critical messages, and ensures timely responses — so you never miss what matters.",
    features: [
      "AI-powered inbox triage & prioritization",
      "Template responses for common queries",
      "Follow-up tracking & reminders",
      "Spam filtering & organization",
    ],
    seoTitle:
      "Email Management Virtual Assistant for Small Business | VersAssist",
    seoDescription:
      "Hire an AI-powered email management virtual assistant. Inbox zero, smart triage, template replies, follow-up tracking. Save 10+ hours per week. Book a free call.",
    heroHeadline: "Email Management Virtual Assistant Services",
    heroSubheadline:
      "Reclaim 10+ hours every week with an AI-powered email management virtual assistant. Our trained VAs triage, reply, and organize your inbox so you can focus on what matters.",
    longDescription: [
      "Drowning in email is one of the top complaints we hear from small business owners and startup founders. A full inbox kills productivity, buries opportunities, and adds stress to your day. Our email management virtual assistants combine human judgment with AI tools to process, categorize, and respond to hundreds of messages a week — without the noise reaching your desk.",
      "Unlike traditional VAs, our email management virtual assistant services are AI-enhanced. Every assistant is trained on the latest AI tools (ChatGPT, Gmail AI, Superhuman, SaneBox) so they can work 3x faster and deliver cleaner results. You keep control of tone and strategy; they handle the execution.",
      "Whether you need someone to hit inbox zero daily, manage client communication, or handle sales follow-ups, our email management VAs scale with you. No contracts, no lock-in — hours never expire.",
    ],
    benefits: [
      {
        title: "Inbox Zero, Every Day",
        desc: "Your VA triages, labels, and files every incoming message within your SLA window.",
      },
      {
        title: "AI-Accelerated Replies",
        desc: "Smart drafts generated in seconds so you (or your VA) can review and send faster.",
      },
      {
        title: "Follow-Up Tracking",
        desc: "Never let a sales lead or client question slip through the cracks again.",
      },
      {
        title: "Privacy-First",
        desc: "Every VA signs an NDA. We use least-privilege access and audit logs.",
      },
    ],
    idealFor: [
      "Founders receiving 100+ emails/day",
      "Coaches and consultants managing client communication",
      "E-commerce teams handling support inboxes",
      "Executives needing a chief-of-staff-style inbox gatekeeper",
    ],
    keywords: [
      "email management virtual assistant",
      "inbox management VA",
      "email virtual assistant for small business",
      "hire email VA",
    ],
  },
  {
    icon: Calendar,
    slug: "calendar-scheduling-virtual-assistant",
    title: "Calendar & Scheduling",
    shortTitle: "Calendar VA",
    description:
      "Advanced AI-driven scheduling that eliminates double-bookings, manages time zones, and keeps your calendar conflict-free.",
    features: [
      "Smart appointment scheduling",
      "Time zone management",
      "Conflict detection & resolution",
      "Meeting prep & agenda creation",
    ],
    seoTitle:
      "Calendar & Scheduling Virtual Assistant | AI-Powered VA | VersAssist",
    seoDescription:
      "Hire a calendar and scheduling virtual assistant. AI-powered appointment booking, time zone management, meeting prep, conflict resolution. Free discovery call.",
    heroHeadline: "Calendar & Scheduling Virtual Assistant Services",
    heroSubheadline:
      "Stop playing calendar Tetris. Our AI-powered scheduling virtual assistants book meetings, manage time zones, and prep you for every call.",
    longDescription: [
      "Your calendar is one of your most valuable assets — and one of the biggest sources of chaos. Between client meetings, internal stand-ups, podcasts, and sales calls, scheduling eats hours every week. Our calendar and scheduling virtual assistants use tools like Calendly, Motion, Reclaim, and Google Calendar AI to automate the busywork and make sure every meeting is worth your time.",
      "A VersAssist scheduling VA doesn't just book meetings — they protect your time. They batch similar calls, enforce buffer time, reschedule conflicts, send pre-meeting briefs, and follow up afterward. You walk into every meeting prepared and walk out with the action items already documented.",
      "Perfect for founders, coaches, sales leaders, and anyone whose calendar has become unmanageable.",
    ],
    benefits: [
      {
        title: "AI-Optimized Scheduling",
        desc: "Your VA uses scheduling AI to find the perfect slot across every time zone.",
      },
      {
        title: "Meeting Prep Briefs",
        desc: "Every meeting comes with a one-page brief so you're never caught off guard.",
      },
      {
        title: "Conflict Protection",
        desc: "Buffer time, travel time, focus blocks — all protected automatically.",
      },
      {
        title: "Follow-Up Automation",
        desc: "Notes, action items, and recap emails sent within an hour of each meeting.",
      },
    ],
    idealFor: [
      "Sales leaders with 20+ meetings/week",
      "Coaches and therapists managing client sessions",
      "Executives who need gatekeeping",
      "Podcast hosts and content creators booking guests",
    ],
    keywords: [
      "scheduling virtual assistant",
      "calendar management VA",
      "appointment setter virtual assistant",
    ],
  },
  {
    icon: Share2,
    slug: "social-media-virtual-assistant",
    title: "Social Media Management",
    shortTitle: "Social Media VA",
    description:
      "Elevate your brand with AI-powered content strategy, creation, and scheduling across all major platforms.",
    features: [
      "Content calendar planning",
      "AI-generated captions & hashtags",
      "Engagement monitoring & response",
      "Analytics & performance reporting",
    ],
    seoTitle:
      "Social Media Virtual Assistant: Instagram, LinkedIn, TikTok | VersAssist",
    seoDescription:
      "Hire an AI-powered social media virtual assistant. Content creation, scheduling, engagement, analytics across Instagram, LinkedIn, TikTok, and more. Book a free call.",
    heroHeadline: "Social Media Virtual Assistant Services",
    heroSubheadline:
      "Grow your Instagram, LinkedIn, TikTok, and Facebook with an AI-powered social media virtual assistant who handles everything from strategy to engagement.",
    longDescription: [
      "Consistent, high-quality social media is one of the fastest ways to build a brand — and one of the hardest to sustain on your own. Our social media virtual assistants handle every step of the process: strategy, content calendars, graphics, captions, hashtag research, posting, community engagement, and monthly reporting.",
      "We combine AI tools (ChatGPT, Canva AI, Midjourney, Metricool) with human creativity, so your content feels authentic while being produced at 3x the speed. Every social media VA is trained on best practices for Instagram, LinkedIn, TikTok, Facebook, and X (Twitter), and specializes in the platform mix that matters most to your audience.",
      "Whether you want to build a personal brand, launch a product, or grow a local business, our social media VAs are your execution arm — without the cost of a full-time hire.",
    ],
    benefits: [
      {
        title: "Full-Funnel Content",
        desc: "From awareness reels to conversion carousels — we cover every stage of your funnel.",
      },
      {
        title: "AI-Powered Production",
        desc: "Captions, hashtags, and graphics generated with AI then polished by humans.",
      },
      {
        title: "Engagement Management",
        desc: "DMs, comments, and replies handled in your voice so your community never feels ignored.",
      },
      {
        title: "Monthly Analytics",
        desc: "Clear reports on reach, engagement, and growth — plus recommendations for next month.",
      },
    ],
    idealFor: [
      "Personal brands and thought leaders",
      "Coaches, consultants, and course creators",
      "Small local businesses",
      "E-commerce and DTC brands",
    ],
    keywords: [
      "social media virtual assistant",
      "Instagram virtual assistant",
      "LinkedIn content VA",
      "TikTok virtual assistant",
    ],
  },
  {
    icon: Palette,
    slug: "graphic-design-virtual-assistant",
    title: "Graphic Design",
    shortTitle: "Design VA",
    description:
      "From logos to marketing materials, our AI-enhanced designers create stunning visuals that communicate your brand's story.",
    features: [
      "Brand identity & logo design",
      "Social media graphics",
      "Marketing collateral & flyers",
      "Presentation design",
    ],
    seoTitle:
      "Graphic Design Virtual Assistant: Logos, Branding, Social | VersAssist",
    seoDescription:
      "Hire an AI-enhanced graphic design virtual assistant. Logos, brand identity, social graphics, marketing materials, pitch decks. Fast turnaround. Book a free call.",
    heroHeadline: "Graphic Design Virtual Assistant Services",
    heroSubheadline:
      "Professional logos, brand identity, social graphics, and marketing collateral — delivered by AI-enhanced design virtual assistants at a fraction of agency prices.",
    longDescription: [
      "Great design is no longer optional — it's how customers decide whether to trust you in the first three seconds. Our graphic design virtual assistants help small businesses and startups look like they have a full creative team behind them, without the overhead.",
      "From Canva Pro and Adobe Creative Cloud to Midjourney, Figma, and Framer, our designers use the entire modern toolchain. Every project starts with a creative brief, includes unlimited revisions within scope, and ships in days — not weeks.",
      "Whether you need a one-off logo, ongoing social graphics, or a full brand rebuild, our design VAs deliver agency-quality work at VA pricing.",
    ],
    benefits: [
      {
        title: "Agency-Quality Output",
        desc: "Every deliverable is reviewed by a senior designer before it reaches you.",
      },
      {
        title: "AI-Accelerated Turnaround",
        desc: "Concepts in 24 hours, final files in 48–72 hours for most projects.",
      },
      {
        title: "Unlimited Revisions",
        desc: "We iterate until you love it — all within your hourly package.",
      },
      {
        title: "Full Toolchain",
        desc: "Canva, Adobe, Figma, Midjourney, Framer — whatever your brand needs.",
      },
    ],
    idealFor: [
      "Startups building a brand from scratch",
      "Small businesses needing ongoing social graphics",
      "Course creators producing lead magnets and workbooks",
      "SaaS companies needing pitch decks and marketing collateral",
    ],
    keywords: [
      "graphic design virtual assistant",
      "logo design VA",
      "branding virtual assistant",
      "Canva virtual assistant",
    ],
  },
  {
    icon: Globe,
    slug: "website-development-virtual-assistant",
    title: "Website Development",
    shortTitle: "Web Dev VA",
    description:
      "Comprehensive website development and maintenance with AI monitoring to keep your site fast, secure, and always up-to-date.",
    features: [
      "Custom website design & development",
      "SEO optimization",
      "Regular updates & security patches",
      "Performance monitoring",
    ],
    seoTitle:
      "Website Development Virtual Assistant: WordPress, Webflow, Next.js | VersAssist",
    seoDescription:
      "Hire a website development virtual assistant. WordPress, Webflow, Shopify, Next.js builds plus ongoing maintenance, SEO, and AI monitoring. Free discovery call.",
    heroHeadline: "Website Development Virtual Assistant Services",
    heroSubheadline:
      "Launch, maintain, and optimize your website with an AI-powered web development virtual assistant. WordPress, Webflow, Shopify, and Next.js — covered.",
    longDescription: [
      "Your website is your 24/7 salesperson. When it's slow, outdated, or broken, you're losing customers every hour. Our website development virtual assistants handle everything from landing page builds to full site rebuilds, ongoing maintenance, speed optimization, and SEO — using AI monitoring to catch issues before your visitors do.",
      "We specialize in WordPress, Webflow, Shopify, Framer, and Next.js (like this very site). Whether you need a one-time build, a monthly retainer for updates, or someone to run your site full-time, our web dev VAs scale to your needs.",
      "Every project includes Core Web Vitals optimization, mobile-first design, accessibility checks, and ongoing security monitoring — all for a fraction of a full-time developer's cost.",
    ],
    benefits: [
      {
        title: "Modern Stack",
        desc: "WordPress, Webflow, Shopify, Framer, Next.js, React — pick your platform, we build it.",
      },
      {
        title: "SEO Built-In",
        desc: "Every page ships with meta tags, schema, sitemap, and Core Web Vitals optimization.",
      },
      {
        title: "AI Monitoring",
        desc: "We use AI-powered uptime and performance monitoring to catch issues early.",
      },
      {
        title: "Ongoing Maintenance",
        desc: "Security patches, plugin updates, backups, and content changes — all handled.",
      },
    ],
    idealFor: [
      "Small businesses launching or rebuilding a website",
      "E-commerce stores needing Shopify or WooCommerce support",
      "SaaS companies building marketing sites",
      "Agencies white-labeling our dev team",
    ],
    keywords: [
      "website development virtual assistant",
      "WordPress VA",
      "Webflow virtual assistant",
      "Shopify VA",
    ],
  },
  {
    icon: Headphones,
    slug: "customer-support-virtual-assistant",
    title: "Customer Support",
    shortTitle: "Support VA",
    description:
      "AI-powered customer support that provides fast, accurate, and personalized responses to keep your customers happy.",
    features: [
      "Multi-channel support management",
      "AI chatbot setup & training",
      "Ticket management & routing",
      "Customer satisfaction tracking",
    ],
    seoTitle:
      "Customer Support Virtual Assistant: Email, Chat, Tickets | VersAssist",
    seoDescription:
      "Hire a customer support virtual assistant. Multi-channel support, AI chatbot setup, ticket management, CSAT tracking. 24/7 coverage available. Free call.",
    heroHeadline: "Customer Support Virtual Assistant Services",
    heroSubheadline:
      "Deliver 5-star customer support around the clock with AI-enhanced virtual assistants who know your product inside and out.",
    longDescription: [
      "Fast, friendly support is the difference between a one-time buyer and a lifetime customer. Our customer support virtual assistants handle email, live chat, ticket queues, phone, and social DMs — trained on your product, tone, and FAQs so every reply feels on-brand.",
      "We pair our VAs with modern support tools (Zendesk, Intercom, Freshdesk, Help Scout, Gorgias) and AI systems (ChatGPT, custom GPTs, AI knowledge bases) to resolve tickets 3x faster while maintaining human warmth.",
      "Whether you need part-time coverage during business hours or 24/7 global support, our customer support VAs plug directly into your workflow.",
    ],
    benefits: [
      {
        title: "Multi-Channel Coverage",
        desc: "Email, chat, social DMs, tickets — all handled by one trained team.",
      },
      {
        title: "AI-Augmented Replies",
        desc: "Knowledge-base-powered draft replies that your VA edits and sends.",
      },
      {
        title: "Fast Onboarding",
        desc: "Your VA is trained on your product, FAQ, and tone within 48 hours of kickoff.",
      },
      {
        title: "CSAT Tracking",
        desc: "Monthly reports on customer satisfaction, ticket volume, and response times.",
      },
    ],
    idealFor: [
      "E-commerce and DTC brands",
      "SaaS companies with growing support queues",
      "Coaching and membership communities",
      "Local service businesses",
    ],
    keywords: [
      "customer support virtual assistant",
      "customer service VA",
      "Zendesk virtual assistant",
      "live chat VA",
    ],
  },
  {
    icon: PenTool,
    slug: "content-writing-virtual-assistant",
    title: "Content Creation",
    shortTitle: "Content VA",
    description:
      "Engage your audience with high-quality blogs, course materials, email campaigns, and copywriting crafted with AI precision.",
    features: [
      "Blog posts & articles",
      "Course content development",
      "Email marketing campaigns",
      "Copywriting & editing",
    ],
    seoTitle:
      "Content Writing Virtual Assistant: Blogs, Courses, Email | VersAssist",
    seoDescription:
      "Hire an AI-powered content writing virtual assistant. SEO blogs, course content, email campaigns, copywriting. Publish consistently without burnout. Book a call.",
    heroHeadline: "Content Writing Virtual Assistant Services",
    heroSubheadline:
      "Publish SEO-optimized blogs, email newsletters, and course content every week with an AI-powered content writing virtual assistant.",
    longDescription: [
      "Content marketing is the highest-ROI channel for small businesses — but only if you publish consistently. Our content writing virtual assistants help you do exactly that. From SEO blog posts and email newsletters to course modules and sales copy, we ship publish-ready drafts every week.",
      "Our writers use AI tools (ChatGPT, Claude, Jasper, SurferSEO) as accelerators — not replacements — so every piece reads naturally, ranks in search, and drives conversions. Each project starts with a content brief, keyword research, and a style guide tailored to your voice.",
      "Whether you need a single blog post or a full content calendar, our content VAs plug into your team and help you own your niche.",
    ],
    benefits: [
      {
        title: "SEO-First Writing",
        desc: "Every blog is optimized for search intent, keywords, and readability before it ships.",
      },
      {
        title: "Voice Matching",
        desc: "We study your existing content and match your tone exactly.",
      },
      {
        title: "Fast Turnaround",
        desc: "1,500-word blog posts delivered in 48 hours or less.",
      },
      {
        title: "Full-Funnel Copy",
        desc: "Blogs, emails, landing pages, sales pages, courses — we do it all.",
      },
    ],
    idealFor: [
      "Founders who want to publish weekly but don't have time",
      "Coaches and course creators",
      "SaaS companies running content-led growth",
      "Agencies needing white-label writing",
    ],
    keywords: [
      "content writing virtual assistant",
      "blog writing VA",
      "copywriting virtual assistant",
      "SEO writer VA",
    ],
  },
  {
    icon: Bot,
    slug: "ai-consulting-virtual-assistant",
    title: "AI Consulting",
    shortTitle: "AI Consulting VA",
    description:
      "Custom AI solutions and prototypes tailored to your business needs — from workflow automation to intelligent assistants.",
    features: [
      "AI workflow automation",
      "Custom chatbot development",
      "Process optimization",
      "AI tool integration & training",
    ],
    seoTitle:
      "AI Consulting for Small Business: Workflows, Chatbots, Automation | VersAssist",
    seoDescription:
      "AI consulting for small businesses. Workflow automation, custom GPTs, chatbot development, AI tool training. Save 20+ hours/week. Free discovery call.",
    heroHeadline: "AI Consulting & Automation Services",
    heroSubheadline:
      "Save 20+ hours per week by automating your repetitive work with custom AI workflows, chatbots, and integrations built for your business.",
    longDescription: [
      "AI is the single biggest productivity lever available to small businesses right now — but most founders don't have time to figure out which tools to use, how to connect them, or how to train their teams. That's where our AI consulting service comes in.",
      "Our AI consultants work with you to identify the highest-impact workflows in your business, then build custom automations, GPTs, and chatbots to handle them. We use tools like ChatGPT, Claude, Zapier, Make, n8n, Airtable, and custom LLM integrations to deliver measurable results in weeks — not months.",
      "Past projects include AI email assistants, custom customer support bots, automated content pipelines, AI-powered lead scoring, and workflow automations that save clients 20+ hours per week.",
    ],
    benefits: [
      {
        title: "Workflow Automation",
        desc: "Eliminate repetitive work with Zapier, Make, n8n, and custom scripts.",
      },
      {
        title: "Custom GPTs & Chatbots",
        desc: "Branded AI assistants trained on your knowledge base, documents, and tone.",
      },
      {
        title: "AI Strategy",
        desc: "We map your business and identify the highest-ROI AI opportunities first.",
      },
      {
        title: "Team Training",
        desc: "We train your team on the tools so they can run them independently.",
      },
    ],
    idealFor: [
      "Founders overwhelmed by repetitive tasks",
      "Small businesses exploring AI for the first time",
      "Agencies wanting to offer AI services to clients",
      "Operators who want to 10x output without hiring",
    ],
    keywords: [
      "AI consulting for small business",
      "AI automation services",
      "custom GPT development",
      "AI virtual assistant consultant",
    ],
  },
];

// ─── Team ────────────────────────────────────────────────────────────
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Jeff Bullock",
    role: "Co-Founder & CEO",
    bio: "With over two decades of experience in business strategy and management, Dr. Jeff's expertise in operational restructuring and strategic growth guides VersAssist in transforming the virtual assistance landscape.",
    image: "/profile-pictures/dr-jeff-bullock.jpg",
  },
  {
    name: "Michael Olaiya",
    role: "Co-Founder & CFO",
    bio: "Dedicated to revolutionizing business growth through AI-powered training and strategic support, Michael ensures VersAssist delivers measurable financial impact for every client.",
    image: "/profile-pictures/dr-mike-olaiya.jpg",
  },
  {
    name: "Saleem Raja",
    role: "Operations Director",
    bio: "Saleem ensures operational efficiency across VersAssist's diverse service portfolio, using data-driven strategies to exceed client expectations and drive satisfaction.",
    image: "/profile-pictures/saleem-raja.jpg",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "VersAssist transformed our online presence completely. Their AI-enhanced approach to social media management and content creation delivered results we didn't think were possible for a small business.",
    name: "Yolanda Pender",
    title: "Co-Founder",
    company: "About Life and Marriage",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "The website revamp VersAssist delivered exceeded every expectation. They didn't just build a site — they built a growth engine. Our leads increased significantly within weeks of launch.",
    name: "Tim Pender",
    title: "Co-Founder",
    company: "About Life and Marriage",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "Working with VersAssist on our digital strategy was a game-changer. Their team leveraged AI tools to produce marketing materials that genuinely moved the needle on our sales pipeline.",
    name: "PRISM AI Consultants",
    title: "Client",
    company: "PRISM AI Consultants",
    image: "/images/testimonial-3.jpg",
  },
  {
    quote:
      "VersAssist expanded our digital presence from nothing to a comprehensive online ecosystem — website, social media, and content — all handled seamlessly by their AI-powered team.",
    name: "Carter & Olay Foundation",
    title: "Client",
    company: "Carter & Olay Foundation",
    image: "/images/testimonial-4.jpg",
  },
  {
    quote:
      "We've had a great experience working with VersAssists. Operationally, they've helped our company perform at a much higher level. They're responsive, complete tasks in a timely manner, and consistently deliver work that aligns with what we're looking for. If you're on the fence about using virtual assistants, I highly recommend VersAssists. The value is definitely there. They've been a reliable and worthwhile investment for our team.",
    name: "Ellena Weaver",
    title: "Client",
    company: "Weaver Enterprises & Investments",
    image: "",
  },
  {
    quote:
      "VersAssists is the real deal. I highly recommend using them. They have twice helped me on two major projects, a layout of a white paper and now, a book layout. In addition, they were instrumental in getting some VIBE computing projects finalized. Highly recommend VersAssists.",
    name: "William Harris",
    title: "Client",
    company: "",
    image: "",
  },
  {
    quote:
      "Our firm has had a great experience with VersAssists. They've supported us with creating applications, presentation decks, book layout, and general admin—always delivering high-quality work. They're responsive, reliable, and feel like an extension of our team. Their support has saved us time and helped us stay focused on what matters most. Highly recommend.",
    name: "Paula Harris",
    title: "Client",
    company: "",
    image: "",
  },
  {
    quote:
      "Versassist delivered exceptional support for my Etsy page and website. Their team provided clear, insightful guidance and worked with impressive efficiency. They were consistently accommodating—readily making adjustments even when I was still refining my ideas. The overall experience was excellent. I genuinely appreciate their professionalism, patience, and dedication to quality. I would confidently recommend Versassist to anyone seeking reliable and thoughtful assistance with their online presence.",
    name: "Monica McGowan",
    title: "Client",
    company: "",
    image: "",
  },
];

// ─── Case Studies ────────────────────────────────────────────────────
export interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    client: "About Life and Marriage",
    industry: "Education & Coaching",
    challenge:
      "Needed to update their website, organize course materials, and produce engaging media content to grow their coaching business.",
    solution:
      "VersAssist provided end-to-end support — website redesign, course content organization, media production, and ongoing social media management using AI-enhanced workflows.",
    results: [
      "Complete website overhaul with modern design",
      "Organized and optimized course content",
      "Consistent social media presence established",
      "Increased audience engagement across platforms",
    ],
    testimonial:
      "VersAssist proved to be true partners in our growth and excellence.",
    image: "/images/case-study-1.jpg",
  },
  {
    client: "PRISM AI Consultants",
    industry: "Technology & Consulting",
    challenge:
      "Required enhanced digital footprint across Instagram, YouTube, and LinkedIn to reach their target audience of tech-forward businesses.",
    solution:
      "Leveraged AI-generated content to produce captivating videos and marketing materials, implemented multi-platform content strategy with consistent branding.",
    results: [
      "Expanded presence across 3 major platforms",
      "AI-generated video content production",
      "Elevated brand presence and recognition",
      "Significant increase in inbound inquiries",
    ],
    testimonial:
      "Their AI-enhanced approach to content creation is unlike anything we've seen in the market.",
    image: "/images/case-study-2.jpg",
  },
  {
    client: "Carter & Olay Foundation",
    industry: "Non-Profit",
    challenge:
      "Needed to build a digital presence from scratch — no website, no social media accounts, limited online visibility.",
    solution:
      "Built a comprehensive website, set up and branded social media accounts, created engaging content strategy to amplify their mission and build community.",
    results: [
      "Complete website built from ground up",
      "Social media accounts established & branded",
      "Community of supporters built online",
      "Ongoing content creation pipeline",
    ],
    testimonial:
      "VersAssist took us from invisible to impactful online. Their team truly cared about our mission.",
    image: "/images/case-study-3.jpg",
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────
export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "One Strategic Priority. Fully Executed.",
    price: "$750",
    period: "50 hrs / $15 per hour",
    features: [
      "Ideal for solopreneurs or small business owners ready to move one important project forward",
      "Choose ONE Focus Area: Admin, SEO, Social Media, or Book Publishing",
      "Dedicated VA team focused on your chosen goal",
      "AI-powered tools to speed up execution",
      "Weekly progress check-ins",
      "Add Boost Packs anytime to expand support",
    ],
    highlighted: false,
    cta: "Book Now",
  },
  {
    name: "Pro",
    tagline: "Two Strategic Priorities. Fully Executed.",
    price: "$1,000",
    period: "75 hrs / $13.33 per hour",
    features: [
      "Ideal for business owners ready to accelerate progress in more than one area",
      "Choose TWO Focus Areas: Admin, SEO, Social Media, Book Publishing, or Lead Generation",
      "Dedicated VA team focused on your chosen priorities",
      "AI-powered tools to speed up delivery and improve results",
      "Weekly progress updates and milestone tracking",
      "Flexible — add Boost Packs anytime to expand support mid-month",
    ],
    highlighted: true,
    cta: "Book Now",
  },
  {
    name: "Growth",
    tagline: "Support Across Two Key Areas.",
    price: "$1,500",
    period: "115 hrs / $13.04 per hour",
    features: [
      "Built for growing businesses ready to level up marketing and operations",
      "Choose TWO Focus Areas: Admin, SEO, Social Media, or Lead Generation",
      "Consistent execution with a small, efficient team",
      "Marketing and ops alignment using AI tools",
      "Weekly deliverables with monthly review",
      "Boost Packs available if your needs grow mid-month",
    ],
    highlighted: false,
    cta: "Book Now",
  },
  {
    name: "Enterprise",
    tagline: "Execution + Oversight. Everything Gets Done.",
    price: "$2,000",
    period: "165 hrs / $12.12 per hour",
    features: [
      "Everything from the Growth Plan, PLUS:",
      "Dedicated Success Manager to oversee your execution",
      "Brand strategy and campaign management",
      "Business performance reporting and optimization",
      "Advanced support for marketing, sales, and ops",
    ],
    highlighted: false,
    cta: "Book Now",
  },
  {
    name: "Scaling",
    tagline: "All-In Support. For Founders Who Want to Go Fast.",
    price: "$2,500",
    period: "210 hrs / $12 per hour",
    features: [
      "Complete business operations support: admin, lead gen, content, marketing",
      "Custom automation builds + AI workflows",
      "Funnel and CRM setup",
      "Chatbot development & client systems",
      "CEO-level reporting & strategy sessions",
    ],
    highlighted: false,
    cta: "Book Now",
  },
];

export interface BoostPack {
  name: string;
  price: string;
  description: string;
}

export const boostPacks: BoostPack[] = [
  { name: "Boost Plus", price: "$375", description: "Launch a new initiative or extend support" },
  { name: "Boost Mini", price: "$200", description: "Add an extra deliverable within your plan" },
  { name: "Custom Boost", price: "Varies", description: "Special projects, campaigns, or overflow" },
];

export interface CustomProject {
  name: string;
  description: string;
  price: string;
}

export const customProjects: CustomProject[] = [
  { name: "Website — 5 pages", description: "Flat or hour-bank", price: "$300" },
  { name: "AI Prototype Demo", description: "Dashboard or chatbot", price: "$500–$1,500" },
  { name: "Your Life as a Movie", description: "Book, video, website", price: "$2,997" },
  { name: "Book Ghostwriting 7–15K words", description: "Delivery + management with hours", price: "$999" },
];

// ─── FAQ ─────────────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What exactly does VersAssist do?",
    answer:
      "VersAssist provides AI-powered virtual assistance services for small businesses and startups. Our trained virtual assistants use advanced AI tools to handle tasks like email management, social media, graphic design, website development, customer support, content creation, and more — so you can focus on growing your business.",
    category: "General",
  },
  {
    question: "How is VersAssist different from other VA companies?",
    answer:
      "Unlike traditional VA services, our team is trained on cutting-edge AI tools that multiply their productivity. This means you get faster turnaround, higher quality work, and more value per hour. Plus, your hours never expire, there are no lock-in contracts, and you get detailed billing transparency.",
    category: "General",
  },
  {
    question: "What AI tools do your virtual assistants use?",
    answer:
      "Our VAs are trained on a wide range of AI tools including ChatGPT, Midjourney, Canva AI, Jasper, scheduling automation tools, social media AI assistants, and custom-built AI workflows tailored to each client's needs.",
    category: "General",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer flexible plans based on your needs. You choose your focus areas (Admin, SEO, Social Media, Book Publishing, etc.) and pay for the hours you use. There's no lock-in contract, and your unused hours never expire. We provide detailed billing so you always know exactly what you're paying for.",
    category: "Pricing",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "Yes, there is a one-time setup fee of $299.99 to customize and integrate our services with your existing workflows. This covers onboarding, tool setup, workflow design, and initial training specific to your business.",
    category: "Pricing",
  },
  {
    question: "Do unused hours expire?",
    answer:
      "No! Your hours never expire. This is one of our key differentiators. You pay for hours and use them whenever you need — no pressure to use them within a specific time frame.",
    category: "Pricing",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a free 15-minute discovery call. We'll learn about your business, understand your needs, and recommend the best plan for you. Once you sign up, we handle the onboarding and you can start delegating tasks immediately.",
    category: "Getting Started",
  },
  {
    question: "How quickly can I start using the services?",
    answer:
      "After your discovery call and onboarding, most clients start delegating tasks within 48 hours. We move fast because we know your time is valuable.",
    category: "Getting Started",
  },
  {
    question: "Can I change my plan or focus areas later?",
    answer:
      "Absolutely. Our plans are flexible by design. You can upgrade, downgrade, or change your focus areas at any time. We adapt to your business as it grows.",
    category: "Getting Started",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We specialize in small businesses, startups, solopreneurs, and entrepreneurs. Our clients range from coaches and consultants to e-commerce stores, non-profits, and tech companies.",
    category: "Services",
  },
  {
    question: "Can you handle industry-specific tasks?",
    answer:
      "Yes. During onboarding, we learn your industry, workflows, and specific requirements. Our AI-enhanced VAs adapt to your business context, whether you're in healthcare, education, real estate, tech, or any other industry.",
    category: "Services",
  },
  {
    question: "How do you ensure quality and security?",
    answer:
      "We have rigorous quality control processes, regular performance reviews, and detailed reporting. For security, we follow industry best practices for data handling, use secure communication channels, and sign NDAs as needed.",
    category: "Services",
  },
];

// ─── Stats ───────────────────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 10000, suffix: "+", label: "Hours Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 8, suffix: "+", label: "Services Offered" },
];

// ─── Navigation ──────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "VersAssist Calculator", href: "https://calculator.versassists.com/" },
];

// ─── Social Links ────────────────────────────────────────────────────
export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/versassists/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/versassist", icon: "linkedin" },
  { label: "Facebook", href: "#", icon: "facebook" },
];

// ─── Company Info ────────────────────────────────────────────────────
export const companyInfo = {
  name: "VersAssist",
  tagline: "AI-Powered Virtual Assistance for Small Businesses & Startups",
  email: "info@versassists.com",
  phone: "",
  address: "",
  website: "https://www.versassists.com",
};

// ─── Values ──────────────────────────────────────────────────────────
export const values = [
  {
    title: "Innovation",
    description: "We stay at the forefront of AI technology to deliver cutting-edge solutions that give your business a competitive advantage.",
  },
  {
    title: "Excellence",
    description: "Every task, every deliverable, every interaction — we hold ourselves to the highest standard of quality and professionalism.",
  },
  {
    title: "Partnership",
    description: "We don't just work for you — we work with you. Your success is our success, and we invest in understanding your unique needs.",
  },
  {
    title: "Transparency",
    description: "From detailed billing to clear communication, you always know exactly what's happening, what's been done, and what's next.",
  },
];
