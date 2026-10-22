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
    <div className="prose prose-sm md:prose-base lg:prose-lg xl:prose-2xl dark:prose-invert mx-auto px-3 mt-5 dark:text-darkOnNeutral dark:prose-h2:text-darkOnNeutralVariant dark:prose-h3:text-darkOnNeutralVariant dark:prose-blockquote:border-darkOutline dark:prose-blockquote:bg-darkNeutral dark:prose-li:marker:text-darkOnNeutralVariant">
      <MDXContent components={mdxComponents} />
    </div>
  );
}
