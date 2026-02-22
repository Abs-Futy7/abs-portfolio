import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data";
import ProjectDetailsClient from "./ProjectDetailsClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const findProject = (slug: string) => projects.find((project) => project.slug === slug);

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Abs Portfolio",
    };
  }

  return {
    title: `${project.title} | Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
