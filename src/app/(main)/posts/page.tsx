import { BreadcrumbGroup } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { allPosts } from "contentlayer/generated";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts - Max Wiseman",
  description: "All posts",
};

export default function PostsPage() {
  return (
    <>
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
        ]}
      />
      <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
        Posts
      </h1>
      <div className="mt-6 flex flex-col gap-2">
        {allPosts.map((post) =>
          post.published ? (
            <Link key={post._id} href={post.url}>
              <Card className="p-4">
                <h6 className="font-bold">{post.title}</h6>
                <p className="text-muted-foreground">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </Card>
            </Link>
          ) : null,
        )}
      </div>
    </>
  );
}
