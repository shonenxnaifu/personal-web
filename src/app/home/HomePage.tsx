import DockerIcon from "@/components/icons/DockerIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import NextJsIcon from "@/components/icons/NextJsIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import ReactJsIcon from "@/components/icons/ReactJsIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import TypescriptIcon from "@/components/icons/Typescript";
import VueJsIcon from "@/components/icons/VueJsIcon";
import Card from "@/components/shared/Card";
import CardNoImage2 from "@/components/shared/CardNoImage2";
import Slider from "@/components/shared/Slider";
import LogoIcon from "@/components/icons/LogoIcon";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import { slug } from "github-slugger";

export default function HomePage() {
  const mappedBlogs = allBlogs.map((item) => {
    const sluggifiedTags = item.tags?.map((tag) => {
      return slug(tag);
    });

    return {
      ...item,
      image: {
        filePath: item.image,
      },
      tags: sluggifiedTags,
    };
  });

  const listFeaturedBlogs = mappedBlogs.filter((item) => {
    return item.isFeatured;
  });

  return (
    <main className="flex-grow dark:bg-darkNeutral">
      <section className="flex flex-col md:flex-row md:h-2/3 xl:h-1/3 relative overflow-hidden">
        {/* <div className="absolute inset-0 pointer-events-none hidden dark:block z-10"> */}
        {/*   <div className="absolute top-1/4 -left-2/3 md:-left-1/2 lg:left-1/2 w-[400px] h-[400px] rounded-blob-1 blur-[150px] bg-[#9747FF] mix-blend-overlay opacity-80 animate-blob-1" /> */}
        {/**/}
        {/*   <div className="absolute top-1/2 -left-1/2 md:left-0 md:top-3/4 lg:left-1/4 w-[600px] h-[600px] rounded-blob-2 bg-[#FFA6F6] blur-[250px] opacity-50 mix-blend-overlay animate-blob-2" /> */}
        {/**/}
        {/*   <div className="absolute -bottom-1/2 -right-full md:right-1/4 md:top-full lg:-bottom-2/3 lg:right-1/2 w-[550px] h-[350px] rounded-blob-3 bg-[#75FBC0] blur-[100px] md:blur-xl lg:blur-[100px] opacity-60 mix-blend-overlay animate-blob-3" /> */}
        {/* </div> */}
        <div className="bg-neutral dark:bg-darkNeutral h-96 md:h-auto flex justify-center items-center border-b border-outlineVariant dark:border-darkOutlineVariant md:border-none md:order-2 md:min-w-[33%] lg:py-28">
          <picture className="relative inline-block max-h-56 max-w-56 overflow-hidden rounded-3xl z-10">
            {/* <Image */}
            {/*   className="object-fill" */}
            {/*   src="https://res.cloudinary.com/dbegkzvdt/image/upload/v1791877819/totoro_ready_dwlhpa.svg" */}
            {/*   alt="Logo shonen-dev.xyz" */}
            {/*   width={480} */}
            {/*   height={480} */}
            {/*   sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" */}
            <LogoIcon className="text-primary dark:text-darkOnNeutral" />
          </picture>
        </div>
        <div className="px-3 md:px-16 py-5  md:border-r border-outlineVariant dark:border-darkOutlineVariant bg-neutral dark:bg-darkNeutral md:flex md:flex-col md:justify-center">
          <h1 className="text-xl flex flex-col md:block relative z-10">
            <span className="font-bold dark:text-darkOnNeutral text-primary">Welcome to,</span>
            <span className="text-3xl md:ml-1 text-tertiary dark:text-darkTertiaryContainer font-bold">
              shonen-dev.xyz
            </span>
          </h1>
          <p className="text-sm mt-5 dark:text-darkOnNeutral text-primary relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            felis vitae nisl lacinia convallis. Integer vel velit vehicula,
            pharetra turpis at, tincidunt urna. Donec ac sem sed ligula
            ultricies condimentum. Nam venenatis, nisl non suscipit viverra,
            felis justo ultricies dolor, nec dictum
          </p>
          <div className="flex gap-5 text-xl mt-5 dark:text-darkOnNeutral text-primary relative z-10">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-outlineVariant dark:border-darkOutlineVariant">
        <section className="flex flex-col justify-center bg-circuit-light dark:bg-circuit-dark bg-circuit-size bg-primaryContainer dark:bg-darkTertiaryContainer pt-5 pb-10 px-3">
          <h1 className="text-4xl font-bold px-3 py-5 text-onPrimaryContainer dark:text-darkOnTertiaryContainer">
            Tech Stack.
          </h1>
          <div className="flex flex-wrap px-3 md:px-5 lg:px-7 gap-3 md:gap-5 xl:w-3/4 xl:mx-auto">
            <div className="flex items-center text-lg gap-1 bg-transparent text-onPrimaryContainer dark:text-darkOnTertiaryContainer border-2 border-onPrimaryContainer rounded-lg py-1 px-3 dark:border-darkOnTertiaryContainer">
              <span>
                <NextJsIcon className="max-w-5" />
              </span>
              <span>NextJS</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-transparent text-onPrimaryContainer dark:text-darkOnTertiaryContainer border-2 border-onPrimaryContainer rounded-lg py-1 px-3 dark:border-darkOnTertiaryContainer">
              <span>
                <ReactJsIcon className="max-w-5" />
              </span>
              <span>ReactJS</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-transparent text-onPrimaryContainer dark:text-darkOnTertiaryContainer border-2 border-onPrimaryContainer rounded-lg py-1 px-3 dark:border-darkOnTertiaryContainer">
              <span>
                <TailwindIcon className="max-w-5" />
              </span>
              <span>Tailwind</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-transparent text-onPrimaryContainer dark:text-darkOnTertiaryContainer border-2 border-onPrimaryContainer rounded-lg py-1 px-3 dark:border-darkOnTertiaryContainer">
              <span>
                <VueJsIcon className="max-w-5" />
              </span>
              <span>VueJS</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-transparent text-onPrimaryContainer dark:text-darkOnTertiaryContainer border-2 border-onPrimaryContainer rounded-lg py-1 px-3 dark:border-darkOnTertiaryContainer">
              <span>
                <TypescriptIcon className="max-w-5" />
              </span>
              <span>Typescript</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-transparent text-onPrimaryContainer dark:text-darkOnTertiaryContainer border-2 border-onPrimaryContainer rounded-lg py-1 px-3 dark:border-darkOnTertiaryContainer">
              <span>
                <PythonIcon className="max-w-5" />
              </span>
              <span>Python</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-transparent text-onPrimaryContainer dark:text-darkOnTertiaryContainer border-2 border-onPrimaryContainer rounded-lg py-1 px-3 dark:border-darkOnTertiaryContainer">
              <span>
                <DockerIcon className="max-w-5" />
              </span>
              <span>Docker</span>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center py-5 px-3 h-fit dark:bg-darkNeutral">
          <h1 className="text-4xl font-bold py-5 px-3 text-primary dark:text-darkOnNeutralVariant">
            Latest Works.
          </h1>
          <div className="w-full mx-auto xl:w-2/3">
            <Slider>
              <CardNoImage2
                title={listFeaturedBlogs[0].title}
                date={listFeaturedBlogs[0].publishedAt}
                tags={listFeaturedBlogs[0].tags || []}
                shortDesc={listFeaturedBlogs[0].description.substring(0, 100)}
                url={listFeaturedBlogs[0].url}
              />
              <CardNoImage2
                title={listFeaturedBlogs[0].title}
                date={listFeaturedBlogs[0].publishedAt}
                tags={listFeaturedBlogs[0].tags || []}
                shortDesc={listFeaturedBlogs[0].description.substring(0, 100)}
                url={listFeaturedBlogs[0].url}
              />
              <CardNoImage2
                title={listFeaturedBlogs[0].title}
                date={listFeaturedBlogs[0].publishedAt}
                tags={listFeaturedBlogs[0].tags || []}
                shortDesc={listFeaturedBlogs[0].description.substring(0, 100)}
                url={listFeaturedBlogs[0].url}
              />
            </Slider>
          </div>
        </section>
      </div>

      <section className=" py-5 px-3">
        <h1 className="text-4xl font-bold py-5 px-3 text-primary dark:text-darkOnNeutralVariant">
          Featured Posts.
        </h1>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 pb-10 gap-7">
          {listFeaturedBlogs.map((item) => (
            <Card
              url={item.url}
              key={item.title}
              title={item.title}
              date={item.publishedAt}
              tags={item.tags || []}
              shortDesc={item.description.substring(0, 100)}
              urlImage={item.image.filePath}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
