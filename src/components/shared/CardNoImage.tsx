import CalendarIcon from "../icons/CalendarIcon";
import Tag from "./Tag";

interface CardProps {
  title: string;
  date: string;
  tags: Array<string>;
  shortDesc: string;
}

export default function CardNoImage({
  title,
  date,
  tags,
  shortDesc,
}: CardProps) {
  return (
    <article className="flex flex-col bg-white border-4 border-black rounded-lg px-3 py-1 mr-3 shadow-[7px_7px_0_0_rgba(0,0,0,1)] dark:border-[#FFF5EE] dark:shadow-[7px_7px_0_0_rgba(255,245,238,1)] dark:bg-[#2F393F]">
      <header className="flex flex-col">
        <h3 className="text-xl font-bold dark:text-[#FFF5EE]">{title}</h3>
        <span className="flex text-sm gap-1 text-[#2F393F] font-semibold dark:text-[#FFF5EE] ">
          <CalendarIcon className="max-w-3" />
          <time dateTime="2025-12-12">{date}</time>
        </span>
        <ul className="space-x-2">
          {tags.map((item) => (
            <li className="inline-block" key={item}>
              <Tag text={item} className="text-xs" />
            </li>
          ))}
        </ul>
      </header>
      <p className="mt-3 line-clamp-3 dark:text-[#FFF5EE]">{shortDesc}</p>
    </article>
  );
}
