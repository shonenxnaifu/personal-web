"use client";

import Tag from "@/components/shared/Tag";
import Link from "next/link";

interface SearchNavigationProps {
  tags: Array<string>;
  selectedTag: string;
}

export default function SearchNavigation({
  tags,
  selectedTag,
}: SearchNavigationProps) {
  const isActiveTag = (tag: string): boolean => {
    return selectedTag === tag || (!selectedTag && tag === "all");
  };

  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-1">
      {tags.map((tag) => (
        <li className="inline-block" key={tag}>
          <Link className="" href={tag === "all" ? "/blog" : `/blog?t=${tag}`}>
            <Tag
              text={tag}
              className="text-xs md:text-sm"
              isActive={isActiveTag(tag)}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
