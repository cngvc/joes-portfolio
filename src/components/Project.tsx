import React from "react";
import { FaFileCode } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Card from "./Card";

const Project: React.FC<{
  url?: string;
  image?: string;
  title: string;
  description: string;
  job?: string;
  tech: string[];
}> = ({ url, image, title, description, job, tech }) => {
  return (
    <Card>
      <div className="group grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-3 py-2 flex justify-center items-start">
          {image ? (
            <img
              src={image}
              className="w-full h-auto object-contain rounded-md"
            />
          ) : (
            <FaFileCode fill="#ECAA4320" className="w-3/5 h-auto" />
          )}
        </div>
        <div className="col-span-9 ml-4 md:ml-8 mt-0.5">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={url ?? "#"}
              className="t4 leading-7 font-semibold mb-2 group-hover:text-secondary flex items-center gap-2"
            >
              {title}
              <span className="text-white">
                <FaArrowUpRightFromSquare className="text-sm fill-white group-hover:fill-secondary" />
              </span>
            </a>
            <p className="t5 text-white/60 mb-4">{description}</p>
            {job && (
              <div
                className="t5 text-white/80 mb-4"
                dangerouslySetInnerHTML={{ __html: job }}
              />
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
