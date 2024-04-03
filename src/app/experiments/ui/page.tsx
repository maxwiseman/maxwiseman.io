import { MiniExample } from "./component-example";
import { components } from "../../../content/experiments/ui/components";
import { BreadcrumbGroup } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Components - Max Wiseman",
  description: "UI Components",
};

export default function Page(): React.ReactElement {
  return (
    <div className="w-full max-w-prose">
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
        ]}
      />
      <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
        UI Components
      </h1>
      <h3 className="mt-2 scroll-m-20 text-lg tracking-tight text-muted-foreground">
        Most components are forked from{" "}
        <Link
          target="_blank"
          className="underline underline-offset-2 transition-colors duration-300"
          href="https://ui.shadcn.com"
        >
          shadcn/ui
        </Link>{" "}
        with minor alterations
      </h3>
      <div className="grid w-full grid-flow-row-dense grid-cols-2 gap-8 py-8 md:grid-cols-3">
        {components.map((component) => (
          <MiniExample
            key={component.title}
            title={component.title}
            descrption={component.description}
            componentPath={component.componentPath}
            href={`/experiments/ui/${component.id}`}
            style={{
              gridColumn: `span ${component.colSpan ?? 1}`,
              gridRow: `span ${component.rowSpan ?? 1}`,
            }}
          >
            {component.miniExample ?? component.example}
          </MiniExample>
        ))}
      </div>
    </div>
  );
}
