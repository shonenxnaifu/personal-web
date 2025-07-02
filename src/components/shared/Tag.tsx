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
      className={`${isActive ? "bg-[#75FBC0]" : "bg-[#2F393F] text-white"} inline-block rounded-md font-semibold p-[2px] hover:bg-opacity-50 transition-all ease-in-out duration-200 ${className}`}
    >
      {text}
    </button>
  );
}
