const CommentSkeleton = () => {
  return (
    <article className="animate-pulse py-8 border-b-[1px] last:border-0 text-primary-600">
      <h3 className="font-semibold text-primary-900">
        <span className="block mt-3 h-3 w-48 bg-neutral-200 rounded-full" />
      </h3>
      <p className="mt-3 h-3 bg-neutral-200 rounded-full"></p>
      <p className="mt-3 h-3 w-96 bg-neutral-200 rounded-full"></p>
    </article>
  )
}

export default CommentSkeleton
