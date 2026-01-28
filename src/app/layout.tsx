import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "@/lib/registry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://paramhansayoganandatrust.com'),
  title: {
    default: "Paramhansa Yogananda Trust, Purulia | Kriya Yoga & Spiritual Service",
    template: "%s | Paramhansa Yogananda Trust"
  },
  description: "Dedicated to the lineage of Kriya Yoga and selfless service in Purulia. Founded by Swami Bidyananda Giri, inspired by Paramhansa Yogananda.",
  keywords: ["Paramhansa Yogananda Trust", "Purulia Ashram", "Kriya Yoga India", "Swami Bidyananda Giri", "Spiritual Service", "Yoga Meditation Purulia"],
  authors: [{ name: "Paramhansa Yogananda Trust" }],
  creator: "Paramhansa Yogananda Trust",
  publisher: "Paramhansa Yogananda Trust",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Paramhansa Yogananda Trust, Purulia",
    description: "Rooted in Kriya Yoga, Dedicated to Service. Founded by Swami Bidyananda Giri.",
    url: 'https://paramhansayoganandatrust.com',
    siteName: 'Paramhansa Yogananda Trust',
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paramhansa Yogananda Trust, Purulia",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Paramhansa Yogananda Trust, Purulia",
    description: "Rooted in Kriya Yoga, Dedicated to Service. Founded by Swami Bidyananda Giri.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
