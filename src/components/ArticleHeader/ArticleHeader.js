// Components
import DateLabel from '@/components/DateLabel'

// Utils
import { capitalizeFirstLetter } from '@/lib/caseUtils'
import Balancer from 'react-wrap-balancer'

function ArticleHeader (props) {
  const { title, publishedAt, tags } = props

  const dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  console.log(props)

  return (
    <div className='mb-10 text-center'>
      <DateLabel
        className='text-gray-500' options={dateFormatOptions}
        callback={capitalizeFirstLetter}
      >
        {publishedAt}
      </DateLabel>

      <h1 className='mb-4 text-4xl font-bold'>
        <Balancer>{title}</Balancer>
      </h1>
    </div>
  )
}

export default ArticleHeader
