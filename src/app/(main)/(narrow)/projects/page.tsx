import { BreadcrumbGroup } from "@/components/ui/breadcrumb";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import { allProjects } from "contentlayer/generated";
import { type Metadata } from "next";
import Link from "next/link";
import { type RepoData } from "./[...slug]/github-widget";

export const metadata: Metadata = {
  title: "Projects - Max Wiseman",
  description: "All projects",
};

export default function PostsPage() {
  console.log(
    allProjects.map((project) => (project.repoData as RepoData).homepage),
  );
  return (
    <>
      <BreadcrumbGroup
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Projects",
            href: "/projects",
          },
        ]}
      />
      <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
        Projects
      </h1>
      <div className="mt-6 flex flex-col gap-2">
        {allProjects.map((project) =>
          project.published ? (
            <div key={project._id} className="relative">
              <Link href={project.url}>
                <Card className="flex flex-row items-center justify-between p-4">
                  <div>
                    <h6 className="line-clamp-1 font-bold">{project.title}</h6>
                    <p className="line-clamp-1 text-muted-foreground">
                      {project.repo}
                    </p>
                  </div>
                  <div className="min-w-20 shrink-0" />
                </Card>
              </Link>
              <div className="absolute right-4 top-1/2 flex -translate-y-1/2 gap-2">
                <LinkButton
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  size={"icon"}
                  variant={"outline"}
                  icon={<IconBrandGithub />}
                />
                {(project.repoData as RepoData).homepage !== undefined &&
                (project.repoData as RepoData).homepage !== "" ? (
                  <LinkButton
                    href={(project.repoData as RepoData).homepage ?? ""}
                    target="_blank"
                    size={"icon"}
                    variant={"outline"}
                    icon={<IconLink />}
                  />
                ) : null}
              </div>
            </div>
          ) : null,
        )}
      </div>
    </>
  );
}
