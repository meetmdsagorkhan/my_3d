import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
// You may need to import icons that match your new skillset or keep using the existing library imports
import {
  RiCustomerService2Fill,
  RiTeamFill,
  RiGlobalLine,
} from "react-icons/ri"; // Example icons, ensure you have react-icons installed

const BASE_PATH = "/assets/projects-screenshots"; // You will need to add images to this folder

const ProjectsLinks = ({ live }: { live: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// Define local project skills helper
const PROJECT_SKILLS = {
  cx: {
    title: "CX Strategy",
    bg: "black",
    fg: "white",
    icon: <RiCustomerService2Fill />,
  },
  leadership: {
    title: "Leadership",
    bg: "black",
    fg: "white",
    icon: <RiTeamFill />,
  },
  ops: {
    title: "Operations",
    bg: "black",
    fg: "white",
    icon: <RiGlobalLine />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "brac-isd",
    category: "Project Coordination",
    title: "BRAC ISD Online Program",
    src: "/assets/projects-screenshots/placeholder.png", // You need to add an image here
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.leadership, PROJECT_SKILLS.ops],
      backend: [],
    },
    live: "https://bisdonline.brac.net/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Coordinating Skills for the Future
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyP className="font-mono ">
            Managed the execution of skill development courses in Digital Marketing, Graphics Design, 
            and more. Coordinated between 30+ instructors and thousands of learners to ensure 
            high-quality delivery.
          </TypographyP>
          
          <TypographyH3 className="my-4 mt-8">Key Achievements</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
             <li>Managed course schedules and instructor coordination.</li>
             <li>tracked learner progress to improve course satisfaction.</li>
             <li>Contributed to enhancing employability for learners nationwide.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "priyo-automation",
    category: "Automation & AI",
    title: "CX Automation at Priyo Pay",
    src: "/assets/projects-screenshots/placeholder.png", // Add image
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.cx],
      backend: [PROJECT_SKILLS.ops],
    },
    live: "https://pay.priyo.com/",
    get content() {
      return (
        <div>
           <TypographyP className="font-mono text-2xl text-center">
            Revolutionizing Support with AI
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyP className="font-mono ">
             Spearheaded the integration of AI agents and n8n workflows to automate customer support, 
             drastically reducing manual workload and improving response times.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Implemented a RAG-based AI Agent, reducing manual handling by ~50%.</li>
            <li>Reduced average ticket resolution time from 24 hours to under 1 hour.</li>
            <li>Built an automated email system using n8n, cutting manual work by ~70%.</li>
          </ul>
        </div>
      );
    },
  }
];
export default projects;