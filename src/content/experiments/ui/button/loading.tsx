"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { IconClick } from "@tabler/icons-react";
import { useState } from "react";

export default function Example() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button icon={<IconClick />} loading={loading}>
        Button Text
      </Button>

      <div className="flex items-center space-x-2">
        <Checkbox
          checked={loading}
          onCheckedChange={(val) =>
            setLoading(val.valueOf() === "true" || val.valueOf() === true)
          }
          id="checkbox"
        />
        <label
          htmlFor="checkbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Loading
        </label>
      </div>
    </div>
  );
}
