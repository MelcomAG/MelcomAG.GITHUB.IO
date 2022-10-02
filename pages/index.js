import { BoltIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import Head from 'next/head'

const data = [
  { name: 'Parkplatz 1', elektro: true },
  { name: 'Parkplatz 2', elektro: true },
  { name: 'Parkplatz 3', elektro: false },
  { name: 'Parkplatz 4', elektro: false },
  { name: 'Parkplatz 5', elektro: false },
  { name: 'Parkplatz 6', elektro: false },
  { name: 'Parkplatz 7', elektro: false },
  { name: 'Parkplatz 8', elektro: false },
  { name: 'Parkplatz 9', elektro: false }
]

export default function Home () {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div style={{ backgroundPosition: '10px 10px' }} className="container mx-auto flex flex-wrap inset-0 bg-slate-50 bg-grid-slate-100">
        {data.map((post) => (
          <Fragment key={post.name}>
            <div className="lg:w-1/4 md:w-1/2 w-full p-4">
              <div className="p-4 rounded-xl shadow-lg bg-white flex items-center">
                <div className="text-xl font-medium text-black">{post.name}</div>
                <div className="shrink-0">
                  <BoltIcon className="h-8 w-8 text-green-300" />
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
