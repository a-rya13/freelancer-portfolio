import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// True when a content field is empty or still a "TODO" placeholder.
export function hasValue(value?: string | null): value is string {
  return !!value && value.trim() !== "" && value.trim().toUpperCase() !== "TODO";
}
