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

export const competencies: Competency[] = [
  {
    icon: "Database",
    title: "Robust Backends",
    description:
      "Designing solid backends that remain trustworthy under load: strong data models, validation, auditability, and observability.",
  },
  {
    icon: "FileCode",
    title: "Contract-First APIs",
    description:
      "Building contract-first APIs (schemas, versioning, idempotency, error semantics) that scale integration across stakeholders.",
  },
  {
    icon: "Workflow",
    title: "Event-Driven Orchestration",
    description:
      "Using event-driven orchestration to reduce coupling and improve resilience in complex workflows.",
  },
  {
    icon: "Bot",
    title: "AI-Agent Readiness",
    description:
      "Designing AI-agent readiness with governance: clear tool boundaries, permissions, traceable actions, and human-in-the-loop controls.",
  },
  {
    icon: "LayoutDashboard",
    title: "Goal-Based UX",
    description:
      "Translating system capability into goal-based UX\u2014journeys designed around intent, not screens.",
  },
];

export const stats: Stat[] = [
  {
    value: "5+",
    numericValue: 5,
    suffix: "+",
    label: "Years in DPI ecosystems",
  },
  {
    value: "200+",
    numericValue: 200,
    suffix: "+",
    label: "Ecosystem participants engaged",
  },
  {
    value: "$1M+",
    numericValue: 1,
    suffix: "M+",
    label: "In combined deal wins",
  },
  {
    value: "~40%",
    numericValue: 40,
    suffix: "%",
    label: "Cost reduction via AI automation",
  },
];

export const backbonePrinciples: Principle[] = [
  {
    number: 1,
    title: "Build a strong system of record",
    description:
      "A backend that is predictable, auditable, and designed for long-term evolution. Clear data ownership, strong validation, and truth you can rely on.",
  },
  {
    number: 2,
    title: "Expose capabilities through standardized APIs",
    description:
      "Contracts matter. Schema discipline, versioning strategy, consistent semantics, and integration ergonomics\u2014so ecosystems can scale without breaking.",
  },
  {
    number: 3,
    title: "Orchestrate through event-driven design",
    description:
      "For complex flows and multi-party coordination, event-driven patterns reduce coupling and improve recoverability\u2014with observability and operational controls built in from day one.",
  },
  {
    number: 4,
    title: "Make the platform AI/agent-ready",
    description:
      "Agent-ready does not mean agent-run. Automation can act safely: explicit tools, permissions, traceability, and human-in-the-loop checkpoints.",
  },
  {
    number: 5,
    title: "Deliver goal-oriented UX",
    description:
      "At scale, UX is throughput. Journeys that help users reach outcomes quickly and reliably, with graceful fallbacks and operational support paths.",
  },
];

export const designDNAPrinciples: Principle[] = [
  {
    number: 1,
    title: "Robustness over elegance",
    description:
      "Systems should degrade gracefully, recover predictably, and remain observable. Reliability is not an add-on\u2014it is an architectural stance.",
  },
  {
    number: 2,
    title: "Systems of record + systems of engagement",
    description:
      "Prioritize a dependable backend (systems of record), then build dynamic, goal-based front ends (systems of engagement) that can evolve quickly without destabilizing the core.",
  },
  {
    number: 3,
    title: "Contract-first integration",
    description:
      "If you want inclusive participation, your APIs must be consistent, well-versioned, and developer-friendly. Standards reduce integration entropy.",
  },
  {
    number: 4,
    title: "Event-driven orchestration for complex journeys",
    description:
      "Event-driven patterns help multi-party workflows scale\u2014especially when combined with idempotency, retries, and clear operational dashboards.",
  },
  {
    number: 5,
    title: "AI-ready by design",
    description:
      "Agentic automation should be enabled through explicit tools and permissions, not brittle prompt chains. Every action must be traceable.",
  },
];

