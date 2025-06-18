import { SVGProps } from "react";

interface MoonIconProps extends SVGProps<SVGSVGElement> {
  className: string;
}

export default function MoonIcon({ className }: MoonIconProps) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      <rect width="42" height="42" rx="21" fill="black" />
      <path
        d="M22.9635 7C15.2477 7 9 13.2664 9 20.9947C9 28.7231 15.2477 34.9895 22.9635 34.9895C26.7496 34.9895 30.1795 33.4775 32.6973 31.0285C33.0097 30.7223 33.0909 30.2475 32.891 29.8601C32.6911 29.4728 32.26 29.2541 31.8289 29.3291C31.2166 29.4353 30.5919 29.4915 29.9484 29.4915C23.8944 29.4915 18.9837 24.5684 18.9837 18.4957C18.9837 14.3847 21.2329 10.8048 24.5629 8.91803C24.944 8.69936 25.1377 8.26203 25.044 7.83719C24.9502 7.41234 24.5879 7.09371 24.1506 7.05623C23.7569 7.02499 23.3633 7.00625 22.9635 7.00625V7Z"
        fill="white"
      />
    </svg>
  );
}
