import "@/styles/globals.css";
import { Navbar } from "../(main)/navbar";

export const metadata = {
  title: "Experiments - Max Wiseman",
  description: "Student, Developer, and Designer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-full w-full justify-center border-y bg-muted/40 p-8">
        {children}
      </main>
    </>
  );
}
