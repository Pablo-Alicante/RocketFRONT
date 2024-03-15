import { ENDPOINT_CATEGORIES, ENDPOINT_CATEGORY } from '@/lib/api/endpoints'

export const getCategories = async () => {
  const response = await fetch(`${process.env.API_URL}${ENDPOINT_CATEGORIES}`)

  if (!response.ok) {
    throw new Error('Ha fallado la consulta.')
  }

  return response.json()
}

export const getCategoryById = async (categoryId) => {
  const response = await fetch(`${process.env.API_URL}${ENDPOINT_CATEGORY}/${categoryId}`)

  if (!response.ok) {
    throw new Error('Ha fallado la consulta.')
  }

  return response.json()
}
