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
}> = ({ url, title, description, tech, repo, features }) => {
  return (
    <Card>
      <div className="group grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-full mt-0.5">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={url ?? "#"}
              className="t4 leading-7 font-semibold mb-2 group-hover:text-primary flex items-center gap-2"
            >
              {title}
              <a target="_blank" href={repo ?? "#"}>
                <FaGithub />
              </a>
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
                  <li className="text-white/60" key={index}>
                    {e}
                  </li>
                ))}
              </ul>
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
