"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { projects } from "@/data";

function RecentProjects() {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const [hoveredPreviewImageId, setHoveredPreviewImageId] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({});

  useEffect(() => {
    if (hoveredProjectId === null) return;

    const hoveredProject = projects.find((project) => project.id === hoveredProjectId);
    if (!hoveredProject) return;

    const images = hoveredProject.images?.length ? hoveredProject.images : [hoveredProject.img];
    if (images.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((prev) => {
        const currentIndex = prev[hoveredProjectId] ?? 0;
        return {
          ...prev,
          [hoveredProjectId]: (currentIndex + 1) % images.length,
        };
      });
    }, 1300);

    return () => window.clearInterval(intervalId);
  }, [hoveredProjectId]);

  return (
    <section className="relative px-4 py-20 sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#2a1a5a]/35 blur-[130px]" />
        <div className="absolute -right-20 top-16 h-96 w-96 rounded-full bg-[#3b2475]/30 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <h1 className="mb-10 text-center text-4xl font-extralight tracking-tight text-white sm:text-5xl">
          PROJECTS <span className="neue-machina text-violet-300">HIGHLIGHT</span>
        </h1>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const images = project.images?.length ? project.images : [project.img];
            const currentIndex = activeImageIndex[project.id] ?? 0;
            const imageToShow = images[currentIndex % images.length];
            const quickUrl =
              project.liveLink || project.githubLink || project.repoLink || project.link || "";
            const isHovered = hoveredProjectId === project.id;
            const isPreviewImageHovered = hoveredPreviewImageId === project.id;

            return (
              <article
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => {
                  setHoveredProjectId(null);
                  setHoveredPreviewImageId(null);
                }}
                className="group relative overflow-visible rounded-2xl border border-violet-200/15 bg-gradient-to-r from-[#090315]/75 via-[#0d0620]/20 to-[#12082a]/10 backdrop-blur-xl"
              >
                <div className="px-4 pt-4 sm:px-6 sm:pt-6 lg:hidden">
                  <div className="relative overflow-hidden rounded-xl border border-white/20 bg-black/80">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={imageToShow}
                        alt={`${project.title} preview`}
                        fill
                        sizes="100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 p-4 pb-6 sm:p-6 lg:p-10 lg:pr-[40%]">
                  <div className="mb-6 flex items-start justify-between">
                    <span className="text-lg text-white/60">{String(index + 1).padStart(2, "0")}</span>
              
                  </div>

                  <h2 className="neue-machina text-4xl leading-none text-white sm:text-6xl">{project.title}</h2>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-black/35 px-4 py-1 text-sm text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
                    >
                      View Details
                      <FaLocationArrow className="text-xs" />
                    </Link>

                    <Link
                      href={quickUrl || "#"}
                      target={quickUrl ? "_blank" : undefined}
                      rel={quickUrl ? "noopener noreferrer" : undefined}
                      aria-disabled={!quickUrl}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                        quickUrl                              
                          ? "border-violet-300/40 bg-violet-500/20 text-white hover:bg-violet-500/30"
                          : "pointer-events-none border-white/15 bg-white/5 text-white/40"
                      }`}
                    >
                      Quick Link
                      <FaLocationArrow className="text-xs" />
                    </Link>
                  </div>
                </div>

                <div
                  className={`pointer-events-none absolute bottom-2 right-0 z-20 hidden w-[43%] min-w-[360px] origin-bottom transition-all duration-500 lg:block ${
                    isHovered
                      ? "-translate-y-1  -translate-x-12 scale-100 opacity-100"
                      : "translate-y-2 -translate-x-4 scale-95 opacity-0"
                  }`}
                >
                  <div
                    onMouseEnter={() => setHoveredPreviewImageId(project.id)}
                    onMouseLeave={() => setHoveredPreviewImageId(null)}
                    className={`pointer-events-auto relative overflow-hidden rounded-lg border border-white/30 bg-black/80 shadow-[0_25px_65px_rgba(0,0,0,0.65)] transition-transform duration-500 ${
                      isPreviewImageHovered ? "-rotate-[5deg]" : "rotate-0"
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={imageToShow}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 1480px) 43vw, 560px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
