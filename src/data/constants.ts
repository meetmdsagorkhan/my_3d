export enum SkillNames {
  // CX & CRM
  ZENDESK = "zendesk",
  CRM = "crm",
  INTERCOM = "intercom", // Placeholder for chat tools like Crisp
  SLACK = "slack",
  CLICKUP = "clickup",
  OFFICE = "office",
  GOOGLE = "google",
  ZOOM = "zoom",
  
  // Soft Skills (Represented generically)
  LEADERSHIP = "leadership",
  STRATEGY = "strategy",
  COMMUNICATION = "communication",
  MANAGEMENT = "management",
  ANALYTICS = "analytics",
  
  // Tech/Ops
  N8N = "n8n",
  AI = "ai",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.ZENDESK]: {
    id: 1,
    name: "zendesk",
    label: "Zendesk",
    shortDescription: "Mastering tickets & support flows 🎫",
    color: "#03363D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zendesk/zendesk-original.svg", // You might need to find a specific SVG if this doesn't exist in devicon
  },
  [SkillNames.CRM]: {
    id: 2,
    name: "crm",
    label: "CRM Systems",
    shortDescription: "Managing client relationships like a pro 🤝",
    color: "#007acc",
    icon: "https://cdn-icons-png.flaticon.com/512/993/993762.png", // Generic CRM icon
  },
  [SkillNames.INTERCOM]: {
    id: 3,
    name: "crisp",
    label: "Crisp / Live Chat",
    shortDescription: "Real-time support & engagement 💬",
    color: "#1c8de4",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/22/Crisp_wordmark.svg", 
  },
  [SkillNames.SLACK]: {
    id: 4,
    name: "slack",
    label: "Slack",
    shortDescription: "Team sync & rapid coordination 📢",
    color: "#4A154B",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  },
  [SkillNames.CLICKUP]: {
    id: 5,
    name: "clickup",
    label: "ClickUp",
    shortDescription: "Project management & workflows ✅",
    color: "#7b68ee",
    icon: "https://cdn.worldvectorlogo.com/logos/clickup.svg",
  },
  [SkillNames.N8N]: {
    id: 6,
    name: "n8n",
    label: "n8n Automation",
    shortDescription: "Automating the boring stuff 🤖",
    color: "#ff6d5a",
    icon: "https://cdn.worldvectorlogo.com/logos/n8n.svg",
  },
  [SkillNames.OFFICE]: {
    id: 7,
    name: "office",
    label: "MS Office",
    shortDescription: "The classic productivity suite 📊",
    color: "#d83b01",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
  },
  [SkillNames.GOOGLE]: {
    id: 8,
    name: "google",
    label: "Google Workspace",
    shortDescription: "Collaborating in the cloud ☁️",
    color: "#4285F4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  [SkillNames.ZOOM]: {
    id: 9,
    name: "zoom",
    label: "Zoom",
    shortDescription: "Connecting faces globally 🎥",
    color: "#2D8CFF",
    icon: "https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg",
  },
  [SkillNames.LEADERSHIP]: {
    id: 10,
    name: "leadership",
    label: "Leadership",
    shortDescription: "Guiding teams to success 🚀",
    color: "#FFD700",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  [SkillNames.STRATEGY]: {
    id: 11,
    name: "strategy",
    label: "Strategy",
    shortDescription: "Planning for growth & retention 📈",
    color: "#FF4500",
    icon: "https://cdn-icons-png.flaticon.com/512/1584/1584942.png",
  },
  [SkillNames.COMMUNICATION]: {
    id: 12,
    name: "communication",
    label: "Communication",
    shortDescription: "Clear, concise, and human-centric 🗣️",
    color: "#32CD32",
    icon: "https://cdn-icons-png.flaticon.com/512/2665/2665569.png",
  },
  [SkillNames.MANAGEMENT]: {
    id: 13,
    name: "management",
    label: "Management",
    shortDescription: "Orchestrating complex operations 🏗️",
    color: "#808080",
    icon: "https://cdn-icons-png.flaticon.com/512/2643/2643627.png",
  },
  [SkillNames.ANALYTICS]: {
    id: 14,
    name: "analytics",
    label: "Analytics",
    shortDescription: "Data-driven decision making 📊",
    color: "#00008B",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png",
  },
  [SkillNames.AI]: {
    id: 15,
    name: "ai",
    label: "AI Agents",
    shortDescription: "Implementing RAG & Support Bots 🤖",
    color: "#00CED1",
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
  }
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "July 2025",
    endDate: "Present",
    title: "Team Lead, Customer Experience",
    company: "Priyo Pay",
    description: [
      "Lead the CX department to ensure seamless onboarding and post-support for thousands of users.",
      "Implement quality standards to reduce support escalations and enhance customer trust.",
      "Manage customer communication using Zendesk and Crisp, and build CX automation using n8n and AI agents.",
      "Coordinate with Product, Risk, and Compliance teams to resolve high-impact KYC/AML issues.",
    ],
    skills: [
      SkillNames.LEADERSHIP,
      SkillNames.ZENDESK,
      SkillNames.N8N,
      SkillNames.AI,
      SkillNames.STRATEGY,
    ],
  },
  {
    id: 2,
    startDate: "Aug 2022",
    endDate: "Present",
    title: "Operations Manager, Client Experience",
    company: "LC-Ecommerce (Remote, USA)",
    description: [
      "Manage seller and buyer accounts ensuring full compliance and seamless onboarding.",
      "Act as primary point of contact for clients, resolving inquiries and driving long-term partnerships.",
      "Spearhead daily operational workflows, increasing task efficiency by 35%."
    ],
    skills: [
      SkillNames.MANAGEMENT,
      SkillNames.CRM,
      SkillNames.ANALYTICS,
      SkillNames.COMMUNICATION,
    ],
  },
  {
    id: 3,
    startDate: "Jul 2023",
    endDate: "Jun 2025",
    title: "Team Lead, Customer Experience",
    company: "Ostad Ltd.",
    description: [
      "Led a CX team of 10 and coordinated with 30+ instructors to support over 5,000 learners.",
      "Reduced response time to under 1 hour and increased student satisfaction scores by 25%.",
      "Oversaw 25+ active batches and implemented the 3C Engagement Framework.",
    ],
    skills: [
      SkillNames.LEADERSHIP,
      SkillNames.SLACK,
      SkillNames.STRATEGY,
      SkillNames.ZOOM,
    ],
  },
  {
    id: 4,
    startDate: "Sep 2020",
    endDate: "Dec 2021",
    title: "Executive, Client Experience",
    company: "CM Work Solutions",
    description: [
      "Managed Amazon and Walmart seller accounts to optimize client and customer experience.",
      "Enhanced buyer experience by providing prompt support and resolving issues proactively.",
      "Maintained a minimum 30% profit margin across all managed accounts.",
    ],
    skills: [
      SkillNames.CRM,
      SkillNames.OFFICE,
      SkillNames.COMMUNICATION,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Bright future ahead! (Just like your screen)",
    "Turning on the lights...",
    "Flashbang out! 💡",
  ],
  dark: [
    "Going dark mode...",
    "Welcome to the comfort zone.",
    "Relaxing your eyes...",
  ],
};