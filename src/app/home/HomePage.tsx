import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="dark:bg-black h-screen">
      <section className="flex flex-col md:flex-row md:h-2/3">
        <div className="bg-[#A8A6FF] dark:bg-black h-96 md:h-auto flex justify-center items-center border-b-4 border-black dark:border-[#9747FF] md:order-2 md:min-w-[33%] md:px-28">
          <picture className="relative inline-block max-h-56 max-w-56 md:min-h-60 md:min-w-60 lg:min-h-72 lg:min-w-72 overflow-hidden rounded-3xl">
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
          <h1 className="flex flex-col md:block">
            <span className="text-xl font-bold dark:text-[#FFF5EE]">
              Welcome to,
            </span>
            <span className="text-3xl text-[#9747FF] dark:text-[#FFF59F] font-bold">
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
              className="flex justify-between gap-1"
            >
              <GithubIcon className="w-5" />
              github
            </a>
            <a
              href="https://www.linkedin.com/in/pawitrawarda"
              className="flex justify-between gap-1 items-center"
            >
              <picture className="rounded-full overflow-hidden">
                <LinkedinIcon className="w-5" />
              </picture>
              linkedin
            </a>
          </div>
        </div>
      </section>
      <section>
        <h1>tech stack</h1>
      </section>
    </main>
  );
}
