import { FaLinkedinIn, FaGithubAlt, FaEnvelope } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Layout from "../components/Layout";
import { externals } from "../urls";
import Company from "../components/Company";
import content from "../content.json";
import Social from "../components/Social";
import { useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Project from "../components/Project";
import Surface from "../components/Surface";
import FsLightbox from "fslightbox-react";
import SideProject from "../components/SideProject";
import { SiLeetcode } from "react-icons/si";

const images = content.projects.map((e) => e.image);

function Home() {
  const about = useRef<HTMLDivElement | null>(null);
  const exp = useRef<HTMLDivElement | null>(null);
  const project = useRef<HTMLDivElement | null>(null);
  const sideProject = useRef<HTMLDivElement | null>(null);

  const { ref: aboutRef, inView: aboutPoint } = useInView();
  const { ref: expRef, inView: experiencePoint } = useInView();
  const { ref: projectRef, inView: projectPoint } = useInView();
  const { ref: sideProjectRef, inView: sideProjectPoint } = useInView();

  const [isOpenLightBox, $isOpenLightBox] = useState(false);
  const [selectedImageIndex, $selectedImage] = useState(0);

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

  return (
    <Layout>
      <Surface />

      <FsLightbox
        toggler={isOpenLightBox}
        sources={images}
        sourceIndex={selectedImageIndex}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 p-4 lg:h-screen lg:sticky top-0 flex flex-col gap-4 lg:w-11/12 lg:pt-12 lg:pb-6 overflow-y-auto scroll-smooth-thin">
          <div className="flex flex-col gap-4 mb-3">
            <p className="c1">Hi, I am</p>
            <div className="marker-variation">
              <h2 dangerouslySetInnerHTML={{ __html: content.name }}></h2>
            </div>
            <p
              className="t3"
              dangerouslySetInnerHTML={{ __html: content.role }}
            />
            <p className="t5 opacity-80 font-mono">{content.skills}</p>
            <p className="t5 opacity-80">{content.bio}</p>
          </div>

          <div className="flex flex-col gap-3 mb-3">
            {menu.map((e) => (
              <p
                className={twMerge(
                  "t4 opacity-40 transition-all duration-200 cursor-pointer hover:opacity-100",
                  e.point && "opacity-100"
                )}
                onClick={() => {
                  console.log(e.ref);
                  e.ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="c1">{e.index}</span> {e.label}
              </p>
            ))}
          </div>
          <div className="flex items-center mb-3">
            <a
              href="/assets/congs-resume.pdf"
              target="_blank"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg group bg-gradient-to-r from-pink-400 to-orange-400 group-hover:from-pink-400 group-hover:to-orange-400 text-white focus:ring-0 focus:outline-none duration-100 shadow-lg shadow-pink-400/50"
            >
              <span className="t5 font-normal relative px-4 py-2 transition-all ease-in rounded-md duration-100">
                My Resume
              </span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Social
              url={externals.linkedin}
              type="Linkedin"
              icon={<FaLinkedinIn className="w-5 h-5" />}
            />
            <Social
              url={externals.github}
              type="Github"
              icon={<FaGithubAlt className="w-5 h-5" />}
            />
            <Social
              url={externals.email}
              type="Email"
              icon={<FaEnvelope className="w-5 h-5" />}
            />
            <Social
              url={externals.leetcode}
              type="Leetcode"
              icon={<SiLeetcode className="w-5 h-5" />}
            />
          </div>

          <div className="t5 opacity-20">Designed by Joe</div>
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
            <div className="flex flex-col gap-2 relative">
              <div className="group max-w-[10rem] w-full h-auto absolute right-4 -translate-y-full">
                <div className="w-full h-full relative">
                  <LazyLoadImage
                    alt="Avatar"
                    src={"/assets/avatar.png"}
                    className="object-contain z-50 w-32 md:w-40 h-32 md:h-40"
                  />
                  <div className="opacity-0 group-hover:opacity-100 duration-200 absolute top-4 p-2 rounded-lg bg-[#1C1D20]/60 -translate-x-1/2 t6 backdrop-blur-sm">
                    Hi, Nice to meet you!.
                  </div>
                </div>
              </div>

              <div className="border border-primary grid grid-cols-12 p-3 md:p-6 items-center rounded-md">
                <div
                  className="t5 text-white/80 col-span-12"
                  dangerouslySetInnerHTML={{ __html: content.about }}
                />
              </div>
            </div>
          </div>

          {/* exp */}
          <div ref={expRef} className="mb-10">
            <div className="p-3 md:p-6" ref={exp}>
              <span className="c1">02.</span> Where I've worked
            </div>

            <div className="flex flex-col gap-2 overflow-hidden">
              {content.companies.map((e, index) => (
                <Company
                  key={index}
                  time={e.time}
                  url={e.url}
                  company={e.company}
                  role={e.role}
                  description={e.description}
                  job={e.job}
                  tech={e.tech}
                />
              ))}
            </div>
          </div>

          {/* projects */}
          <div ref={projectRef} className="">
            <div className="p-3 md:p-6" ref={project}>
              <span className="c1">03.</span> Projects I've participated in{" "}
              <span className="italic opacity-40 font-thin">
                (some projects cannot be disclosed due to privacy policies)
              </span>
            </div>
            <div className="flex flex-col gap-2 overflow-hidden">
              {content.projects.map((e, index) => (
                <Project
                  key={index}
                  image={e.image}
                  url={e.url}
                  title={e.title}
                  description={e.description}
                  tech={e.tech}
                  composition={e.composition}
                  subtitle={e.subtitle}
                  collaboration={e.collaboration}
                  role={e.role}
                  onOpenPhotoLightBox={() => {
                    $isOpenLightBox((cur) => !cur);
                    $selectedImage(index);
                  }}
                />
              ))}
            </div>
          </div>

          {/* side projects */}
          <div ref={sideProjectRef} className="">
            <div className="p-3 md:p-6" ref={sideProject}>
              <span className="c1">04.</span> Side Projects I’ve Built
            </div>
            <div className="flex flex-col gap-2 overflow-hidden">
              {content["side-projects"].map((e, index) => (
                <SideProject
                  key={index}
                  url={e.url}
                  title={e.title}
                  description={e.description}
                  tech={e.tech}
                  repo={e.repo}
                  features={e.features}
                  subtitle={e.subtitle}
                  goal={e.goal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
