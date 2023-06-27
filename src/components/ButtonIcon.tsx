import { cloneElement } from "preact/compat";

import { JSX } from "preact";

const ButtonIcon = ({
  icon,
  link,
  onClick,
}: {
  icon: JSX.Element;
  link?: string;
  onClick?: () => void;
}) => {
  return (
    <a
      href={link}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      target="_blank"
      class="flex w-fit cursor-pointer items-center justify-center rounded-lg p-[0.125rem] 
             shadow-[inset_0_0_0_0] shadow-main transition duration-500 ease-in-out 
             hover:text-alt hover:shadow-[inset_0_0_0_26px] hover:shadow-main 
             dark:hover:text-main dark:hover:shadow-alt"
    >
      {cloneElement(icon, { stroke: 1, size: 26 })}
    </a>
  );
};

export default ButtonIcon;
