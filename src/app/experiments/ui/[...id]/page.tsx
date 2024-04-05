import { notFound } from "next/navigation";
import { ComponentExample } from "../component-example";
import { BreadcrumbGroup } from "@/components/ui/breadcrumb";
import { type Metadata } from "next";
import { Mdx } from "@/components/mdx";
import { allUIComponents } from "contentlayer/generated";

export function generateMetadata({
  params,
}: {
  params: { id: string[] };
}): Metadata {
  const component = allUIComponents.find(
    (component) => component.componentId === params.id.join("/"),
  );

  return {
    title: `${component?.title} Component - Max Wiseman`,
    description: component?.description,
  };
}

export function generateStaticParams() {
  return allUIComponents.map((component) => ({
    id: component.componentId.split("/"),
  }));
}

export default async function Page({ params }: { params: { id: string[] } }) {
  const markdownContent = allUIComponents.find(
    (val) => val.componentId === params.id.join("/"),
  );

  if (!markdownContent) notFound();

  return (
    <div className="w-full max-w-prose">
      <div className="mb-6">
        <BreadcrumbGroup
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Experiments",
              href: "/experiments",
            },
            {
              title: "UI",
              href: "/experiments/ui",
            },
            {
              title: markdownContent.title,
            },
          ]}
        />
        <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
          {markdownContent.title}
        </h1>
        <h3 className="mt-2 scroll-m-20 text-lg tracking-tight text-muted-foreground">
          {markdownContent.description}
        </h3>
      </div>
      <ComponentExample
        className="mb-8"
        // componentPath={`src/content/experiments/ui/${markdownContent?.componentId}/example.tsx`}
        componentId={markdownContent.componentId}
      />
      {markdownContent ? <Mdx code={markdownContent.body.code} /> : null}
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      {markdownContent.examples.length > 1 && (
        <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
          Usage
        </h2>
      )}
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */}
      {markdownContent.examples.map((example: string) => (
        <ComponentExample
          key={example}
          className="mb-8"
          // componentPath={`src/content/experiments/ui/${markdownContent?.componentId}/example.tsx`}
          componentId={markdownContent.componentId}
          exampleId={example}
        />
      ))}
    </div>
  );
}
