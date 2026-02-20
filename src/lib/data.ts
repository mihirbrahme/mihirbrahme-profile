import type {
  NavLink,
  Competency,
  Stat,
  Principle,
  Experience,
  Project,
  Education,
  SkillGroup,
  PhilosophyLens,
  EcosystemPartner,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Design DNA", href: "#design-dna" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const ecosystemPartners: EcosystemPartner[] = [
  { name: "Sahamati", abbr: "Sahamati" },
  { name: "National Health Authority", abbr: "NHA" },
  { name: "Open Network for Digital Commerce", abbr: "ONDC" },
];

export const competencies: Competency[] = [
  {
    icon: "Search",
    title: "Business Analysis & Discovery",
    description:
      "Leading discovery workshops, current-state mapping, gap analysis, and requirements engineering\u2014translating stakeholder needs into structured, actionable specifications.",
    linkTo: "#experience",
  },
  {
    icon: "Package",
    title: "Product Ownership & Strategy",
    description:
      "End-to-end product ownership: roadmap strategy, backlog prioritization, stakeholder alignment, delivery governance, and continuous improvement across SaaS and platform products.",
    linkTo: "#projects",
  },
  {
    icon: "TrendingUp",
    title: "Pre-Sales & Solution Narratives",
    description:
      "Converting complex platform capabilities into compelling solution stories for executive audiences\u2014driving engagement and closing large deals at global forums.",
    linkTo: "#experience",
  },
  {
    icon: "Workflow",
    title: "DPI & Ecosystem Governance",
    description:
      "Designing certification frameworks, compliance toolkits, and integration readiness standards for population-scale digital public infrastructure ecosystems.",
    linkTo: "#projects",
  },
  {
    icon: "Bot",
    title: "AI Automation & Delivery",
    description:
      "Pragmatic AI-enabled automation for operational workflows\u2014with measurable cost reduction, governance, and human-in-the-loop controls.",
    linkTo: "#projects",
  },
  {
    icon: "LayoutDashboard",
    title: "Analytics & Reporting",
    description:
      "Building KPI dashboards, automated financial/operational reporting, and data-driven decision support using SQL, Python, Power BI, and Tableau.",
    linkTo: "#skills",
  },
];

export const stats: Stat[] = [
  {
    value: "5+",
    numericValue: 5,
    suffix: "+",
    label: "Years across India\u2019s DPI & open-network ecosystems",
  },
  {
    value: "200+",
    numericValue: 200,
    suffix: "+",
    label: "Ecosystem participants engaged in certification cycles",
  },
  {
    value: "$1M+",
    numericValue: 1,
    prefix: "$",
    suffix: "M+",
    label: "In combined project wins from DPI Summit presentations",
  },
  {
    value: "~40%",
    numericValue: 40,
    suffix: "%",
    prefix: "~",
    label: "Cost reduction delivered through AI-enabled workflow automation",
  },
];

export const backbonePrinciples: Principle[] = [
  {
    number: 1,
    title: "Build a strong system of record",
    description:
      "A backend that is predictable, auditable, and designed for long-term evolution. Clear data ownership, strong validation, and truth you can rely on.",
    example: "Applied in: Certification toolkit\u2014structured validation evidence that regulators and participants can trust.",
  },
  {
    number: 2,
    title: "Expose capabilities through standardized APIs",
    description:
      "Contracts matter. Schema discipline, versioning strategy, consistent semantics, and integration ergonomics\u2014so ecosystems can scale without breaking.",
    example: "Applied in: 200+ participants onboarded through contract-first API certification across AA, ABDM, ONDC.",
  },
  {
    number: 3,
    title: "Orchestrate through event-driven design",
    description:
      "For complex flows and multi-party coordination, event-driven patterns reduce coupling and improve recoverability\u2014with observability and operational controls built in from day one.",
    example: "Applied in: Multi-party logistics workflows across Zambia and Indonesia.",
  },
  {
    number: 4,
    title: "Make the platform AI/agent-ready",
    description:
      "Agent-ready does not mean agent-run. Automation can act safely: explicit tools, permissions, traceability, and human-in-the-loop checkpoints.",
    example: "Applied in: AI-enabled claims processing\u2014~40% cost reduction with full auditability.",
  },
  {
    number: 5,
    title: "Deliver goal-oriented UX",
    description:
      "At scale, UX is throughput. Journeys that help users reach outcomes quickly and reliably, with graceful fallbacks and operational support paths.",
    example: "Applied in: Country-wide logistics platform\u2014buyer, seller, and operator journeys designed for adoption.",
  },
];

