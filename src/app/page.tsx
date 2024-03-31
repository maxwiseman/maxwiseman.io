import { LinkEmbed } from "@/components/link-embed";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <h2>Content Here</h2>
      <Button className="!w-min" variant={"outline"}>
        Hello there
      </Button>
      <LinkEmbed href="https://github.com" />
    </>
  );
}
