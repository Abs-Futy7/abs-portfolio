"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type MouseFollowupAnimationProps = {
  className?: string;
};

const moveDot = (
  dot: HTMLDivElement | null,
  x: number,
  y: number,
  visible = true
) => {
  if (!dot) return;

  dot.style.opacity = visible ? "1" : "0";
  dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
};

const SimpleMouseFollow = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        moveDot(dotRef.current, event.clientX - bounds.left, event.clientY - bounds.top);
      }}
      onPointerEnter={() => {
        if (dotRef.current) dotRef.current.style.opacity = "1";
      }}
      onPointerLeave={() => {
        if (dotRef.current) dotRef.current.style.opacity = "0";
      }}
      className="rounded-full bg-background mt-20 size-[500px] cursor-none overflow-hidden"
    >
      <div ref={dotRef} className="rounded-full size-5 bg-[#ccc] opacity-0 transition-opacity" />
    </div>
  );
};

const SpringMouseFollow = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        moveDot(dotRef.current, event.clientX - bounds.left, event.clientY - bounds.top);
      }}
      onPointerEnter={() => {
        if (dotRef.current) dotRef.current.style.opacity = "1";
      }}
      onPointerLeave={() => {
        if (dotRef.current) dotRef.current.style.opacity = "0";
      }}
      className="rounded-full bg-background mt-20 size-[500px] overflow-hidden"
    >
      <div
        ref={dotRef}
        className="rounded-full size-5 bg-purple-500 opacity-0 transition-[opacity,transform] duration-150"
      />
    </div>
  );
};

const MouseFollowupAnimation = ({ className }: MouseFollowupAnimationProps) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateDot = () => {
      frameRef.current = null;
      moveDot(dotRef.current, positionRef.current.x - 16, positionRef.current.y - 16);
    };

    const handleMove = (event: PointerEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateDot);
      }
    };

    const handleLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);
    window.addEventListener("blur", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("blur", handleLeave);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        ref={dotRef}
        className="absolute size-8 rounded-full bg-purple-500 opacity-0 transition-opacity duration-150 will-change-transform"
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
          <span className="after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
            Mouse follow with Spring
          </span>
        </div>
        <SpringMouseFollow />
      </div>
    </section>
  );
};

export { MouseFollowupAnimation, SimpleMouseFollow, Skiper61, SpringMouseFollow };
