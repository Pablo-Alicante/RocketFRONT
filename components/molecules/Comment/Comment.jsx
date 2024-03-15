const Comment = ({ comment }) => {
  const { rate, title, description, createdAt, userId } = comment

  return (
    <article className="py-8 border-b-[1px] last:border-0 text-primary-600">
      <h3 className="font-semibold text-primary-900">
        {rate}/5 {title}
      </h3>
      <p className="mt-3 text-sm">{description}</p>
      <p className="mt-3 text-xs">
        <span className="mr-2">{new Date(createdAt).toUTCString()}</span> {userId}
      </p>
    </article>
  )
}

export default Comment
