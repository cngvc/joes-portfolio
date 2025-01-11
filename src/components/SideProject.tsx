import React from "react";
import Card from "./Card";
import { FaGithub } from "react-icons/fa";
import Techs from "./Techs";
import Lists from "./Lists";
import { BsArrowUpRight } from "react-icons/bs";

const SideProject: React.FC<{
  url?: string;
  image?: string;
  title: string;
  description: string[];
  features: string[];
  techs: string[];
  repo: string;
  subtitle?: string;
  goal?: string;
}> = ({ url, title, description, techs, repo, features, subtitle, goal }) => {
  return (
    <Card>
      <div className="group grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-full mt-0.5">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={url ?? "#"}
              className="t4 leading-7 font-semibold mb-2 lg:group-hover:text-primary duration-200 flex flex-wrap items-center gap-2"
              aria-label={title}
            >
              {title}
              {subtitle && (
                <span className="t5 font-light opacity-60">({subtitle})</span>
              )}

              <a
                target="_blank"
                href={repo ?? "#"}
                aria-label="Github"
                className="duration-200 lg:hover:-translate-y-1 ease-in-out"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <BsArrowUpRight className="w-5 h-5 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1 duration-200 ease-in-out" />
            </a>

            {description.map((e, index) => (
              <p
                key={index}
                className="t5 text-white/80 mb-2 lg:group-hover:text-white duration-200"
              >
                {e}
              </p>
            ))}

            <Lists label="Main Features" data={features} />

            {goal && (
              <div className="mb-2 t5">
                <p className="text-white/60 lg:group-hover:text-white duration-200">
                  Goal: {goal}
                </p>
              </div>
            )}

            <Techs techs={techs} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SideProject;
