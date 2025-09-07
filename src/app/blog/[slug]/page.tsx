import Image from "next/image";
import Toc from "@/app/blog/components/Toc";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import fromUTCTimestamp from "@/utils/dateFormater";
import { slug } from "github-slugger";
import siteMetaData from "@/utils/siteMetaData";
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

export async function generateMetadata({ params }: BlogPageProps) {
  // eslint-disable-next-line no-underscore-dangle
  const blog = allBlogs.find((item) => item._raw.flattenedPath === params.slug);

  if (!blog) {
    return undefined;
  }

  let imgList: Array<string> = [];

  if (blog.image) {
    imgList = [blog.image];
  }

  const ogImages = imgList.map((image) => {
    return {
      url: image,
    };
  });

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetaData.siteUrl + blog.url,
      siteName: siteMetaData.title,
      locale: "en_US",
      type: "website",
      publishedAt: new Date(blog.publishedAt).toISOString(),
      modifiedAt: new Date(blog.publishedAt).toISOString(),
      images: ogImages,
      authors: blog.author,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  // eslint-disable-next-line no-underscore-dangle
  const blog = allBlogs.find((item) => item._raw.flattenedPath === params.slug);

  if (!blog) notFound();

  const sluggifiedTags = blog.tags?.map((tag) => {
    return slug(tag);
  });

  const mappedBlog = {
    ...blog,
    image: {
      filePath: blog.image,
    },
    tags: sluggifiedTags,
  };

  return (
    <main className="pb-5 min-h-screen mx-auto dark:bg-black">
      <article className="flex flex-col lg:flex-row lg:flex-wrap lg:mx-5">
        <header className="lg:w-full flex flex-col m-3 border-b border-black pb-5 dark:border-[#FFF5EE]">
          <figure className="relative h-[200px] md:h-[360px] mx-1 my-3 rounded-3xl overflow-hidden">
            {mappedBlog.image && (
              <Image
                className="object-cover"
                src={mappedBlog.image.filePath ?? "/assets/images/default.webp"}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            )}
          </figure>
          <h1 className="text-3xl font-semibold mt-3 dark:text-[#FFF59F]">
            {mappedBlog.title}
          </h1>
          <span className="text-sm font-semibold text-[#2F393F] mt-1 dark:text-[#75FBC0]">
            Posted on&nbsp;
            <time
              dateTime={fromUTCTimestamp(mappedBlog.publishedAt, "dd/mm/yyyy")}
            >
              {fromUTCTimestamp(mappedBlog.publishedAt, "dd/mm/yyyy")}
            </time>
          </span>
        </header>
        <Toc dataToc={mappedBlog.toc} />
        <div className="lg:flex-1 dark:text-[#FFF5EE]">
          <RenderMdx blog={mappedBlog} />
        </div>
      </article>
    </main>
  );
}
