import Link from './Link'

function Hero () {
  return (
    <div className='h-auto min-h-[50vh] mb-20 hero'>
      <div className='text-center hero-content'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Hello, there!</h1>
          <p className='py-6'>
            This is a simple blog built with Next.js and Tailwind CSS.
          </p>
          <p>
            It's a <em>work in progress</em>, and I'm building it in public, mostly on Twitch. You can check out the source code on my <Link href='https://github.com/matiasbaldanza'>GitHub</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
