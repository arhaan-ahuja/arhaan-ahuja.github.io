export const SITE = {
  title: 'Tariff to Table',
  tagline: 'Understanding how trade policy affects everyday consumers.',
  author: 'Arhaan Ahuja',
  paperTitle:
    "To what extent has India's recent shift toward trade protectionism affected social and income inequality?",
  // The full research paper (served from /public).
  paperUrl: `${import.meta.env.BASE_URL}research-paper.pdf`,
}

export interface NavItem {
  label: string
  to: string
}

export const NAV: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Research', to: '/research' },
  { label: 'Who Pays?', to: '/simulator' },
  { label: 'Timeline', to: '/timeline' },
  { label: 'Learn', to: '/learn' },
  { label: 'Data', to: '/visualizations' },
  { label: 'FAQ', to: '/faq' },
]
