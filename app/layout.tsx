import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { StarsBackground } from "@/components/ui/StarBG";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Abs Portfolio",
  description: "A modern, interactive portfolio website showcasing Abu Bakar Siddique's expertise in cybersecurity, software development, and competitive programming.",
  keywords: ["portfolio", "web development", "cybersecurity", "nextjs", "threejs", "Abu Bakar Siddique", "design"],
  openGraph: {
    title: "Abs Portfolio | Abu Bakar Siddique",
    description: "A modern, interactive portfolio website showcasing Abu Bakar Siddique's expertise in cybersecurity, software development, and competitive programming.",
    url: "https://abs-portfolio-ten.vercel.app/",
    siteName: "Abs Portfolio",
    images: [
      {
        url: "/screenshots/image.png",
        width: 1200,
        height: 630,
        alt: "ABS Portfolio Preview"
      }
    ],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abs Portfolio | Abu Bakar Siddique",
    description: "A modern, interactive portfolio website showcasing Abu Bakar Siddique's expertise in cybersecurity, software development, and competitive programming.",
    images: ["/screenshots/image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} bg-black/95 antialiased min-h-screen relative text-white`}
      >
        {/* Background Beams applied to the entire app */}
        <StarsBackground/>
        {/* All page content will be rendered here, on top of the background */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
