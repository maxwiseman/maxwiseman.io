import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { BreadcrumbGroup } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import {
  TableOfContentsItem,
  TableOfContentsLink,
  TableOfContentsList,
  TableOfContentsTitle,
} from "@/components/ui/toc";
import { IconUser } from "@tabler/icons-react";

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
    description: "Buttons are essential components for modern web apps",
    componentPath: "src/components/ui/button.tsx",
    example: <Button>Button</Button>,
  },
  {
    id: "input",
    title: "Input",
    description: "This component allows users to input text",
    componentPath: "src/components/ui/input.tsx",
    example: <Input placeholder="Type something..." />,
    colSpan: 2,
  },
  {
    id: "breadcrumb",
    title: "Breadcrumb",
    description: "Breadcrumbs help users navigate your site",
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
  {
    id: "spinner",
    title: "Spinner",
    description: "A spinner can help users tell when content is loading",
    componentPath: "src/components/ui/spinner.tsx",
    example: <Spinner />,
  },
  {
    id: "dialog",
    title: "Dialog",
    description: "Dialogs can show important information to users",
    componentPath: "src/components/ui/dialog.tsx",
    example: (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          Content goes here
          <DialogFooter>
            <Button variant="outline">Close</Button>
            <Button>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  },
  {
    id: "command",
    title: "Command",
    description:
      "A command bar allows users to search and execute actions quickly",
    componentPath: "src/components/ui/command.tsx",
    example: (
      <Command>
        <CommandInput placeholder="Type something..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandItem>Item 2</CommandItem>
          <CommandItem>Item 3</CommandItem>
        </CommandList>
      </Command>
    ),
    colSpan: 2,
  },
  {
    id: "scroll-area",
    title: "Scroll Area",
    description: "Scroll areas are useful when showing tall content",
    componentPath: "src/components/ui/scroll-area.tsx",
    example: (
      <ScrollArea className="h-full" scrollShadow="y">
        <p>
          Tempor ex eiusmod sit. Pariatur Lorem nostrud ut dolore nisi mollit.
          Sit Lorem in ad incididunt Lorem elit in commodo non ullamco ut.
          Laboris irure in excepteur cupidatat ad id pariatur officia qui
          nostrud commodo dolor adipisicing. Eu ad aute laboris esse non ea
          reprehenderit tempor sint ea. Quis ad enim duis incididunt veniam
          ullamco eiusmod irure fugiat. Duis est esse exercitation adipisicing
          deserunt labore nostrud amet ullamco ex veniam laborum velit nulla
          non. Consectetur laboris tempor aliquip dolor consectetur voluptate
          non est consequat ipsum id nisi. Ut consequat veniam sint voluptate.
          Amet officia cupidatat in anim enim laborum aliquip quis aute non et.
          Tempor ea aute esse irure laborum. Culpa irure est ipsum ex magna.
          Excepteur quis do adipisicing aute elit esse id ipsum. Occaecat et
          veniam reprehenderit qui veniam nisi id. Incididunt laboris sit labore
          sint cupidatat. Veniam pariatur et incididunt deserunt non minim et ea
          enim elit exercitation eu magna. Laborum laboris ad sint cillum minim.
          Duis dolor consectetur qui aliquip ullamco ipsum.
        </p>
      </ScrollArea>
    ),
  },
  {
    id: "calendar",
    title: "Calendar",
    description: "Allows users to pick dates",
    componentPath: "src/components/ui/calendar.tsx",
    miniExample: <Calendar className="scale-50" />,
    example: <Calendar />,
  },
  {
    id: "avatar",
    title: "Avatar",
    description: "Avatar can display a user's profile picture",
    componentPath: "src/components/ui/avatar.tsx",
    example: (
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/124599" />
        <AvatarFallback>
          <IconUser />
        </AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "avatar-group",
    title: "Avatar Group",
    description: "Great for when lots of users need to be displayed together",
    componentPath: "src/components/ui/avatar-group.tsx",
    example: (
      <AvatarGroup max={2}>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599" />
          <AvatarFallback>
            <IconUser />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599" />
          <AvatarFallback>
            <IconUser />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599" />
          <AvatarFallback>
            <IconUser />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599" />
          <AvatarFallback>
            <IconUser />
          </AvatarFallback>
        </Avatar>
      </AvatarGroup>
    ),
  },
  {
    id: "toc",
    title: "Table of Contents",
    description: "Allows users to quickly navigate long documents",
    componentPath: "src/components/ui/toc.tsx",
    example: (
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
    ),
  },
];
