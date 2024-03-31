import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";
import { IconBrandGithub } from "@tabler/icons-react";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { Navbar } from "./navbar";

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
        <TooltipProvider>
          <Navbar />
          <main className="flex min-h-[calc(100%-4rem)] w-full justify-center border-y bg-muted/40 p-8">
            <div className="w-full max-w-prose">{children}</div>
          </main>
          <footer className="flex items-center justify-center p-8 text-muted-foreground">
            <div className="flex w-full max-w-prose items-center justify-between">
              <div>
                <Link
                  className="underline decoration-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                  href={"https://github.com/maxwiseman"}
                >
                  Max Wiseman
                </Link>
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
        </TooltipProvider>
      </body>
    </html>
  );
}
