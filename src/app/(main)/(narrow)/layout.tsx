import "@/styles/globals.css";

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
    <main className="flex min-h-[calc(100%-4rem)] w-full justify-center border-y bg-muted/40 p-8">
      <div className="w-full max-w-prose">{children}</div>
    </main>
  );
}
