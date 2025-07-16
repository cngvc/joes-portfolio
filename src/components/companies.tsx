import { companies } from "../content.json";
import Company from "./company-item";

const Companies = () => {
  return (
    <ol className="gap-2 overflow-hidden list-none group/list">
      {companies.map((e, index) => (
        <li
          key={index}
          className="lg:hover:opacity-100! lg:group-hover/list:opacity-60 duration-100"
        >
          <Company {...e} />
        </li>
      ))}
    </ol>
  );
};

export default Companies;
