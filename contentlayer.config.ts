import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

export const Misc = defineDocumentType(() => ({
  name: "Misc",
  filePathPattern: "misc/**/*.mdx",
  contentType: "mdx",
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    published: { type: "boolean", required: false, default: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    published: { type: "boolean", required: false, default: true },
    title: { type: "string", required: true },
    repo: { type: "string", required: true },
    tech: {
      type: "list",
      required: true,
      of: {
        type: "enum",
        options: [
          "react",
          "next",
          "cloudflare",
          "drizzle",
          "tailwind",
          "vercel",
          "shadcn",
          "turso",
        ],
      },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => `/${project._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Post, Project, Misc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
      [
        rehypePrettyCode as (options: Options) => undefined,
        {
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          keepBackground: false,
          defaultLang: "plaintext",
        },
      ],
    ],
  },
});
