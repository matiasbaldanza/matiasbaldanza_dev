import NextLink from "next/link"
import { IconLinkExt } from "./Icons"

export default function Link({ ...props }) {
    return <NextLink
        className="font-medium text-blue-600 hover:text-white hover:bg-blue-600 transition-colors px-2 py-1 rounded-md"
        href={props.href}
        target= {props.external && '_blank'}
        rel= {props.external && 'noopener noreferrer'}
    >
        {props.children}{props.external && <IconLinkExt/>}    
    </NextLink>
}