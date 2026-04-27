"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Soft violet “flashlight” + wide ambient that follow the cursor.
 * Off on touch devices and when prefers-reduced-motion is on.
 */
export function CursorGlow() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const qFine = window.matchMedia("(pointer: fine)");
    const qReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const check = () => setActive(qFine.matches && !qReduce.matches);
    check();
    qFine.addEventListener("change", check);
    qReduce.addEventListener("change", check);
    return () => {
      qFine.removeEventListener("change", check);
      qReduce.removeEventListener("change", check);
    };
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 32, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 200, damping: 32, mass: 0.35 });
  const lagX = useSpring(x, { stiffness: 48, damping: 38, mass: 0.6 });
  const lagY = useSpring(y, { stiffness: 48, damping: 38, mass: 0.6 });

  useEffect(() => {
    if (!active) return;
    x.set(window.innerWidth * 0.5);
    y.set(window.innerHeight * 0.38);
  }, [active, x, y]);

  useEffect(() => {
    if (!active) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [active, x, y]);

  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${sx}px ${sy}px, rgba(192, 132, 252, 0.14) 0%, rgba(109, 40, 217, 0.06) 40%, transparent 55%)`;
  const ambient = useMotionTemplate`radial-gradient(1000px circle at ${lagX}px ${lagY}px, rgba(88, 28, 135, 0.12) 0%, transparent 50%)`;

  if (!active) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[0]"
        style={{ background: ambient }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed inset-0 z-[0]"
        style={{ background: spotlight }}
        aria-hidden
      />
    </>
  );
}
