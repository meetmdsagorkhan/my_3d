export enum SkillNames {
  // --- ROW 1 (1-6) ---
  ZENDESK = "zendesk",
  N8N = "n8n",
  AI = "ai",
  CRM = "crm",
  SLACK = "slack",
  GOOGLE = "google",
  
  // --- ROW 2 (QWERTY) ---
  QA = "qa",
  DOCUMENTATION = "documentation",
  EMPATHY = "empathy",
  RISK = "risk",
  TRAINING = "training",
  JOURNEY = "journey",
  
  // --- ROW 3 (ASDFGH) ---
  ANALYTICS = "analytics",
  STRATEGY = "strategy",
  LEADERSHIP = "leadership",
  FEEDBACK = "feedback",
  ONBOARDING = "onboarding",
  PROBLEM_SOLVING = "problem_solving",
  
  // --- ROW 4 (ZXCVBN) ---
  ZOOM = "zoom",
  OFFICE = "office",
  CLICKUP = "clickup",
  COMMUNICATION = "communication",
  OPERATIONS = "operations",
  CRISP = "crisp",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;        // 👈 FIXED: Back to string (URL)
  keyboardKey: string; // 👈 Added for your 3D mapping
};

export const SKILLS: Record<SkillNames, Skill> = {
  // --- ROW 1 (1-6) ---
  [SkillNames.ZENDESK]: {
    id: 1, name: "zendesk", label: "Zendesk", color: "#03363D",
    shortDescription: "Turning 'have you tried restarting?' into a lifestyle. 🎫",
    icon: "https://cdn.simpleicons.org/zendesk/03363D",
    keyboardKey: "1",
  },
  [SkillNames.N8N]: {
    id: 2, name: "n8n", label: "n8n", color: "#ff6d5a",
    shortDescription: "If I have to do it twice, I'm automating it. Lazy? No, efficient. 🤖",
    icon: "https://cdn.simpleicons.org/n8n/ff6d5a",
    keyboardKey: "2",
  },
  [SkillNames.AI]: {
    id: 3, name: "ai", label: "OpenAI", color: "#00CED1",
    shortDescription: "I asked ChatGPT to write this description. We are doomed. 🧠",
    icon: "https://cdn.simpleicons.org/openai/00CED1",
    keyboardKey: "3",
  },
  [SkillNames.CRM]: {
    id: 4, name: "crm", label: "Salesforce", color: "#00A1E0",
    shortDescription: "The database that eats RAM and dreams. ☁️",
    icon: "https://cdn.simpleicons.org/salesforce/00A1E0",
    keyboardKey: "4",
  },
  [SkillNames.SLACK]: {
    id: 5, name: "slack", label: "Slack", color: "#4A154B",
    shortDescription: "Where work goes to die in a GIF thread. 📢",
    icon: "https://cdn.simpleicons.org/slack/4A154B",
    keyboardKey: "5",
  },
  [SkillNames.GOOGLE]: {
    id: 6, name: "google", label: "Google", color: "#4285F4",
    shortDescription: "My second brain. I actually know nothing without it. 🔍",
    icon: "https://cdn.simpleicons.org/google/4285F4",
    keyboardKey: "6",
  },

  // --- ROW 2 (QWERTY) ---
  [SkillNames.QA]: {
    id: 7, name: "qa", label: "Codacy", color: "#22c55e",
    shortDescription: "I get paid to break things you love. ✅",
    icon: "https://cdn.simpleicons.org/codacy/22c55e",
    keyboardKey: "q",
  },
  [SkillNames.DOCUMENTATION]: {
    id: 8, name: "documentation", label: "Notion", color: "#ffffff",
    shortDescription: "I have a template for my template's template. 📝",
    icon: "https://cdn.simpleicons.org/notion/ffffff",
    keyboardKey: "w",
  },
  [SkillNames.EMPATHY]: {
    id: 9, name: "empathy", label: "Empathy", color: "#FF5E5B",
    shortDescription: "I feel your pain. Literally. It hurts. ❤️",
    icon: "https://cdn.simpleicons.org/ko-fi/FF5E5B",
    keyboardKey: "e",
  },
  [SkillNames.RISK]: {
    id: 10, name: "risk", label: "Security", color: "#0094F5",
    shortDescription: "Paranoid? Maybe. Safe? Definitely. hunter2. 🛡️",
    icon: "https://cdn.simpleicons.org/1password/0094F5",
    keyboardKey: "r",
  },
  [SkillNames.TRAINING]: {
    id: 11, name: "training", label: "Coursera", color: "#0056D2",
    shortDescription: "Binge-watching tutorials > Binge-watching Netflix. 🎓",
    icon: "https://cdn.simpleicons.org/coursera/0056D2",
    keyboardKey: "t",
  },
  [SkillNames.JOURNEY]: {
    id: 12, name: "journey", label: "User Journey", color: "#34A853",
    shortDescription: "Recalculating your entire business strategy... 🗺️",
    icon: "https://cdn.simpleicons.org/googlemaps/34A853",
    keyboardKey: "y",
  },

  // --- ROW 3 (ASDFGH) ---
  [SkillNames.ANALYTICS]: {
    id: 13, name: "analytics", label: "Analytics", color: "#E37400",
    shortDescription: "Torturing data until it confesses. 📊",
    icon: "https://cdn.simpleicons.org/googleanalytics/E37400",
    keyboardKey: "a",
  },
  [SkillNames.STRATEGY]: {
    id: 14, name: "strategy", label: "Miro", color: "#FFD02F",
    shortDescription: "Digital sticky notes that nobody reads. 📈",
    icon: "https://cdn.simpleicons.org/miro/FFD02F",
    keyboardKey: "s",
  },
  [SkillNames.LEADERSHIP]: {
    id: 15, name: "leadership", label: "Leadership", color: "#0a66c2",
    shortDescription: "Agree? Thoughts? #Hustle 🚀",
    icon: "https://cdn.simpleicons.org/linkedin/0a66c2",
    keyboardKey: "d",
  },
  [SkillNames.FEEDBACK]: {
    id: 16, name: "feedback", label: "Typeform", color: "#262627",
    shortDescription: "Judging you, one question at a time. 📋",
    icon: "https://cdn.simpleicons.org/typeform/ffffff",
    keyboardKey: "f",
  },
  [SkillNames.ONBOARDING]: {
    id: 17, name: "onboarding", label: "Intercom", color: "#286EFA",
    shortDescription: "That annoying chat bubble you can't close. 👋",
    icon: "https://cdn.simpleicons.org/intercom/286EFA",
    keyboardKey: "g",
  },
  [SkillNames.PROBLEM_SOLVING]: {
    id: 18, name: "problem_solving", label: "Solutions", color: "#F48024",
    shortDescription: "Ctrl+C, Ctrl+V, Salary collected. 💡",
    icon: "https://cdn.simpleicons.org/stackoverflow/F48024",
    keyboardKey: "h",
  },

  // --- ROW 4 (ZXCVBN) ---
  [SkillNames.ZOOM]: {
    id: 19, name: "zoom", label: "Zoom", color: "#2D8CFF",
    shortDescription: "Can you see my screen? Can you see it now? 🎥",
    icon: "https://cdn.simpleicons.org/zoom/2D8CFF",
    keyboardKey: "z",
  },
  [SkillNames.OFFICE]: {
    id: 20, name: "office", label: "Office 365", color: "#EA3E23",
    shortDescription: "Excel is technically a database, fight me. 📄",
    icon: "https://cdn.simpleicons.org/microsoft365/EA3E23",
    keyboardKey: "x",
  },
  [SkillNames.CLICKUP]: {
    id: 21, name: "clickup", label: "ClickUp", color: "#7b68ee",
    shortDescription: "One more notification and I scream. ✅",
    icon: "https://cdn.simpleicons.org/clickup/7b68ee",
    keyboardKey: "c",
  },
  [SkillNames.COMMUNICATION]: {
    id: 22, name: "communication", label: "Teams", color: "#6264A7",
    shortDescription: "Slack's evil, corporate cousin. 📞",
    icon: "https://cdn.simpleicons.org/microsoftteams/6264A7",
    keyboardKey: "v",
  },
  [SkillNames.OPERATIONS]: {
    id: 23, name: "operations", label: "Asana", color: "#F06A6A",
    shortDescription: "Moving tickets from 'To Do' to 'Doing' to feel something. ⚙️",
    icon: "https://cdn.simpleicons.org/asana/F06A6A",
    keyboardKey: "b",
  },
  [SkillNames.CRISP]: {
    id: 24, name: "crisp", label: "Crisp", color: "#1c8de4",
    shortDescription: "It goes 'ding' and my anxiety spikes. 💬",
    icon: "https://cdn.simpleicons.org/crisp/1c8de4",
    keyboardKey: "n",
  },
};

export const EXPERIENCE = [
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
      SkillNames.OPERATIONS,
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
    "Warning: Bright future ahead!",
    "Turning on the lights...",
    "Flashbang out! 💡",
  ],
  dark: [
    "Going dark mode...",
    "Welcome to the comfort zone.",
    "Relaxing your eyes...",
  ],
};