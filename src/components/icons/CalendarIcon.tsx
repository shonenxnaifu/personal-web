import { SVGProps } from "react";

interface CalendarIconProps extends SVGProps<SVGSVGElement> {
  className: string;
}

export default function CalendarIcon({ className }: CalendarIconProps) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 395 395"
      xmlSpace="preserve"
      fill="currentColor"
      className={`w-full h-auto ${className}`}
    >
      <g>
        <polygon points="278.333,52.5 278.333,12.5 248.333,12.5 248.333,52.5 146.667,52.5 146.667,12.5 116.667,12.5 116.667,52.5 0,52.5 0,117.5 395,117.5 395,52.5" />
        <path d="M0,382.5h395v-235H0V382.5z M262.5,195h50v50h-50V195z M262.5,285h50v50h-50V285z M172.5,195h50v50h-50V195z M172.5,285h50 v50h-50V285z M82.5,195h50v50h-50V195z M82.5,285h50v50h-50V285z" />
      </g>
    </svg>
  );
}
