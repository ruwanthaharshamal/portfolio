import PostLayout from "@/components/post-layout"

export default function TechBlogPostPage({ params }: { params: { slug: string } }) {
  return <PostLayout params={params} type="tech-blog" backUrl="/tech-blog" backTitle="Tech Blog" />
}
