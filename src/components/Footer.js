import Link from './Link'
import clsx from 'clsx'
import Balancer from 'react-wrap-balancer'

import { footerData } from './data/footerData'

export default function Footer ({ ...props }) {
  const baseStyles = 'mt-20 mb-6 flex flex-col gap-4 w-full text-base'
  const styles = clsx(baseStyles, props.className)
  const locale = 'en'

  return (
    <footer className={styles}>
      {footerData[locale].content.map((item, index) => (
        <p key={index}>
          <Balancer ratio={0.6}>
            {item.description}
          </Balancer>
        </p>
      ))}
    </footer>
  )
}
