import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandCloudflare,
  IconCloudRain,
  IconBrandTailwind,
  IconBrandVercel,
  IconBackground,
  IconDeer,
} from "@tabler/icons-react";

export const tech: Record<
  string,
  {
    icon: React.ReactElement;
    title: string;
  }
> = {
  react: {
    title: "React",
    icon: <IconBrandReact />,
  },
  next: {
    title: "NextJS",
    icon: <IconBrandNextjs />,
  },
  cloudflare: {
    title: "Cloudflare",
    icon: <IconBrandCloudflare />,
  },
  drizzle: {
    title: "Drizzle ORM",
    icon: <IconCloudRain />,
  },
  tailwind: {
    title: "Tailwind",
    icon: <IconBrandTailwind />,
  },
  vercel: {
    title: "Vercel",
    icon: <IconBrandVercel />,
  },
  shadcn: {
    title: "Shadcn UI",
    icon: <IconBackground />,
  },
  turso: {
    title: "Turso",
    icon: <IconDeer />,
  },
};
