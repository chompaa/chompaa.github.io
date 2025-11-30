use dioxus::prelude::*;

#[derive(Debug, Clone, Routable, PartialEq)]
#[rustfmt::skip]
enum Route {
    #[route("/")]
    Home {},
}

const FAVICON: Asset = asset!("/assets/favicon.ico");
const MAIN_CSS: Asset = asset!("/assets/main.css");
const TAILWIND_CSS: Asset = asset!("/assets/tailwind.css");

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: MAIN_CSS }
        document::Link { rel: "stylesheet", href: TAILWIND_CSS }

        Router::<Route> {}
    }
}

#[component]
fn Home() -> Element {
    rsx! {
        document::Script { src: asset!("/assets/warp.js") }
        canvas { id: "warp", class: "fixed inset-0 w-full h-full -z-10 opacity-25" }
        div { class: "w-dvw flex gap-2 flex-col items-center mt-54 px-8",
            div { class: "max-w-xl flex flex-col gap-2",
                h1 { class: "text-3xl font-bold", "antony" }
                h2 { class: "italic",
                    "software developer @ "
                    a { href: "https://fslabs.ca", target: "_blank", "FSL" }
                }
                p {
                    "Hi there, I like mathematics and software development. I'm also an OSS \
                     contributor. At some point, I'll have a blog here."
                }
            }
            div { id: "links", class: "flex gap-x-4",
                a { href: "https://github.com/chompaa", target: "_blank", "GitHub" }
            }
        }
    }
}
