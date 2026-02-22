"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

const SPRING = {
  mass: 0.1,
  damping: 10,
  stiffness: 131,
};

type MouseFollowupAnimationProps = {
  className?: string;
};

const SimpleMouseFollow = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  };

  return (
    <div
      onPointerMove={(e) => {
        handlePointerMove(e);
      }}
      onPointerEnter={() => {
        opacity.set(1);
      }}
      onPointerLeave={() => {
        opacity.set(0);
      }}
      className="rounded-full bg-background mt-20 size-[500px] cursor-none overflow-hidden"
    >
      <motion.div
        style={{
          x,
          y,
          opacity,
        }}
        className="rounded-full size-5 bg-[#ccc]"
      ></motion.div>
    </div>
  );
};

const SpringMouseFollow = () => {
  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);

  return (
    <div
      onPointerMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        xSpring.set(e.clientX - bounds.left);
        ySpring.set(e.clientY - bounds.top);
      }}
      onPointerEnter={() => {
        opacitySpring.set(1);
        scaleSpring.set(1);
      }}
      onPointerLeave={() => {
        opacitySpring.set(0);
        scaleSpring.set(0);
      }}
      className="rounded-full bg-background mt-20 size-[500px] overflow-hidden"
    >
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          scale: scaleSpring,
        }}
        className="rounded-full size-5 bg-purple-500"
      ></motion.div>
    </div>
  );
};

const MouseFollowupAnimation = ({ className }: MouseFollowupAnimationProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, SPRING);
  const ySpring = useSpring(y, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      opacitySpring.set(1);
      scaleSpring.set(1);
    };

    const handleLeave = () => {
      opacitySpring.set(0);
      scaleSpring.set(0);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);
    window.addEventListener("blur", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
    };
  }, [opacitySpring, scaleSpring, x, y]);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          scale: scaleSpring,
        }}
        className="absolute size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500"
      />
    </div>
  );
};

const Skiper61 = () => {
  return (
    <section className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
      <div className="flex h-screen w-full snap-start flex-col items-center justify-center px-5">
        <div className="grid content-start justify-items-center gap-6 text-center">
          <span className="after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:content-['']">
            Mouse follow simple
          </span>
        </div>
        <SimpleMouseFollow />
      </div>
      <div className="flex h-screen w-full snap-start flex-col items-center justify-center px-5">
        <div className="grid content-start justify-items-center gap-6 text-center">
          <span className="after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:content-['']">
            Mouse follow with Spring
          </span>
        </div>
        <SpringMouseFollow />
      </div>
    </section>
  );
};

export { MouseFollowupAnimation, SimpleMouseFollow, Skiper61, SpringMouseFollow };
