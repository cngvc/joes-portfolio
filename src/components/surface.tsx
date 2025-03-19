import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Surface = () => {
  const [isEnabled, $isEnabled] = useState(true);
  const x = useMotionValue(window.innerWidth);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 15 });
  const springY = useSpring(y, { stiffness: 100, damping: 15 });

  useEffect(() => {
    const handleResize = () => {
      $isEnabled(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY + window.scrollY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isEnabled, x, y]);

  const glowEffect = useTransform(
    [springX, springY],
    ([latestX, latestY]) =>
      `radial-gradient(600px at ${latestX}px ${latestY}px, var(--primary-cursor-glow), transparent 80%)`,
  );

  if (!isEnabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 right-0 z-10 transition lg:absolute max-lg:hidden"
      style={{
        background: glowEffect,
      }}
    />
  );
};

export default Surface;
