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
  description: "A portfolio showcasing my work and skills",
  keywords: ["portfolio", "web development", "design"]
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
