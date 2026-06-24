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
  type: 'security-blog' | 'tech-blog' | 'projects' | 'tools'
  platform?: string
}

export interface Post extends PostMeta {
  content: string
}

export function getPostBySlug(type: string, slug: string | string[]): Post | null {
  try {
    const slugPath = Array.isArray(slug) ? slug.join('/') : slug
    const realSlug = slugPath.replace(/\.md$/, '')
    const fullPath = path.join(contentDirectory, type, `${realSlug}.md`)
    
    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Infer platform from directory if not explicitly in frontmatter
    let inferredPlatform = data.platform
    if (!inferredPlatform && Array.isArray(slug) && slug.length > 1) {
      // Use the first directory as the platform name (e.g. htb/post -> HTB)
      const folder = slug[0]
      inferredPlatform = folder.length <= 4 ? folder.toUpperCase() : folder.charAt(0).toUpperCase() + folder.slice(1)
    }

    return {
      slug: realSlug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      description: data.description || '',
      type: type as "security-blog" | "tech-blog" | "projects" | "tools",
      platform: inferredPlatform,
      content,
    }
  } catch {
    return null
  }
}

function getFilesRecursively(dir: string, baseDir: string = dir): string[] {
  let results: string[] = []
  const list = fs.readdirSync(dir)
  
  list.forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath, baseDir))
    } else if (file.endsWith('.md')) {
      // Get the relative path from the base directory
      const relativePath = path.relative(baseDir, fullPath)
      results.push(relativePath.replace(/\\/g, '/')) // Use forward slashes for slugs
    }
  })
  
  return results
}

export function getAllPosts(type: string): PostMeta[] {
  try {
    const directory = path.join(contentDirectory, type)
    if (!fs.existsSync(directory)) {
      return []
    }
    
    const filePaths = getFilesRecursively(directory)
    const posts = filePaths
      .map((filePath) => {
        // Pass slug as an array for nested directories
        const slugArray = filePath.replace(/\.md$/, '').split('/')
        const post = getPostBySlug(type, slugArray)
        
        if (post) {
          const { content: _, ...meta } = post
          return meta
        }
        return null
      })
      .filter(Boolean) as PostMeta[]
      
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
