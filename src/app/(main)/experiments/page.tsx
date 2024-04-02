import { allExperiments } from "@/app/experiments/experiments";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function PostsPage() {
  return (
    <>
      <h1 className="mt-2 scroll-m-20 text-5xl font-bold tracking-tight">
        Experiments
      </h1>
      <div className="mt-6 flex flex-col gap-2">
        {allExperiments.map((experiment) =>
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
