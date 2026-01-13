import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zoekjestage.nl'),
  title: {
    default: 'Zoek je stage - Vind de perfecte stage op basis van jouw interesses',
    template: '%s | Zoek je stage'
  },
  description: 'Zoek je stage helpt studenten de perfecte stage te vinden op basis van hun interesses, studierichting en ambities. Ontdek stageplekken bij topbedrijven in Nederland.',
  keywords: ['stage zoeken', 'stage vacatures', 'stage vinden', 'stageplekken', 'stagebegeleiding', 'stage nederland', 'internship', 'student stage', 'stage platform'],
  authors: [{ name: 'Zoek je stage' }],
  creator: 'Zoek je stage',
  publisher: 'Zoek je stage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://zoekjestage.nl',
    siteName: 'Zoek je stage',
    title: 'Zoek je stage - Vind de perfecte stage op basis van jouw interesses',
    description: 'Zoek je stage helpt studenten de perfecte stage te vinden op basis van hun interesses, studierichting en ambities. Ontdek stageplekken bij topbedrijven in Nederland.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zoek je stage - Stage platform voor studenten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoek je stage - Vind de perfecte stage op basis van jouw interesses',
    description: 'Zoek je stage helpt studenten de perfecte stage te vinden op basis van hun interesses, studierichting en ambities.',
    images: ['/og-image.png'],
    creator: '@zoekjestage',
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
  alternates: {
    canonical: 'https://zoekjestage.nl',
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
