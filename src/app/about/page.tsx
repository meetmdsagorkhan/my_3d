"use client";
import React, { useEffect, useState } from "react";
// Imported icons relevant to CX/Management
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaWhatsapp,
  FaRobot,
  FaChartLine,
  FaUsers
} from "react-icons/fa6";
import {
  SiZendesk,
  SiSlack,
  SiClickup,
  SiGoogle,
  SiZoom,
  SiCanva,
  SiN8n,           // <--- FIXED: Correct casing (lowercase 'n')
  SiSalesforce,
  SiHubspot,
  SiMicrosoft,     // <--- FIXED: Switched to standard Microsoft logo
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "meetmdsagorkhan@gmail.com",
    href: "mailto:meetmdsagorkhan@gmail.com",
    icon: <FaEnvelope size={"24px"} />,
  },
  {
    name: "WhatsApp",
    content: "+880 1309331446",
    href: "https://wa.me/8801309331446",
    icon: <FaWhatsapp size={"24px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/meetmdsagorkhan/",
    content: "/meetmdsagorkhan",
    icon: <FaLinkedin size={"24px"} />,
  },
];

const TOOLS = [
  {
    name: "Zendesk",
    icon: <SiZendesk size={"50px"} color={"#03363D"} />,
  },
  {
    name: "Slack",
    icon: <SiSlack size={"50px"} color={"#4A154B"} />,
  },
  {
    name: "ClickUp",
    icon: <SiClickup size={"50px"} color={"#7b68ee"} />,
  },
  {
    name: "Google Workspace",
    icon: <SiGoogle size={"50px"} color="#4285F4" />,
  },
  {
    name: "Zoom",
    icon: <SiZoom size={"50px"} color="#2D8CFF" />,
  },
  {
    name: "n8n Automation",
    icon: <SiN8n size={"50px"} color="#ff6d5a" />,
  },
  {
    name: "CRM Systems",
    icon: <SiSalesforce size={"50px"} color="#00A1E0" />,
  },
  {
    name: "Canva",
    icon: <SiCanva size={"50px"} color="#00C4CC" />,
  },
  {
    name: "HubSpot",
    icon: <SiHubspot size={"50px"} color="#ff7a59" />,
  },
  {
    name: "Office 365",
    icon: <SiMicrosoft size={"50px"} color="#D83B01" />,
  },
  {
    name: "AI Agents",
    icon: <FaRobot size={"50px"} color="#333" />,
  },
  {
    name: "Analytics",
    icon: <FaChartLine size={"50px"} color="#22c55e" />,
  },
  {
    name: "Team Leadership",
    icon: <FaUsers size={"50px"} color="#f59e0b" />,
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-1 lg:p-2 w-[100px] md:w-[150px] lg:w-[200px] aspect-square object-cover bg-zinc-800"
                  alt="Md Sagor Khan"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Md Sagor Khan</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  CX Team Lead
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                      target="_blank"
                    >
                      <div className="w-8 flex justify-center">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-full lg:w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto leading-relaxed">
              Hello! I&apos;m <strong>Md Sagor Khan</strong>, a CX leader with a strong track record in boosting CSAT, retention, and
              onboarding success for fast-growing digital service organizations. 
            </p>
            <p className="mb-10 leading-relaxed">
              Experienced in managing large user bases, resolving complex issues,
              and turning customer feedback into impactful service enhancements.
              I am known for building positive customer relationships and guiding teams to
              deliver timely, accurate, and human-centred support.
            </p>
            <p className="mb-10 leading-relaxed">
               Currently, I am leading the Customer Experience team at <strong>Priyo Pay</strong>, 
               where I oversee support for thousands of users and implement AI-driven automation 
               to enhance efficiency.
            </p>
            
            <h1 className="text-3xl mb-10 lg:md-20">Tools & Skills</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 4, 
                    breakpoints: {
                      640: { perPage: 3 },
                      480: { perPage: 2 },
                    },
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Tools"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        className="flex flex-col items-center justify-center gap-2 p-4 border-[.5px] border-zinc-600 rounded-md h-32 hover:bg-zinc-800/50 transition-colors"
                      >
                        {tool.icon}
                        <span className="text-xs text-center text-zinc-400">{tool.name}</span>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;