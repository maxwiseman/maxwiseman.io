import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex w-full justify-center px-8">
      <div className="flex h-16 w-full max-w-prose items-center justify-between">
        <Link
          href="/"
          className="text-md hidden font-bold text-foreground transition-opacity hover:opacity-80 sm:block md:text-lg"
        >
          Max Wiseman
        </Link>
        <Link
          href="/"
          className="text-md font-bold text-foreground transition-opacity hover:opacity-80 sm:hidden md:text-lg"
        >
          MW
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
        </div>
      </div>
    </nav>
  );
}
