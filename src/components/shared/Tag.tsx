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
      className={`${isActive ? "bg-tertiaryVariant text-onTertiaryVariant dark:bg-darkTertiaryVariant2 dark:text-darkOnTertiaryVariant2" : "bg-tertiaryVariant2 dark:bg-darkTertiaryVariant text-onTertiaryVariant2 dark:text-darkOnTertiaryVariant hover:bg-tertiaryVariant dark:hover:bg-darkTertiaryVariant2 hover:text-onTertiaryVariant hover:dark:text-darkOnTertiaryVariant2"} inline-block rounded-md font-semibold p-[2px] transition-all ease-in-out duration-200 ${className}`}
    >
      {text}
    </button>
  );
}
