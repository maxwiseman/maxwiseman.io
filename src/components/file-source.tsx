import { promises as fs } from "node:fs";
import path from "node:path";
import { type HTMLAttributes } from "react";

export async function FileSource({
  path: filePath,
  ...props
}: {
  path: string;
} & HTMLAttributes<HTMLDivElement>): Promise<React.ReactElement> {
  const file = await fs.readFile(
    path.join(process.cwd(), "src", filePath),
    "utf-8",
  );

  return <div {...props}>{file}</div>;
}
