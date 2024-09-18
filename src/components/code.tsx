import { ClipboardButton } from "@/components/clipboard-button";
import { Card } from "@/components/ui/card";
import { codeToHtml } from "shiki";

export async function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  return (
    <Card className="relative w-full text-sm">
      <div className="overflow-x-scroll">
        <div
          className="max-h-full min-w-max p-5 pr-14 [&>.shiki]:!bg-transparent"
          dangerouslySetInnerHTML={{
            __html: await codeToHtml(code, {
              lang: lang,
              themes: {
                light: "github-light",
                dark: "github-dark",
              },
            }),
          }}
        />
      </div>
      <ClipboardButton text={code} className="absolute right-0 top-0 m-3" />
    </Card>
  );
}
