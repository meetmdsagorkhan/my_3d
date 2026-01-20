"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE, SKILLS } from "@/data/constants";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="w-full">
      <SectionHeader 
        id='experience'
        title="Experience" 
        desc="A timeline of solving problems and putting out fires." 
      />
      
      <div className="flex flex-col gap-12 max-w-4xl mx-auto mt-12">
        {EXPERIENCE.map((job) => (
          <div 
            key={job.id} 
            className="group relative border-l-2 border-zinc-800 pl-8 pb-12 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-white transition-colors duration-300" />
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                  {job.title}
                </h3>
                <div className="text-lg text-zinc-400 font-medium">
                  {job.company}
                </div>
              </div>
              <div className="text-sm font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
                {job.startDate} — {job.endDate}
              </div>
            </div>

            {/* Description */}
            <ul className="flex flex-col gap-2 mb-6">
              {job.description.map((point, i) => (
                <li key={i} className="text-zinc-400 text-base leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-700">
                  {point}
                </li>
              ))}
            </ul>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skillName, index) => {
                const skill = SKILLS[skillName];
                
                // 🛡️ SAFETY CHECK: If a skill is missing/undefined, skip it instead of crashing
                if (!skill) return null;

                return (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="align-middle text-xs flex items-center gap-1.5 px-2 py-1 transition-all hover:scale-105 select-none"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      color: skill.color,
                      borderColor: `${skill.color}30`,
                      borderWidth: '1px'
                    }}
                  >
                    {/* RESTORED: Using img tag because skill.icon is now a string URL */}
                    <img 
                      src={skill.icon} 
                      alt={skill.label} 
                      className="w-3.5 h-3.5 object-contain opacity-80" 
                    />
                    {skill.label}
                  </Badge>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;