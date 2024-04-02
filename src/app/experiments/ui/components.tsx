import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const components: {
  id: string;
  title: string;
  description: string;
  componentPath: string;
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
    description: "Buttons are essential components for modern web apps.",
    componentPath: "src/components/ui/input.tsx",
    example: <Input placeholder="Type something..." />,
    colSpan: 2,
  },
];