export const designDNAPrinciples: Principle[] = [
  {
    number: 1,
    title: "Robustness over elegance",
    description:
      "Systems should degrade gracefully, recover predictably, and remain observable. Reliability is not an add-on\u2014it is an architectural stance.",
    example: "e.g., Graceful degradation in certification workflows when ecosystem APIs return unexpected responses.",
  },
  {
    number: 2,
    title: "Systems of record + systems of engagement",
    description:
      "Prioritize a dependable backend (systems of record), then build dynamic, goal-based front ends (systems of engagement) that can evolve quickly without destabilizing the core.",
    example: "e.g., Certification toolkit backend remained stable while UI evolved across 3 ecosystem expansions.",
  },
  {
    number: 3,
    title: "Contract-first integration",
    description:
      "If you want inclusive participation, your APIs must be consistent, well-versioned, and developer-friendly. Standards reduce integration entropy.",
    example: "e.g., Schema-driven API validation that reduced integration support tickets by structuring expectations upfront.",
  },
  {
    number: 4,
    title: "Event-driven orchestration for complex journeys",
    description:
      "Event-driven patterns help multi-party workflows scale\u2014especially when combined with idempotency, retries, and clear operational dashboards.",
    example: "e.g., Logistics platform order lifecycle managed through event-driven state transitions across buyer/seller/operator.",
  },
  {
    number: 5,
    title: "AI-ready by design",
    description:
      "Agentic automation should be enabled through explicit tools and permissions, not brittle prompt chains. Every action must be traceable.",
    example: "e.g., Claims automation with explicit tool boundaries and human-in-the-loop checkpoints for edge cases.",
  },
];

