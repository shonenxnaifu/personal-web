import { SVGProps } from "react";

interface DownloadIconProps extends SVGProps<SVGSVGElement> {
  className: string;
}

export default function DownloadIcon({ className }: DownloadIconProps) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={`w-full h-auto ${className}`}
    >
      <path
        fill="currentColor"
        d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"
      />
      <path fill="currentColor" d="M10 6v-6h-4v6h-3l5 5 5-5z" />
    </svg>
  );
}
