import React from "react";
import Card from "./Card";

const Company: React.FC<{
  time: string;
  company: string;
  url?: string;
  role?: string;
  job: string[];
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
              className="t4 leading-7 font-medium mb-2 w-auto"
            >
              {role ? `${role}, ` : ""}{" "}
              <span className="text-primary font-semibold">{company}</span>
            </a>

            <div
              className="t5 text-white/80 mb-4"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <ul className="list-disc list-inside t5 text-white/60">
              {job.map((e, index) => (
                <li key={index} className="t5 text-white/80 mb-4">
                  {e}
                </li>
              ))}
            </ul>
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

export default Company;
