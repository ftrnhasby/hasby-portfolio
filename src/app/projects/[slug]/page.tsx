import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { ProjectDetailView } from "@/components/ProjectDetailView";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  const pageTitle = `${project.title} — Direct Response Video Spec Ad | Fitran Hasby`;
  const description = project.heroSummary.en;
  const canonicalUrl = `/projects/${slug}`;

  return {
    title: {
      absolute: pageTitle,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: "Fitran Hasby Portfolio",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${project.title} Spec Ad Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const currentIdx = featuredProjects.findIndex((p) => p.slug === project.slug);
  const nextRaw =
    currentIdx >= 0
      ? featuredProjects[(currentIdx + 1) % featuredProjects.length]
      : featuredProjects[0];

  const nextProject =
    nextRaw && nextRaw.slug !== project.slug
      ? { slug: nextRaw.slug, title: nextRaw.title, category: nextRaw.category }
      : undefined;

  return <ProjectDetailView project={project} nextProject={nextProject} />;
}
