import { redirect } from "next/navigation";
import { COLLECTIONS } from "@/data/collections";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({
    slug: c.slug,
  }));
}

export default async function WorkCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/projects/${slug}`);
}
