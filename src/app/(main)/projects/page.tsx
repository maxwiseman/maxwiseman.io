import { Card } from "@/components/ui/card";
import { allProjects } from "contentlayer/generated";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - Max Wiseman",
  description: "All projects",
};

export default function PostsPage() {
  return (
    <>
      <h1 className="mt-2 scroll-m-20 text-5xl font-bold tracking-tight">
        Projects
      </h1>
      <div className="mt-6 flex flex-col gap-2">
        {allProjects.map((project) =>
          project.published ? (
            <Link key={project._id} href={project.url}>
              <Card className="p-4">
                <h6 className="font-bold">{project.title}</h6>
                <p className="text-muted-foreground">{project.repo}</p>
              </Card>
            </Link>
          ) : null,
        )}
      </div>
    </>
  );
}
