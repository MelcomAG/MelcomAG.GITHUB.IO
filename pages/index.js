import { BoltIcon } from '@heroicons/react/24/solid'
import { createClient } from '@supabase/supabase-js'
import { Fragment } from 'react'
import Head from 'next/head'

const NEXT_PUBLIC_SUPABASE_URL = 'https://bkcwarfxyilwapxidlgo.supabase.co'
const NEXT_PUBLIC_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrY3dhcmZ4eWlsd2FweGlkbGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzMDc3MDksImV4cCI6MTk3OTg4MzcwOX0.4-ac9uKJyQXHRm3NczvK2hzajXu1Eeu1H8sKGxggWDg'
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
