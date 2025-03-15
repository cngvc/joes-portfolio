import DOMPurify from "dompurify";
import { useMemo, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import About from "../components/about";
import ChangeThemeBtn from "../components/change-theme-btn";
import Companies from "../components/companies";
import MainLayout from "../components/main-layout";
import Projects from "../components/projects";
import SparklesText from "../components/resume-btn";
import ShortAnEmailBtn from "../components/short-an-email-btn";
import SideProjects from "../components/side-projects";
import SocialList from "../components/social-list";
import Surface from "../components/surface";
import content from "../content.json";

function Main() {
  const about = useRef<HTMLDivElement | null>(null);
  const exp = useRef<HTMLDivElement | null>(null);
  const project = useRef<HTMLDivElement | null>(null);
  const sideProject = useRef<HTMLDivElement | null>(null);

  const { ref: aboutRef, inView: aboutPoint } = useInView();
  const { ref: expRef, inView: experiencePoint } = useInView();
  const { ref: projectRef, inView: projectPoint } = useInView();
  const { ref: sideProjectRef, inView: sideProjectPoint } = useInView();

  const menu = useMemo(() => {
    return [
      { ref: about, point: aboutPoint, index: "01", label: "🤔 about" },
      { ref: exp, point: experiencePoint, index: "02", label: "🧑‍💻 experience" },
      {
        ref: project,
        point: projectPoint,
        index: "03",
        label: "💻 participated projects",
      },
      {
        ref: sideProject,
        point: sideProjectPoint,
        index: "04",
        label: "💪 personal projects",
      },
    ];
  }, [aboutPoint, experiencePoint, projectPoint, sideProjectPoint]);

  const sanitizedContent = useMemo(
    () => ({
      __html: DOMPurify.sanitize(content.name),
    }),
    [content.name],
  );

  const sanitizedRole = useMemo(
    () => ({
      __html: DOMPurify.sanitize(content.role),
    }),
    [content.role],
  );

  const sanitizedBio = useMemo(
    () => ({
      __html: DOMPurify.sanitize(content.bio || ""),
    }),
    [content.bio],
  );

  return (
    <MainLayout>
      <Surface />

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 p-4 lg:h-screen lg:sticky top-0 flex flex-col gap-4 lg:w-11/12 lg:pt-12 lg:pb-6 overflow-y-auto scroll-smooth-thin">
          <div className="flex flex-col gap-4 mb-3">
            <p className="c1">Hi, I am</p>
            <div className="marker-variation">
              <h2 dangerouslySetInnerHTML={sanitizedContent}></h2>
            </div>
            <p className="t3" dangerouslySetInnerHTML={sanitizedRole} />
            <p className="t5 text-muted-foreground font-mono">
              {content.skills}
            </p>
            <p className="t5" dangerouslySetInnerHTML={sanitizedBio} />
          </div>

          <div className="flex flex-col gap-3 mb-3">
            {menu.map((e) => (
              <p
                className={twMerge(
                  "t4 opacity-40 transition-all duration-200 cursor-pointer hover:opacity-100",
                  e.point && "opacity-100",
                )}
                onClick={() => {
                  e.ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="c1">{e.index}</span> {e.label}
              </p>
            ))}
          </div>

          <SparklesText />

          <SocialList />

          <ShortAnEmailBtn />

          <ChangeThemeBtn />

          <div className="t5 text-muted-foreground">
            Designed & Developed by Joe
          </div>
        </div>

        <div className="lg:col-span-7 py-20 max-lg:pb-20 overflow-y-auto scroll-smooth-thin">
          {/* about */}
          <div ref={aboutRef} className="mb-10">
            <div className="p-6 flex gap-2 items-center" ref={about}>
              <span className="c1">01.</span> About me{" "}
              <div className="animate-wiggle duration-200 animate-infinite">
                👋
              </div>
            </div>
            <About />
          </div>

          {/* exp */}
          <div ref={expRef} className="mb-10">
            <div className="p-3 md:p-6" ref={exp}>
              <span className="c1">02.</span> Where I've worked
            </div>

            <Companies />
          </div>

          {/* projects */}
          <div ref={projectRef}>
            <div className="p-3 md:p-6" ref={project}>
              <span className="c1">03.</span> Projects I've participated in{" "}
              <span className="italic text-muted-foreground font-thin">
                (some projects cannot be disclosed due to privacy policies)
              </span>
            </div>

            <Projects />
          </div>

          {/* side projects */}
          <div ref={sideProjectRef} className="">
            <div className="p-3 md:p-6" ref={sideProject}>
              <span className="c1">04.</span> Side Projects I’ve Built
            </div>

            <SideProjects />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Main;
