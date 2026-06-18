"use client";

import React, { useEffect, useRef, useState } from "react";

type SectionKey = "About" | "RecentProjects" | "Visuals" | "Ctf" | "Achievements" | "Contact";

type LazySectionProps = {
  id: string;
  section: SectionKey;
  minHeight?: string;
};

const loaders: Record<SectionKey, () => Promise<{ default: React.ComponentType }>> = {
  About: () => import("./About"),
  RecentProjects: () => import("./RecentProjects"),
  Visuals: () => import("./Visuals"),
  Ctf: () => import("./Ctf"),
  Achievements: () => import("./Achievements"),
  Contact: () => import("./Contact"),
};

export default function LazySection({
  id,
  section,
  minHeight = "70vh",
}: LazySectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const load = () => {
      loaders[section]().then((module) => {
        if (!isCancelled) {
          setComponent(() => module.default);
        }
      });
    };

    const node = rootRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      load();
      return () => {
        isCancelled = true;
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          load();
        }
      },
      { rootMargin: "900px 0px" }
    );

    observer.observe(node);

    return () => {
      isCancelled = true;
      observer.disconnect();
    };
  }, [section]);

  return (
    <section id={id} ref={rootRef} style={!Component ? { minHeight } : undefined}>
      {Component ? <Component /> : null}
    </section>
  );
}
