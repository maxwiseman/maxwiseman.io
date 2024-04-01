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
      <h1 className="mt-2 scroll-m-20 text-5xl font-bold tracking-tight">
        {post.title}
      </h1>
      <h3 className="mb-10 mt-4 text-3xl font-semibold text-muted-foreground">
        {new Date(post.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h3>
      <Mdx code={post.body.code} />
    </div>
  );
}
