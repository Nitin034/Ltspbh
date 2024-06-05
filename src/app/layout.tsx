import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ltspb.ac.in",
  description: "Best School for Children in Pratapgarh, UP - At Ltspb School, we prioritize your child's academic and personal growth. Experience top-notch education and caring teachers.",
  metadataBase: new URL("https://ltspb.ac.in"), // Change this to your actual domain
  openGraph: {
    images: [
      {
        url: "/images/logo.svg",
        width: 800,
        height: 600,
        alt: "Ltspb School Logo"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon link here */}
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
