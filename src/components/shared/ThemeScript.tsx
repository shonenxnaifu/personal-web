"use client";

import Script from "next/script";

export default function ThemeScript() {
  return (
    <Script id="darkModeScript" strategy="beforeInteractive">
      {}
    </Script>
  );
}
