export interface Article {
  id: string
  title: string
  date: string
  dateISO: string
  path: string
  blurb: string
  readTime: string
  tags?: string[]
  category?: string
}
