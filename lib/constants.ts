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
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Mail,
    title: "Email Management",
    description:
      "Our AI-enhanced email management keeps your inbox organized, prioritizes critical messages, and ensures timely responses — so you never miss what matters.",
    features: [
      "AI-powered inbox triage & prioritization",
      "Template responses for common queries",
      "Follow-up tracking & reminders",
      "Spam filtering & organization",
    ],
  },
  {
    icon: Calendar,
    title: "Calendar & Scheduling",
    description:
      "Advanced AI-driven scheduling that eliminates double-bookings, manages time zones, and keeps your calendar conflict-free.",
    features: [
      "Smart appointment scheduling",
      "Time zone management",
      "Conflict detection & resolution",
      "Meeting prep & agenda creation",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Elevate your brand with AI-powered content strategy, creation, and scheduling across all major platforms.",
    features: [
      "Content calendar planning",
      "AI-generated captions & hashtags",
      "Engagement monitoring & response",
      "Analytics & performance reporting",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "From logos to marketing materials, our AI-enhanced designers create stunning visuals that communicate your brand's story.",
    features: [
      "Brand identity & logo design",
      "Social media graphics",
      "Marketing collateral & flyers",
      "Presentation design",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Comprehensive website development and maintenance with AI monitoring to keep your site fast, secure, and always up-to-date.",
    features: [
      "Custom website design & development",
      "SEO optimization",
      "Regular updates & security patches",
      "Performance monitoring",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "AI-powered customer support that provides fast, accurate, and personalized responses to keep your customers happy.",
    features: [
      "Multi-channel support management",
      "AI chatbot setup & training",
      "Ticket management & routing",
      "Customer satisfaction tracking",
    ],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description:
      "Engage your audience with high-quality blogs, course materials, email campaigns, and copywriting crafted with AI precision.",
    features: [
      "Blog posts & articles",
      "Course content development",
      "Email marketing campaigns",
      "Copywriting & editing",
    ],
  },
  {
    icon: Bot,
    title: "AI Consulting",
    description:
      "Custom AI solutions and prototypes tailored to your business needs — from workflow automation to intelligent assistants.",
    features: [
      "AI workflow automation",
      "Custom chatbot development",
      "Process optimization",
      "AI tool integration & training",
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
    image: "/images/team-jeff.jpg",
  },
  {
    name: "Michael Olaiya",
    role: "Co-Founder & CFO",
    bio: "Dedicated to revolutionizing business growth through AI-powered training and strategic support, Michael ensures VersAssist delivers measurable financial impact for every client.",
    image: "/images/team-michael.jpg",
  },
  {
    name: "Saleem Raja",
    role: "Operations Director",
    bio: "Saleem ensures operational efficiency across VersAssist's diverse service portfolio, using data-driven strategies to exceed client expectations and drive satisfaction.",
    image: "/images/team-saleem.jpg",
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
    tagline: "Perfect for solopreneurs",
    price: "Contact Us",
    period: "1 focus area",
    features: [
      "Choose 1 focus area (Admin, SEO, Social Media, or Book Publishing)",
      "AI-enhanced virtual assistant",
      "Hours never expire",
      "Detailed billing reports",
      "Email support",
      "Monthly progress review",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    tagline: "Most popular for growing businesses",
    price: "Contact Us",
    period: "2 focus areas",
    features: [
      "Choose 2 focus areas",
      "AI-enhanced virtual assistant team",
      "Hours never expire",
      "Detailed billing reports",
      "Priority email & chat support",
      "Bi-weekly strategy calls",
      "Performance analytics dashboard",
      "Dedicated account manager",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Scale",
    tagline: "Full-service for established businesses",
    price: "Contact Us",
    period: "Unlimited focus areas",
    features: [
      "All focus areas included",
      "Dedicated AI-enhanced VA team",
      "Hours never expire",
      "Detailed billing reports",
      "24/7 priority support",
      "Weekly strategy calls",
      "Custom AI workflow automation",
      "Dedicated account manager",
      "Quarterly business reviews",
      "Custom integrations",
    ],
    highlighted: false,
    cta: "Get Started",
  },
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
