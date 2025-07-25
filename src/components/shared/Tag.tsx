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
      className={`${isActive ? "bg-[#75FBC0] hover:bg-opacity-50" : "bg-[#2F393F] text-white hover:bg-[#9747FF]"} inline-block rounded-md font-semibold p-[2px] transition-all ease-in-out duration-200 ${className}`}
    >
      {text}
    </button>
  );
}
