import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 1. Class Name Merger (Required for styling)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 2. Sleep Function (Required for animations & preloader) <-- This was missing
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// 3. Date Formatter (Required for Blog)
export function formatDate(date: string) {
  const targetDate = new Date(date);
  
  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate}`;
}