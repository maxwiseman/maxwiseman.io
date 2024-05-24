import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import { promises as fs } from "fs";
import path from "path";
import { type RepoData } from "@/app/(main)/(narrow)/projects/[...slug]/github-widget";

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

export const UI = defineDocumentType(() => ({
  name: "UIComponent",
  filePathPattern: "experiments/ui/*/component.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    colSpan: { type: "number", required: false },
    rowSpan: { type: "number", required: false },
  },
  computedFields: {
    componentId: {
      type: "string",
      resolve: (component): string =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        component._raw.flattenedPath.match(
          /(?<=^experiments\/ui\/).*(?=\/component)/g,
        )?.[0]!,
    },
    examples: {
      type: "list",
      resolve: async (component): Promise<string[]> => {
        const data = await fs
          .readdir(
            path.join(
              process.cwd(),
              "src/content/experiments/ui",
              // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
              component._raw.flattenedPath.match(
                /(?<=^experiments\/ui\/).*(?=\/component)/g,
              )?.[0]!,
            ),
          )
          .then((files) =>
            files
              .filter((file) => file.endsWith(".tsx") && file !== "example.tsx")
              .map((file) => file.replace(".tsx", ""))
              .filter((file) => file !== "mini-example"),
          );
        return data;
      },
    },
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
    repoData: {
      type: "json",
      resolve: async (project) => {
        const projectData = await fetch(
          `https://api.github.com/repos/${project.repo}`,
        ).then(async (res) => {
          return (await res.json()) as RepoData;
        });
        return projectData;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Post, Project, Misc, UI],
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
          theme: {
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
