import { notFound } from "next/navigation";
import { components } from "../components";
import { Example } from "../example";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string[] } }) {
  const component = components.find(
    (component) => component.id === params.id.join("/"),
  );

  if (!component) notFound();

  return (
    <div className="w-full max-w-prose">
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/experiments">Experiments</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/experiments/ui">UI</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{component.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
          {component.title}
        </h1>
        <h3 className="mt-2 scroll-m-20 text-lg tracking-tight text-muted-foreground">
          {component.description}
        </h3>
      </div>
      <Example componentPath={component?.componentPath}>
        {component.example}
      </Example>
    </div>
  );
}
