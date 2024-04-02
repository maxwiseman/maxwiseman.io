import { allPosts } from "contentlayer/generated";
import { LinkButton } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

export function PostList() {
  return (
    <div className="relative">
      <div
        className="mt-6 flex flex-col gap-2"
        style={{
          maskImage:
            allPosts.length > 3
              ? "linear-gradient(180deg,#000 calc(100% - 150px),transparent calc(100% - 10px))"
              : "",
        }}
      >
        {allPosts.map((post, i) => {
          if (i < 3 && post.published)
            return (
              <Link key={post._id} href={post.url}>
                <Card className="p-4">
                  <h6 className="line-clamp-1 font-bold">{post.title}</h6>
                  <p className="line-clamp-1 text-muted-foreground">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </Card>
              </Link>
            );
          if (i === 3 && post.published)
            return (
              <Card key={post._id} className="cursor-default p-4">
                <h6 className="line-clamp-1 font-bold">{post.title}</h6>
                <p className="line-clamp-1 text-muted-foreground">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </Card>
            );
        })}
      </div>
      {allPosts.length > 3 && (
        <div className="absolute bottom-0 mb-2 flex w-full justify-center">
          <LinkButton href="/posts" variant="secondary" size="sm">
            See all posts
          </LinkButton>
        </div>
      )}
    </div>
  );
}
