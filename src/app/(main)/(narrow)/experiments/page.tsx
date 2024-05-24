import { allExperiments } from "@/app/experiments/experiments";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function PostsPage() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Experiments</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
        Experiments
      </h1>
      <div className="mt-6 flex flex-col gap-2">
        {allExperiments
          .sort(
            (a, b) =>
              new Date(b.date).getUTCDate() - new Date(a.date).getUTCDate(),
          )
          .map((experiment) =>
            experiment.published !== false ? (
              <Link key={experiment.url} href={experiment.url}>
                <Card className="p-4">
                  <h6 className="font-bold">{experiment.title}</h6>
                  <p className="text-muted-foreground">
                    {new Date(experiment.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </Card>
              </Link>
            ) : null,
          )}
      </div>
    </>
  );
}
