// Components
import Layout from '@/components/Layout'
import DateLabel from '@/components/DateLabel'

export default function Home ({ articlesData }) {
  return (
    <Layout>
      <header>
        <h1 className='mb-6 text-4xl font-bold text-center'>
          Building in Public
        </h1>
      </header>
      <section className='mb-10 [&>*]:mb-4' id='why'>
        <p>For as long as I can remember, I've been the type of person that comes up with at least a couple of project ideas <em>a day</em>, maybe starts a few projects a year, and usually finishes none.</p>
        <p><strong>Building in public</strong> helped me break out of that loop.</p>
        <p>Over the past few years, the indie hacker community <em>(with <strong>indie hacker</strong> being just a fancy name for <strong> boostrapped entrepreneur</strong>)</em> has embraced the <strong>building in public</strong> label, with an obvious benefit: </p>
        <p>They get to receive early feedback from (hopefully) real users, and grow a community while they build their products.</p>
        <p>I'm not an indie hacker, but I started learning and building projects in public in September 2022 and 8 months into it (this is May 8, 2023), I've made more progress and built more projects than ever before.</p>
        <p>Building in public has also brought in an unexpected benefits: A community of like-minded people that bring insights, feedback, and encouragement.</p>
        <p>From time to time, I'll be sharing some of those insights and stories here and in my blog.</p>
        <p>Below, you will find a Changelog of this project.</p>

      </section>
      <section className='mb-10' id='changelog'>
        <h2 className='mb-6 text-3xl font-bold tracking-tight'>
          Changelog
        </h2>
        <ul className='flex flex-col divide-y-[1px] border-y-[1px] selection:divide-gray-200'>
          <li className='flex items-center justify-between gap-10 p-4 text-sm hover:bg-gray-100 sm:text-lg'>
            <div className='flex flex-col gap-1'>
              <p>Soft launch</p>
              <p className='text-xs'>Dark mode. English-only. Footer. Basic styling. Initial articles.</p>
            </div>
            <DateLabel
              className='text-sm text-right text-gray-500 min-w-max'
              options={{ month: 'short', day: 'numeric' }}
            >
              2023-05-08
            </DateLabel>
          </li>
          <li className='flex items-center justify-between gap-10 p-4 text-sm hover:bg-gray-100 sm:text-lg'>
            <div className='flex flex-col gap-1'>
              <p>Pre-launch</p>
              <p className='text-xs'>Next.js blog using the pages router and getStaticProps(). TailwindCSS. Dark mode. Custom components.</p>
            </div>
            <DateLabel
              className='text-sm text-right text-gray-500 min-w-max'
              options={{ month: 'short', day: 'numeric' }}
            >
              2023-05-05
            </DateLabel>
          </li>
          <li className='flex items-center justify-between gap-10 p-4 text-sm hover:bg-gray-100 sm:text-lg'>
            <div className='flex flex-col gap-1'>
              <p>Hello, World</p>
              <p className='text-xs'>Basic static blog.</p>
            </div>
            <DateLabel
              className='text-sm text-right text-gray-500 min-w-max'
              options={{ month: 'short', day: 'numeric' }}
            >
              2023-04-13
            </DateLabel>
          </li>
          <li className='flex items-center justify-between gap-10 p-4 text-sm hover:bg-gray-100 sm:text-lg'>
            <div className='flex flex-col gap-1'>
              <p>Started learning Next.js 13</p>
              <p className='text-xs'>Next.js 13 tutorial at nextjs.org/learn</p>
            </div>
            <DateLabel
              className='text-sm text-right text-gray-500 min-w-max'
              options={{ month: 'short', day: 'numeric' }}
            >
              2023-04-10
            </DateLabel>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
