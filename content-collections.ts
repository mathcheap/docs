import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { z } from "zod";

const pages = defineCollection({
  name: "pages",
  directory: "src/content",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
  transform: async (document, context) => {
    // Compile MDX with rehype plugins
    const body = await compileMDX(context, document, {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeShiki,
          {
            transformers: [
              transformerNotationDiff(),
              transformerNotationFocus(),
              transformerNotationHighlight(),
              transformerNotationWordHighlight(),
              transformerMetaHighlight(),
              transformerMetaWordHighlight(),
            ],
            theme: "github-dark-default",
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    });

    const id = document._meta.fileName.replace(".mdx", "");

    const slug = document._meta.path;

    const category = document._meta.directory;

    return {
      id,
      ...document,
      slug,
      category,
      body,
    };
  },
});

export default defineConfig({
  collections: [pages],
});
