import ParkingList from '../components/ParkingList'
import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Parkleitsystem</title>
      </Head>
      <div style={{ backgroundPosition: '10px 10px' }} className="bg-slate-50 bg-grid-slate-100 min-h-screen">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 xl:px-96 md:px-32 p-4 justify-items-center">
        <ParkingList />
        </div>
      </div>
    </>
  )
}
