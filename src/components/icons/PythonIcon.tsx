"use client";

import { SVGProps } from "react";

interface PythonIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function PythonIcon({ className = "" }: PythonIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-full h-auto ${className}`}
    >
      <path d="M 10 2 C 8.25 2 7 3.25 7 5 L 7 7 L 12 7 L 12 8 L 5 8 C 3.1875 8 2 9.28125 2 11 L 2 14 C 2 15.78125 3.1875 17 5 17 L 7 17 L 7 13 C 7 11.898438 7.898438 11 9 11 L 14 11 C 15.101563 11 16 10.101563 16 9 L 16 5 C 16 3.25 14.78125 2 13 2 Z M 9 4 C 9.550781 4 10 4.449219 10 5 C 10 5.550781 9.550781 6 9 6 C 8.449219 6 8 5.550781 8 5 C 8 4.449219 8.449219 4 9 4 Z M 17 6 L 17 10 C 17 11.101563 16.101563 12 15 12 L 10 12 C 8.898438 12 8 12.898438 8 14 L 8 18 C 8 19.75 9.21875 21 11 21 L 14 21 C 15.75 21 17 19.75 17 18 L 17 16 L 12 16 L 12 15 L 19 15 C 20.8125 15 22 13.71875 22 12 L 22 9 C 22 7.21875 20.8125 6 19 6 Z M 15 17 C 15.550781 17 16 17.449219 16 18 C 16 18.550781 15.550781 19 15 19 C 14.449219 19 14 18.550781 14 18 C 14 17.449219 14.449219 17 15 17 Z" />
    </svg>
  );
}
