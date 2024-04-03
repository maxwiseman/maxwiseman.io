import { notFound } from "next/navigation";
import { components } from "../../../../content/experiments/ui/components";
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
  const component = components.find(
    (component) => component.id === params.id.join("/"),
  );

  return {
    title: `${component?.title} Component - Max Wiseman`,
    description: component?.description,
  };
}

export function generateStaticParams() {
  return components.map((component) => ({
    id: component.id.split("/"),
  }));
}

export default async function Page({ params }: { params: { id: string[] } }) {
  const component = components.find(
    (component) => component.id === params.id.join("/"),
  );

  const markdownContent = allUIComponents.find(
    (val) => val.url === `/experiments/ui/${params.id.join("/")}`,
  );

  if (!component) notFound();

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
              title: component.title,
            },
          ]}
        />
        <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
          {component.title}
        </h1>
        <h3 className="mt-2 scroll-m-20 text-lg tracking-tight text-muted-foreground">
          {component.description}
        </h3>
      </div>
      <ComponentExample
        className="mb-8"
        componentPath={component?.componentPath}
      >
        {component.example}
      </ComponentExample>
      {markdownContent ? <Mdx code={markdownContent.body.code} /> : null}
    </div>
  );
}
