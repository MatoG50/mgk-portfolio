import cmvImage from "../assets/cmv.png";
import gamehubImage from "../assets/gamehub.png";

export interface SkillItem {
  name: string;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  color: string;
  skills: SkillItem[];
  footnote?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  details: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
}

export interface ArchitectureNode {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  tier: "featured" | "additional";
  status: string;
  statusColor: string;
  categoryBadge: string;
  intro: string;
  problem: string;
  solution: string;
  keyPoints: string[];
  ongoingWork?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  linksPendingNote?: string;
  image?: string;
  architectureTitle?: string;
  architectureNodes?: ArchitectureNode[];
}

export const heroContent = {
  name: "Martin Githinji",
  roleLabel: "SOFTWARE ENGINEER | FULL-STACK DEVELOPER",
  headline: "Full-stack software built for real-world systems.",
  subheadline:
    "Software Engineer focused on full-stack web applications, backend APIs, relational databases, and third-party integrations using Next.js, React, TypeScript, Node.js, and Python. I also build practical AI-powered applications using RAG and LLM integration.",
  coreStack: ["Next.js", "React", "TypeScript", "Node.js", "Python", "Django", "PostgreSQL"],
  profileCard: {
    headerLabel: "ENGINEER PROFILE // MGK",
    highlights: [
      {
        label: "EDUCATION",
        title: "MSc in Software Engineering",
        subtitle: "Quantic School of Business and Technology",
        accent: "var(--primary-accent)",
      },
      {
        label: "FULL-STACK FOCUS",
        title: "Web Platforms, APIs & Payments",
        subtitle: "Next.js, React, Node.js, Python, PostgreSQL",
        accent: "var(--secondary-accent)",
      },
      {
        label: "APPLIED AI",
        title: "Kisima AI Pump Sizing & RAG",
        subtitle: "Deterministic Hydraulics + Grounded Explanations",
        accent: "var(--highlight-accent)",
      },
    ],
    footerNote: "Nairobi, Kenya | Open to Remote & Hybrid Software Engineering Roles",
  },
};

export const aboutContent = {
  heading: "Engineering software around practical problems.",
  paragraphs: [
    "I am a Software Engineer and Full-Stack Developer building modern web applications, backend services, and database-driven systems with Next.js, React, TypeScript, Node.js, Express, Python, Django, and FastAPI.",
    "My work covers end-to-end product engineering: responsive frontend architecture, REST API design, PostgreSQL and MySQL data modeling with Prisma, authentication and role-based access control, payment integrations with Stripe and M-Pesa Daraja, and automated CI/CD workflows.",
    "Alongside software development at KADE, my background as a Sales Engineer at Davis & Shirtliff gives me direct exposure to customer requirements, technical scoping, and operational constraints. That domain experience also shaped my applied AI work, including Kisima AI, where deterministic engineering logic is paired with Retrieval-Augmented Generation for clear technical explanations.",
  ],
};

