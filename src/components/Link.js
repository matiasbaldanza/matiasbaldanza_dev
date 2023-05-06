import NextLink from 'next/link'
import { IconLinkExt } from './Icons'

export default function Link ({ ...props }) {
  return (
    <NextLink
      className='py-1 font-medium underline transition-colors rounded-md hover:text-white underline-ring-offset-8t-3'
      href={props.href}
      target={props.external && '_blank'}
      rel={props.external && 'noopener noreferrer'}
    >
      {props.children}{props.external && <IconLinkExt />}
    </NextLink>
  )
}
