import { useState, useEffect } from 'react'
import { isExternalLink } from '@/lib/linkUtils'
import NextLink from 'next/link'

export default function Link ({ ...props }) {
  const { href, children, className } = props
  const styles = className || 'py-1 font-medium underline transition-colors rounded-md underline-ring-offset-8t-3'
  const [currentHost, setCurrentHost] = useState(null)

  useEffect(() => {
    setCurrentHost(window.location.host)
  }, [])

  const external = isExternalLink(href, currentHost)

  return (
    <>
      <NextLink
        href={href}
        className={styles}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
        {external && (<span className='no-underline'>&nbsp;↗</span>)}
      </NextLink>
    </>
  )
}
