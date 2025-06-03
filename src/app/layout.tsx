import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-indigo-900 via-fuchsia-400 via-80% to-gray-400`}
      >
        {children}
      </body>
    </html>
  );
}
