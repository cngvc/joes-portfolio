import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Card from "./Card";

const Company: React.FC<{
  time: string;
  company: string;
  url?: string;
  role?: string;
  job: string;
  description: string;
  tech: string[];
}> = ({ time, company, url, role, description, job, tech }) => {
  return (
    <Card>
      <div className="group grid grid-cols-12 p-3 md:p-6">
        <div className="col-span-12 md:col-span-3">
          <p className="t6 text-white/60 md:mt-1">{time}</p>
        </div>
        <div className="col-span-12 md:col-span-9 md:ml-4">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={url ?? "#"}
              className="t4 leading-7 font-semibold mb-2 group-hover:text-secondary flex items-center gap-2"
            >
              {role ? `${role} | ` : ""} {company}
              <span className="text-white">
                <FaArrowUpRightFromSquare className="text-sm fill-white group-hover:fill-secondary" />
              </span>
            </a>
            <div
              className="t5 text-white/60 mb-4"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div
              className="t5 text-white/60 mb-4"
              dangerouslySetInnerHTML={{ __html: job }}
            />
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

export default Company;
