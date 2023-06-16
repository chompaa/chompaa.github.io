import { TagIcon } from "./TagIcon";

import { IconBrandGithub, IconPlayerPlay } from "@tabler/icons-preact";

import ButtonIcon from "./ButtonIcon";

import { JSX } from "preact";

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
  tags: Array<JSX.Element>;
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
      <div class="align-center flex aspect-video w-80  items-center justify-center self-center rounded-lg bg-main p-2">
        {image ? (
          <img class="h-full" src={image}></img>
        ) : (
          <p class="text-alt">No image available</p>
        )}
      </div>
      <div class="flex h-64 min-h-max w-80 flex-col justify-start gap-4 px-10">
        <h1 class="font-display text-4xl">{title}</h1>
        <div class="flex gap-2">
          {tags.map((icon: JSX.Element) => (
            <TagIcon icon={icon}></TagIcon>
          ))}
        </div>
        <p>{description}</p>
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