export const educationList: EducationItem[] = [
  {
    degree: "Master of Science in Software Engineering",
    institution: "Quantic School of Business and Technology",
    period: "2025 - 2026",
    status: "Completed",
    details: "Completed graduate degree focused on software architecture, scalable systems, automated testing, and applied AI engineering. Capstone: Kisima AI.",
  },
  {
    degree: "Bachelor of Science in Biosystems Engineering",
    institution: "University of Nairobi",
    period: "2013 - 2018",
    status: "Completed",
    details: "Engineering foundation in applied mathematics, hydraulics, systems analysis, and structured technical problem-solving.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    color: "var(--primary-accent)",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "React Native" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    color: "var(--secondary-accent)",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Python" },
      { name: "Django" },
      { name: "FastAPI" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "databases-tools",
    title: "Databases & Tools",
    color: "#f59e0b",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Prisma" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Azure DevOps" },
      { name: "CI/CD" },
    ],
  },
  {
    id: "ai-app-dev",
    title: "AI & Application Development",
    color: "var(--highlight-accent)",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)" },
      { name: "LLM Integration" },
      { name: "Prompt Engineering" },
      { name: "AI-Assisted Development" },
      { name: "Scikit-learn" },
    ],
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "kade",
    company: "KADE",
    role: "Full-Stack Developer (Part-Time)",
    location: "Remote",
    period: "June 2024 - Present",
    summary:
      "Contributing to SaaS web application development across frontend and backend features, API integrations, reliability improvements, and automated delivery.",
    highlights: [
      "Build and maintain responsive web application features across React.js and AngularJS interfaces backed by Node.js and Django services.",
      "Collaborate with designers and backend developers to deliver RESTful API-driven workflows with attention to usability and maintainability.",
      "Reduced system downtime by 30% through targeted debugging and reliability improvements.",
      "Deploy updates through automated CI/CD pipelines using GitHub Actions and Azure DevOps with automated testing checks.",
    ],
    technologies: ["React.js", "AngularJS", "Node.js", "Django", "REST APIs", "GitHub Actions", "Azure DevOps"],
  },
  {
    id: "davis-shirtliff",
    company: "Davis & Shirtliff",
    role: "Sales Engineer",
    location: "Nairobi, Kenya",
    period: "July 2021 - Present",
    summary:
      "Client-facing engineering role focused on technical solution sizing, customer requirement discovery, and project follow-through across water and energy infrastructure.",
    highlights: [
      "Analyze site and operational requirements to specify water pumping, water treatment, and energy solutions for residential, agricultural, and commercial clients.",
      "Prepare technical quotations, equipment selections, and follow-up support from initial inquiry through installation.",
      "Translate real operational constraints and customer pain points into clear technical specifications, directly informing how I scope and build software products such as Kisima AI.",
    ],
    technologies: ["Requirements Analysis", "Hydraulic & Energy Solutions", "Technical Quotations", "Client Support"],
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: "kisima-ai",
    title: "Kisima AI: AI-Powered Pump Sizing and Recommendation System",
    shortTitle: "Kisima AI",
    tier: "featured",
    status: "Live",
    statusColor: "green",
    categoryBadge: "Full-Stack & Applied AI",
    intro:
      "A technical web application that helps engineers and water-system teams size and select submersible borehole and well pumps by combining deterministic hydraulic calculations, structured manufacturer specifications, and RAG-based technical explanations.",
    problem:
      "Sizing borehole pumps requires balancing borehole yield limits, pumping water level, setting depth, pipe friction losses, and pump performance curves at the same time. Manual selection is slow, and an LLM alone cannot be trusted to run safety-critical hydraulic sizing math.",
    solution:
      "Built a layered Python, FastAPI, PostgreSQL, and React application where a deterministic hydraulic engine computes total dynamic head (TDH), enforces an 80% sustainable abstraction limit, and matches requirements against 151 pump models and 943 curve points. A LangChain and ChromaDB RAG layer then explains the engine's selection and answers datasheet questions grounded in 24 manufacturer PDFs without altering calculated values.",
    keyPoints: [
      "Deterministic SI-unit Hazen-Williams friction loss, velocity, sustainable yield checks, linear H-Q curve interpolation, and weighted pump ranking.",
      "PostgreSQL repository storing 151 Dayliff pump models and 943 discrete head-flow-efficiency curve points.",
      "Family-filtered RAG retrieval over 24 manufacturer datasheets with document citations and missing-context guardrails.",
      "Backed by 113 automated Pytest tests and GitHub Actions CI covering engineering rules, API routes, and RAG retrieval.",
    ],
    technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "LangChain", "ChromaDB", "RAG"],
    githubUrl: "https://github.com/MatoG50/kisima-ai",
    liveUrl: "https://kisima-ai.vercel.app/",
    architectureTitle: "DETERMINISTIC ENGINE + RAG FLOW",
    architectureNodes: [
      {
        title: "React & TypeScript Workspace",
        subtitle: "Borehole/Well sizing forms, hydraulic breakdown, Q&A",
        badge: "Client UI",
        badgeColor: "cyan",
      },
      {
        title: "FastAPI Deterministic Sizing Engine",
        subtitle: "Hazen-Williams hydraulics, 80% yield rule, 151 pump models",
        badge: "Authoritative",
        badgeColor: "green",
      },
      {
        title: "LangChain + ChromaDB RAG Layer",
        subtitle: "24 manufacturer PDFs for grounded explanations & citations",
        badge: "AI Assist",
        badgeColor: "purple",
      },
    ],
  },
  {
    id: "outside-vip",
    title: "Outside.vip: Event Discovery and Ticketing Platform",
    shortTitle: "Outside.vip",
    tier: "featured",
    status: "Work in Progress",
    statusColor: "orange",
    categoryBadge: "Full-Stack Platform",
    intro:
      "An event discovery, ticket purchasing, and organizer management platform built with React, TypeScript, Node.js, Express, Prisma, PostgreSQL, and Stripe.",
    problem:
      "Event organizers need a unified system to publish events, protect limited ticket capacity during checkout, issue verifiable QR passes, delegate gate scanning and promotional links safely, and reconcile platform versus organizer earnings.",
    solution:
      "Architected a full-stack TypeScript monorepo with a normalized PostgreSQL schema managed via Prisma, atomic 15-minute ticket reservations, Stripe PaymentIntents and Connect webhook processing, server-generated QR and PDF passes, Redis-backed sessions with CSRF protection, and role-based access control for organizers, gate staff, and event team members.",
    keyPoints: [
      "Completed core workflows: event discovery, recurring series, organizer dashboard, Cloudinary uploads, timed ticket reservations, and waitlist offers.",
      "Stripe PaymentIntents checkout, idempotent webhook processing, Stripe Connect onboarding, and financial ledger tracking.",
      "Unique QR ticket tokens, PDF pass generation, browser QR scanner, and Redis-idempotent gate check-in validation.",
      "Security controls including Redis sessions, CSRF protection, OTP email verification, encrypted payout details, and granular event team RBAC.",
    ],
    ongoingWork:
      "Active pre-pilot development: finalizing finance branch integration, pilot checkout and gate check-in validation, organizer wizard mobile refinements, refund delegation, and future regional payment options.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Stripe"],
    liveUrl: "https://out-side.vip",
    architectureTitle: "TICKETING & RBAC ARCHITECTURE",
    architectureNodes: [
      {
        title: "React + TanStack Query Client",
        subtitle: "Discovery, checkout, organizer tools, browser QR scanner",
        badge: "Frontend",
        badgeColor: "cyan",
      },
      {
        title: "Express API, Redis & Security",
        subtitle: "Sessions, CSRF, RBAC, Stripe webhooks, PDF/QR ticketing",
        badge: "Backend",
        badgeColor: "purple",
      },
      {
        title: "PostgreSQL & Prisma Ledger",
        subtitle: "Reservations, tickets, check-in logs, Connect balances",
        badge: "Data Layer",
        badgeColor: "orange",
      },
    ],
  },
  {
    id: "issue-tracker",
    title: "Issue Tracker: Full-Stack Next.js Application",
    shortTitle: "Issue Tracker",
    tier: "featured",
    status: "Next.js Showcase (Links Pending)",
    statusColor: "purple",
    categoryBadge: "Next.js App Router",
    intro:
      "A full-stack issue management and dashboard application built with Next.js 14 App Router, React Server Components, TypeScript, Prisma, MySQL, and NextAuth.",
    problem:
      "Teams need a fast, structured interface to create, assign, filter, and track software issues with Markdown descriptions and status visibility while keeping write operations authenticated and server-validated.",
    solution:
      "Built an App Router application using React Server Components for direct Prisma reads across the dashboard and issue list, paired with Zod-validated API Route Handlers, NextAuth Google OAuth and middleware route protection, URL-driven filtering/sorting/pagination, and TanStack Query for client-side assignee fetching.",
    keyPoints: [
      "Next.js 14 App Router with React Server Components, route-level loading skeletons, dynamic metadata with React cache(), and client-only dynamic Markdown editor loading.",
      "Server-side Prisma queries against MySQL for dashboard KPI counts, Recharts status visualization, latest issues feed, and paginated/sortable/filterable tables.",
      "NextAuth Google OAuth with Prisma Adapter, middleware protection for create/edit routes, and server-side session checks on mutation endpoints.",
      "Shared Zod schemas validating React Hook Form submissions on the client and POST/PATCH/DELETE Route Handlers on the server.",
    ],
    ongoingWork:
      "Not currently hosted; repository and live demo links are intentionally withheld pending repository security cleanup and deployment.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "MySQL", "NextAuth", "TanStack Query", "Zod"],
    linksPendingNote: "GitHub repository and live preview links pending cleanup and deployment.",
    architectureTitle: "NEXT.JS APP ROUTER ARCHITECTURE",
    architectureNodes: [
      {
        title: "React Server Components & Pages",
        subtitle: "Dashboard metrics, URL-driven list filters, sorting, pagination",
        badge: "App Router",
        badgeColor: "purple",
      },
      {
        title: "Route Handlers, NextAuth & Zod",
        subtitle: "Authenticated CRUD APIs, middleware guards, schema validation",
        badge: "API & Auth",
        badgeColor: "cyan",
      },
      {
        title: "Prisma ORM & MySQL",
        subtitle: "Issue, User, Account, and Session models with migrations",
        badge: "Database",
        badgeColor: "green",
      },
    ],
  },
  {
    id: "hbs-wear",
    title: "HBS Wear: E-Commerce Platform",
    shortTitle: "HBS Wear",
    tier: "featured",
    status: "Work in Progress",
    statusColor: "orange",
    categoryBadge: "Full-Stack E-Commerce",
    intro:
      "An apparel e-commerce storefront and admin management platform built with React, TypeScript, Node.js, Express, Prisma, PostgreSQL, Cloudinary, Stripe, and M-Pesa Daraja.",
    problem:
      "Online apparel stores serving both Kenyan mobile-money shoppers and international card buyers must coordinate asynchronous payment confirmations with variant-level stock without overselling items during abandoned checkouts.",
    solution:
      "Implemented a React and Express 5 application backed by Prisma and PostgreSQL with 30-minute transactional stock reservations, an automated node-cron expiry sweeper, signed Cloudinary image uploads, admin catalog and order management, and dual payment flows for Stripe PaymentIntents and Safaricom M-Pesa Daraja STK Push.",
    keyPoints: [
      "Storefront browsing, hierarchical categories, size/color SKU variants, Zustand cart, guest order tokens, and authenticated customer order history.",
      "Safaricom M-Pesa Daraja STK Push with OAuth token caching, row-locked prompt cooldowns, and idempotent asynchronous callback handling.",
      "Stripe PaymentIntents with raw-body webhook signature verification and atomic order-to-stock updates inside Prisma transactions.",
      "JWT and refresh token rotation, email verification, password reset flows, auth rate limiting, and an admin CMS for products, orders, and homepage banners.",
    ],
    ongoingWork:
      "Pre-launch sandbox stage: Stripe and M-Pesa Daraja run in test/sandbox mode pending live merchant activation, delivery fee logic is temporarily disabled, and brand content pages (/collections, /about) are still placeholders.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Cloudinary", "Stripe", "M-Pesa Daraja"],
    liveUrl: "https://hbs-wear.vercel.app/",
    architectureTitle: "DUAL-PAYMENT COMMERCE FLOW",
    architectureNodes: [
      {
        title: "React Storefront & Admin CMS",
        subtitle: "Catalog, variant cart, checkout, order tracking, Cloudinary",
        badge: "Frontend",
        badgeColor: "cyan",
      },
      {
        title: "Express 5 API & Cron Sweeper",
        subtitle: "Stock reservations, Stripe webhooks, Daraja STK Push callbacks",
        badge: "Payments",
        badgeColor: "green",
      },
      {
        title: "PostgreSQL & Prisma ORM",
        subtitle: "Products, SKU variants, orders, payments, auth tokens",
        badge: "Database",
        badgeColor: "orange",
      },
    ],
  },
  {
    id: "fleet-compliance",
    title: "Fleet Compliance Management System",
    shortTitle: "Fleet Compliance Management System",
    tier: "additional",
    status: "Live",
    statusColor: "cyan",
    categoryBadge: "Full-Stack",
    intro:
      "A commercial driver trip-planning and Hours-of-Service (HOS) compliance application built with React, TypeScript, and Django REST Framework. It geocodes pickup and drop-off routes via OpenRouteService, renders interactive Leaflet maps, and generates multi-day FMCSA ELD duty-status log charts on HTML5 Canvas.",
    problem:
      "Commercial drivers need to plan multi-day trips while respecting FMCSA driving limits, rest breaks, off-duty resets, and fuel stops.",
    solution:
      "Built a Django REST API for route calculation and FMCSA log generation paired with a React and TypeScript interface displaying Leaflet route maps and 24-hour Canvas ELD graphs.",
    keyPoints: [
      "Django REST Framework API integrating OpenRouteService geocoding and driving directions.",
      "Automated FMCSA HOS schedule generation (11h driving, 14h on-duty, 30-min breaks, 10h resets, fuel stops).",
      "Interactive Leaflet map and custom HTML5 Canvas 24-hour ELD duty-status timeline.",
    ],
    technologies: ["React", "TypeScript", "Django", "Django REST Framework", "Leaflet", "SQLite"],
    githubUrl: "https://github.com/MatoG50/CMV-LOG",
    liveUrl: "https://cmv-log.vercel.app/",
    image: cmvImage,
  },
  {
    id: "gamehub",
    title: "GameHub: Game Discovery Application",
    shortTitle: "GameHub",
    tier: "additional",
    status: "Live",
    statusColor: "purple",
    categoryBadge: "Frontend App",
    intro:
      "A responsive video game discovery application built with React and TypeScript that integrates the RAWG REST API. Implements client-side response caching and infinite scroll pagination with TanStack Query alongside Zustand-managed search, genre, platform, and sort filtering.",
    problem:
      "Exploring large external game catalogs requires responsive multi-facet filtering and pagination without repeating redundant API requests.",
    solution:
      "Implemented a typed Axios API client, 24-hour TanStack Query caching with infinite scroll, Zustand query state, and Chakra UI dark/light responsive views.",
    keyPoints: [
      "Typed REST API client consuming RAWG games, genres, platforms, trailers, and screenshots endpoints.",
      "TanStack Query infinite scroll pagination with 24-hour staleTime caching.",
      "Centralized Zustand filter state and responsive Chakra UI detail pages.",
    ],
    technologies: ["React", "TypeScript", "TanStack Query", "Zustand", "Chakra UI", "REST APIs"],
    githubUrl: "https://github.com/MatoG50/Game-hub",
    liveUrl: "https://game-hub-mgk.vercel.app/",
    image: gamehubImage,
  },
  {
    id: "malware-detector",
    title: "Malware Detection System: Machine Learning Application",
    shortTitle: "Malware Detection System",
    tier: "additional",
    status: "Live",
    statusColor: "green",
    categoryBadge: "Applied ML",
    intro:
      "A Python machine learning classification pipeline and Flask web application for classifying Windows Portable Executable (PE) header features as benign or malicious. Evaluates multiple model families (including Random Forest and XGBoost) with Stratified 10-Fold Cross-Validation inside a leak-free Scikit-learn pipeline and serves single-sample and batch CSV predictions.",
    problem:
      "Evaluating tabular PE header features for malware classification requires leak-free preprocessing and reproducible multi-model validation.",
    solution:
      "Built an automated Scikit-learn preprocessing and model-comparison pipeline (selecting XGBoost on hold-out evaluation after benchmarking Random Forest and other models) deployed behind a Flask web app with GitHub Actions CI.",
    keyPoints: [
      "Stratified 80/20 split and 10-Fold CV comparing Logistic Regression, Decision Tree, Random Forest, XGBoost, LightGBM, CatBoost, and PyTorch MLP.",
      "Leak-free Scikit-learn Pipeline for 24-feature numeric alignment and StandardScaler normalization.",
      "Flask web UI supporting single-record form scoring and batch CSV evaluation with automated Pytest CI.",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Random Forest", "XGBoost", "Flask"],
    liveUrl: "https://malware-detector-x84s.onrender.com/",
  },
];

export const contactContent = {
  headingLine1: "Let's build something",
  headingHighlight: "dependable.",
  description:
    "Open to Next.js, React, and Full-Stack Software Engineer roles as well as technical collaborations.",
  location: "Nairobi, Kenya | Remote / Hybrid",
  email: "matog50@gmail.com",
  phone: "+254 724 979 592",
  phoneHref: "tel:+254724979592",
  githubUrl: "https://github.com/MatoG50",
  githubHandle: "MatoG50",
  linkedinUrl: "https://www.linkedin.com/in/martin-githinji-k/",
  linkedinHandle: "martin-githinji-k",
};

