import { Mdx } from "@/components/mdx";
import { BreadcrumbGroup } from "@/components/ui/breadcrumb";
import { allPosts } from "contentlayer/generated";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const post = allPosts.find(
    (post) =>
      post._raw.flattenedPath.replace("posts/", "") === params.slug.join("/"),
  );
  if (!post) return { title: "404 - Max Wiseman" };
  return {
    title: `${post?.title} - Max Wiseman`,
  };
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
      <BreadcrumbGroup
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Posts",
            href: "/posts",
          },
          {
            title: post.title,
          },
        ]}
      />
      <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
        {post.title}
      </h1>
      <h3 className="mb-10 mt-2 scroll-m-20 text-lg tracking-tight text-muted-foreground">
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
