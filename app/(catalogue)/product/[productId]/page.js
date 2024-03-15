import { getProductById } from '@/lib/api/products'
import { Suspense } from 'react'
import CommentsList from '@/components/organisms/CommentsList/CommentsList'
import CommentsListSkeleton from '@/components/organisms/CommentsList/CommentsListSkeleton'



export default async function Product ({ params, searchParams }) {
  const product = await getProductById(params.productId)

  return (
    <>
      <h1>PRODUCTO {product.title}</h1>
      <h2>Comentarios</h2>
      <Suspense fallback={<CommentsListSkeleton />}>
        <CommentsList />
      </Suspense>
    </>
  )
}
