import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupList,
  AvatarImage,
  AvatarOverflowIndicator,
} from "@/components/ui/avatar";
import { IconUser } from "@tabler/icons-react";

export default function Example() {
  return (
    <AvatarGroup limit={2}>
      <AvatarGroupList>
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
      </AvatarGroupList>
      <AvatarOverflowIndicator />
    </AvatarGroup>
  );
}
