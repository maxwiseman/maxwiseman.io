import React from "react";
import clsx from "clsx";

import { cn } from "@/lib/utils";

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max: number;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max = 1, ...props }, ref) => {
    const avatarItems = React.Children.toArray(
      children,
    ) as React.ReactElement[];

    const handleMargin = (index: number) => {
      return index * 10;
    };

    const renderContent = React.useMemo(() => {
      return (
        <>
          {avatarItems.slice(0, max).map((child, index) => {
            return React.cloneElement(child, {
              className: clsx(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                child.props.className as string,
                "border-2 border-background",
              ),
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              style: {
                right: handleMargin(index),
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                ...child.props.style,
              },
            });
          })}

          {avatarItems.length > max && (
            <div
              className={clsx(
                "relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted",
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                avatarItems[0]?.props.className as string,
              )}
              style={{ right: handleMargin(max) }}
            >
              <p>+{avatarItems.length - max}</p>
            </div>
          )}
        </>
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [max]);

    return (
      <div
        ref={ref}
        className={cn("relative flex flex-nowrap", className)}
        {...props}
      >
        {renderContent}
      </div>
    );
  },
);

AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
