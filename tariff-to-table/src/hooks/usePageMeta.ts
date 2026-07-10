import { useEffect } from 'react'

// Lightweight per-page SEO: updates document title and meta description.
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = `${title} · Tariff to Table`
    document.title = fullTitle
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
