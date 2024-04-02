import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import "@/styles/globals.css";
import { IconBrandGithub } from "@tabler/icons-react";
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
    <html className="h-full" lang="en">
      <body className={`h-full font-sans ${GeistSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <footer className="flex items-center justify-center p-8 text-muted-foreground">
              <div className="flex w-full max-w-prose items-center justify-between">
                <div>
                  <Link
                    className="underline underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                    href={"https://github.com/maxwiseman"}
                  >
                    Max Wiseman
                  </Link>
                </div>
                <div className="flex gap-2">
                  <ThemeToggle />
                  <Tooltip>
                    <Link
                      href={`https://github.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`}
                      target="_blank"
                      aria-label="View the source code on GitHub"
                    >
                      <TooltipTrigger asChild>
                        <Button
                          variant={"outline"}
                          size={"icon"}
                          aria-label="View the source code on GitHub"
                        >
                          <IconBrandGithub className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                    </Link>
                    <TooltipContent>View source</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </footer>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