export const experience: Experience[] = [
  {
    role: "Senior Business Analyst | Product Owner | Pre-Sales Lead",
    company: "Suma Soft Pvt. Ltd.",
    period: "Feb 2020 \u2013 Present",
    location: "Pune, India",
    narrative: "Progressed from business analysis to product ownership and global pre-sales\u2014bridging the gap between ecosystem requirements, product strategy, and commercial outcomes across India\u2019s DPI landscape.",
    entries: [
      {
        title: "DPI / Ecosystem Certification & Compliance",
        roleBadge: "Business Analyst",
        highlight: "200+ participants certified across AA, ABDM, ONDC",
        bullets: [
          "Led requirements analysis and development of automated certification and compliance toolkits enabling repeatable, structured validations for ecosystem conformance.",
          "Engaged with 200+ ecosystem participants/clients across certification cycles\u2014conducting discovery, documenting requirements, analyzing integration patterns, and building deep insight into real use cases and operating processes.",
          "Collaborated with ecosystem bodies such as Sahamati and National Health Authority to align certification approach, integration readiness expectations, and operating considerations.",
          "Contributed to strong outcomes for the certification practice, including significant share in certification volumes.",
        ],
      },
      {
        title: "Product Ownership \u2014 Certification Toolkit (SaaS)",
        roleBadge: "Product Owner",
        highlight: "End-to-end SaaS product ownership",
        bullets: [
          "Owned the certification toolkit product end-to-end: strategy, roadmap planning, backlog prioritization, stakeholder management, delivery governance, and continuous improvement.",
          "Defined and maintained product requirements (PRDs, user stories, acceptance criteria), coordinated UAT, and ensured product readiness aligned with evolving ecosystem rules.",
          "Ensured product-market fit through ongoing stakeholder feedback loops and iterative delivery.",
        ],
      },
      {
        title: "Global Pre-Sales & Deal Conversion",
        roleBadge: "Pre-Sales Lead",
        highlight: ">$1M in combined project wins",
        bullets: [
          "Represented services and products at Global DPI Summit engagements (2024\u20132025) across international venues including Cairo and Cape Town.",
          "Served as lead presenter and solution owner\u2014crafting solution narratives, building proposals, and converting strategic discussions into >$1M in combined project wins.",
          "Drove pre-sales discovery workshops, scoped solution approaches, and created commercially viable proposals for multi-geo DPI engagements.",
        ],
      },
      {
        title: "Multi-Geo DPI Consulting & Digital Transformation",
        roleBadge: "Business Analyst",
        highlight: "Solutions delivered across Zambia & Indonesia",
        bullets: [
          "Led discovery workshops, current-state mapping, and gap analysis to design target-state solutions grounded in DPI principles and practical delivery constraints.",
          "Authored business requirements documents (BRDs) and solution design artifacts for logistics platform delivery across Zambia and Indonesia.",
        ],
      },
      {
        title: "Country-Scale Logistics Platform Delivery",
        roleBadge: "Product Owner",
        highlight: "Country-wide platform with 5+ modules",
        bullets: [
          "Coordinated and governed delivery of a country-wide rollout platform including Buyer, Seller, and Operator modules, Admin controls, operational dashboards, analytics, and security controls.",
          "Managed backlog, sprint planning, and stakeholder demos\u2014ensuring delivery quality and operational usability.",
        ],
      },
      {
        title: "AI-Enabled Automation for Operations",
        roleBadge: "Product Owner",
        highlight: "~40% cost reduction achieved",
        bullets: [
          "Led AI-enabled automation for insurance claims and logistics tracking/support workflows\u2014from requirements analysis through workflow redesign to adoption enablement.",
          "Delivered ~40% cost reduction through standardization, reduced manual effort/rework, and effective use of AI tools for execution support.",
        ],
      },
      {
        title: "Delivery Governance, Analytics & Documentation",
        roleBadge: "Business Analyst",
        bullets: [
          "Operated in Agile delivery using Jira/Confluence for epics/stories, sprint execution, traceability, and documentation.",
          "Built and automated reporting for financial and operational metrics using SQL, Python, Power BI/Tableau.",
          "Authored architecture mapping and technical documentation for Python and AngularJS codebases.",
        ],
      },
    ],
  },
  {
    role: "Chartered Accountancy Internship",
    company: "Chandorkar & Limaye, Chartered Accountants",
    period: "2015 \u2013 2018",
    location: "Pune, India",
    entries: [
      {
        title: "Audit & Business Analysis Foundations",
        bullets: [
          "Built grounding in business models, costing structures, profit centers, and operational realities through audit-led exposure.",
          "Developed pattern recognition for large datasets and reconciliation of operational vs financial interpretations\u2014skills that carry directly into requirements analysis and data validation.",
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    number: 1,
    title: "Certification & Compliance Automation Toolkits",
    role: "Business Analyst & Product Owner",
    challenge:
      "DPI ecosystem participants needed repeatable, structured ways to validate conformance\u2014but certification processes were manual, inconsistent, and hard to scale.",
    approach:
      "Led requirements analysis, designed evidence-driven certification workflows, defined clear integration expectations, and built automated validation toolkits.",
    outcome:
      "Scalable conformance workflows adopted across Account Aggregator, ABDM, and ONDC ecosystems\u2014enabling 200+ participants to certify efficiently.",
    impact: "200+ participants certified",
    tags: ["DPI", "Compliance", "Automation"],
  },
  {
    number: 2,
    title: "Certification Toolkit SaaS Product",
    role: "Product Owner",
    challenge:
      "The compliance/certification vertical needed a dedicated SaaS product that could evolve with changing ecosystem rules while remaining operationally usable.",
    approach:
      "Owned end-to-end: roadmap strategy, backlog prioritization, PRD authoring, stakeholder alignment, UAT coordination, delivery governance, and continuous improvement.",
    outcome:
      "Operationally usable product that stayed aligned with evolving ecosystem rules across multiple certification cycles.",
    impact: "End-to-end SaaS ownership",
    tags: ["SaaS", "Product Ownership", "DPI"],
  },
  {
    number: 3,
    title: "Country-Wide Logistics Platform Rollout",
    role: "Product Owner & Business Analyst",
    challenge:
      "A national-scale logistics platform required coordinated delivery of multi-role modules with enterprise-grade controls\u2014across buyer, seller, and operator workflows.",
    approach:
      "Managed requirements, delivery governance, sprint planning, and stakeholder demos for a platform with 5+ modules including dashboards, analytics, and security controls.",
    outcome:
      "Successful country-wide rollout with operational usability, performance visibility, and enterprise-grade controls.",
    impact: "Country-wide rollout",
    tags: ["Logistics", "National Scale", "Delivery"],
  },
  {
    number: 4,
    title: "AI-Enabled Workflow Automation",
    role: "Product Owner & Process Analyst",
    challenge:
      "Insurance claims and logistics support workflows were manual, error-prone, and expensive\u2014requiring significant rework and human effort.",
    approach:
      "Decomposed workflows, standardized processes, identified automation opportunities, enabled adoption, and measured efficiency gains.",
    outcome:
      "~40% cost reduction through workflow redesign, standardization, and effective AI tool integration while maintaining full accountability.",
    impact: "~40% cost reduction",
    tags: ["AI", "Automation", "Operations"],
  },
];

export const writingThemes: string[] = [
  "Agent readiness in architecture",
  "Automation ROI & prioritization",
  "Human-in-the-loop operating models",
  "Delivery impact: cycle time, quality, rework reduction",
];

export const serviceOfferings: string[] = [
  "DPI & Ecosystem Consulting",
  "Platform Product Strategy",
  "Business Analysis & Requirements",
  "Pre-Sales & Solution Design",
  "AI Automation Advisory",
  "Speaking & Workshops",
];

export const education: Education[] = [
  {
    degree: "Executive MBA",
    institution: "SP Jain School of Global Management",
    year: "2025",
    highlight:
      "Project Management, Operations Management, Leading Teams, Blue Ocean Strategy, Big Data Analysis, Cloud Computing",
    relevance: "Applied to platform strategy, delivery governance, and leading cross-functional teams.",
  },
  {
    degree: "Fundamentals of Data Science using Python",
    institution: "Center for Artificial Intelligence & Analytics (CAIA)",
    year: "2019",
    relevance: "Foundation for analytics, automated reporting, and AI-enabled workflow design.",
  },
  {
    degree: "CFA Level I Passed",
    institution: "CFA Institute",
    year: "2018",
    relevance: "Brings financial rigor to cost analysis, ROI modeling, and business case development.",
  },
  {
    degree: "M.Com",
    institution:
      "Brihan Maharashtra College of Commerce (Savitribai Phule Pune University)",
    year: "2015",
    highlight: "First Class",
    relevance: "Grounding in commerce, accounting, and business fundamentals.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Business Analysis & Product Ownership",
    skills: [
      { name: "Discovery workshops", primary: true },
      { name: "Process mapping", primary: true },
      { name: "Gap analysis", primary: true },
      { name: "BRD/PRD authoring", primary: true },
      { name: "User stories & acceptance criteria", primary: true },
      { name: "UAT coordination", primary: true },
      { name: "Roadmap prioritization", primary: true },
      { name: "Stakeholder alignment", primary: true },
      { name: "Agile delivery governance" },
      { name: "Backlog management" },
      { name: "Sprint planning & execution" },
    ],
  },
  {
    category: "Architecture & Platform Thinking",
    skills: [
      { name: "Systems of record thinking", primary: true },
      { name: "Interoperability", primary: true },
      { name: "Ecosystem governance", primary: true },
      { name: "API contract discipline", primary: true },
      { name: "Schema/versioning strategy" },
      { name: "Event-driven workflows" },
      { name: "Resilience patterns" },
      { name: "Observability" },
      { name: "Traceability & documentation" },
    ],
  },
  {
    category: "Pre-Sales & Commercial",
    skills: [
      { name: "Solution narrative design", primary: true },
      { name: "Proposal development", primary: true },
      { name: "Executive presentations", primary: true },
      { name: "Discovery workshops (client-facing)", primary: true },
      { name: "Deal scoping & pricing" },
      { name: "Conference representation" },
    ],
  },
  {
    category: "Analytics & Reporting",
    skills: [
      { name: "SQL", primary: true },
      { name: "Python", primary: true },
      { name: "Power BI", primary: true },
      { name: "Tableau" },
      { name: "DAX" },
      { name: "Google Data Studio" },
      { name: "KPI design" },
      { name: "Automated reporting" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Jira" },
      { name: "Confluence" },
      { name: "Advanced Excel" },
    ],
  },
];

export const languages: string[] = ["English", "Hindi", "Marathi"];

export const philosophyLenses: PhilosophyLens[] = [
  {
    framework: "The Incerto",
    author: "Nassim Nicholas Taleb",
    concepts: ["Antifragility", "Skin in the game", "Black swans"],
    application:
      "Designing for robustness and aligned incentives\u2014systems that benefit from disorder rather than merely surviving it.",
    example: "Shaped how I designed the certification toolkit to benefit from ecosystem changes\u2014each new regulation strengthened rather than broke the system.",
  },
  {
    framework: "Behavioral Science",
    author: "Kahneman + Rory Sutherland",
    concepts: ["Incentives", "Friction", "Trust", "Choice framing"],
    application:
      "Adoption depends on how choices are framed. Systems must account for real human behavior, not idealized workflows.",
    example: "Informed the UX and onboarding design for 200+ ecosystem participants\u2014reducing friction at every certification step.",
  },
  {
    framework: "Playing to Win",
    author: "Roger Martin",
    concepts: ["Where to play", "How to win", "Trade-offs"],
    application:
      "Strategy as explicit trade-offs\u2014clarity on what to stop doing is as important as what to start.",
    example: "Guided the decision to focus deeply on DPI certification rather than spreading thin across all compliance types.",
  },
];

export const personalInterests: string[] = [
  "Cooking simple healthy meals",
  "Travel that blends culture with reflection",
  "Long-form history",
  "Indic ancient knowledge systems",
  "Classical literature on governance, ethics & human behavior",
];
