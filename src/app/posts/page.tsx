import { Card } from "@/components/ui/card";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function PostsPage() {
  return (
    <>
      <h1 className="mt-2 scroll-m-20 text-5xl font-bold tracking-tight">
        Posts
      </h1>
      <div className="mt-6 flex flex-col gap-2">
        {allPosts.map((post) => (
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
        ))}
      </div>
    </>
  );
}
