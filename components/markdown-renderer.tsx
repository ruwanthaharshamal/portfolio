"use client"

import { useEffect, useState } from 'react'
import { remark } from 'remark'
import html from 'remark-html'
import { createHighlighter, type HighlighterCore } from 'shiki'

let highlighterPromise: Promise<HighlighterCore> | null = null;

function getShiki() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['javascript', 'typescript', 'python', 'bash', 'json', 'yaml', 'html', 'css', 'go', 'rust', 'c', 'cpp'],
    });
  }
  return highlighterPromise;
}

export function MarkdownRenderer({ content }: { content: string }) {
  const [htmlContent, setHtmlContent] = useState<string>('')
  const [isClient, setIsClient] = useState(false)

  // Process HTML to find <pre><code> blocks and highlight them
  async function processCodeBlocks(htmlStr: string, highlighter: HighlighterCore, theme: string) {
    const codeBlockRegex = /<pre><code class="language-([^"]+)">([\s\S]*?)<\/code><\/pre>/g;
    
    return htmlStr.replace(codeBlockRegex, (match, language, code) => {
      try {
        // Unescape some HTML entities that remark-html escaped
        const unescapedCode = code
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")

        const htmlTheme = highlighter.codeToHtml(unescapedCode, {
          lang: language || 'text',
          theme: theme,
        });
        return htmlTheme;
      } catch (e) {
        console.error(`Failed to highlight code block for ${language}`, e);
        return match;
      }
    });
  }

  useEffect(() => {
    let mounted = true
    
    async function processContent() {
      try {
        // Parse markdown to HTML
        const result = await remark()
          .use(html, { sanitize: false })
          .process(content)
          
        let processedHtml = result.toString()

        // Highlight code blocks
        if (typeof window !== 'undefined') {
          const highlighter = await getShiki()
          const theme = document.documentElement.classList.contains('dark') ? 'github-dark' : 'github-light'
          
          if (highlighter) {
            processedHtml = await processCodeBlocks(processedHtml, highlighter, theme)
          }
        }
        
        if (mounted) {
          setHtmlContent(processedHtml)
          setIsClient(true)
        }
      } catch (error) {
        console.error('Error rendering markdown:', error)
        if (mounted) {
          setHtmlContent('<p>Error rendering content.</p>')
          setIsClient(true)
        }
      }
    }
    
    processContent()
    return () => { mounted = false }
  }, [content])

  // Effect to handle theme changes for code blocks
  useEffect(() => {
    if (!isClient || !htmlContent) return

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          // Re-trigger content processing when theme changes
          const event = new Event('theme-change')
          window.dispatchEvent(event)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    
    // Process HTML to find <pre><code> blocks and highlight them
    async function processCodeBlocksLocal(htmlStr: string, highlighter: HighlighterCore, theme: string) {
      const codeBlockRegex = /<pre><code class="language-([^"]+)">([\s\S]*?)<\/code><\/pre>/g;
      
      return htmlStr.replace(codeBlockRegex, (match, language, code) => {
        try {
          // Unescape some HTML entities that remark-html escaped
          const unescapedCode = code
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")

          const htmlTheme = highlighter.codeToHtml(unescapedCode, {
            lang: language || 'text',
            theme: theme,
          });
          return htmlTheme;
        } catch (e) {
          console.error(`Failed to highlight code block for ${language}`, e);
          return match;
        }
      });
    }

    const handleThemeChange = async () => {
      const highlighter = await getShiki()
      const theme = document.documentElement.classList.contains('dark') ? 'github-dark' : 'github-light'
      // Re-render
      const result = await remark().use(html, { sanitize: false }).process(content)
      if (highlighter) {
        const processedHtml = await processCodeBlocksLocal(result.toString(), highlighter, theme)
        setHtmlContent(processedHtml)
      }
    }

    window.addEventListener('theme-change', handleThemeChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('theme-change', handleThemeChange)
    }
  }, [isClient, content, htmlContent])


  return (
    <div 
      className="prose prose-slate dark:prose-invert max-w-none prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0"
      dangerouslySetInnerHTML={{ __html: htmlContent || '<p>Loading...</p>' }}
    />
  )
}
