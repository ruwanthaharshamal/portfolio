import PostLayout from "@/components/post-layout"

export default function SecurityBlogPage({ params }: { params: { slug: string[] } }) {
  return <PostLayout params={params} type="security-blog" backUrl="/security-blog" backTitle="Security Blog" />
}
