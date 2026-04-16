import PostLayout from "@/components/post-layout"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <PostLayout params={params} type="blog" backUrl="/blog" backTitle="Blog" />
}
