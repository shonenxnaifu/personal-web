interface ButtonProps {
  text: string;
  className?: string;
  type: "button" | "submit";
}

export default function Button({ text, className, type }: ButtonProps) {
  return (
    <button
      type={type === "button" ? "button" : "submit"}
      className={`btn-primary ${className}`}
    >
      {text}
    </button>
  );
}
