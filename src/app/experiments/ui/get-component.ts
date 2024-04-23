"use server";

import { lazy, type ComponentType } from "react";
import { promises as fs } from "fs";
import path from "path";

export async function getComponentExample(
  filePath: string,
  exampleId?: string,
) {
  const Component = lazy(
    () =>
      import(
        `@/content/experiments/ui/${filePath}/${exampleId ?? "example"}.tsx`
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) as Promise<{ default: ComponentType<any> }>,
  );
  return Component;
}

export async function getComponentCode(componentId: string) {
  const code = await fs.readFile(
    path.join(process.cwd(), "src/components/ui", `${componentId}.tsx`),
  );
  return code.toString();
}
