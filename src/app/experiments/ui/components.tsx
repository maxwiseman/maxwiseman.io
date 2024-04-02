import { BreadcrumbGroup } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const components: {
  id: string;
  title: string;
  description: string;
  componentPath: string;
  miniExample?: React.ReactElement;
  example: React.ReactElement;
  colSpan?: number;
  rowSpan?: number;
}[] = [
  {
    id: "button",
    title: "Button",
    description: "Buttons are essential components for modern web apps.",
    componentPath: "src/components/ui/button.tsx",
    example: <Button>Button</Button>,
  },
  {
    id: "input",
    title: "Input",
    description: "This component allows users to input text.",
    componentPath: "src/components/ui/input.tsx",
    example: <Input placeholder="Type something..." />,
    colSpan: 2,
  },
  {
    id: "breadcrumb",
    title: "Breadcrumb",
    description: "Breadcrumbs help users navigate your site.",
    componentPath: "src/components/ui/breadcrumb.tsx",
    miniExample: (
      <BreadcrumbGroup
        items={[{ title: "Home", href: "#" }, { title: "Posts" }]}
      />
    ),
    example: (
      <BreadcrumbGroup
        items={[
          { title: "Home", href: "#" },
          { title: "Posts", href: "#" },
          { title: "Page" },
        ]}
      />
    ),
  },
];
