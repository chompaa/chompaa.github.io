export enum Tag {
  Tailwind = "Tailwind",
  React = "React",
  MaterialUI = "MUI",
  Express = "Express",
  SocketIo = "Socket-io",
  PeerJS = "PeerJS",
  Firebase = "Firebase",
  TypeScript = "TypeScript",
  ReactRouter = "React-router",
  Zustand = "Zustand",
  SASS = "SASS",
  Rust = "Rust",
  WebAssembly = "WebAssembly",
}

export const TagIcon = ({ icon }: { icon: string }) => {
  return (
    <div class="w-fit rounded-lg bg-main/10 px-3 py-1 text-xs font-semibold leading-5 text-main dark:bg-alt/25 dark:text-alt">
      {icon}
    </div>
  );
};
