import Image from "next/image";

export default function TechStackLayoutOne() {
  return (
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
  );
}
