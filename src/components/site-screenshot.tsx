import { useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { Skeleton } from "./ui/skeleton";

/* eslint-disable @next/next/no-img-element -- this is just vercel marketing */
export function SiteScreenshot({
  src,
  title,
  imgSrc,
}: {
  src: string;
  title: string;
  imgSrc: string;
}) {
  const [isPreviewing, setIsPreviewing] = useState(false);

  return (
    <div
      className="mt-6 w-full overflow-hidden 
rounded-md border"
    >
      <AspectRatio ratio={16 / 9}>
        <Skeleton className="absolute inset-0 -z-50" />
        <Button
          className="absolute right-0 m-4"
          icon={isPreviewing ? <IconPlayerPause /> : <IconPlayerPlay />}
          variant={"outline"}
          size="icon"
          onClick={() => {
            setIsPreviewing(!isPreviewing);
          }}
        />
        {isPreviewing ? (
          <iframe className="h-full max-h-full w-full" src={src} />
        ) : (
          <img
            className="max-h-full w-full object-cover object-center"
            alt={title}
            src={imgSrc}
          />
        )}
      </AspectRatio>
    </div>
  );
}
