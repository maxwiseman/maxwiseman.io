import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export function Steps({
  className,
  ...props
}: { children?: React.ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "[&>div]:step steps ml-4 border-l pl-[2.1rem] [counter-reset:step]",
        className,
      )}
      {...props}
    />
  );
}
export function Step({
  className,
  ...props
}: { children?: React.ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      // className={cn(
      //   "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      //   className,
      // )}
      className={cn("", className)}
      {...props}
    />
  );
}
