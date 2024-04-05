import { type TabsProps } from "@radix-ui/react-tabs";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import React from "react";
import { FileSource } from "./file-source";

export async function Example({
  children,
  className,
  file,
  ...props
}: {
  children?: React.ReactNode;
  file?: string;
} & TabsProps) {
  const [Example, Code, ...Children] = React.Children.toArray(
    children,
  ) as React.ReactElement[];

  if (!file) return <></>;

  return (
    <Tabs defaultValue="preview" {...props}>
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card className="flex h-96 w-full grow items-center justify-center overflow-hidden p-8">
          {Example}
          {Children}
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <Card
          className={cn(
            "mb-6 mt-2 flex h-96 w-full grow items-center justify-center overflow-hidden p-8",
            className,
          )}
          {...props}
        >
          {file && <FileSource path={file} />}
          {Code}
        </Card>
      </TabsContent>
    </Tabs>
  );
}
