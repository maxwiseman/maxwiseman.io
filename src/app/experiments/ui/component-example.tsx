import { ClipboardButton } from "@/components/clipboard-button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { type TabsProps } from "@radix-ui/react-tabs";
import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";
import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import { codeToHtml } from "shiki";

export async function ComponentExample({
  children,
  componentPath,
  ...props
}: {
  children?: React.ReactNode;
  componentPath: string;
} & TabsProps) {
  const componentCode = await fs.readFile(
    path.join(process.cwd(), componentPath),
    "utf-8",
  );

  return (
    <Tabs defaultValue="preview" {...props}>
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card className="flex h-96 w-full grow items-center justify-center overflow-hidden p-8">
          {children}
        </Card>
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
  );
}

export async function MiniExample({
  children,
  componentPath,
  title,
  href,
  descrption,
  className,
  ...props
}: {
  href?: string;
  componentPath: string;
  title?: string;
  descrption?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const componentCode = await fs.readFile(
    path.join(process.cwd(), componentPath),
    "utf-8",
  );

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <Card className="relative flex h-48 grow items-center justify-center p-8">
        <ClipboardButton
          className="absolute right-0 top-0 m-2 h-6 w-6 [&>div>svg]:!h-3 [&>div>svg]:!w-3"
          text={componentCode}
          variant={"secondary"}
        />
        {children}
      </Card>
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
