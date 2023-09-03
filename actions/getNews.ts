import type { TopHeadlinesResponse } from '@/types/types'

export const getNews = async ({
  category,
  q,
}: {
  category?: string
  q?: string
}): Promise<TopHeadlinesResponse> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines${
      category ? `?country=us&category=${category}` : ''
    }${q ? `?q=${q}` : ''}`,
    {
      headers: {
        'X-Api-Key': process.env.NEWS_API_KEY as string,
      },
    },
  )
  const data = await res.json()

  return data
}
