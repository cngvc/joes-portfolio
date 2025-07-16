import { motion } from "framer-motion";
import { LuMailPlus } from "react-icons/lu";
import { Link as RLink } from "react-router-dom";
import { internal } from "../urls";

const Link = motion.create(RLink);

const ShortAnEmailBtn = () => {
  return (
    <div className="group">
      <Link
        to={internal.email}
        whileHover={{ scale: 1.025, opacity: 1 }}
        aria-label="Send me an email"
        className="item-desc flex items-center gap-2 w-max "
      >
        <LuMailPlus /> Shoot me an email!
      </Link>
    </div>
  );
};

export default ShortAnEmailBtn;
