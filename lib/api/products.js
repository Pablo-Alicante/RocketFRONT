import { ENDPOINT_PRODUCTS } from '@/lib/api/endpoints'

export const getProductById = async (modelId) => {
  const response = await fetch(`${process.env.API_URL}${ENDPOINT_PRODUCTS}/${modelId}`)

  return response.json()
}
