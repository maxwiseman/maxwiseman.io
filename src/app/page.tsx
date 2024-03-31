import { Card } from "@/components/ui/card";
import { allPosts, allProjects } from "contentlayer/generated";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">
        Max Wiseman
      </h1>
      <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
        About
      </h2>
      <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        Hey there! I&lsquo;m Max, a high school student with a passion for
        programming and learning. Currently diving into the world of web
        development with React, while also eager to explore Rust and Swift. When
        I&lsquo;m not coding, you&lsquo;ll probably find me buried in APUSH or
        AP Stats textbooks, or maybe debating the intricacies of government and
        politics in APGOV. AP English Language keeps me sharp with words, but
        it&lsquo;s the thrill of problem-solving in AP Computer Science
        Principles that really gets me going. Join me on my journey as I
        navigate through the exciting realms of technology, history, and beyond!
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
        Projects
      </h2>
      <div className="mt-6 flex flex-col gap-2">
        {allProjects.map((project) => (
          <Link key={project._id} href={project.url}>
            <Card className="p-4">
              <h6 className="font-bold">{project.title}</h6>
              <p className="text-muted-foreground">{project.repo}</p>
            </Card>
          </Link>
        ))}
      </div>
      <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
        Posts
      </h2>
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
