function ArticleTags ({ tags, ...props }) {
  return (
    <nav className={props.className && props.className}>
      {tags
        .sort()
        .map((tag, index) =>
          <span key={index} className='text-black badge badge-md bg-slate-300'>{tag}</span>
        )}
    </nav>
  )
}

export default ArticleTags
