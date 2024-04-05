import {
  TableOfContentsItem,
  TableOfContentsLink,
  TableOfContentsList,
  TableOfContentsTitle,
} from "@/components/ui/toc";

export default function Example() {
  return (
    <TableOfContentsList>
      <TableOfContentsTitle>Contents</TableOfContentsTitle>
      <TableOfContentsItem>
        <TableOfContentsLink href="#first-section">
          First Section
        </TableOfContentsLink>
      </TableOfContentsItem>
      <TableOfContentsItem>
        <TableOfContentsLink href="#second-section">
          Second Section
        </TableOfContentsLink>
      </TableOfContentsItem>
    </TableOfContentsList>
  );
}
