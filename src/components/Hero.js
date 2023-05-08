import Balancer from 'react-wrap-balancer'
import Link from './Link'

function Hero () {
  return (
    <div className='h-auto mb-20 hero'>
      <div className='text-center hero-content'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Hello, there!</h1>
          <p className='py-6'>
            <Balancer>
              This is a simple blog built with Next.js and Tailwind CSS.
              It's a work in progress, and I'm building it in public on my Twitch stream. You can check out the source code on my <Link href='https://github.com/matiasbaldanza'>GitHub</Link>.
            </Balancer>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
