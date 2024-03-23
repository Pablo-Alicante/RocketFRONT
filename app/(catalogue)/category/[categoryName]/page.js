import { getCategoryById } from '@/lib/api/categories'

import ProductCard from '@/components/molecules/ProductCard'

export default async function Category ({ params, searchParams }) {
  const products = await getCategoryById(params.categoryName)

  return (
    <>
      <h1>CATEGORY {params.categoryName}</h1>
      <div className="grid grid-cols-2">
        {products && products.map((product, index) => <ProductCard key={product.id} product={product} order={index} />)}
      </div>
    </>
  )
}
