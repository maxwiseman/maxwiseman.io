import { allPosts, allProjects } from "contentlayer/generated";
import { type MetadataRoute } from "next";
import { allExperiments } from "./experiments/experiments";

export default function sitemap(): MetadataRoute.Sitemap {
  const recentPost = allPosts.sort(
    (a, b) => new Date(a.date).getUTCDate() - new Date(b.date).getUTCDate(),
  )[0];

  return [
    {
      url: "https://maxwiseman.io/",
      lastModified: "April 1 2024",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://maxwiseman.io/posts",
      lastModified: recentPost?.date,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://maxwiseman.io/projects",
      lastModified: new Date("April 1 2024"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://maxwiseman.io/experiments",
      lastModified: new Date("April 1 2024"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...allPosts.map(
      (post): sitemapProperty => ({
        url: `https://maxwiseman.io${post.url}`,
        lastModified: post.date,
        changeFrequency: "weekly",
        priority: 0.5,
      }),
    ),
    ...allProjects.map(
      (project): sitemapProperty => ({
        url: `https://maxwiseman.io${project.url}`,
        changeFrequency: "monthly",
        priority: 0.5,
      }),
    ),
    ...allExperiments.map(
      (experiment): sitemapProperty => ({
        url: `https://maxwiseman.io${experiment.url}`,
        lastModified: experiment.date,
        changeFrequency: "monthly",
        priority: 0.3,
      }),
    ),
  ];
}

interface sitemapProperty {
  url: string;
  lastModified?: string | Date | undefined;
  changeFrequency?:
    | "weekly"
    | "always"
    | "hourly"
    | "daily"
    | "monthly"
    | "yearly"
    | "never"
    | undefined;
  priority?: number | undefined;
}
