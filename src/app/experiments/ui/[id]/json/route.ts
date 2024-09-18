import { allUIComponents } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { type NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(req: NextRequest, data: { params: { id: string } }) {
  const componentData = allUIComponents.filter(
    (component) => component.componentId === data.params.id,
  )[0];

  if (!componentData) notFound();

  return Response.json({
    name: componentData.componentId,
    type: "registry:ui",
    dependencies: componentData.dependencies,
    registryDependencies: componentData.registryDependencies,
    files: [
      {
        path: `ui/${data.params.id}.tsx`,
        content: componentData.componentCode,
        type: "registry:ui",
        target: "",
      },
    ],
  });
}
