import { FaEnvelope, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { externals } from "../urls";
import Social from "./social";

const SocialList = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Social
        url={externals.linkedin}
        type="Linkedin"
        icon={<FaLinkedinIn className="w-4 h-4" />}
      />
      <Social
        url={externals.github}
        type="Github"
        icon={<FaGithubAlt className="w-4 h-4" />}
      />
      <Social
        url={externals.email}
        type="Email"
        icon={<FaEnvelope className="w-4 h-4" />}
      />
      <Social
        url={externals.leetcode}
        type="Leetcode"
        icon={<SiLeetcode className="w-4 h-4" />}
      />
    </div>
  );
};

export default SocialList;
