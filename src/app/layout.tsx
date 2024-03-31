import { Button } from '@/components/ui/button';
import "@/styles/globals.css";
import { IconBrandGithub } from '@tabler/icons-react';
import { GeistSans } from "geist/font/sans";
import Link from "next/link";

export const metadata = {
  title: "Max Wiseman",
  description: "Student, Developer, and Designer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark h-full" lang="en">
      <body className={`h-full font-sans ${GeistSans.variable}`}>
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
        <main className="flex min-h-[calc(100%-4rem)] w-full justify-center border-y bg-muted/40 p-8">
          <div className='w-full max-w-prose'>{children}</div>
        </main>
        <footer className='text-muted-foreground flex p-8 justify-center items-center'>
          <div className='max-w-prose w-full flex justify-between items-center'>
            <div>
              <Link className='underline decoration-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground' href={'https://github.com/maxwiseman'}>Max Wiseman</Link>
            </div>
            <div>
              <Link
          href={`https://github.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`}
          target="_blank"
          aria-label="View the source code on GitHub"
        >
          <Button
            variant={"outline"}
            size={"icon"}
            aria-label="View the source code on GitHub"
          >
            <IconBrandGithub className="h-4 w-4" />
          </Button>
        </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
