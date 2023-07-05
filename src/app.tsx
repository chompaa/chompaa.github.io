import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoon,
  IconSun,
} from "@tabler/icons-preact";
import { useEffect, useState } from "preact/hooks";
import ButtonIcon from "./components/ButtonIcon";
import ProjectCard from "./components/ProjectCard";
import { Tag } from "./components/TagIcon";
import useElementOnScreen from "./hooks/useElementOnScreen";

export const App = () => {
  const intersectionOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const [landingRef, landingVisible] = useElementOnScreen(intersectionOptions);

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
    <div class="bg-transparent text-main dark:text-alt">
      <div class="fixed top-0 h-full w-full bg-blob-light dark:bg-blob-dark"></div>
      <section
        class={`min-h-screen-d relative mx-auto max-w-screen-xl justify-between px-6 transition-all 
                duration-700 md:px-24 lg:px-48${
                  landingVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0"
                }`}
        ref={landingRef}
        id="landing"
      >
        <div class="flex flex-col lg:flex-row">
          <div class="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2">
            <div class="flex flex-col gap-y-5 pb-12 pt-24 lg:pb-24">
              <p class="font-display text-5xl font-black tracking-tight">
                Antony Martin
              </p>
              <p class="text-xl font-medium tracking-tight">
                Frontend Developer
              </p>
              <p class="text-l tracking-tight text-main/70 dark:text-alt/70">
                Currently looking for work.
              </p>
              <div class="lg:absolute lg:bottom-24">
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
                      theme === "dark" ? (
                        <IconMoon></IconMoon>
                      ) : (
                        <IconSun></IconSun>
                      )
                    }
                    onClick={() => handleChangeTheme()}
                  ></ButtonIcon>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 lg:pt-24">
            <div class="mb-12">
              <h2
                class="sticky top-0 z-10 -mx-6 w-screen bg-alt/50 px-6 py-4 text-sm font-bold uppercase tracking-widest 
                       backdrop-blur-xl dark:bg-main/50 md:-mx-24 md:px-24 lg:relative lg:top-auto 
                       lg:mx-4 lg:w-fit lg:bg-transparent lg:p-0 lg:pb-4 lg:dark:bg-transparent"
              >
                About
              </h2>
              <p class="text-main/70 dark:text-alt/70 lg:mx-4">
                Hi, I'm Antony. I have a bachelors in Mathematics, and am
                currently undertaking a masters in Computer Science.
                <br />
                <br />
                In my spare time I enjoy working on personal projects,
                bouldering, and going to the gym.
              </p>
            </div>
            <h2
              class="sticky top-0 z-10 -mx-6 w-screen bg-alt/50 px-6 py-4 text-sm font-bold uppercase tracking-widest 
                       backdrop-blur-xl dark:bg-main/50 md:-mx-24 md:px-24 lg:relative lg:top-auto 
                       lg:mx-4 lg:w-fit lg:bg-transparent lg:p-0 lg:pb-4 lg:dark:bg-transparent"
            >
              Showcase
            </h2>
            <div class="flex w-full flex-auto flex-col flex-wrap gap-12 pb-24 lg:gap-4">
              <ProjectCard
                title={"Echo"}
                description={
                  "A minimalist climbing shop. Whether you need clothing or equipment, \
                Echo has you covered."
                }
                github={"https://github.com/chompaa/echo"}
                demo={"https://chompaa.github.io/echo"}
                tags={[Tag.React, Tag.SASS, Tag.ReactRouter, Tag.Zustand]}
                visible={landingVisible}
                className={"delay-0"}
              ></ProjectCard>
              <ProjectCard
                title={"Trello Clone"}
                description={
                  "A trello-board-like app. Keep track of your tasks and organize them into lists. \
                Features drag-and-drop, realtime updates, along with user authentication and \
                storage."
                }
                github={"https://github.com/chompaa/trello-clone"}
                demo={"https://chompaa.github.io/trello-clone"}
                tags={[Tag.React, Tag.Tailwind, Tag.Firebase]}
                visible={landingVisible}
                className={"delay-[200ms]"}
              ></ProjectCard>
              <ProjectCard
                title={"Zenithdraw"}
                description={
                  "Draw collaboratively with your friends! Features the ability to save and restore \
                drawings, zoom/pan the canvas, change stroke sizes, and erase."
                }
                github={"https://github.com/chompaa/zenithdraw"}
                tags={[Tag.Express, Tag.SocketIo, Tag.React]}
                visible={landingVisible}
                className={"delay-[400ms]"}
              ></ProjectCard>
              <ProjectCard
                title={"Pathviz"}
                description={
                  "Visualize pathfinding algorithms such as Dijkstra's algorithm and DFS! Generate a \
                maze or build your own and watch the algorithm find a path."
                }
                github={"https://github.com/chompaa/pathfinding-visualizer"}
                demo={"https://chompaa.github.io/pathfinding-visualizer"}
                tags={[Tag.React]}
                visible={landingVisible}
                className={"delay-[600ms]"}
              ></ProjectCard>
              <ProjectCard
                title={"Tic-tac-toe"}
                description={
                  "A peer-to-peer tic-tac-toe game. Share your ID and connect with your friends! \
                Not satisfied with the match outcome? Rematch!"
                }
                github={"https://github.com/chompaa/tictactoe"}
                demo={"https://chompaa.github.io/tictactoe"}
                tags={[Tag.PeerJS, Tag.React, Tag.MaterialUI]}
                visible={landingVisible}
                className={"delay-[800ms]"}
              ></ProjectCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
