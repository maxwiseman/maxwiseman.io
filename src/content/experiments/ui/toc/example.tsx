import {
  TableOfContentsItem,
  TableOfContentsLink,
  TableOfContentsList,
  TableOfContentsTitle,
} from "@/components/ui/toc";

export default function Example() {
  return (
    <TableOfContentsList>
      <TableOfContentsTitle>Table of Contents</TableOfContentsTitle>
      <TableOfContentsItem>
        <TableOfContentsLink href="#first-section">
          First Section
        </TableOfContentsLink>
      </TableOfContentsItem>
      <TableOfContentsItem indent>
        <TableOfContentsLink href="#second-section">
          Second Section
        </TableOfContentsLink>
      </TableOfContentsItem>
      <TableOfContentsItem>
        <TableOfContentsLink href="#third-section">
          Third Section
        </TableOfContentsLink>
      </TableOfContentsItem>
    </TableOfContentsList>
  );
}
