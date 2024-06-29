import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Moon, Sun } from "lucide-react";
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
                Software Engineer.
              </p>
              <p class="text-l tracking-tight text-main/70 dark:text-alt/70">
                Currently looking for work.
              </p>
              <div class="lg:absolute lg:bottom-24">
                <div class="flex gap-x-2">
                  <ButtonIcon
                    link="https://github.com/chompaa"
                    icon={<SiGithub></SiGithub>}
                  ></ButtonIcon>
                  <ButtonIcon
                    link="https://www.linkedin.com/in/antony-martin-122a92225/"
                    icon={<SiLinkedin></SiLinkedin>}
                  ></ButtonIcon>
                  <ButtonIcon
                    icon={theme === "dark" ? <Moon></Moon> : <Sun></Sun>}
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
                Hi, I'm Antony. I hold a bachelor's in Mathematics, and a
                master's in Computer Science. I love software engineering!
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
                title={"Programming Language"}
                description={
                  "An interpreted programming language with features including binary/unary expressions, functions, loops, and control flow. Coupled with a playground website."
                }
                repo={"dom"}
                tags={[Tag.Rust, Tag.WebAssembly, Tag.React, Tag.Tailwind]}
                visible={landingVisible}
              ></ProjectCard>
              <ProjectCard
                title={"Kanban Board"}
                description={
                  "A kanban board app with smooth drag-and-drop, realtime database connection, and user authentication."
                }
                repo={"tmro"}
                tags={[Tag.React, Tag.Tailwind, Tag.Firebase]}
                visible={landingVisible}
              ></ProjectCard>
              <ProjectCard
                title={"Drawing App"}
                description={
                  "A collaborative drawing app that utilizes WebSockets. Supports canvas zooming/panning, draw tool customization, and erasing."
                }
                repo={"zenithdraw"}
                demo={false}
                tags={[Tag.Express, Tag.SocketIo, Tag.React]}
                visible={landingVisible}
              ></ProjectCard>
              <ProjectCard
                title={"Pathfinding Visualizer"}
                description={
                  "Visualize pathfinding algorithms such as Dijkstra's algorithm and DFS. Generate a \
                maze or build your own and watch the algorithm find a path."
                }
                repo={"pathfinding-visualizer"}
                tags={[Tag.React]}
                visible={landingVisible}
              ></ProjectCard>
              <ProjectCard
                title={"Tic-tac-toe"}
                description={
                  "A peer-to-peer tic-tac-toe game. Contains various animations and rematch functionality."
                }
                repo={"tictactoe"}
                tags={[Tag.PeerJS, Tag.React, Tag.MaterialUI]}
                visible={landingVisible}
              ></ProjectCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
