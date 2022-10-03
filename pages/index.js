import { BoltIcon } from '@heroicons/react/24/solid'
import { createClient } from '@supabase/supabase-js'
import { Fragment } from 'react'
import Head from 'next/head'

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const NEXT_PUBLIC_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY
if (!NEXT_PUBLIC_SUPABASE_URL) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
if (!NEXT_PUBLIC_SUPABASE_KEY) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_KEY')
const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY)

export default function Home ({ lessons }) {
  console.log('Supabase data', { lessons })
  return (
    <>
      <Head>
        <title>Parkleitsystem</title>
      </Head>
      <div style={{ backgroundPosition: '10px 10px' }} className="bg-slate-50 bg-grid-slate-100 min-h-screen">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 xl:px-96 md:px-32 p-4 justify-items-center">
          {lessons.map((post) => (
            <Fragment key={post.parkplatz_nr}>
              <div className="rounded-xl shadow-lg bg-white flex py-2 w-max pl-2 pr-1 space-x-1">
                <div className="text-2xl font-bold text-black">Nr. {post.parkplatz_nr}</div>
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

export const getStaticProps = async () => {
  const { data: lessons } = await supabase
    .from('TTN')
    .select('*')
    .is('parkplatz_belegt', false)
    .order('parkplatz_nr', { ascending: true })
  return {
    props: {
      lessons
    }
  }
}
