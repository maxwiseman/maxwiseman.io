import { ClipboardButton } from "@/components/clipboard-button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn, siteURL } from "@/lib/utils";
import { type TabsProps } from "@radix-ui/react-tabs";
import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";
import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import { codeToHtml } from "shiki";
import { getComponentExample } from "./get-component";
import { ErrorBoundary } from "@/components/ui/error-boundary";

export async function ComponentExample({
  children,
  componentId,
  exampleId,
  ...props
}: {
  children?: React.ReactNode;
  componentId: string;
  exampleId?: string;
} & TabsProps) {
  const componentCode = await fs.readFile(
    path.join(
      process.cwd(),
      `src/content/experiments/ui/${componentId}/${exampleId ?? "example"}.tsx`,
    ),
    "utf-8",
  );

  const Component = await getComponentExample(componentId, exampleId);

  const exampleTitle = exampleId
    ?.split("-")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
  // if (exampleId) {
  //   exampleTitle = await import(
  //     `@/content/experiments/ui/${componentId}/${exampleId}.tsx`
  //   ).then((mod: { exampleTitle: string }) => mod.exampleTitle);
  // }

  return (
    <>
      {exampleTitle && (
        <h3
          id={exampleTitle.replaceAll(" ", "-").toLowerCase()}
          className="mb-4 mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
        >
          <a
            href={`#${exampleTitle.replaceAll(" ", "-").toLowerCase()}`}
            className="subheading-anchor"
          />
          {exampleTitle}
        </h3>
      )}
      <Tabs defaultValue="preview" {...props}>
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <ErrorBoundary className="h-96">
            <Card className="flex h-96 w-full grow items-center justify-center overflow-hidden p-8">
              {Component && <Component />}
              {children}
            </Card>
          </ErrorBoundary>
        </TabsContent>
        <TabsContent value="code">
          <Card className="relative h-96 w-full text-sm">
            <div
              className="max-h-full overflow-scroll p-8 [&>.shiki]:!bg-transparent"
              dangerouslySetInnerHTML={{
                __html: await codeToHtml(componentCode, {
                  lang: "tsx",
                  themes: {
                    light: "github-light",
                    dark: "github-dark",
                  },
                }),
              }}
            />
            <ClipboardButton
              text={componentCode}
              className="absolute right-0 top-0 m-3"
            />
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export async function MiniExample({
  children,
  componentId,
  title,
  href,
  descrption,
  className,
  ...props
}: {
  href?: string;
  componentId: string;
  title?: string;
  descrption?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  // const componentCode = await fs.readFile(
  //   path.join(
  //     process.cwd(),
  //     `src/content/experiments/ui/${componentId}/example.tsx`,
  //   ),
  //   "utf-8",
  // );
  const componentCommand = `bunx shadcn@latest add ${siteURL}/experiments/ui/${componentId}/json`;
  const miniExampleExists = await fs
    .readdir(
      path.join(process.cwd(), "src/content/experiments/ui", componentId),
    )
    .then((files) => files.includes("mini-example.tsx"));
  const Component = await getComponentExample(
    componentId,
    miniExampleExists ? "mini-example" : undefined,
  );

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <ErrorBoundary>
        <Card className="relative flex h-48 grow items-center justify-center overflow-hidden p-8">
          {Component && <Component />}
          {children}
          <ClipboardButton
            className="absolute right-0 top-0 m-2 h-6 w-6 [&>div>svg]:!h-3 [&>div>svg]:!w-3"
            text={componentCommand}
            variant={"secondary"}
          />
        </Card>
      </ErrorBoundary>
      {title ?? descrption ? (
        <Link className="h-[4.75rem]" href={href ?? ""}>
          {title && <h6 className="line-clamp-1 text-lg font-bold">{title}</h6>}
          {descrption && (
            <p className="line-clamp-2 text-muted-foreground">{descrption}</p>
          )}
        </Link>
      ) : null}
    </div>
  );
}
