import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import StaticList from "./static-list-item";
import TechStack from "./tech-stack";

const GrowingProject: React.FC<{
  url?: string;
  title: string;
  description: string[];
  features: string[];
  stack: { label: string; stack: string[] }[];
  repo: string;
  subtitle?: string;
  objective?: string;
}> = ({
  url,
  title,
  description,
  stack,
  repo,
  features,
  subtitle,
  objective,
}) => {
  return (
    <div className="group hero !bg-primary/5 overflow-hidden h-auto">
      <div className="flex flex-col p-3 md:p-6">
        <div className="col-span-full md:col-span-9 mt-0.5">
          <div className="flex flex-col">
            <div className="flex flex-wrap item-desc mb-2 items-center gap-2">
              <a
                target="_blank"
                href={url ?? "#"}
                className="t4 leading-7 font-medium"
                aria-label={title}
              >
                {title}
                {subtitle && (
                  <span className="t5 font-light text-muted-foreground">
                    {" "}
                    ({subtitle})
                  </span>
                )}
              </a>
              <a
                target="_blank"
                href={repo ?? "#"}
                aria-label="Github"
                className="duration-100 lg:hover:-translate-y-1 ease-in-out"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <BsArrowUpRight className="w-5 h-5 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1 duration-100 ease-in-out" />
            </div>
            {description.map((e, index) => (
              <p key={index} className="t5 mb-2">
                {e}
              </p>
            ))}

            <StaticList label="Main Features" data={features} />

            <TechStack label="Technical Stack" data={stack} />

            {objective && <div className="t5 mb-2">Objective: {objective}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowingProject;
