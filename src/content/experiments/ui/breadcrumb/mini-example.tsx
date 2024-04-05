import { BreadcrumbGroup } from "@/components/ui/breadcrumb";

export default function Example() {
  return (
    <BreadcrumbGroup
      items={[{ title: "Home", href: "#" }, { title: "Posts" }]}
    />
  );
}
