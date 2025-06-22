import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Software Developer & Tech Blog | Shonen Dev",
  description:
    "Writing about Software Engineering and tools i'm exploring from AI and DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${ibmPlexMono.className} bg-[#FFF5EE] text-[#161313]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
