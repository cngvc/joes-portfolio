import React from "react";
import { FaFileCode } from "react-icons/fa";
import Card from "./Card";

const Project: React.FC<{
  url?: string;
  image?: string;
  title: string;
  subtitle?: string;
  description: string[];
  composition:
    | {
        size: string;
        role: string;
      }
    | undefined;
  collaboration: string[] | undefined;
  role: string[] | undefined;
  job?: string;
  tech: string[];
}> = ({
  url,
  image,
  title,
  subtitle,
  description,
  job,
  tech,
  composition,
  collaboration,
  role,
}) => {
  return (
    <Card>
      <div className="group grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-3 py-2 justify-center items-start hidden md:flex mr-4 md:mr-8 ">
          {image ? (
            <img
              src={image}
              className="w-full h-auto object-contain bg-secondary/20 rounded-md"
            />
          ) : (
            <FaFileCode fill="#ECAA4320" className="w-3/5 h-auto" />
          )}
        </div>
        <div className="col-span-full md:col-span-9 mt-0.5">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={url ?? "#"}
              className="t4 leading-7 font-semibold mb-2 group-hover:text-secondary flex items-center gap-2"
            >
              {title}{" "}
              {subtitle && (
                <span className="t5 font-light opacity-60">({subtitle})</span>
              )}
            </a>

            {description.map((e, index) => (
              <p key={index} className="t5 text-white/80 mb-4">
                {e}
              </p>
            ))}

            {job && (
              <div
                className="t5 text-white/80 mb-4"
                dangerouslySetInnerHTML={{ __html: job }}
              />
            )}

            {composition && (
              <ul className="list-disc mb-4 list-inside t5">
                <div className="text-white/60">Team Composition:</div>
                {composition && (
                  <>
                    <li className="text-white/60">Size: {composition?.size}</li>
                    <li className="text-white/60">
                      Roles: {composition?.role}
                    </li>
                  </>
                )}
              </ul>
            )}

            {role && (
              <ul className="list-disc mb-4 list-inside t5 text-white/60">
                <div className="text-white/60">My Responsibility:</div>
                {role?.map((e, index) => (
                  <li className="text-white/60" key={index}>
                    {e}
                  </li>
                ))}
              </ul>
            )}

            {collaboration && (
              <ul className="list-disc mb-4 list-inside t5 text-white/60">
                <div className="text-white/60">Collaboration:</div>
                {collaboration?.map((e, index) => (
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
                  className="t6 py-1 px-2 text-secondary bg-secondary/20 rounded-full"
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

export default Project;
