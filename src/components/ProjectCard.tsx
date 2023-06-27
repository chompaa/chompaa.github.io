import { TagIcon } from "./TagIcon";

import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-preact";

import ButtonIcon from "./ButtonIcon";

const ProjectCard = ({
  image,
  title,
  tags,
  description,
  demo,
  github,
  visible,
  className,
}: {
  image?: string;
  title: string;
  tags: Array<string>;
  description: string;
  demo?: string;
  github: string;
  visible: boolean;
  className: string;
}) => {
  return (
    <div class="align-start flex flex-col gap-4 rounded-md lg:flex-row lg:p-4 lg:hover:bg-alt/10">
      <div
        class={`flex h-fit min-h-max w-full flex-col content-center justify-center gap-4 
          transition-all ease-in-out ${className} ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <div class="flex gap-2">
          <h1 class="items-center font-display font-bold tracking-wider">
            {title}
          </h1>
          {demo ? (
            <ButtonIcon
              icon={<IconArrowUpRight></IconArrowUpRight>}
              link={demo}
            ></ButtonIcon>
          ) : null}
          <ButtonIcon
            icon={<IconBrandGithub></IconBrandGithub>}
            link={github}
          ></ButtonIcon>
        </div>
        <p class="justify-inter-word flex text-sm">{description}</p>
        <div class="flex gap-2">
          {tags.map((icon: string) => (
            <TagIcon icon={icon}></TagIcon>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
