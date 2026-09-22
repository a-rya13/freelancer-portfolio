export interface FAQItem {
  question: string;
  answer: string;
}

// Placeholder content, unrelated to the actual business on purpose —
// swap these for real questions about your services once ready.
export const faqs: FAQItem[] = [
  {
    question: "What water temperature is best for brewing coffee?",
    answer:
      "Most specialty coffee is brewed between 195°F and 205°F (90–96°C) — hot enough to extract flavor without scorching the grounds.",
  },
  {
    question: "How fine should beans be ground for a pour-over?",
    answer:
      "A medium-fine grind, similar to table salt, works well for most pour-over methods like the V60 or Chemex.",
  },
  {
    question: "How long should an espresso shot take to pull?",
    answer:
      "A standard double shot should extract in roughly 25–30 seconds, producing about 2oz (60ml) of espresso.",
  },
  {
    question: "Should coffee beans be stored in the fridge?",
    answer:
      "No — cold storage introduces moisture and odors. Keep beans in an airtight container at room temperature, away from direct light.",
  },
  {
    question: "What's a good coffee-to-water ratio to start with?",
    answer:
      "A common starting point is 1:16 by weight (coffee to water) — adjust from there to match your taste.",
  },
];
