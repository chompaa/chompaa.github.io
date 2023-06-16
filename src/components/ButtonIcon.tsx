import { cloneElement } from "preact/compat";

import { JSX } from "preact";

const SocialButton = ({ icon, link }: { icon: JSX.Element; link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      class="w-fit rounded-lg p-1 shadow-[inset_0_0_0_0] shadow-main transition duration-700 
             ease-in-out hover:text-alt hover:shadow-[inset_0_0_0_26px] hover:shadow-main"
    >
      {cloneElement(icon, { stroke: 1, size: 26 })}
    </a>
  );
};

export default SocialButton;
