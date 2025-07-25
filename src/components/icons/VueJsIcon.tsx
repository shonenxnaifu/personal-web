"use client";

import { SVGProps } from "react";

interface VueJsIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function VueJsIcon({ className = "" }: VueJsIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      fill="currentColor"
      className={`w-full h-auto ${className}`}
    >
      <path d="M24.135,46.505l-23.997-41	C-0.251,4.839,0.23,3.999,1.002,3.999h18.377c0.355,0,0.683,0.189,0.863,0.496l4.757,8.129l4.756-8.129	c0.18-0.307,0.508-0.496,0.864-0.496h18.38c0.771,0,1.252,0.84,0.863,1.505l-24,41C25.477,47.163,24.521,47.163,24.135,46.505z M24.999,44.021L47.254,5.999h-8.329L25.862,28.321c-0.385,0.659-1.341,0.659-1.727,0L11.071,5.999H2.745L24.999,44.021z" />
    </svg>
  );
}
