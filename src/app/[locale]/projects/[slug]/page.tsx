import { Project } from '@/widgets';

export default async function ProjectId({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <Project slug={slug} />;
}
