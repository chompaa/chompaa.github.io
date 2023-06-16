import {
  IconBrandReact,
  IconBrandSocketIo,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-preact";

import { JSX, cloneElement } from "preact";

export const Tag: { [name: string]: JSX.Element } = {
  Tailwind: <IconBrandTailwind />,
  React: <IconBrandReact />,
  SocketIo: <IconBrandSocketIo />,
  TypeScript: <IconBrandTypescript />,
};

export const TagIcon = ({ icon }: { icon: JSX.Element }) => {
  return (
    <div class="w-fit p-1">{cloneElement(icon, { stroke: 1, size: 26 })}</div>
  );
};
