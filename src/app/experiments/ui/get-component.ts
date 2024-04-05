import { lazy, type ComponentType } from "react";

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
