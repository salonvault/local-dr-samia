import type { Metadata } from "next";

export const BASE_URL = "https://dr-samia-clinic.vercel.app";

const title = "Dr Samia Skin Clinic | Skin & Aesthetic Care in Gujranwala";
const description =
  "Visit Dr Samia Skin Clinic in Garden Town Phase 3, Gujranwala for consultation-led skin and aesthetic care, including acne, melasma, PRP, HydraFacial, laser, microneedling, mole removal, Botox, and skin rejuvenation treatments.";
const ogImage = "/assets/og-image.png";

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: "%s | Dr Samia Skin Clinic",
  },
  description,
  applicationName: "Dr Samia Skin Clinic",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Dermatology Clinic",
  keywords: [
    "Dr Samia Skin Clinic",
    "dermatologist Gujranwala",
    "skin clinic Gujranwala",
    "acne treatment Gujranwala",
    "melasma treatment Gujranwala",
    "laser hair removal Gujranwala",
    "PRP hair treatment Gujranwala",
    "aesthetic clinic Gujranwala",
  ],
  authors: [{ name: "Dr Samia Skin Clinic" }],
  creator: "Dr Samia Skin Clinic",
  publisher: "Dr Samia Skin Clinic",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: BASE_URL,
    siteName: "Dr Samia Skin Clinic",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1536,
        height: 1024,
        alt: "Dr Samia Skin Clinic in Garden Town, Gujranwala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};
