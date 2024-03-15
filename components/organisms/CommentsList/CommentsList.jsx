import Comment from '@/components/molecules/Comment/Comment'

const getComments = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000))

  const response = await fetch('http://localhost:3000/api/products/comments')

  return response.json()
}

const CommentsList = async () => {
  const { comments } = await getComments()

  return (
    <>
      {comments && comments.map(comment => <Comment comment={comment} />)}
    </>
  )
}

export default CommentsList
