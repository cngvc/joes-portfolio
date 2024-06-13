import {
  FaLinkedinIn,
  FaGithubAlt,
  FaEnvelope,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Layout from "../components/Layout";
import { externals } from "../urls";
import Company from "../components/Company";
import content from "../content.json";
import Social from "../components/Social";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import Project from "../components/Project";
import Surface from "../components/Surface";

function Home() {
  const about = useRef<HTMLDivElement | null>(null);
  const exp = useRef<HTMLDivElement | null>(null);
  const project = useRef<HTMLDivElement | null>(null);

  const { ref: aboutRef, inView: aboutPoint } = useInView();
  const { ref: expRef, inView: experiencePoint } = useInView();
  const { ref: projectRef, inView: projectPoint } = useInView();

  return (
    <Layout>
      <Surface />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 p-4 lg:h-screen lg:sticky top-0 flex flex-col gap-4 w-11/12 lg:py-14 overflow-y-auto scroll-smooth-thin">
          <div className="flex flex-col gap-4 mb-5 md:mb-10">
            <p className="c1">Hi, I am</p>
            <div className="marker-variation">
              <h2 dangerouslySetInnerHTML={{ __html: content.name }}></h2>
            </div>
            <p
              className="t3"
              dangerouslySetInnerHTML={{ __html: content.role }}
            />
            <p className="t4 opacity-80 font-mono">{content.skills}</p>
            <p className="t4 opacity-80">{content.bio}</p>
          </div>

          <div className="flex flex-col gap-4 mb-5 md:mb-10">
            <p
              className={twMerge(
                "t4 opacity-40 transition-all duration-200 cursor-pointer hover:opacity-100",
                aboutPoint && "opacity-100"
              )}
              onClick={() => {
                about.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="c1">01.</span> 🤔 about
            </p>

            <p
              className={twMerge(
                "t4 opacity-40 transition-all duration-200 cursor-pointer hover:opacity-100",
                experiencePoint && "opacity-100"
              )}
              onClick={() => {
                exp.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="c1">02.</span> 🧑‍💻 experience
            </p>

            <p
              className={twMerge(
                "t4 opacity-40 transition-all duration-200 cursor-pointer hover:opacity-100",
                projectPoint && "opacity-100"
              )}
              onClick={() => {
                project.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="c1">03.</span> 💻 projects
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="t5 opacity-60">My CV:</span>

            <a className="c1" target="_blank" href="/assets/congscv.pdf">
              PDF
            </a>
            <span className="text-white"> | </span>
            <a className="c1" target="_blank" href={externals.cv}>
              Online
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            <Social
              url={externals.linkedin}
              icon={<FaLinkedinIn className="w-5 h-5" />}
            />
            <Social
              url={externals.github}
              icon={<FaGithubAlt className="w-5 h-5" />}
            />
            <Social
              url={externals.telegram}
              icon={<FaTelegramPlane className="w-5 h-5" />}
            />
            <Social
              url={externals.twitter}
              icon={<FaTwitter className="w-5 h-5" />}
            />
            <Social
              url={externals.email}
              icon={<FaEnvelope className="w-5 h-5" />}
            />
          </div>
        </div>

        <div className="lg:col-span-7 py-20 max-lg:pb-20 overflow-y-auto scroll-smooth-thin">
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
                  <img
                    src={"/assets/avatar.png"}
                    className=" object-contain z-50"
                  />
                  <div className="opacity-0 group-hover:opacity-100 duration-200 absolute top-4 p-2 rounded-lg bg-[#1C1D20]/60 -translate-x-1/2 t6 backdrop-blur-sm">
                    Hi, Nice to meet you!.
                  </div>
                </div>
              </div>

              <div className="border border-secondary grid grid-cols-12 p-3 md:p-6 items-center rounded-md">
                <div
                  className="t5 text-white/80 col-span-12"
                  dangerouslySetInnerHTML={{ __html: content.about }}
                />
              </div>
            </div>
          </div>
          <div ref={expRef} className="mb-10">
            <div className="p-6" ref={exp}>
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

          <div ref={projectRef} className="">
            <div className="p-6" ref={project}>
              <span className="c1">03.</span> Projects I've participated in{" "}
              <span className="italic opacity-40 font-thin">
                (some projects cannot be disclosed due to privacy policies)
              </span>
              :
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
                  collaboration={e.collaboration}
                  role={e.role}
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
