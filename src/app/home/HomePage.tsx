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
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";

export default function HomePage() {
  const listFeaturedBlogs = allBlogs.filter((item) => {
    return item.isFeatured;
  });

  return (
    <main className="flex-grow dark:bg-black">
      <section className="flex flex-col md:flex-row md:h-2/3 xl:h-1/3 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden dark:block z-10">
          <div className="absolute top-1/4 -left-3/4 md:-left-1/3 lg:left-1/2 w-[400px] h-[400px] rounded-full bg-[#9747FF] blur-[150px] mix-blend-overlay opacity-80" />
          <div className="absolute top-1/2 -left-80 md:left-0 lg:left-1/4  w-[600px] h-[600px] rounded-full bg-[#FFA6F6] blur-[250px] opacity-50 mix-blend-overlay" />
          <div className="absolute -bottom-1/2 -right-1/4 md:right-0 md:-bottom-full lg:-bottom-2/3 w-[550px] h-[350px] rounded-full bg-[#75FBC0] blur-[100px] opacity-60 mix-blend-overlay" />
        </div>
        <div className="bg-[#A8A6FF] dark:bg-black h-96 md:h-auto flex justify-center items-center border-b-4 border-black dark:border-[#9747FF] md:order-2 md:min-w-[33%] lg:py-28 bg-section-pattern-2 bg-blend-overlay dark:bg-section-pattern dark:bg-blend-normal">
          <picture className="relative inline-block max-h-56 max-w-56 overflow-hidden rounded-3xl z-10 dark:mix-blend-screen backdrop-blur-[0.05rem] dark:backdrop-blur-[0.1rem]">
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
          <h1 className="text-xl flex flex-col md:block relative z-10">
            <span className="font-bold dark:text-[#FFF5EE]">Welcome to,</span>
            <span className="text-3xl md:ml-1 text-[#9747FF] dark:text-[#FFF59F] font-bold">
              shonen-dev.xyz
            </span>
          </h1>
          <p className="text-sm mt-5 dark:text-[#FFF5EE] relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            felis vitae nisl lacinia convallis. Integer vel velit vehicula,
            pharetra turpis at, tincidunt urna. Donec ac sem sed ligula
            ultricies condimentum. Nam venenatis, nisl non suscipit viverra,
            felis justo ultricies dolor, nec dictum
          </p>
          <div className="flex gap-5 text-xl mt-5 dark:text-[#FFF5EE] relative z-10">
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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section className="flex flex-col justify-center bg-section-pattern dark:bg-section-pattern-2 bg-black dark:bg-[#9747FF] bg-repeat pt-5 pb-10 px-3">
          <h1 className="text-4xl font-bold px-3 py-5 text-[#DFE0E2] dark:text-black dark:text-shadow-neon-pink">
            Tech Stack.
          </h1>
          <div className="flex flex-wrap px-3 md:px-5 lg:px-7 gap-3 md:gap-5 xl:w-3/4 xl:mx-auto">
            <div className="flex items-center text-lg gap-1 bg-[#DFE0E2] bg-opacity-15 backdrop-blur-[1px] text-white border-2 border-white rounded-lg py-1 px-3 dark:border-[#9747FF] dark:bg-[#2F393F] dark:bg-opacity-35 shadow-neon-purple">
              <span>
                <NextJsIcon className="max-w-5" />
              </span>
              <span>NextJS</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-[#DFE0E2] bg-opacity-15 backdrop-blur-[1px] text-white border-2 border-white rounded-lg py-1 px-3 dark:border-[#9747FF] dark:bg-[#2F393F] dark:bg-opacity-35 shadow-neon-purple">
              <span>
                <ReactJsIcon className="max-w-5" />
              </span>
              <span>ReactJS</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-[#DFE0E2] bg-opacity-15 backdrop-blur-[1px] text-white border-2 border-white rounded-lg py-1 px-3 dark:border-[#9747FF] dark:bg-[#2F393F] dark:bg-opacity-35 shadow-neon-purple">
              <span>
                <TailwindIcon className="max-w-5" />
              </span>
              <span>Tailwind</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-[#DFE0E2] bg-opacity-15 backdrop-blur-[1px] text-white border-2 border-white rounded-lg py-1 px-3 dark:border-[#9747FF] dark:bg-[#2F393F] dark:bg-opacity-35 shadow-neon-purple">
              <span>
                <VueJsIcon className="max-w-5" />
              </span>
              <span>VueJS</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-[#DFE0E2] bg-opacity-15 backdrop-blur-[1px] text-white border-2 border-white rounded-lg py-1 px-3 dark:border-[#9747FF] dark:bg-[#2F393F] dark:bg-opacity-35 shadow-neon-purple">
              <span>
                <TypescriptIcon className="max-w-5" />
              </span>
              <span>Typescript</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-[#DFE0E2] bg-opacity-15 backdrop-blur-[1px] text-white border-2 border-white rounded-lg py-1 px-3 dark:border-[#9747FF] dark:bg-[#2F393F] dark:bg-opacity-35 shadow-neon-purple">
              <span>
                <PythonIcon className="max-w-5" />
              </span>
              <span>Python</span>
            </div>
            <div className="flex items-center text-lg gap-1 bg-[#DFE0E2] bg-opacity-15 backdrop-blur-[1px] text-white border-2 border-white rounded-lg py-1 px-3 dark:border-[#9747FF] dark:bg-[#2F393F] dark:bg-opacity-35 shadow-neon-purple">
              <span>
                <DockerIcon className="max-w-5" />
              </span>
              <span>Docker</span>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center py-5 px-3 h-fit dark:bg-black">
          <h1 className="text-4xl font-bold py-5 px-3 dark:text-[#FFF59F]">
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

      <section className="border-t-4 border-black py-5 px-3 dark:bg-black dark:border-[#9747FF]">
        <h1 className="text-4xl font-bold py-5 px-3 dark:text-[#FFF59F]">
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
            />
          ))}
        </div>
      </section>
    </main>
  );
}
