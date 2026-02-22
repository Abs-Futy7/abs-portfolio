"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "@/data";

type ProjectDetailsClientProps = {
  project: Project;
};

export default function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  const images = project.images?.length ? project.images : [project.img];
  const liveUrl =
    project.liveLink || (project.link && !project.link.includes("github.com") ? project.link : "");
  const githubUrl =
    project.githubLink ||
    project.repoLink ||
    (project.link && project.link.includes("github.com") ? project.link : "");

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="relative min-h-screen overflow-x-hidden pb-20"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-purple-500/30 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-pink-500/20 blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="absolute left-1/3 top-[45%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-rose-500/15 blur-[180px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-8 lg:px-12">
        <section className="relative flex min-h-[75vh] flex-col items-center justify-center py-16 text-center sm:min-h-[85vh]">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-0 top-6"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs text-white/90 backdrop-blur-md transition hover:border-white/40 hover:bg-black/60 sm:text-sm"
            >
              <FaArrowLeft className="text-xs" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 text-[11px] uppercase tracking-[0.28em] text-white/60"
          >
            Project
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="neue-machina text-5xl leading-[0.92] text-white sm:text-7xl lg:text-8xl"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-full border border-purple-300/40 bg-purple-800/15 px-4 py-1.5 text-xs text-white/80 backdrop-blur-md"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 max-w-3xl text-lg leading-7 text-white/75 sm:text-base"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href={liveUrl || "#"}
              target={liveUrl ? "_blank" : undefined}
              rel={liveUrl ? "noopener noreferrer" : undefined}
              aria-disabled={!liveUrl}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition cursor-pointer ${
                liveUrl
                  ? "border-lime-300/40 bg-lime-300/10 text-lime-100 hover:bg-lime-300/20"
                  : "pointer-events-none border-white/65 bg-white/5 text-white/80"
              }`}
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Link
            </Link>
            <Link
              href={githubUrl || "#"}
              target={githubUrl ? "_blank" : undefined}
              rel={githubUrl ? "noopener noreferrer" : undefined}
              aria-disabled={!githubUrl}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition cursor-pointer ${
                githubUrl
                  ? "border-white/30 bg-black/50 text-white/90 hover:bg-black/70"
                  : "pointer-events-none border-white/65 bg-white/5 text-white/80"
              }`}
            >
              <FaGithub className="text-xs" />
              GitHub
            </Link>
          </motion.div>
        </section>

        <section className="space-y-8 sm:space-y-10">
          {images.map((imageSrc, index) => (
            <motion.article
              key={`${project.slug}-image-${index}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-white/20 bg-black/45 backdrop-blur-xl"
            >
              <div className="relative h-[42vh] w-full sm:h-[62vh] lg:h-[74vh]">
                <Image
                  src={imageSrc}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </motion.main>
  );
}
