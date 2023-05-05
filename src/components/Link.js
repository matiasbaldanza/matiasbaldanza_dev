import NextLink from 'next/link'
import { IconLinkExt } from './Icons'

export default function Link ({ ...props }) {
  return (
    <NextLink
      className='px-2 py-1 font-medium text-blue-600 transition-colors rounded-md hover:text-white hover:bg-blue-600'
      href={props.href}
      target={props.external && '_blank'}
      rel={props.external && 'noopener noreferrer'}
    >
      {props.children}{props.external && <IconLinkExt />}
    </NextLink>
  )
}
