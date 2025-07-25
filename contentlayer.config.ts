import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

const Post = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "image",
    },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    isFeatured: {
      type: "boolean",
      default: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => {
        // eslint-disable-next-line no-underscore-dangle
        return `/blog/${post._raw.flattenedPath}`;
      },
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const headings = Array.from(doc.body.raw.matchAll(regExp)).map(
          ({ groups }: any) => {
            const flag = groups?.flag;
            const content = groups?.content;

            const slugger = new GithubSlugger();
            return {
              level: (() => {
                if (flag?.length === 1) return "one";
                if (flag?.length === 2) return "two";

                return "three";
              })(),
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          },
        );
        return headings;
      },
    },
  },
}));

const codeOptions = {
  theme: "github-dark",
};

export default makeSource({
  /* options */
  contentDirPath: "articles",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ] as any,
  },
});
