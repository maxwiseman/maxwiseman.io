import { promises as fs } from "node:fs";
import { type HTMLAttributes } from "react";

export async function FileSource({
  path,
  ...props
}: {
  path: string;
} & HTMLAttributes<HTMLDivElement>): Promise<React.ReactElement> {
  const file = await fs.readFile(process.cwd() + path, "utf-8");

  return <div {...props}>{file}</div>;
}
