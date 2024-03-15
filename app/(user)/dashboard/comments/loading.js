import CommentSkeleton from '@/components/molecules/Comment/CommentSkeleton'

export default function DashboardCommentsLoading() {
  return (
    <>
      <h2>Cargando comentarios...</h2>
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </>
  )
}
