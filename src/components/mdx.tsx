/* eslint-disable react-hooks/rules-of-hooks -- These are react functions, they just aren't named */
"use client";

/* eslint-disable @typescript-eslint/no-unsafe-argument */
import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";
import Children from "react-children-utilities";
import { LinkEmbed, LinkPreview } from "./link-embed";
import { ProjectList } from "./project-list";
import { PostList } from "./post-list";
import { ClipboardButton } from "./clipboard-button";
import { Step, Steps } from "./ui/steps";
import { ComponentCode } from "@/app/experiments/ui/component-code";
import { SiteScreenshot } from "./site-screenshot";
import Link from "next/link";

const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLAnchorElement> & { href?: string }) => (
    <>
      {props.href?.startsWith("http") ? (
        <LinkPreview
          className={cn(
            "font-medium underline decoration-muted-foreground/50 underline-offset-4 transition-colors duration-300 hover:decoration-foreground",
            className,
          )}
          href={"#"}
          target={"_blank"}
          {...props}
        />
      ) : (
        <Link
          className={cn(
            "font-medium underline decoration-muted-foreground/50 underline-offset-4 transition-colors duration-300 hover:decoration-foreground",
            className,
          )}
          href={"#"}
          {...props}
        />
      )}
    </>
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "leading-7 text-muted-foreground [&:not(:first-child)]:mt-6",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn(
        "mt-2 text-muted-foreground marker:text-muted-foreground/40",
        className,
      )}
      {...props}
    />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement>) => {
    const text = Children.onlyText(children);

    return (
      <pre
        className={cn(
          "relative mb-4 mt-6 overflow-x-auto rounded-xl border bg-card has-[code]:bg-card [&>code]:border-none",
          className,
        )}
        {...props}
      >
        {children}
        <ClipboardButton className="absolute right-0 top-0 m-3" text={text} />
      </pre>
    );
  },
  figure: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <figure
      className={cn(
        "mb-4 mt-6 rounded-xl border bg-card shadow has-[code]:bg-card [&>figcaption]:border-b [&>figcaption]:py-4 [&>figcaption]:pl-4 [&>figcaption]:font-mono [&>figcaption]:text-sm [&>figcaption]:text-muted-foreground [&>pre]:!m-0 [&>pre]:border-none",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <code
      className={cn(
        "relative overflow-x-auto rounded-xl border py-4 font-mono text-sm leading-[2] [&>[data-highlighted-line]]:bg-muted/50 [&>[data-line]]:px-4",
        className,
      )}
      {...props}
    />
  ),
  mark: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <mark
      className={cn(
        {
          // hover:top-[2px] hover:border-b-0
          "relative top-0 rounded-md border-b-2 border-b-muted-foreground/30 bg-muted p-1 transition-[border,top] duration-75":
            "data-highlighted-chars" in props,
        },
        className,
      )}
      {...props}
    />
  ),
  Image,
  LinkEmbed,
  ProjectList,
  PostList,
  Steps,
  Step,
  ComponentCode,
  SiteScreenshot,
};

export function Mdx(props: {
  code: string;
  globals?: Record<string, unknown> | undefined;
}) {
  // Some really weird workaround https://arc.net/l/quote/gtkqdsfg
  const codePrefix = `
if (typeof process === 'undefined') {
  globalThis.process = { env: {} }
}
`;
  const Component = useMDXComponent(codePrefix + props.code, props.globals);

  return (
    <div className="mdx">
      <Component components={mdxComponents} />
    </div>
  );
}
