/* eslint-disable @next/next/no-img-element -- no vercel marketing pls */
"use client";

import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  useEffect,
  useState,
  type HTMLProps,
} from "react";
import { getOgData } from "./server-actions/get-og-data";
import { Card, CardContent } from "./ui/card";
import { type ErrorResult, type SuccessResult } from "open-graph-scraper-lite";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function LinkEmbed({
  href,
  className,
  ...props
}: { href: string } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  const [data, setData] = useState<ErrorResult | SuccessResult>();
  useEffect(() => {
    async function getData() {
      setData(await getOgData({ url: href }));
    }
    getData().catch(console.error);
  }, [href]);

  if (data?.error === true) return null;

  let imageUrl: string;

  if (typeof data?.result.ogImage !== "string") {
    imageUrl = data?.result.ogImage?.[0]?.url ?? "";
  } else {
    imageUrl = data?.result.ogImage;
  }

  return (
    <div className={cn("my-6", className)} {...props}>
      <Link target="_blank" href={href}>
        <Card className="overflow-hidden">
          <img
            className="h-44 min-w-full bg-primary/10 object-cover"
            src={imageUrl}
            alt={"Embedded Link Preview"}
          />
          <CardContent className="flex flex-col gap-0 p-4">
            {!data ? (
              <>
                <Skeleton className="my-1 h-5 w-1/2" />
                <Skeleton className="my-1 h-4 w-full" />
                <Skeleton className="my-1 h-4 w-full" />
              </>
            ) : (
              <>
                <h6 className="line-clamp-1 text-lg font-bold">
                  {data.result.ogTitle}
                </h6>
                <p className="line-clamp-2 text-muted-foreground">
                  {data?.result.ogDescription}
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export function LinkPreview({
  href,
  ...props
}: { href: string } & HTMLProps<HTMLAnchorElement>) {
  const [data, setData] = useState<ErrorResult | SuccessResult>();
  useEffect(() => {
    async function getData() {
      setData(await getOgData({ url: href }));
    }
    getData().catch(console.error);
  }, [href]);

  if (data?.error === true) return null;

  let imageUrl: string | undefined;

  if (typeof data?.result.ogImage !== "string") {
    imageUrl = data?.result.ogImage?.[0]?.url;
  } else {
    imageUrl = data?.result.ogImage;
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link target="_blank" href={href} {...props} />
      </HoverCardTrigger>
      <HoverCardContent sideOffset={10} className="p-0 overflow-clip">
        <Link target="_blank" href={href}>
          {imageUrl && <img
            className="bg-primary/10 object-cover object-center w-full max-h-44"
            src={imageUrl}
            alt={"Embedded Link Preview"}
          />}
          <div className="p-4 flex flex-col gap-1">{!data ? (
            <>
              <Skeleton className="my-1 h-5 w-1/2" />
              <Skeleton className="my-1 h-4 w-full" />
              <Skeleton className="my-1 h-4 w-full" />
            </>
          ) : (
            <>
              <h6 className="line-clamp-2 font-bold">
                {data.result.ogTitle}
              </h6>
              {data.result.ogDescription && <p className="line-clamp-4 text-sm text-muted-foreground">
                {data.result.ogDescription}
              </p>}
            </>
          )}
          </div>
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
}
