import { IconArrowRight } from "@tabler/icons-preact";
import { RefObject } from "preact";

const ButtonNavigate = ({
  children,
  href,
}: {
  children?: string;
  href: RefObject<HTMLElement>;
}) => {
  return (
    <div class="flex gap-x-2">
      <IconArrowRight size={26} stroke={"1"} />
      <a
        rel="noopener"
        onClick={() => href.current?.scrollIntoView({ behavior: "smooth" })}
        class="relative cursor-pointer before:absolute before:bottom-0 before:left-0 
                    before:block before:h-[2px] before:w-full before:origin-top-left 
                    before:scale-x-0 before:bg-main before:transition before:duration-300
                    before:ease-out before:hover:scale-x-100 dark:before:bg-alt"
      >
        {children}
      </a>
    </div>
  );
};

export default ButtonNavigate;
