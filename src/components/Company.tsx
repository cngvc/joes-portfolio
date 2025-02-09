import React from "react";
import Card from "./Card";
import Techs from "./Techs";

const Company: React.FC<{
  time: string;
  company: string;
  url?: string;
  role?: string;
  job: string[];
  description: string;
  domains?: string;
  techs: string[];
}> = ({ time, company, url, role, description, job, domains, techs }) => {
  return (
    <Card>
      <div className="group grid grid-cols-12 p-3 md:p-6 duration-700">
        <div className="col-span-12 md:col-span-3">
          <p className="t6 text-white/60 md:mt-1">{time}</p>
        </div>
        <div className="col-span-12 md:col-span-9 md:ml-4">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={url ?? "#"}
              className="t4 leading-7 font-medium mb-2 w-auto"
              aria-label="Home"
            >
              {role ? `${role}, ` : ""}{" "}
              <span className="text-primary font-semibold">{company}</span>
            </a>

            <div className="t5 text-white/80 mb-2 lg:group-hover:text-white duration-200">
              {description}
            </div>
            <div className="t5 text-white/80 mb-2 lg:group-hover:text-white duration-200">
              Domains: {domains}
            </div>

            <ul className="list-disc list-outside t5 pl-[18px]">
              {job.map((e, index) => (
                <li key={index} className="mb-2">
                  <span className="t5 text-white/80 lg:group-hover:text-white duration-200">
                    {e}
                  </span>
                </li>
              ))}
            </ul>
            <Techs techs={techs} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Company;
