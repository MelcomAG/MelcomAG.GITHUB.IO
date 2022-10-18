import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { BoltIcon } from '@heroicons/react/24/solid'

const NEXT_PUBLIC_SUPABASE_URL = 'https://bkcwarfxyilwapxidlgo.supabase.co'
const NEXT_PUBLIC_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrY3dhcmZ4eWlsd2FweGlkbGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzMDc3MDksImV4cCI6MTk3OTg4MzcwOX0.4-ac9uKJyQXHRm3NczvK2hzajXu1Eeu1H8sKGxggWDg'
const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY)

export default function ParkingList () {
  const [parkings, setParkings] = useState([])
  const [isLoading, setLoading] = useState(false)
  let strParkplatz

  useEffect(() => {
    setLoading(true)
    fetchParkings()
    setLoading(false)
  }, [])

  const fetchParkings = async () => {
    const { data: parkings, error } = await supabase
      .from('TTN')
      .select('parkplatz_nr,ist_elektro')
      .is('parkplatz_belegt', false)
      .order('parkplatz_nr', { ascending: true })
    setParkings(parkings)
    console.log(parkings, error)
  }

  if (isLoading) return <div className="font-bold">Loading...</div>
  else if (!parkings) return <div className="font-bold">No parking data</div>
  else {
    if (parkings.length === 1) {
      strParkplatz = 'Parkplatz'
    } else {
      strParkplatz = 'Parkplätze'
    }

    return (
  <>
    <div className="relative bg-white px-6 pt-4 pb-4 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
            <div className="font-bold">Insgesamt verfügbar sind { parkings.length } { strParkplatz }</div>
        </div>
    </div>
    <div className="relative mt-12 flex h-80 flex-wrap content-start justify-around md:px-48 lg:px-96">
    {parkings.map((parking) => {
      if (parking.ist_elektro === true) {
        return (
        <div className="p-4" key={parking.parkplatz_nr}>
            <div className="rounded-xl shadow-lg bg-white flex h-12 w-40 space-x-1 ring-1 ring-gray-900/5 place-items-center justify-center">
                <div className="text-2xl font-bold text-black ml-0.5">Nr. {parking.parkplatz_nr}</div>
                <div className="shrink-0">
                    <BoltIcon className="h-8 w-8 text-green-300" />
                </div>
            </div>
        </div>)
      }
      return (
        <div className="p-4" key={parking.parkplatz_nr}>
          <div className="rounded-xl shadow-lg bg-white flex h-12 w-40 space-x-1 ring-1 ring-gray-900/5 place-items-center justify-center">
              <div className="text-2xl font-bold text-black">Nr. {parking.parkplatz_nr}</div>
          </div>
        </div>
      )
    })}
    </div>
    </>
    )
  }
}
