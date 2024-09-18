import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str
    .split(" ")
    .map((word) =>
      (word[0]?.toUpperCase() + word.slice(1).toLowerCase()).trim(),
    )
    .join(" ");
}

export const siteURL =
  process.env.VERCEL_ENV === "production"
    ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL
    : process.env.VERCEL_URL
      ? "https://" + process.env.VERCEL_URL
      : "http://localhost:3000";
