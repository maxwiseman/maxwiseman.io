"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Button, type ButtonProps } from "./ui/button";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ClipboardButton({
  text,
  ...props
}: ButtonProps & { text: string }) {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
          icon={finished ? <IconCheck /> : <IconCopy />}
          onClick={async () => {
            setLoading(true);
            await navigator.clipboard.writeText(text);
            setLoading(false);
            setFinished(true);
            setTimeout(() => setFinished(false), 3000);
          }}
          loading={loading ? true : undefined}
          {...props}
        />
      </TooltipTrigger>
      <TooltipContent>
        {finished ? "Copied to clipboard!" : "Copy to clipboard"}
      </TooltipContent>
    </Tooltip>
  );
}
