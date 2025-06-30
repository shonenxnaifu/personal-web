import CardNoImage from "@/components/shared/CardNoImage";
import Tag from "@/components/shared/Tag";

const dummyTags = [
  "webdev",
  "database",
  "datascience",
  "devops",
  "software-deveoplemnt",
];

export default function BlogList() {
  return (
    <main className="min-h-screen dark:bg-black">
      <header className="py-5 px-3">
        <h1 className="text-4xl font-bold dark:text-[#FFF59F]">
          Browse all of Posts.
        </h1>
      </header>
      <section className="py-5 px-3">
        <h2 className="text-2xl font-semibold dark:text-[#FFF59F]">
          Browse by Tags
        </h2>

        <nav aria-label="Tags Filter">
          <ul className="space-x-3 space-y-1">
            {dummyTags.map((item) => (
              <li className="inline-block" key={item}>
                <Tag text={item} className="text-xs cursor-pointer" />
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="py-5 px-3">
        <h2 className="sr-only">List of Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <CardNoImage
              key={item}
              title="Blog Title"
              date="12/12/2025"
              tags={["web", "devops", "machinelearning"]}
              shortDesc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, atque
            tempore. Odio illum nesciunt aspernatur illo, maxime consequatur
            unde adipisci magnam, molestiae ratione iusto? Blanditiis
            perspiciatis molestias ipsam distinctio omnis!"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
