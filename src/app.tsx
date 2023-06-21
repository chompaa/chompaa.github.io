import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-preact";
import SocialButton from "./components/ButtonIcon";
import useElementOnScreen from "./hooks/useElementOnScreen";

import ProjectCard from "./components/ProjectCard";
import { Tag } from "./components/TagIcon";

import pathviz from "./assets/pathviz.jpg";
import tictactoe from "./assets/tictactoe.jpg";
import trello from "./assets/trello-clone.jpg";
import zenithdraw from "./assets/zenithdraw.jpg";

export const App = () => {
  const intersectionOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const [landingRef, landingVisible] = useElementOnScreen(intersectionOptions);
  const [showcaseRef, showcaseVisible] = useElementOnScreen({
    ...intersectionOptions,
    threshold: 0.2,
  });

  return (
    <>
      <section
        class={`relative h-screen-d transition-all duration-700 ${
          landingVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        }`}
        ref={landingRef}
      >
        <div class="fixed left-auto right-0 top-0 m-12">
          <div class="flex gap-x-2">
            <SocialButton
              link="https://github.com/chompaa"
              icon={<IconBrandGithub></IconBrandGithub>}
            ></SocialButton>
            <SocialButton
              link="https://www.linkedin.com/in/antony-martin-122a92225/"
              icon={<IconBrandLinkedin></IconBrandLinkedin>}
            ></SocialButton>
          </div>
        </div>
        <div class="flex h-full w-full snap-start content-center items-center justify-center pb-12">
          <div class="flex flex-col content-center items-center justify-center gap-y-5">
            <p class="font-display text-7xl font-black tracking-widest">
              Antony
            </p>
            <p class="tracking-wide">
              frontend developer. currently looking for work
            </p>
            <div class="flex gap-x-2">
              <IconArrowRight size={26} stroke={"1"} />
              <a
                rel="noopener"
                href="#showcase"
                class="relative cursor-pointer before:absolute before:bottom-0 before:left-0 
                    before:block before:h-[2px] before:w-full before:origin-top-left 
                    before:scale-x-0 before:bg-main before:transition
                    before:duration-300 before:ease-out before:hover:scale-x-100"
              >
                view my projects
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        class="relative flex min-h-screen snap-start flex-col"
        ref={showcaseRef}
      >
        <div
          id="showcase"
          class="flex w-full flex-auto flex-wrap content-center items-center justify-center pb-48 
                 lg:gap-x-24 lg:pb-0"
        >
          <ProjectCard
            image={zenithdraw}
            title={"Zenithdraw"}
            description={
              "a collaborative drawing app. features include; import/export, panning, zooming, \
               drawing, erasing, and more."
            }
            github={"https://github.com/chompaa/zenithdraw"}
            tags={[Tag.Express, Tag.SocketIo, Tag.React]}
            visible={showcaseVisible}
            className={"delay-0"}
          ></ProjectCard>
          <ProjectCard
            image={trello}
            title={"Trello Clone"}
            description={
              "a trello clone. featuring draggable lists and cards (with animations!), and the \
              ability to add/remove cards/lists."
            }
            github={"https://github.com/chompaa/trello-clone"}
            demo={"https://chompaa.github.io/trello-clone"}
            tags={[Tag.TypeScript, Tag.React, Tag.Tailwind]}
            visible={showcaseVisible}
            className={"delay-700"}
          ></ProjectCard>
          <ProjectCard
            image={pathviz}
            title={"Pathviz"}
            description={
              "a pathfinding visualizer. capable of generating mazes and solving them using \
               various algorithms."
            }
            github={"https://github.com/chompaa/pathfinding-visualizer"}
            demo={"https://chompaa.github.io/pathfinding-visualizer"}
            tags={[Tag.TypeScript, Tag.React]}
            visible={showcaseVisible}
            className={"delay-200"}
          ></ProjectCard>
          <ProjectCard
            image={tictactoe}
            title={"Tic-tac-toe"}
            description={
              "a peer-to-peer app for the classic game tic-tac-toe. project from 2019."
            }
            github={"https://github.com/chompaa/tictactoe"}
            demo={"https://chompaa.github.io/tictactoe"}
            tags={[Tag.PeerJS, Tag.React, Tag.MaterialUI]}
            visible={showcaseVisible}
            className={"delay-500"}
          ></ProjectCard>
        </div>
      </section>
    </>
  );
};
