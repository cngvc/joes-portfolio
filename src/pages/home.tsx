import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { useInView } from "react-intersection-observer";
import About from "../components/about";
import ChangeThemeBtn from "../components/change-theme-btn";
import Companies from "../components/companies";
import Layout from "../components/main-layout";
import Projects from "../components/projects";
import SparklesButton from "../components/resume-btn";
import ShortAnEmailBtn from "../components/short-an-email-btn";
import SideProjects from "../components/side-projects";
import SocialList from "../components/social-list";
import { bio, name, role, skills } from "../content.json";

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
      __html: DOMPurify.sanitize(name),
    }),
    [name],
  );

  const sanitizedRole = useMemo(
    () => ({
      __html: DOMPurify.sanitize(role),
    }),
    [role],
  );

  const sanitizedBio = useMemo(
    () => ({
      __html: DOMPurify.sanitize(bio || ""),
    }),
    [bio],
  );
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 p-4 lg:h-screen lg:sticky top-0 flex flex-col gap-4 lg:w-11/12 lg:pt-10 lg:pb-5 overflow-y-auto scroll-smooth-thin">
          <div className="flex flex-col gap-2.5">
            <p className="c1">Hi, I am</p>
            <div className="marker-variation">
              <h2 dangerouslySetInnerHTML={sanitizedContent}></h2>
            </div>
            <p className="t4" dangerouslySetInnerHTML={sanitizedRole} />
            <p className="t5" dangerouslySetInnerHTML={sanitizedBio} />
            <p className="t4 text-primary font-code">{`// ${skills}`}</p>
          </div>

          <div className="flex flex-col gap-2 w-max">
            {menu.map((e) => (
              <div
                key={e.index}
                className="t4 cursor-pointer"
                onClick={() => {
                  console.log(e.ref.current);
                  e.ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.025 }}
                  animate={{ opacity: e.point ? 1 : 0.5 }}
                >
                  <span className="c1">{e.index}</span> {e.label}
                </motion.div>
              </div>
            ))}
          </div>
          <SparklesButton />
          <SocialList />
          <ShortAnEmailBtn />
          <ChangeThemeBtn />

          <div className="t5 text-muted-foreground/40">
            Designed & Developed by Joe
          </div>
        </div>

        <div className="lg:col-span-7 py-20 max-lg:pb-20 overflow-y-auto scroll-smooth-thin">
          {/* about */}
          <div ref={aboutRef} className="mb-10">
            <div className="p-6 flex gap-2 items-center" ref={about}>
              <span className="c1">01.</span> About me{" "}
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.div>
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
    </Layout>
  );
}

export default Main;
