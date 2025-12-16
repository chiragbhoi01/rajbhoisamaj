import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    template: "%s | Raj Bhoi Mali Samaj, Banswara",
    default: "Raj Bhoi Mali Samaj, Banswara",
  },
  description:
    "The official digital platform for the Raj Bhoi Mali Samaj community in Banswara, Rajasthan. Connect with the community, find matrimonial profiles, get information about events, and learn about our history.",
  keywords: [
    "Raj Bhoi Mali Samaj",
    "Banswara",
    "Rajasthan",
    "community",
    "matrimony",
    "events",
    "history",
    "Bhoi Samaj",
    "Mali Samaj",
  ],
  openGraph: {
    title: "Raj Bhoi Mali Samaj, Banswara",
    description:
      "The official digital platform for the Raj Bhoi Mali Samaj community in Banswara, Rajasthan.",
    url: "https://raj-bhoi-samaj.org", // Replace with actual domain
    siteName: "Raj Bhoi Mali Samaj, Banswara",
    images: [
      {
        url: "/og-image.png", // To be created
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Bhoi Mali Samaj, Banswara",
    description:
      "The official digital platform for the Raj Bhoi Mali Samaj community in Banswara, Rajasthan.",
    images: ["/og-image.png"], // To be created
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
