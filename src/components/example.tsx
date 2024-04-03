import { type TabsProps } from "@radix-ui/react-tabs";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

export function Example({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  componentPath: string;
} & TabsProps) {
  return (
    // <Tabs defaultValue="preview" {...props}>
    //   <TabsList>
    //     <TabsTrigger value="preview">Preview</TabsTrigger>
    //     <TabsTrigger value="code">Code</TabsTrigger>
    //   </TabsList>
    //   <TabsContent value="preview">
    //     <Card className="flex h-96 w-full grow items-center justify-center overflow-hidden p-8">
    //       {children}
    //     </Card>
    //   </TabsContent>
    //   <TabsContent value="code">
    <Card
      className={cn(
        "mb-6 mt-2 flex h-96 w-full grow items-center justify-center overflow-hidden p-8",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
    //   </TabsContent>
    // </Tabs>
  );
}
