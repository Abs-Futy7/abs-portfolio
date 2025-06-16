import { projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function RecentProjects() {
  return (
    <div className="py-20 px-4 sm:px-8">
      <h1 className="text-5xl font-extralight text-center font-[Neue_Machina] tracking-tight">
        A small section of{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          RECENT PROJECTS
        </span>
      </h1>
      <div className="py-10 px-2 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-20  mx-auto w-[90%] lg:w-[80%] xl:w-[70%] ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-gradient-to-r from-purple-900/60 to-gray-900 rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.025] duration-300 border-1 border-purple-800"
            >
              <div className="relative w-full h-48  bg-gradient-to-br from-slate-900 to-slate-800">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  priority={true}
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col px-5 py-4">
                <h1 className="font-bold text-xl lg:text-2xl line-clamp-1 mb-1 text-gray-300 ">
                  {project.title}
                </h1>
                <p className="text-gray-500  text-sm lg:text-base line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-200  text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-end">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-700/80 hover:bg-blue-800 transition-colors duration-200 rounded-full px-4 py-2 text-sm text-white font-medium shadow"
                  >
                    View Project
                    <FaLocationArrow className="text-white text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
