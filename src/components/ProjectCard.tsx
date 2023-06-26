import { TagIcon } from "./TagIcon";

import { IconBrandGithub, IconPlayerPlay } from "@tabler/icons-preact";

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
    <div
      class={`${className} ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      } align-start flex flex-col gap-4 py-12 duration-700 ease-out lg:flex-row lg:gap-0`}
    >
      <div class="align-center flex min-h-[11.25rem] w-80 items-center  justify-center self-center rounded-lg border-4 
			            border-main bg-main dark:border-alt dark:bg-alt">
        {image ? (
          <img class="h-full rounded-md" src={image}></img>
        ) : (
          <p class="text-alt">No image available</p>
        )}
      </div>
      <div class="flex h-72 min-h-max w-80 flex-col justify-start gap-4 px-10">
        <h1 class="font-display text-4xl">{title}</h1>
        <div class="flex gap-2">
          {tags.map((icon: string) => (
            <TagIcon icon={icon}></TagIcon>
          ))}
        </div>
        <p class="justify-inter-word flex text-justify">{description}</p>
        <div class="flex gap-2">
          {demo ? (
            <ButtonIcon
              icon={<IconPlayerPlay></IconPlayerPlay>}
              link={demo}
            ></ButtonIcon>
          ) : null}
          <ButtonIcon
            icon={<IconBrandGithub></IconBrandGithub>}
            link={github}
          ></ButtonIcon>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
