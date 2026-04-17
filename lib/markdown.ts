import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  description: string
  type: 'writeups' | 'blog' | 'projects' | 'tools'
}

export interface Post extends PostMeta {
  content: string
}

export function getPostBySlug(type: string, slug: string): Post | null {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(contentDirectory, type, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug: realSlug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      description: data.description || '',
      type: type as "writeups" | "blog" | "projects" | "tools",
      content,
    }
  } catch {
    return null
  }
}

export function getAllPosts(type: string): PostMeta[] {
  try {
    const directory = path.join(contentDirectory, type)
    if (!fs.existsSync(directory)) {
      return []
    }
    
    const slugs = fs.readdirSync(directory)
    const posts = slugs
      .filter((slug) => slug.endsWith('.md'))
      .map((slug) => {
        const post = getPostBySlug(type, slug)
        // Extract just the metadata to keep it light
        if (post) {
          const { content: _, ...meta } = post
          return meta
        }
        return null
      })
      .filter(Boolean) as PostMeta[]
      
    // Sort posts by date, descending
    return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  } catch (error) {
    console.error(`Error reading directory ${type}:`, error)
    return []
  }
}

export function getAllTags(type?: string): string[] {
  let allPosts: PostMeta[] = []
  
  if (type) {
    allPosts = getAllPosts(type)
  } else {
    allPosts = [
      ...getAllPosts('writeups'),
      ...getAllPosts('blog'),
      ...getAllPosts('projects'),
      ...getAllPosts('tools'),
    ]
  }

  const tagSet = new Set<string>()
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag))
  })
  
  return Array.from(tagSet).sort()
}
