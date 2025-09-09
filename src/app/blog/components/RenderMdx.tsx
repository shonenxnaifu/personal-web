"use client";

import React from "react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";

interface RenderMdxProps {
  blog: any;
}

const mdxComponents = {
  Image,
};

export default function RenderMdx({ blog }: RenderMdxProps) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="prose prose-sm md:prose-base lg:prose-lg xl:prose-2xl dark:prose-invert mx-auto px-3 mt-5 dark:prose-h2:text-[#FFF59F] dark:prose-h3:text-[#FFF59F] dark:prose-blockquote:border-[#75FBC0] dark:prose-blockquote:bg-[#2F393F] dark:prose-li:marker:text-[#75FBC0]">
      <MDXContent components={mdxComponents} />
    </div>
  );
}
