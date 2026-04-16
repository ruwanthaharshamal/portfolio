import PostLayout from "@/components/post-layout"

export default function ToolPage({ params }: { params: { slug: string } }) {
  return <PostLayout params={params} type="tools" backUrl="/tools" backTitle="Tools" />
}
