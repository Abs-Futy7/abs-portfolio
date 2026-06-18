import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const MovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    src: string;
    alt: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
  const animationDirection = direction === "left" ? "forwards" : "reverse";
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      style={
        {
          "--animation-direction": animationDirection,
          "--animation-duration": duration,
        } as React.CSSProperties
      }
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <li
            key={`${item.src}-${idx}`}
            className="relative h-[17.5rem] w-[17.5rem] flex-shrink-0 overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 70vw, 280px"
              loading="lazy"
              quality={70}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
