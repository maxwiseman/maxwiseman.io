import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import { Card } from "./ui/card";

export function ProjectList() {
  return (
    <div className="mt-6 flex flex-col gap-2">
      {allProjects.map((project) => (
        <Link key={project._id} href={project.url}>
          <Card className="p-4">
            <h6 className="font-bold">{project.title}</h6>
            <p className="text-muted-foreground">{project.repo}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
