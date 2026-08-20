import PostLayout from "@/components/post-layout"

export default function ResearchPostPage({ params }: { params: { slug: string } }) {
  return <PostLayout params={params} type="research" backUrl="/research" backTitle="Research" />
}
