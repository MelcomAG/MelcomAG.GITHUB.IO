import ParkingList from '../components/ParkingList'
import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Parkleitsystem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="relative flex min-h-screen flex-col justify-start overflow-hidden bg-gray-50 py-4 sm:py-12">
        <div style={{ backgroundPosition: '10px 10px' }} className="absolute inset-0 bg-grid-slate-100 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <ParkingList />
      </div>
    </>
  )
}
