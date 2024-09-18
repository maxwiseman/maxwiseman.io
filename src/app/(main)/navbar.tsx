import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex w-full justify-center px-8">
      <div className="flex h-16 w-full max-w-prose items-center justify-between">
        <Link
          href="/"
          className="text-md flex font-bold text-foreground transition-opacity hover:opacity-80 md:text-lg"
        >
          M
          <span className="inline-block w-0 origin-left scale-x-0 transition-[width,transform] sm:w-full sm:scale-x-100">
            ax{" "}
          </span>
          <div className="transition-[min-width] sm:min-w-[0.5ch]" />W
          <span className="inline-block w-0 shrink-0 origin-left scale-x-0 transition-[width,transform] sm:w-full sm:scale-x-100">
            iseman
          </span>
        </Link>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/posts"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Posts
          </Link>
          <Link
            href="/experiments"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Experiments
          </Link>
          {/* <Link
            href="/gallery"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Gallery
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
