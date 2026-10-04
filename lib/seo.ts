import type { Metadata } from "next";

// Single source for every absolute URL (canonical, og:url, og:image, sitemap, robots, JSON-LD).
// Override per environment with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://arya.oneroofventures.com"
).replace(/\/$/, "");

export const SITE_NAME = "Arya Agarwal";

export const SITE_DESCRIPTION =
  "Digital growth partner for small businesses. SEO and AEO, Google and Meta ads, content and websites, planned and run by one person from Lucknow.";

const DEFAULT_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  alt: `${SITE_NAME} — Digital Growth Partner`,
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [{ url: image.url, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
