import Image from "next/image";
import CalendarIcon from "@/components/icons/CalendarIcon";

interface CardProps {
  title: string;
  date: string;
  tags: Array<string>;
  shortDesc: string;
}

export default function Card({ title, date, tags, shortDesc }: CardProps) {
  return (
    <div className="flex flex-col min-w-72 md:max-w-80 lg:max-w-96 bg-white mx-3 mr-5 border-4 border-black rounded-lg shadow-[7px_7px_0_0_rgba(0,0,0,1)] overflow-hidden dark:border-[#FFF5EE] dark:shadow-[7px_7px_0_0_rgba(255,245,238,1)] dark:bg-[#2F393F]">
      <picture className="relative w-full h-64 opacity-90">
        <Image
          className="object-cover"
          src="/assets/images/dummy1.png"
          alt="dummy image"
          fill
        />
      </picture>
      <div className="px-3 py-5">
        <h1 className="text-xl font-bold dark:text-[#FFF5EE]">{title}</h1>
        <span className="flex text-sm gap-1 text-[#2F393F] font-semibold dark:text-[#FFF5EE]">
          <CalendarIcon className="max-w-3" /> {date}
        </span>
        <div className="flex gap-2 py-1">
          {tags.map((item) => (
            <div
              className="text-[10px] bg-[#75FBC0] inline-block rounded font-semibold p-[2px]"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <p className="mt-3 line-clamp-3 dark:text-[#FFF5EE]">{shortDesc}</p>
      </div>
    </div>
  );
}
