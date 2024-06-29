import { TagIcon } from "./TagIcon";

import { ArrowUpRight } from "lucide-react";

import { useState } from "preact/hooks";

const ProjectCard = ({
  title,
  tags,
  description,
  repo,
  demo = true,
  visible,
  className,
}: {
  title: string;
  tags: Array<string>;
  description: string;
  repo: string;
  demo?: boolean;
  visible: boolean;
  className?: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      class="align-start flex flex-col gap-4 rounded-md border-t-transparent text-left dark:hover:border-t-alt/15 lg:flex-row lg:border-t lg:p-4 lg:hover:bg-main/5 dark:lg:hover:bg-alt/10"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={
        demo
          ? `https://chompaa.github.io/${repo}`
          : `https://github.com/chompaa/${repo}`
      }
    >
      <div
        class={`flex h-fit min-h-max w-full flex-col content-center justify-center gap-4 
          transition-opacity ease-in-out ${className} ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <div class="flex items-center gap-2">
          <h1 class="h-fit w-fit items-center font-display font-bold tracking-wider">
            {title}
          </h1>
          <div
            className={`${
              hover
                ? "-translate-y-[0.2rem] translate-x-[0.2rem]"
                : "translate-y-[0.1rem]"
            } transition-transform ease-in-out`}
          >
            <ArrowUpRight />
          </div>
        </div>
        <p class="flex text-sm text-main/70 dark:text-alt/70">{description}</p>
        <div class="flex gap-2">
          {tags.map((icon: string) => (
            <TagIcon icon={icon}></TagIcon>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
