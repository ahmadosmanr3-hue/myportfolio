"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.0005,
  });

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] h-[3px] w-full origin-left will-change-transform"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      aria-hidden
    >
      <div className="h-full w-full bg-gradient-to-r from-[var(--royal-violet)] via-[var(--electric-purple)] to-[#c4b5fd] shadow-[0_0_12px_rgba(168,85,247,0.5)]" />
    </motion.div>
  );
}
