// TODO: replace with real values once provided.

export const CONTACT = {
  email: "aryaagarwal20031@gmail.com",
  emailHref: "mailto:aryaagarwal20031@gmail.com",
  phone: "+91 9580656056",
  phoneHref: "tel:+919580656056",
  whatsapp: "+91 8400046056",
  whatsappHref: "https://wa.me/918400046056",
} as const;

// Entries with an empty href are hidden in the footer — fill in each profile URL to show it.
export const SOCIAL_LINKS: { name: string; href: string }[] = [
  { name: "Instagram", href: "" },
  { name: "LinkedIn", href: "" },
  { name: "GitHub", href: "" },
];

export const AVAILABILITY = {
  status: "Taking on projects that need to grow",
  location: "Based in Lucknow, India but working worldwide",
  replyTime: "Replies within a day",
} as const;
