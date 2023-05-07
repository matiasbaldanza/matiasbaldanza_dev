import NextLink from 'next/link'
import { isExternalLink } from '@/lib/linkUtils'

export default function Link ({ ...props }) {
  const { href, children } = props
  const external = isExternalLink(href)

  return (
    <>
      <NextLink
        className='py-1 font-medium underline transition-colors rounded-md underline-ring-offset-8t-3'
        href={href}
        target={external && '_blank'}
        rel={external && 'noopener noreferrer'}
      >
        {children}{external && <span className='no-underline'>&nbsp;↗</span>}
      </NextLink>
    </>
  )
}
