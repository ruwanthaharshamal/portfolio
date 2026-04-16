import PostLayout from "@/components/post-layout"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <PostLayout params={params} type="projects" backUrl="/projects" backTitle="Projects" />
}
