interface TagProps {
  text: string;
  className: string;
}

export default function Tag({ text, className }: TagProps) {
  return (
    <div
      className={`bg-[#75FBC0] inline-block rounded font-semibold p-[2px] ${className}`}
    >
      {text}
    </div>
  );
}
