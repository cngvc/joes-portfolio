import { sides } from "../content.json";
import SideProject from "./side-project";

const SideProjects = () => {
  return (
    <ol className="gap-2 overflow-hidden list-none group/list">
      {sides.map((e, index) => (
        <li className="lg:hover:opacity-100! lg:group-hover/list:opacity-50 duration-200">
          <SideProject
            key={index}
            url={e.url}
            title={e.title}
            description={e.description}
            techs={e.techs}
            repo={e.repo}
            features={e.features}
            subtitle={e.subtitle}
            goal={e.goal}
          />
        </li>
      ))}
    </ol>
  );
};

export default SideProjects;
