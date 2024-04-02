"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Button, type ButtonProps } from "./ui/button";
import { useState } from "react";

export function ClipboardButton({
  text,
  ...props
}: ButtonProps & { text: string }) {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  return (
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
  );
}
