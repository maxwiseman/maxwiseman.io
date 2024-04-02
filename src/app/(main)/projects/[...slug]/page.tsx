// app/posts/[slug]/page.tsx
import { Mdx } from "@/components/mdx";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { type BranchData, GithubWidget, type RepoData } from "./github-widget";
import { tech } from "./tech";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type Metadata } from "next";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project._raw.flattenedPath.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const project = allProjects.find(
    (project) =>
      project._raw.flattenedPath.replace("projects/", "") ===
      params.slug.join("/"),
  );
  return {
    title: `${project?.title} - Max Wiseman`,
  };
}

export default async function Page({
  params,
}: {
  params: { slug: string[] };
}): Promise<React.ReactElement> {
  // Find the post for the current page.
  const project = allProjects.find(
    (project) =>
      project._raw.flattenedPath.replace("projects/", "") ===
      params.slug.join("/"),
  );

  // 404 if the project does not exist.
  if (!project) notFound();

  const commitData = await fetch(
    `https://api.github.com/repos/${project.repo}/commits`,
    { next: { revalidate: 21600 } },
  ).then((response: Response): Promise<BranchData[]> => response.json());
  const repoData = await fetch(`https://api.github.com/repos/${project.repo}`, {
    next: { revalidate: 21600 },
  }).then((response: Response): Promise<RepoData> => response.json());

  return (
    <div>
      <h1 className="mb-4 mt-2 flex scroll-m-20 items-center gap-4 text-5xl font-bold tracking-tight">
        <span className="shrink-0">{project.title}</span>
        <div className="inline-flex flex-wrap gap-2">
          {project.tech.sort().map((item) => {
            const techItem = tech[item];

            if (!techItem) return null;
            return (
              <Tooltip key={item}>
                <TooltipTrigger>{techItem.icon}</TooltipTrigger>
                <TooltipContent>{techItem.title}</TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </h1>
      <GithubWidget
        className="mb-8"
        commitData={commitData}
        repoData={repoData}
      />

      <Mdx code={project.body.code} />
    </div>
  );
}
