import Image from "next/image";
import CalendarIcon from "@/components/icons/CalendarIcon";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import Tag from "./Tag";

interface CardProps {
  title: string;
  date: string;
  tags: Array<string>;
  shortDesc: string;
  url: string;
}

export default function Card({ title, date, tags, shortDesc, url }: CardProps) {
  return (
    <article className="flex flex-col min-w-72 md:max-w-80 lg:max-w-96 bg-white mx-3 mr-5 border-4 border-black rounded-lg shadow-[7px_7px_0_0_rgba(0,0,0,1)] overflow-hidden dark:border-[#FFF5EE] dark:shadow-[7px_7px_0_0_rgba(255,245,238,1)] dark:bg-[#2F393F]">
      <header className="flex flex-col">
        <picture className="relative w-full h-64 opacity-90">
          <Image
            className="object-cover"
            src="/assets/images/dummy1.png"
            alt="dummy image"
            fill
          />
        </picture>
        <Link href={url}>
          <h3 className="text-xl font-bold px-3 pt-1 dark:text-[#FFF5EE] transition-all ease-in-out duration-200 hover:text-[#9747FF]">
            {title}
          </h3>
        </Link>
        <span className="flex px-3 pt-1 text-sm gap-1 text-[#2F393F] font-semibold dark:text-[#DFE0E2]">
          <CalendarIcon className="max-w-3" />
          <time dateTime={format(parseISO(date), "yyyy-MM-dd")}>
            {format(parseISO(date), "dd/MM/yyyy")}
          </time>
        </span>
        <ul className="space-x-2 px-3 pt-1">
          {tags.map((item) => (
            <li className="inline-block" key={item}>
              <Tag key={item} text={item} className="text-[10px]" isActive />
            </li>
          ))}
        </ul>
      </header>
      <p className="mt-3 px-3 py-1 line-clamp-3 dark:text-[#FFF5EE] text-sm">
        {shortDesc}
      </p>
    </article>
  );
}
