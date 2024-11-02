import { ref, computed } from 'vue'
import type { Article, ArticleMetadata } from '@/types/Article'

export function useArticles() {
  const articles = ref<Article[]>([])

  const sortedArticles = computed(() =>
    [...articles.value].sort(
      (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
    )
  )

  const getArticlesByTag = (tag: string) =>
    articles.value.filter((article) => article.tags?.includes(tag))

  const getArticlesByCategory = (category: string) =>
    articles.value.filter((article) => article.category === category)

  const getArticleMetadata = (id: string): ArticleMetadata | undefined => {
    const article = articles.value.find((a) => a.id === id)
    if (!article) return undefined

    const { component, ...metadata } = article
    return metadata
  }

  return {
    articles,
    sortedArticles,
    getArticlesByTag,
    getArticlesByCategory,
    getArticleMetadata,
  }
}
