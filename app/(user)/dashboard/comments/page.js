import Comment from '@/components/molecules/Comment/Comment'

const getComments = async () => {
  throw new Error('¡La API ha reventado!')

  await new Promise(resolve => setTimeout(resolve, 5000))

  const response = await fetch('http://localhost:3000/api/products/comments')

  return response.json()
}

export default async function DashboardComments ({ params, searchParams }) {
  const { comments } = await getComments()
  return (
    <>
      <h1>DASHBOARD COMMENTS</h1>
      {comments && comments.map((comment, index) => <Comment key={index} comment={comment} />)}
    </>
  )
}
