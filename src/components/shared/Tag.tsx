import React from "react";

interface TagProps {
  text: string;
  className: string;
  isActive?: boolean;
}

export default function Tag({ text, className, isActive = false }: TagProps) {
  return (
    <button
      type="button"
      className={`${isActive ? "bg-tertiaryVariant text-onTertiaryVariant" : "bg-tertiaryVariant2 text-onTertiaryVariant2 hover:bg-tertiaryVariant hover:text-onTertiaryVariant"} inline-block rounded-md font-semibold p-[2px] transition-all ease-in-out duration-200 ${className}`}
    >
      {text}
    </button>
  );
}
