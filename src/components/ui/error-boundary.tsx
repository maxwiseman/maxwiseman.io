"use client";

import { ErrorBoundary as NextBoundary } from "next/dist/client/components/error-boundary";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";
import { IconAlertTriangleFilled } from "@tabler/icons-react";

export function ErrorBoundary({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <NextBoundary errorComponent={ErrorComponent}>{children}</NextBoundary>
    </div>
  );
}

export function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Card className="h-full w-full border-red-400 bg-red-50 text-red-500 dark:border-red-900/50 dark:bg-red-800/10 dark:text-red-600">
      <CardHeader className="pb-2">
        <h1 className="flex items-center gap-3 text-2xl font-bold">
          <IconAlertTriangleFilled />
          Something went wrong!
        </h1>
      </CardHeader>
      <CardContent>
        <p className="text-red-400 dark:text-red-600/80">
          {error.name}: {error.message}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-red-500 hover:bg-red-400 dark:bg-red-600 dark:text-red-950 dark:hover:bg-red-500"
          onClick={() => reset()}
        >
          Retry
        </Button>
      </CardFooter>
    </Card>
  );
}
