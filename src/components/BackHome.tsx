import { Link } from "react-router-dom";
import { internal } from "../urls";

const BackHome = () => {
  return (
    <Link
      to={internal.home}
      replace
      className="t4 font-medium text-center text-primary lg:hover:text-primary-light duration-200 mx-auto"
      aria-label="Home"
    >
      Back to Home
    </Link>
  );
};

export default BackHome;
