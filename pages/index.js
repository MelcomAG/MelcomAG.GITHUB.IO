import { BoltIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import Head from 'next/head'

const data = [
  { name: 'Nr. 1', elektro: true },
  { name: 'Nr. 2', elektro: true },
  { name: 'Nr. 3', elektro: false },
  { name: 'Nr. 4', elektro: false },
  { name: 'Nr. 5', elektro: false },
  { name: 'Nr. 6', elektro: false },
  { name: 'Nr. 7', elektro: false },
  { name: 'Nr. 8', elektro: false },
  { name: 'Nr. 9', elektro: false }
]

export default function Home () {
  return (
    <>
      <Head>
        <title>Parkleitsystem</title>
      </Head>
      <div style={{ backgroundPosition: '10px 10px' }} className="bg-slate-50 bg-grid-slate-100 min-h-screen">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 xl:px-96 md:px-32 p-4 justify-items-center">
          {data.map((post) => (
            <Fragment key={post.name}>
              <div className="rounded-xl shadow-lg bg-white flex py-2 w-max pl-2 pr-1 space-x-1">
                <div className="text-2xl font-bold text-black">{post.name}</div>
                <div className="shrink-0">
                  <BoltIcon className="h-8 w-8 text-green-300" />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
