"use client";

import { ErrorBoundary, ErrorComponent } from "@/components/ui/error-boundary";

export function Example() {
  return (
    <ErrorBoundary>
      <ErroringComponent />
    </ErrorBoundary>
  );
}

function ErroringComponent() {
  throw Error("Uh-oh!");
  return <>This will never render</>;
}

// The example above is what *you* should do.
// This is what's displayed on the site so that we aren't actually throwing an error every time the example loads.
export default function ForLooks() {
  return (
    <ErrorComponent
      error={new Error("Something's wrong")}
      reset={() => {
        console.log("Reset");
      }}
    />
  );
}
