import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <nav className="flex w-full justify-center">
        <div className="flex h-16 w-full max-w-prose items-center justify-between">
          <Link
            href="/"
            className="text-md font-bold text-foreground transition-opacity hover:opacity-80 md:text-lg"
          >
            Max Wiseman
          </Link>
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Experiments
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex min-h-screen grow flex-col items-center justify-center border-t bg-muted/40 [&>*]:w-full [&>*]:max-w-prose">
        <h2>Content Here</h2>
        <Button className="!w-min" variant={"outline"}>
          Hello there
        </Button>
      </main>
    </>
  );
}
