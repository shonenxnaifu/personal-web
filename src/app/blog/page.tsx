import Image from "next/image";
import Toc, { IToc } from "./components/Toc";

const toc: Array<IToc> = [
  {
    level: "two",
    text: "What to expect from here on out",
    slug: "what-to-expect-from-here-on-out",
  },
  {
    level: "three",
    text: "Typography should be easy",
    slug: "typography-should-be-easy",
  },
  {
    level: "two",
    text: "What if we stack headings?",
    slug: "what-if-we-stack-headings",
  },
  {
    level: "three",
    text: "We should make sure that looks good, too.",
    slug: "we-should-make-sure-that-looks-good-too",
  },
  {
    level: "three",
    text: "When a heading comes after a paragraph …",
    slug: "when-a-heading-comes-after-a-paragraph-",
  },
  {
    level: "two",
    text: "Code should look okay by default.",
    slug: "code-should-look-okay-by-default",
  },
  {
    level: "three",
    text: "What about nested lists?",
    slug: "what-about-nested-lists",
  },
  {
    level: "two",
    text: "There are other elements we need to style",
    slug: "there-are-other-elements-we-need-to-style",
  },
  {
    level: "three",
    text: "Sometimes I even use `code` in headings",
    slug: "sometimes-i-even-use-code-in-headings",
  },
  {
    level: "three",
    text: "We haven't used an `h4` yet",
    slug: "we-havent-used-an-h4-yet",
  },
  {
    level: "three",
    text: "We still need to think about stacked headings though.",
    slug: "we-still-need-to-think-about-stacked-headings-though",
  },
  {
    level: "three",
    text: "Let's make sure we don't screw that up with `h4` elements, either.",
    slug: "lets-make-sure-we-dont-screw-that-up-with-h4-elements-either",
  },
  {
    level: "two",
    text: "GitHub Flavored Markdown",
    slug: "github-flavored-markdown",
  },
];

export default function BlogPage() {
  return (
    <main className="pb-5 min-h-screen mx-auto dark:bg-black">
      <article className="flex flex-col lg:flex-row lg:flex-wrap lg:mx-5">
        <header className="lg:w-full flex flex-col m-3 border-b border-black pb-5 dark:border-[#FFF5EE]">
          <figure className="relative h-[200px] md:h-[360px] mx-1 my-3 rounded-3xl overflow-hidden">
            <Image
              className="object-cover"
              src="/dummy2.webp"
              alt=""
              width={1080}
              height={585}
              priority
            />
          </figure>
          <h1 className="text-3xl font-semibold mt-3 dark:text-[#FFF59F]">
            Blog Title
          </h1>
          <span className="text-sm font-semibold font-[#2F393F] mt-1 dark:text-[#75FBC0]">
            Posted on <time dateTime="2025-08-12">12/08/2025</time>
          </span>
        </header>
        <Toc dataToc={toc} />
        <div className="lg:flex-1 dark:text-[#FFF5EE]">
          <section className="mt-5 px-3">
            <h2 className="font-semibold text-lg">Lorem Ipsum Dolor</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </section>
          <section className="mt-5 px-3">
            <h2 className="font-semibold text-lg">Ut Enim Ad Minimh</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit.
            </p>
          </section>
          <section className="mt-5 px-3">
            <h2 className="font-semibold text-lg">Ut Enim Ad Minimh</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit.
            </p>
          </section>
          <section className="mt-5 px-3">
            <h2 className="font-semibold text-lg">Ut Enim Ad Minimh</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
