import clsx from 'clsx'
import Balancer from 'react-wrap-balancer'

import { footerData } from './data/footer'

export default function Footer ({ ...props }) {
  const baseStyles = 'mt-10 py-10 flex flex-col gap-2 w-full text-base'
  const styles = clsx(baseStyles, props.className)
  const locale = 'en'

  return (
    <footer className={styles}>
      <h2 className='mb-6 text-2xl font-bold tracking-tight'>{footerData[locale].title}</h2>
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
