import { useEffect, useState, Fragment } from 'react'
import { createClient } from '@supabase/supabase-js'
import { BoltIcon } from '@heroicons/react/24/solid'

const NEXT_PUBLIC_SUPABASE_URL = 'https://bkcwarfxyilwapxidlgo.supabase.co'
const NEXT_PUBLIC_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrY3dhcmZ4eWlsd2FweGlkbGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzMDc3MDksImV4cCI6MTk3OTg4MzcwOX0.4-ac9uKJyQXHRm3NczvK2hzajXu1Eeu1H8sKGxggWDg'
const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY)

export default function ParkingList () {
  const [parkings, setParkings] = useState([])

  useEffect(() => {
    fetchParkings()
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

  return (
  <>
    <div className="text-3xl font-bold col-span-full">Insgesamt verfügbar { parkings.length } Parkplätze</div>
    {parkings.map((parking) => {
      if (parking.ist_elektro === true) {
        return (
        <Fragment key={parking.parkplatz_nr}>
            <div className="rounded-xl shadow-lg bg-white flex py-2 w-max pl-2 pr-1 space-x-1">
                <div className="text-2xl font-bold text-black">Nr. {parking.parkplatz_nr}</div>
                <div className="shrink-0">
                    <BoltIcon className="h-8 w-8 text-green-300" />
                </div>
            </div>
        </Fragment>)
      }
      return (
      <Fragment key={parking.parkplatz_nr}>
        <div className="rounded-xl shadow-lg bg-white flex p-2">
            <div className="text-2xl font-bold text-black">Nr. {parking.parkplatz_nr}</div>
        </div>
      </Fragment>
      )
    })}
    </>
  )
}
