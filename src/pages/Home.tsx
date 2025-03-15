import DOMPurify from "dompurify";
import FsLightbox from "fslightbox-react";
import { useMemo, useRef, useState } from "react";
import { FaEnvelope, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TbMailShare } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Company from "../components/Company";
import Layout from "../components/Layout";
import Project from "../components/Project";
import SideProject from "../components/SideProject";
import Social from "../components/Social";
import Surface from "../components/Surface";
import content from "../content.json";
import { externals, internal } from "../urls";

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

  const sanitizedAbout = useMemo(
    () => ({
      __html: DOMPurify.sanitize(content.about),
    }),
    [content.about],
  );

  const sanitizedBio = useMemo(
    () => ({
      __html: DOMPurify.sanitize(content.bio || ""),
    }),
    [content.bio],
  );

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
              <h2 dangerouslySetInnerHTML={sanitizedContent}></h2>
            </div>
            <p className="t3" dangerouslySetInnerHTML={sanitizedRole} />
            <p className="t5 opacity-80 font-mono">{content.skills}</p>
            <p
              className="t5 opacity-80"
              dangerouslySetInnerHTML={sanitizedBio}
            />
          </div>
          <div className="flex flex-col gap-3 mb-3">
            {menu.map((e) => (
              <p
                className={twMerge(
                  "t4 opacity-40 transition-all duration-200 cursor-pointer hover:opacity-100",
                  e.point && "opacity-100",
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
              className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-orange-400 to-orange-600 text-white focus:ring-0 focus:outline-hidden shadow-lg shadow-orange-500/50"
            >
              <span className="t5 font-normal relative px-6 py-3">
                My Resume
              </span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
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

          <Link
            to={internal.email}
            className="group flex items-center flex-wrap gap-2"
          >
            <span className="t5 text-white/80 lg:group-hover:text-white duration-200 font-medium">
              Short me an email
            </span>{" "}
            <TbMailShare className="w-5 h-5 lg:group-hover:translate-x-1 duration-200 ease-in-out" />
          </Link>

          <div className="t5 text-white/20">Designed & Developed by Joe</div>
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
                  <div className="opacity-0 lg:group-hover:opacity-100 duration-200 absolute top-4 p-2 rounded-lg bg-[#1C1D20]/60 -translate-x-1/2 t6 backdrop-blur-xs">
                    Hi, Nice to meet you!.
                  </div>
                </div>
              </div>

              <div className="border border-primary grid grid-cols-12 p-3 md:p-6 items-center rounded-md">
                <div
                  className="t5 text-white/80 col-span-12"
                  dangerouslySetInnerHTML={sanitizedAbout}
                />
              </div>
            </div>
          </div>

          {/* exp */}
          <div ref={expRef} className="mb-10">
            <div className="p-3 md:p-6" ref={exp}>
              <span className="c1">02.</span> Where I've worked
            </div>

            <ol className="gap-2 overflow-hidden list-none group/list">
              {content.companies.map((e, index) => (
                <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-50 duration-200">
                  <Company
                    key={index}
                    time={e.time}
                    url={e.url}
                    company={e.company}
                    role={e.role}
                    description={e.description}
                    job={e.job}
                    techs={e.techs}
                    domains={e.domains}
                  />
                </li>
              ))}
            </ol>
          </div>

          {/* projects */}
          <div ref={projectRef}>
            <div className="p-3 md:p-6" ref={project}>
              <span className="c1">03.</span> Projects I've participated in{" "}
              <span className="italic opacity-40 font-thin">
                (some projects cannot be disclosed due to privacy policies)
              </span>
            </div>

            <ol className="gap-2 overflow-hidden list-none group/list">
              {content.projects.map((e, index) => (
                <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-50 duration-200">
                  <Project
                    key={index}
                    image={e.image}
                    url={e.url}
                    title={e.title}
                    description={e.description}
                    techs={e.techs}
                    composition={e.composition}
                    subtitle={e.subtitle}
                    achievements={e.achievements}
                    role={e.role}
                    onOpenPhotoLightBox={() => {
                      $isOpenLightBox((cur) => !cur);
                      $selectedImage(index);
                    }}
                  />
                </li>
              ))}
            </ol>
          </div>

          {/* side projects */}
          <div ref={sideProjectRef} className="">
            <div className="p-3 md:p-6" ref={sideProject}>
              <span className="c1">04.</span> Side Projects I’ve Built
            </div>
            <ol className="gap-2 overflow-hidden list-none group/list">
              {content["side-projects"].map((e, index) => (
                <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-50 duration-200">
                  <SideProject
                    key={index}
                    url={e.url}
                    title={e.title}
                    description={e.description}
                    techs={e.techs}
                    repo={e.repo}
                    features={e.features}
                    subtitle={e.subtitle}
                    goal={e.goal}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
