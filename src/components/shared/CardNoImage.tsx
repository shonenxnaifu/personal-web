import { format, parseISO } from "date-fns";
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
        <h3 className="text-xl font-bold text-black dark:text-[#FFF5EE]">
          {title}
        </h3>
        <span className="flex text-sm gap-1 text-[#2F393F] font-semibold dark:text-[#DFE0E2] ">
          <CalendarIcon className="max-w-3" />
          <time dateTime={format(parseISO(date), "yyyy-MM-dd")}>
            {format(parseISO(date), "dd/MM/yyyy")}
          </time>
        </span>
        <ul className="space-x-2">
          {tags.map((item) => (
            <li className="inline-block" key={item}>
              <Tag text={item} className="text-[10px]" />
            </li>
          ))}
        </ul>
      </header>
      <p className="mt-3 line-clamp-2 dark:text-[#FFF5EE] text-sm">
        {shortDesc}
      </p>
    </article>
  );
}
