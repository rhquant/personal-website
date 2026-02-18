import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://traviskasinger.com";

export const metadata: Metadata = {
  title: "Travis Kasinger",
  description:
    "Revenue Operations leader in Austin, TX — GTM strategy, sales performance, and analytics.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Travis Kasinger",
    description:
      "Revenue Operations leader in Austin, TX — GTM strategy, sales performance, and analytics.",
    url: siteUrl,
    siteName: "Travis Kasinger",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Travis Kasinger",
    description:
      "Revenue Operations leader in Austin, TX — GTM strategy, sales performance, and analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
