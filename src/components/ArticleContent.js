export default function ArticleContent({ content }) {
  return (
    <div 
      className='prose prose-lg prose-slate'
      dangerouslySetInnerHTML={{ __html: content}} 
    />
  )
}
