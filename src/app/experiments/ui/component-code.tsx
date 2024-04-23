import { Card } from "@/components/ui/card";
import { getComponentCode } from "./get-component";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { ClipboardButton } from "@/components/clipboard-button";

export function ComponentCode({ componentId }: { componentId: string }) {
  const [componentCode, setComponentCode] = useState("");
  const [codeHighlighting, setCodeHighlighting] = useState("");

  useEffect(() => {
    async function updateCode() {
      setComponentCode(await getComponentCode(componentId));
    }
    updateCode().catch((err) => console.error(err));
  }, [componentId]);

  useEffect(() => {
    codeToHtml(componentCode, {
      lang: "tsx",
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    })
      .then((html) => setCodeHighlighting(html))
      .catch((err) => console.error(err));
  }, [componentCode]);

  return (
    <Card className="relative mb-4 mt-8">
      <ClipboardButton
        text={componentCode}
        className="absolute right-0 top-0 m-3"
      />
      <div
        className="max-h-96 overflow-scroll p-6 px-4 text-sm [&>.shiki]:!bg-transparent"
        dangerouslySetInnerHTML={{
          __html: codeHighlighting,
        }}
      />
    </Card>
  );
}
