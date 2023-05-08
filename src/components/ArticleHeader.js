// Components
import DateLabel from '@/components/DateLabel'
import ArticleTags from '@/components/ArticleTags'

// Utils
import { capitalizeFirstLetter } from '@/lib/caseUtils'
import Balancer from 'react-wrap-balancer'

function ArticleHeader (props) {
  const { title, publishedAt, tags } = props

  const dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <div className='mb-10 text-center'>
      <DateLabel
        className='text-gray-500' options={dateFormatOptions}
        callback={capitalizeFirstLetter}
      >
        {publishedAt}
      </DateLabel>

      <h1 className='my-3 text-4xl font-bold'>
        <Balancer>{title}</Balancer>
      </h1>
      <ArticleTags
        className='flex justify-center gap-2 pt-3'
        tags={tags}
      />
    </div>
  )
}

export default ArticleHeader
