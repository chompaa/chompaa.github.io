import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoon,
  IconSun,
} from "@tabler/icons-preact";
import useElementOnScreen from "./hooks/useElementOnScreen";

import ButtonIcon from "./components/ButtonIcon";
import ProjectCard from "./components/ProjectCard";
import { Tag } from "./components/TagIcon";

import { useEffect, useState } from "preact/hooks";
import pathviz from "./assets/pathviz.jpg";
import tictactoe from "./assets/tictactoe.jpg";
import trello from "./assets/trello-clone.jpg";
import zenithdraw from "./assets/zenithdraw.jpg";
import ButtonNavigate from "./components/ButtonNavigate";

export const App = () => {
  const intersectionOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const [landingRef, landingVisible] = useElementOnScreen(intersectionOptions);
  const [showcaseRef, showcaseVisible] = useElementOnScreen({
    ...intersectionOptions,
    threshold: 0.25,
  });

  const [theme, setTheme] = useState<string>(localStorage.theme);

  const handleChangeTheme = () => {
    localStorage.theme = theme === "dark" ? "light" : "dark";

    setTheme(localStorage.theme);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div class="dark:bg-main dark:text-alt">
      <section
        class={`relative h-screen-d transition-all duration-700 ${
          landingVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        }`}
        ref={landingRef}
        id="landing"
      >
        <div class="fixed left-auto right-0 top-0 m-12">
          <div class="flex gap-x-2">
            <ButtonIcon
              link="https://github.com/chompaa"
              icon={<IconBrandGithub></IconBrandGithub>}
            ></ButtonIcon>
            <ButtonIcon
              link="https://www.linkedin.com/in/antony-martin-122a92225/"
              icon={<IconBrandLinkedin></IconBrandLinkedin>}
            ></ButtonIcon>
            <ButtonIcon
              icon={
                theme === "dark" ? <IconMoon></IconMoon> : <IconSun></IconSun>
              }
              onClick={() => handleChangeTheme()}
            ></ButtonIcon>
          </div>
        </div>
        <div class="flex h-full w-full snap-start content-center items-center justify-center pb-12">
          <div class="flex flex-col content-center items-center justify-center gap-y-5">
            <p class="font-display text-7xl font-black tracking-widest">
              Antony
            </p>
            <p class="text-center tracking-wide">
              frontend developer.
              <br />
              currently looking for work.
            </p>
            <ButtonNavigate href={showcaseRef}>view my projects</ButtonNavigate>
          </div>
        </div>
      </section>
      <section
        class="relative flex min-h-screen snap-start flex-col items-center justify-center"
        ref={showcaseRef}
        id="showcase"
      >
        <div
          class="mt-12 flex w-full flex-auto flex-wrap content-center items-center justify-center 
                 pb-48 lg:gap-x-24 lg:pb-0"
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
              ability to add/remove cards/lists. has user auth and storage."
            }
            github={"https://github.com/chompaa/trello-clone"}
            demo={"https://chompaa.github.io/trello-clone"}
            tags={[Tag.React, Tag.Tailwind, Tag.Firebase]}
            visible={showcaseVisible}
            className={"delay-200"}
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
            tags={[Tag.React]}
            visible={showcaseVisible}
            className={"delay-500"}
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
            className={"delay-700"}
          ></ProjectCard>
        </div>
        <div class="mb-12 w-fit">
          <ButtonNavigate href={landingRef}>back</ButtonNavigate>
        </div>
      </section>
    </div>
  );
};
