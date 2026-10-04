export interface FAQItem {
  // Stable id so pages can pick a subset (e.g. Services shows 3, 4, 5, 6, 11).
  id: number;
  question: string;
  answer: string;
}

// Single source of truth for FAQ content — the visible FAQ and the FAQPage
// JSON-LD are both generated from this list.
export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What does a digital growth partner do?",
    answer:
      "I handle everything that brings a small business customers: the website, SEO and AEO, Google and Meta ads, and content. One person plans and runs it all, so your site, ads and content follow one strategy instead of three vendors.",
  },
  {
    id: 2,
    question: "What kind of businesses do you work with?",
    answer:
      "Small and local businesses, and basically any business that wants growth and expansion. I'm based in Lucknow and work with clients anywhere.",
  },
  {
    id: 3,
    question: "Can I hire you for just one service?",
    answer:
      "Yes. Some clients only run Meta ads with me, while others are on a full retainer covering website, ads, search and content.",
  },
  {
    id: 4,
    question: "How much does it cost?",
    answer:
      "Websites start at Rs. 2,000 for a landing page and monthly retainers start at Rs. 12,000. Ad spend goes directly to Google or Meta and is separate from my fee. E-commerce websites are charged according to your requirements.",
  },
  {
    id: 5,
    question: "How long does a website take?",
    answer:
      "Most sites go live in 1 week, depending on the number of pages and how quickly content arrives. E-commerce websites take longer because of the extra effort and design involved.",
  },
  {
    id: 6,
    question: "How soon will I see results?",
    answer:
      "Ads usually bring enquiries within 1 week once testing settles. SEO and AEO are slower and typically take 1–2 months to show.",
  },
  {
    id: 7,
    question: "What is AEO, and do I need it?",
    answer:
      "AEO (answer engine optimisation) structures your site so that AI tools like ChatGPT and Google's AI answers name your business. If customers ask AI for recommendations in your category, you need it.",
  },
  {
    id: 8,
    question: "Do you guarantee rankings or leads?",
    answer:
      "No, and nobody honestly can. You get monthly reports on rankings, cost per lead and customers, so you always know what the spend is doing.",
  },
  {
    id: 10,
    question: "Will I deal with you directly?",
    answer:
      "Yes. There are no account managers; you message me and get a reply within a day.",
  },
  {
    id: 11,
    question: "What happens after the website launches?",
    answer:
      "I keep it fast, patched and monitored under a maintenance plan, and make updates as your business changes.",
  },
  {
    id: 12,
    question: "How do we start?",
    answer:
      "Message me on WhatsApp or email. We have a short call, I review your current online presence, and you get a plan with a clear price.",
  },
];

export const SERVICES_FAQ_IDS = [3, 4, 5, 6, 11];
export const ABOUT_FAQ_IDS = [1, 2, 10];

export function pickFaqs(ids: number[]): FAQItem[] {
  return ids
    .map((id) => faqs.find((faq) => faq.id === id))
    .filter((faq): faq is FAQItem => Boolean(faq));
}
