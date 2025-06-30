export interface IToc {
  level: string;
  text: string;
  slug: string;
}

interface TocProps {
  dataToc: Array<IToc>;
}

export default function Toc({ dataToc }: TocProps) {
  return (
    <nav
      className="lg:max-w-[320px] lg:order-2 lg:sticky lg:top-3 lg:self-start text-sm p-3 mt-5 mx-3 border border-black rounded-lg dark:text-[#FFF5EE] dark:border-[#FFF5EE]"
      aria-label="Table of Contents"
    >
      <h3 className="font-semibold text-lg dark:text-[#FFF59F]">
        Table of Contents
      </h3>
      <ol className="list-none list-inside">
        {(() => {
          let parentNumber = 0;
          return dataToc.map((tocItem, index, array) => {
            const copySlicedItems = structuredClone(array);
            const slicedItems = copySlicedItems.slice(index + 1);

            const findNextIdx = slicedItems.findIndex(
              (item) => item.level === "two",
            );

            if (tocItem.level === "two") {
              parentNumber += 1;

              const childs = slicedItems.slice(0, findNextIdx);
              return (
                <li key={tocItem.text} className="mt-3">
                  <a
                    href={`#${tocItem.slug}`}
                    data-level={tocItem.level}
                    className="flex gap-2 hover:underline"
                  >
                    <span>{parentNumber}</span>
                    <span>{tocItem.text}</span>
                  </a>
                  {childs.length > 0 &&
                    childs.map((childItem, childIdx) => {
                      return (
                        <ol
                          key={childItem.text}
                          className="list-none list-inside pl-6 mt-1"
                        >
                          <li>
                            <a
                              href={`#${childItem.slug}`}
                              data-level={childItem.level}
                              className="flex gap-2 hover:underline"
                            >
                              <span>{`${parentNumber}.${childIdx + 1}.`}</span>
                              <span>{childItem.text}</span>
                            </a>
                          </li>
                        </ol>
                      );
                    })}
                </li>
              );
            }

            return null;
          });
        })()}
      </ol>
    </nav>
  );
}
