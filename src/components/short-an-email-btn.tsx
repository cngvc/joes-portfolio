import { motion } from "framer-motion";
import { LuMailPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { internal } from "../urls";

const ShortAnEmailBtn = () => {
  return (
    <motion.div
      className="w-max gap-2 group"
      whileHover={{ scale: 1.025, opacity: 1 }}
    >
      <Link
        to={internal.email}
        aria-label="Send me an email"
        className="item-desc flex items-center gap-2"
      >
        <LuMailPlus /> Shoot me an email!
      </Link>{" "}
    </motion.div>
  );
};

export default ShortAnEmailBtn;
