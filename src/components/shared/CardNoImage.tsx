"use client";

import { format, parseISO } from "date-fns";
import Link from "next/link";
import CalendarIcon from "../icons/CalendarIcon";
import Tag from "./Tag";

interface CardProps {
  title: string;
  date: string;
  tags: Array<string>;
  shortDesc: string;
  url: string;
}

export default function CardNoImage({
  title,
  date,
  tags,
  shortDesc,
  url,
}: CardProps) {
  return (
    <article className="flex flex-col bg-white border-4 border-black rounded-lg px-3 py-1 mr-3 shadow-[7px_7px_0_0_rgba(0,0,0,1)] dark:border-[#FFF5EE] dark:shadow-[7px_7px_0_0_rgba(255,245,238,1)] dark:bg-[#2F393F]">
      <header className="flex flex-col">
        <Link href={url}>
          <h3 className="text-xl font-bold text-black dark:text-[#FFF5EE] transition-all ease-in-out duration-200 hover:text-[#9747FF]">
            {title}
          </h3>
        </Link>
        <span className="flex text-sm gap-1 text-[#2F393F] font-semibold dark:text-[#DFE0E2] ">
          <CalendarIcon className="max-w-3" />
          <time dateTime={format(parseISO(date), "yyyy-MM-dd")}>
            {format(parseISO(date), "dd/MM/yyyy")}
          </time>
        </span>
        <ul className="space-x-2">
          {tags.map((item) => (
            <li className="inline-block" key={item}>
              <Tag text={item} className="text-[10px]" isActive />
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
