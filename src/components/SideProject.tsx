import React from "react";
import Card from "./Card";
import { FaGithub } from "react-icons/fa";

const SideProject: React.FC<{
  url?: string;
  image?: string;
  title: string;
  description: string[];
  features: string[];
  tech: string[];
  repo: string;
  subtitle?: string;
  goal?: string;
}> = ({ url, title, description, tech, repo, features, subtitle, goal }) => {
  return (
    <Card>
      <div className="group grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-full mt-0.5">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={url ?? "#"}
              className="t4 leading-7 font-semibold mb-2 group-hover:text-primary flex flex-wrap items-center gap-2"
              aria-label={title}
            >
              {title}

              <a target="_blank" href={repo ?? "#"} aria-label="Github">
                <FaGithub className="w-5 h-5" />
              </a>
              {subtitle && (
                <span className="t5 font-light opacity-60">({subtitle})</span>
              )}
            </a>

            {description.map((e, index) => (
              <p key={index} className="t5 text-white/80 mb-4">
                {e}
              </p>
            ))}

            {features && (
              <ul className="list-disc mb-4 list-inside t5 text-white/60">
                <div className="text-white/60">Main Features:</div>
                {features?.map((e, index) => (
                  <li key={index}>
                    <span className="text-white/60">{e}</span>
                  </li>
                ))}
              </ul>
            )}

            {goal && (
              <div className="mb-4 t5 text-white/60">
                <div className="text-white/60"></div>
                <p className="text-white/60">Goal: {goal}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {tech.map((e, index) => (
                <div
                  key={index}
                  className="t6 py-1 px-2 text-primary-light bg-primary-dark rounded-full"
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SideProject;
