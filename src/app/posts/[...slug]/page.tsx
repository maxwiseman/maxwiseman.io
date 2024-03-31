// app/posts/[slug]/page.tsx
import { Mdx } from "@/components/mdx";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split("/"),
  }));
}

export default async function Page({
  params,
}: {
  params: { slug: string[] };
}): Promise<React.ReactElement> {
  // Find the post for the current page.
  const post = allPosts.find(
    (post) =>
      post._raw.flattenedPath.replace("posts/", "") === params.slug.join("/"),
  );

  // 404 if the post does not exist.
  if (!post) notFound();

  return (
    <div>
      <Mdx code={post.body.code} />
    </div>
  );
}
