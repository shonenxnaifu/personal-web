import Image from "next/image";
import Toc from "@/app/blog/components/Toc";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import RenderMdx from "../components/RenderMdx";

interface PageParams {
  slug: string;
}

interface BlogPageProps {
  params: PageParams;
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => {
    return {
      // eslint-disable-next-line no-underscore-dangle
      slug: blog._raw.flattenedPath,
    };
  });
}

export default function BlogPage({ params }: BlogPageProps) {
  // eslint-disable-next-line no-underscore-dangle
  const blog = allBlogs.find((item) => item._raw.flattenedPath === params.slug);

  if (!blog) notFound();

  return (
    <main className="pb-5 min-h-screen mx-auto dark:bg-black">
      <article className="flex flex-col lg:flex-row lg:flex-wrap lg:mx-5">
        <header className="lg:w-full flex flex-col m-3 border-b border-black pb-5 dark:border-[#FFF5EE]">
          <figure className="relative h-[200px] md:h-[360px] mx-1 my-3 rounded-3xl overflow-hidden">
            <Image
              className="object-cover"
              src="/assets/images/dummy2.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </figure>
          <h1 className="text-3xl font-semibold mt-3 dark:text-[#FFF59F]">
            {blog.title}
          </h1>
          <span className="text-sm font-semibold text-[#2F393F] mt-1 dark:text-[#75FBC0]">
            Posted on&nbsp;
            <time dateTime={format(parseISO(blog.publishedAt), "yyyy-MM-dd")}>
              {format(parseISO(blog.publishedAt), "dd/MM/yyyy")}
            </time>
          </span>
        </header>
        <Toc dataToc={blog.toc} />
        <div className="lg:flex-1 dark:text-[#FFF5EE]">
          <RenderMdx blog={blog} />
        </div>
      </article>
    </main>
  );
}
