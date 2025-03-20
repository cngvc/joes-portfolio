import { companies } from "../content.json";
import Company from "./company-item";

const Companies = () => {
  return (
    <ol className="gap-2 overflow-hidden list-none group/list">
      {companies.map((e, index) => (
        <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-50 duration-100">
          <Company
            key={index}
            time={e.time}
            url={e.url}
            company={e.company}
            role={e.role}
            description={e.description}
            job={e.job}
            techs={e.techs}
            domains={e.domains}
          />
        </li>
      ))}
    </ol>
  );
};

export default Companies;
