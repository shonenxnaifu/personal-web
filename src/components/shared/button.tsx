interface ButtonProps {
  text: string;
  className?: string;
  type: "button" | "submit";
  onClick: () => void;
}

export default function Button({
  text,
  className,
  type,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type === "button" ? "button" : "submit"}
      className={`btn-primary ${className}`}
    >
      {text}
    </button>
  );
}
