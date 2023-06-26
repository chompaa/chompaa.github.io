export enum Tag {
  Tailwind = "tailwindcss",
  React = "react",
  MaterialUI = "material-ui",
  Express = "express",
  SocketIo = "socket-io",
  PeerJS = "peerjs",
	Firebase = "firebase",
  TypeScript = "typescript",
}

export const TagIcon = ({ icon }: { icon: string }) => {
  return (
    // <div class="w-fit p-1">{cloneElement(icon, { stroke: 1, size: 26 })}</div>
    <div class="w-fit rounded-md bg-main px-2 py-1 text-alt dark:bg-alt dark:text-main">{icon}</div>
  );
};
