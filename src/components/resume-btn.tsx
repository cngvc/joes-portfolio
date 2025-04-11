import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link as RLink } from "react-router-dom";
import { internal } from "../urls";

const Link = motion.create(RLink);

interface SparklesButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: { first: string; second: string };
  sparklesCount?: number;
  animationSpeed?: number;
}

interface SparkleProps {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
  animationSpeed?: number;
}

const ResumeBtn = () => {
  return (
    <Link
      to={internal.cv}
      whileHover={{ scale: 1.05 }}
      target="_blank"
      className="t5 font-normal text-white px-6 py-3 z-10 relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-linear-to-r from-primary-lighter to-primary-darker focus:ring-0 focus:outline-hidden shadow-lg shadow-primary/40"
    >
      My Resume
    </Link>
  );
};

const SparklesButton: React.FC<SparklesButtonProps> = ({
  colors = { first: "var(--primary-lighter)", second: "var(--primary-darker)" },
  className,
  sparklesCount = 10,
  animationSpeed = 1.5,
  ...props
}) => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const generateStar = (): SparkleProps => ({
      id: crypto.randomUUID(),
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      color: Math.random() > 0.5 ? colors.first : colors.second,
      delay: Math.random() * 2,
      scale: Math.random() * 0.8 + 0.3,
      lifespan: Math.random() * 15 + 10,
    });

    const initializeStars = () => {
      setSparkles(Array.from({ length: sparklesCount }, generateStar));
    };

    const updateStars = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((star) =>
          star.lifespan <= 0
            ? generateStar()
            : { ...star, lifespan: star.lifespan - 0.05 },
        ),
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 60);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div className="relative" {...props}>
      <span className="relative inline-block">
        <div className="hidden lg:block">
          {sparkles.map((sparkle) => (
            <Sparkle
              key={sparkle.id}
              {...sparkle}
              animationSpeed={animationSpeed}
            />
          ))}
        </div>
        <ResumeBtn />
      </span>
    </div>
  );
};

const Sparkle: React.FC<SparkleProps> = ({
  x,
  y,
  color,
  delay,
  scale,
  animationSpeed = 1.5,
}) => {
  return (
    <motion.svg
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, x: "-50%", y: "-50%", left: x, top: y }}
      animate={{
        opacity: [0, 0.75, 1, 0.75, 0],
        scale: [0, scale, scale * 0.8, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: animationSpeed, repeat: Infinity, delay }}
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </motion.svg>
  );
};

export default SparklesButton;
