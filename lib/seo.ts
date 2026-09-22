import type { Metadata } from "next";

// TODO: replace with the real production domain once the site is deployed/hosted.
export const SITE_URL = "https://aryaagarwal.com";

export const SITE_NAME = "Arya Agarwal";

export const SITE_DESCRIPTION =
  "I help small businesses grow with fast, conversion-focused websites, CRM solutions, UI/UX design, and growth systems — built to get you responding to customers quicker.";

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

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [{ url: image.url, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
