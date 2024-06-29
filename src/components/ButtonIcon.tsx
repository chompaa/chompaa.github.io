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
      class="flex w-fit cursor-pointer items-center justify-center p-[0.125rem] hover:text-main/75 dark:hover:text-alt/75"
    >
      {cloneElement(icon, { className: "size-6" })}
    </a>
  );
};

export default ButtonIcon;
