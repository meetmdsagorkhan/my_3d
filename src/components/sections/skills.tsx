"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, Skill } from "@/data/constants";

// --- 1. INTERNAL HOOK (No import needed, fixes your error) ---
const useTyping = (setFocusedSkill: (skill: Skill | null) => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Convert key to lowercase to ensure "Q" matches "q"
      const pressedKey = event.key.toLowerCase();
      
      // Search your SKILLS list for the matching key
      const matchedSkill = Object.values(SKILLS).find(
        (skill) => skill.keyboardKey === pressedKey
      );

      // If a match is found, update the screen
      if (matchedSkill) {
        setFocusedSkill(matchedSkill);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setFocusedSkill]);
};

// --- 2. THE COMPONENT ---
const SkillsSection = () => {
  const [focusedSkill, setFocusedSkill] = useState<Skill | null>(null);

  // Activate the keyboard listener
  useTyping(setFocusedSkill);

  return (
    <SectionWrapper id="skills" className="w-full h-screen md:h-[150dvh] relative z-10">
      
      {/* Static Header */}
      <div className="absolute top-10 w-full pointer-events-none z-20">
        <SectionHeader 
          id='skills' 
          title="Tech Stack" 
          desc="(hint: press a key on your keyboard)" 
        />
      </div>

      {/* Interaction Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 fixed-center">
        
        {/* STATE A: IDLE (Show Keyboard Map Hint) */}
        {!focusedSkill && (
           <div className="text-center opacity-30 mt-32 animate-pulse">
             <div className="text-xs font-mono text-zinc-500 mb-2 tracking-widest uppercase">
               Try Typing These Keys
             </div>
             <div className="flex flex-col gap-2 font-mono text-zinc-500 text-sm md:text-base">
                <div>1 2 3 4 5 6</div>
                <div>Q W E R T Y</div>
                <div>A S D F G H</div>
                <div>Z X C V B N</div>
             </div>
           </div>
        )}

        {/* STATE B: ACTIVE (Show Sarcastic Message) */}
        {focusedSkill && (
          <div className="text-center animate-in fade-in zoom-in-95 duration-200 px-4">
            
            {/* Huge Title (e.g. ZENDESK) */}
            <h1 
              className="text-6xl md:text-9xl font-black tracking-tighter mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all"
              style={{ color: focusedSkill.color }} 
            >
              {focusedSkill.label.toUpperCase()}
            </h1>
            
            {/* Sarcastic One-Liner */}
            <div className="inline-block relative">
               <p className="text-xl md:text-3xl font-medium text-zinc-100 bg-zinc-900/90 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/10 shadow-2xl">
                 {focusedSkill.shortDescription}
               </p>
            </div>
            
            {/* Key Indicator */}
            <div className="mt-8 text-zinc-500 font-mono text-xs tracking-widest uppercase">
              Key Pressed: <span className="text-white font-bold border border-zinc-700 px-2 py-1 rounded ml-2">{focusedSkill.keyboardKey.toUpperCase()}</span>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;