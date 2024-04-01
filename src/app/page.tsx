import { Mdx } from "@/components/mdx";
import { allMiscs } from "contentlayer/generated";

export default function HomePage() {
  const pageData = allMiscs.find((misc) => misc._id === "misc/home.mdx");

  if (!pageData) return <h1>Something has gone wrong!</h1>;

  return <Mdx code={pageData?.body.code} />;
}
