import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col dark:bg-black border-t-4 border-black dark:border-[#9747FF] lg:flex-row lg:justify-between py-5 lg:pt-20 px-3 gap-3 lg:h-44">
      <div className="flex justify-center gap-3 order-3 lg:-order-none dark:text-[#FFF5EE]">
        <a
          href="https://github.com/shonenxnaifu"
          className="flex justify-between items-center gap-1"
        >
          <GithubIcon className="max-w-5" />
          github
        </a>
        <a
          href="https://www.linkedin.com/in/pawitrawarda"
          className="flex justify-between items-center gap-1"
        >
          <picture className="rounded-full overflow-hidden">
            <LinkedinIcon className="max-w-5" />
          </picture>
          linkedin
        </a>
      </div>
      <div className="my-auto text-center text-sm font-semibold dark:text-[#FFF5EE]">
        <p>Designed and Built By Pawitra Warda</p>
      </div>
      <div className="text-2xl my-auto dark:text-[#FFF5EE] text-center">
        <Link href="/">
          shonen<span className="text-sm">dev.</span>
        </Link>
      </div>
    </footer>
  );
}
