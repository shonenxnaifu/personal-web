import CardNoImage from "@/components/shared/CardNoImage";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import SearchNavigation from "./components/SearchNavigation";

interface PageSearchParams {
  t: string | string[] | undefined;
}

interface BlogListProps {
  searchParams: PageSearchParams;
}

export default function BlogList({ searchParams }: BlogListProps) {
  const allTags: Array<string> = ["all"];

  const blogs = allBlogs.filter((item) => {
    /**
     * check every tags of each blog
     */
    return item.tags?.some((tag) => {
      const slugified = slug(tag);
      /**
       * get all tags
       */
      if (!allTags.includes(slugified)) {
        allTags.push(slugified);
      }

      if (searchParams.t === "all" || !searchParams.t) {
        return true;
      }

      return slugified === searchParams.t;
    });
  });

  const mappedBlogs = blogs.map((item) => {
    // const imgFilePath = item.image?.filePath;
    // const changedImgFilePath = imgFilePath?.replace(
    //   /^(images)(\/)/,
    //   "/assets/blog$2",
    // );

    const sluggifiedTags = item.tags?.map((tag) => {
      return slug(tag);
    });

    return {
      ...item,
      image: {
        // ...item.image,
        filePath: item.image,
      },
      tags: sluggifiedTags,
    };
  });

  return (
    <main className="min-h-screen dark:bg-black">
      <header className="py-5 px-3">
        <h1 className="text-4xl font-bold dark:text-[#FFF59F]">
          Browse all Posts.
        </h1>
      </header>
      <section className="py-5 px-3">
        <h2 className="text-2xl font-semibold dark:text-[#FFF59F]">
          Browse by Tags
        </h2>

        <nav aria-label="Search Filter">
          <SearchNavigation
            tags={allTags}
            selectedTag={searchParams.t?.toString() || ""}
          />
        </nav>
      </section>
      <section className="py-5 px-3">
        <h2 className="sr-only">List of Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mappedBlogs.map((item) => (
            <CardNoImage
              // eslint-disable-next-line no-underscore-dangle
              key={item.title}
              title={item.title}
              date={item.publishedAt}
              tags={item.tags || []}
              shortDesc={item.description.substring(0, 100)}
              url={item.url}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
