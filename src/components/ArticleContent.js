export default function ArticleContent({ content }) {
  return (
    <div 
     className='
        [&>p]:my-2 text-lg
        '
     dangerouslySetInnerHTML={{ __html: content}}></div>
  )
}
