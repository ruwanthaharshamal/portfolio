import PostLayout from "@/components/post-layout"

export default function WriteupPage({ params }: { params: { slug: string } }) {
  return <PostLayout params={params} type="writeups" backUrl="/writeups" backTitle="Writeups" />
}
