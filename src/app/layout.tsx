import "@/styles/globals.css";
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
        <main className="flex h-full w-full justify-center border-t bg-muted/40 p-8">
          <div className='w-full max-w-prose'>{children}</div>
        </main>
      </body>
    </html>
  );
}
