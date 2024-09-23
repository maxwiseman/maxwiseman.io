"use client";

import { ErrorComponent } from "@/components/ui/error-boundary";

export default function Example() {
  return (
    <div className="scale-75">
      <ErrorComponent
        error={new Error("This is a problem")}
        reset={() => {
          console.log("reset");
        }}
      />
    </div>
  );
}
