import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode, { type Options } from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
      properties: {
        className: ['subheading-anchor'],
        ariaLabel: 'Link to section'
      }
    }], [rehypePrettyCode as (options: Options) => undefined, { theme: 'github-dark', keepBackground: false, defaultLang: "plaintext" }]],
  },
});