export const experience: Experience[] = [
  {
    role: "Senior Business Analyst / Product Owner",
    company: "Suma Soft Pvt. Ltd.",
    period: "Feb 2020 \u2013 Present",
    location: "Pune, India",
    entries: [
      {
        title: "DPI / Ecosystem Certification & Compliance",
        bullets: [
          "Led development of automated certification and compliance toolkits enabling repeatable, structured validations for ecosystem conformance across Account Aggregator, Ayushman Bharat Digital Mission, and Open Network for Digital Commerce.",
          "Engaged with 200+ ecosystem participants/clients across certification cycles, building deep insight into real use cases, operating processes, and technical implementations.",
          "Collaborated with ecosystem bodies such as Sahamati and National Health Authority to align certification approach, integration readiness expectations, and operating considerations.",
          "Contributed to strong outcomes for the certification practice, including significant share in certification volumes.",
        ],
      },
      {
        title: "Product Ownership \u2014 Certification Toolkit (SaaS)",
        bullets: [
          "Owned the certification toolkit product end-to-end: strategy, roadmap planning, prioritization, stakeholder management, delivery governance, and continuous improvement.",
          "Ensured product readiness, operational usability, and alignment with evolving ecosystem requirements.",
        ],
      },
      {
        title: "Global Representation & Deal Conversion",
        bullets: [
          "Represented services and products at Global DPI Summit engagements (2024\u20132025) across international venues including Cairo and Cape Town.",
          "Served as lead presenter and solution owner\u2014shaping narratives that converted strategic discussions into >$1M in combined project wins.",
        ],
      },
      {
        title: "Multi-Geo DPI Consulting & Digital Transformation",
        bullets: [
          "Led discovery workshops, current-state mapping, and gap analysis to design target-state solutions grounded in DPI principles.",
          "Supported logistics platform solution design and delivery across Zambia and Indonesia.",
        ],
      },
      {
        title: "Country-Scale Logistics Platform Delivery",
        bullets: [
          "Coordinated delivery of a country-wide rollout platform including Buyer, Seller, and Operator modules, Admin controls, operational dashboards, analytics, and security controls.",
        ],
      },
      {
        title: "AI-Enabled Automation for Operations",
        bullets: [
          "Led AI-enabled automation for insurance claims and logistics tracking/support workflows.",
          "Delivered ~40% cost reduction through workflow redesign, standardization, and effective use of AI tools.",
        ],
      },
      {
        title: "Delivery Governance & Analytics",
        bullets: [
          "Operated in Agile delivery using Jira/Confluence for epics/stories, sprint execution, traceability, and documentation.",
          "Built automated reporting for financial and operational metrics using SQL, Python, Power BI/Tableau.",
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
        title: "Audit & Business Analysis",
        bullets: [
          "Built grounding in business models, costing structures, profit centers, and operational realities through audit-led exposure.",
          "Developed pattern recognition for large datasets and reconciliation of operational vs financial interpretations.",
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    number: 1,
    title: "Certification & Compliance Automation Toolkits",
    whatItWas:
      "Automated validation and readiness toolkits for DPI ecosystem participants.",
    myFocus:
      "Repeatable compliance validation, evidence-driven certification workflows, clear integration expectations.",
    demonstrates:
      "Contract discipline, governance-first delivery, and scalable conformance workflows.",
    tags: ["DPI", "Compliance", "Automation"],
  },
  {
    number: 2,
    title: "Certification Toolkit SaaS Product",
    whatItWas:
      "End-to-end product ownership of a compliance/certification SaaS vertical.",
    myFocus:
      "Roadmap strategy, prioritization, stakeholder alignment, delivery governance, continuous improvement.",
    demonstrates:
      "Building operationally usable products aligned with evolving ecosystem rules.",
    tags: ["SaaS", "Product Ownership", "DPI"],
  },
  {
    number: 3,
    title: "Country-Wide Logistics Platform Rollout",
    whatItWas:
      "Delivery support for a platform with multi-role modules, dashboards, analytics, and controls.",
    myFocus:
      "Execution governance, operational usability, performance visibility, and enterprise-grade controls.",
    demonstrates:
      "Building systems of record + operational orchestration at national scale.",
    tags: ["Logistics", "National Scale", "Delivery"],
  },
  {
    number: 4,
    title: "AI-Enabled Workflow Automation",
    whatItWas: "Automation of claims and logistics support workflows.",
    myFocus:
      "Workflow decomposition, standardization, reduction of rework, adoption enablement, measurable efficiency gains.",
    demonstrates:
      "Pragmatic AI delivery\u2014improving cost and throughput while maintaining accountability.",
    tags: ["AI", "Automation", "Operations"],
  },
];

export const writingThemes: string[] = [
  "Agent readiness in architecture",
  "Automation ROI & prioritization",
  "Human-in-the-loop operating models",
  "Delivery impact: cycle time, quality, rework reduction",
];

export const education: Education[] = [
  {
    degree: "Executive MBA",
    institution: "SP Jain School of Global Management",
    year: "2025",
    highlight:
      "Project Management, Operations Management, Leading Teams, Blue Ocean Strategy, Big Data Analysis, Cloud Computing",
  },
  {
    degree: "Fundamentals of Data Science using Python",
    institution: "Center for Artificial Intelligence & Analytics (CAIA)",
    year: "2019",
  },
  {
    degree: "CFA Level I Passed",
    institution: "CFA Institute",
    year: "2018",
  },
  {
    degree: "M.Com",
    institution:
      "Brihan Maharashtra College of Commerce (Savitribai Phule Pune University)",
    year: "2015",
    highlight: "First Class",
  },
  {
    degree: "SSC",
    institution:
      "Maharashtra State Board of Secondary and Higher Secondary Education",
    year: "2010",
    highlight: "96%",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Architecture & Delivery",
    skills: [
      "Systems of record thinking",
      "Interoperability",
      "Ecosystem governance",
      "API contract discipline",
      "Schema/versioning strategy",
      "Event-driven workflows",
      "Resilience patterns",
      "Observability",
      "Agile delivery governance",
      "Backlog structure",
      "Traceability",
    ],
  },
  {
    category: "Business Analysis & Product",
    skills: [
      "Discovery workshops",
      "Process mapping",
      "Gap analysis",
      "BRD/PRD",
      "User stories",
      "Acceptance criteria",
      "UAT coordination",
      "Roadmap prioritization",
      "Stakeholder alignment",
    ],
  },
  {
    category: "Analytics & Reporting",
    skills: [
      "SQL",
      "Python",
      "DAX",
      "Power BI",
      "Tableau",
      "Google Data Studio",
      "KPI design",
      "Automated reporting",
    ],
  },
  {
    category: "Tools & Languages",
    skills: [
      "Jira",
      "Confluence",
      "Advanced Excel",
      "English",
      "Hindi",
      "Marathi",
    ],
  },
];

export const philosophyLenses: PhilosophyLens[] = [
  {
    framework: "The Incerto",
    author: "Nassim Nicholas Taleb",
    concepts: ["Antifragility", "Skin in the game", "Black swans"],
    application:
      "Designing for robustness and aligned incentives\u2014systems that benefit from disorder rather than merely surviving it.",
  },
  {
    framework: "Behavioral Science",
    author: "Kahneman + Rory Sutherland",
    concepts: ["Incentives", "Friction", "Trust", "Choice framing"],
    application:
      "Adoption depends on how choices are framed. Systems must account for real human behavior, not idealized workflows.",
  },
  {
    framework: "Playing to Win",
    author: "Roger Martin",
    concepts: ["Where to play", "How to win", "Trade-offs"],
    application:
      "Strategy as explicit trade-offs\u2014clarity on what to stop doing is as important as what to start.",
  },
];

export const personalInterests: string[] = [
  "Cooking simple healthy meals",
  "Travel that blends culture with reflection",
  "Long-form history",
  "Indic ancient knowledge systems",
  "Classical literature on governance, ethics & human behavior",
];
