import { Link } from "react-router-dom";
import { internal } from "../urls";

const ResumeBtn = () => {
  return (
    <div className="flex items-center mb-3">
      <Link
        to={internal.cv}
        target="_blank"
        className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-orange-400 to-orange-600 text-foreground focus:ring-0 focus:outline-hidden shadow-lg shadow-orange-500/50"
      >
        <span className="t5 font-normal text-white px-6 py-3">My Resume</span>
      </Link>
    </div>
  );
};

export default ResumeBtn;
