import { TbMailShare } from "react-icons/tb";
import { Link } from "react-router-dom";
import { internal } from "../urls";

const ShortAnEmailBtn = () => {
  return (
    <Link
      to={internal.email}
      className="group flex items-center flex-wrap gap-2"
    >
      <span className="item-desc font-medium">Short me an email</span>{" "}
      <TbMailShare className="w-5 h-5 lg:group-hover:translate-x-1 duration-200 ease-in-out" />
    </Link>
  );
};

export default ShortAnEmailBtn;
