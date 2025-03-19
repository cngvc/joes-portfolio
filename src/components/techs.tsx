import { motion } from "framer-motion";

const Techs = ({ techs }: { techs: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="t6 py-1 px-2 text-white bg-primary rounded-full"
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
};

export default Techs;
