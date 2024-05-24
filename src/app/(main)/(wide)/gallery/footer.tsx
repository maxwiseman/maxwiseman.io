"use client";

import { Button, LinkButton } from "@/components/ui/button";
import { IconArrowUp } from "@tabler/icons-react";

export function Footer() {
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-2 py-8">
      <h2 className="text-3xl font-bold">That&lsquo;s all, folks!</h2>
      <p className="mb-6 text-muted-foreground">
        Come back later, and you might find something new
      </p>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          icon={<IconArrowUp />}
        >
          Back to top
        </Button>
        <LinkButton href="/" variant={"outline"}>
          Go home
        </LinkButton>
      </div>
    </div>
  );
}
