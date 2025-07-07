import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Card from "@/components/shared/Card";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";

export default function HomePage() {
  const listFeaturedBlogs = allBlogs.filter((item) => {
    return item.isFeatured;
  });

  return (
    <main>
      <section className="flex flex-col md:flex-row md:h-2/3">
        <div className="bg-[#A8A6FF] dark:bg-black h-96 md:h-auto flex justify-center items-center border-b-4 border-black dark:border-[#9747FF] md:order-2 md:min-w-[33%] lg:py-28">
          <picture className="relative inline-block max-h-56 max-w-56 overflow-hidden rounded-3xl">
            <Image
              className="object-fill"
              src="/totoro_kawai.png"
              alt="Logo shonen-dev.xyz"
              width={480}
              height={480}
            />
          </picture>
        </div>
        <div className="px-3 md:px-16 py-5 border-b-4 border-black dark:border-[#9747FF] md:border-r-4 bg-[#FFF59F] dark:bg-black md:flex md:flex-col md:justify-center">
          <h1 className="text-xl flex flex-col md:block">
            <span className="font-bold dark:text-[#FFF5EE]">Welcome to,</span>
            <span className="text-3xl md:ml-1 text-[#9747FF] dark:text-[#FFF59F] font-bold">
              shonen-dev.xyz
            </span>
          </h1>
          <p className="text-sm mt-5 dark:text-[#FFF5EE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            felis vitae nisl lacinia convallis. Integer vel velit vehicula,
            pharetra turpis at, tincidunt urna. Donec ac sem sed ligula
            ultricies condimentum. Nam venenatis, nisl non suscipit viverra,
            felis justo ultricies dolor, nec dictum
          </p>
          <div className="flex gap-5 text-xl mt-5 dark:text-[#FFF5EE]">
            <a
              href="https://github.com/shonenxnaifu"
              className="flex justify-between gap-1 items-center"
            >
              <GithubIcon className="max-w-5" />
              github
            </a>
            <a
              href="https://www.linkedin.com/in/pawitrawarda"
              className="flex justify-between gap-1 items-center"
            >
              <picture className="rounded-full overflow-hidden">
                <LinkedinIcon className="max-w-5" />
              </picture>
              linkedin
            </a>
          </div>
        </div>
      </section>
      <section className="bg-section-pattern dark:bg-section-pattern-2 bg-black dark:bg-[#9747FF] bg-repeat pt-5 pb-10 px-5">
        <h1 className="text-4xl font-bold px-3 py-5 text-[#DFE0E2] dark:text-black">
          Tech Stack.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] justify-items-center md:px-5 lg:px-7 gap-3 md:gap-5">
          <picture className="relative bg-white dark:bg-transparent w-[120px] h-[120px] rounded-lg dark:bg-gradient-to-br dark:from-transparent dark:to-black/50 dark:backdrop-blur-[1px]">
            <Image
              className="object-fill p-5"
              src="/assets/logos/nextjs-icon.svg"
              alt="Logo NextJS"
              fill
            />
          </picture>
          <picture className="relative bg-white dark:bg-transparent w-[120px] h-[120px] rounded-lg dark:bg-gradient-to-br dark:from-transparent dark:to-black/50 dark:backdrop-blur-[1px]">
            <Image
              className="object-fill p-5"
              src="/assets/logos/react-icon.svg"
              alt="Logo NextJS"
              fill
            />
          </picture>
          <picture className="relative bg-white dark:bg-transparent w-[120px] h-[120px] rounded-lg dark:bg-gradient-to-br dark:from-transparent dark:to-black/50 dark:backdrop-blur-[1px]">
            <Image
              className="object-fill p-5"
              src="/assets/logos/tailwind-icon.svg"
              alt="Logo NextJS"
              fill
            />
          </picture>
          <picture className="relative bg-white dark:bg-transparent w-[120px] h-[120px] rounded-lg dark:bg-gradient-to-br dark:from-transparent dark:to-black/50 dark:backdrop-blur-[1px]">
            <Image
              className="object-fill p-5"
              src="/assets/logos/vue-icon.svg"
              alt="Logo NextJS"
              fill
            />
          </picture>
          <picture className="relative bg-white dark:bg-transparent w-[120px] h-[120px] rounded-lg dark:bg-gradient-to-br dark:from-transparent dark:to-black/50 dark:backdrop-blur-[1px]">
            <Image
              className="object-fill p-5"
              src="/assets/logos/typescript-icon.svg"
              alt="Logo NextJS"
              fill
            />
          </picture>
          <picture className="relative bg-white dark:bg-transparent w-[120px] h-[120px] rounded-lg dark:bg-gradient-to-br dark:from-transparent dark:to-black/50 dark:backdrop-blur-[1px]">
            <Image
              className="object-fill p-5"
              src="/assets/logos/python-icon.svg"
              alt="Logo NextJS"
              fill
            />
          </picture>
          <picture className="relative bg-white dark:bg-transparent w-[120px] h-[120px] rounded-lg dark:bg-gradient-to-br dark:from-transparent dark:to-black/50 dark:backdrop-blur-[1px]">
            <Image
              className="object-fill p-5"
              src="/assets/logos/docker-icon.svg"
              alt="Logo NextJS"
              fill
            />
          </picture>
        </div>
      </section>
      <section className="border-t-4 border-black py-5 px-3 h-fit dark:bg-black dark:border-[#9747FF]">
        <h1 className="text-4xl font-bold py-5 lg:px-10 xl:px-24 dark:text-[#FFF59F]">
          Featured Posts.
        </h1>
        <div className="flex flex-col md:flex-row md:justify-center md:flex-wrap items-center pb-10 gap-7 md:gap-10 xl:gap-24">
          {listFeaturedBlogs.map((item) => (
            <Card
              url={item.url}
              key={item.title}
              title={item.title}
              date={item.publishedAt}
              tags={item.tags || []}
              shortDesc={item.description.substring(0, 100)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
