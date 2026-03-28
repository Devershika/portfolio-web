import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: "Devershika Mohane | AI Engineer Portfolio",
  description:
    "AI Engineer portfolio of Devershika Mohane featuring projects in computer vision, domain adaptation, healthcare AI, and agentic systems.",
  keywords: [
    "Devershika Mohane",
    "AI Engineer",
    "Computer Vision",
    "Machine Learning",
    "Healthcare AI",
    "Domain Adaptation",
    "Women in Tech",
  ],
  authors: [{ name: "Devershika Mohane" }],
  creator: "Devershika Mohane",
  openGraph: {
    title: "Devershika Mohane | AI Engineer Portfolio",
    description:
      "Projects, publications, and research work in computer vision, multimodal AI, and trustworthy machine learning.",
    type: "website",
    url: "/",
    siteName: "Devershika AI Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Devershika Mohane AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devershika Mohane | AI Engineer Portfolio",
    description:
      "AI Engineer portfolio with healthcare AI, computer vision, and agentic AI projects.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
