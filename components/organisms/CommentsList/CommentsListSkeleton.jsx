import CommentSkeleton from '@/components/molecules/Comment/CommentSkeleton'

const CommentsListSkeleton = async () => {
  return (
    <>
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </>
  )
}

export default CommentsListSkeleton
