import Head from 'next/head';

export default function Home() {
  getMatchData();
  return (
    <>
      <Head>
        <title>Faceitmappick</title>
      </Head>
      <header className='top-0'>
        <h1 className='py-5 px-20 text-4xl font-bold text-primary'>Faceit map pick</h1>
      </header>
      <div className='flex flex-col items-center justify-center w-[600px] mx-auto my-36 bg-grey text-primary rounded-smshadow-md'>
        <div className='mt-10 mb-4 text-3xl font-bold'> Enter match URL</div>
        <p className='pb-3 text-primary-dark'>Search for all team winrate on each map and more</p>
        <input className="w-[350px] bg-primary rounded-sm py-2 shadow-lg focus:outline-none text-dark focus:border-sky-500 focus:ring-orange focus:ring-1 sm:text-sm" type="text" name="search" />
        <button type="button" className="inline-block w-44 py-1 mt-4 mb-10 bg-orange text-lg font-bold rounded-sm shadow-md hover:bg-orange-dark hover:shadow-lg focus:orange-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Search</button>
      </div>
      <footer className='w-full flex items-center justify-center absolute bottom-10'>
        <p className='text-center text-grey-light'>@copyright - tprat - all right reserved</p>
      </footer>
    </>
  )
}

async function getMatchData() {
  try {
    const res = await fetch('https://open.faceit.com/data/v4/matches/1-2bc625da-1a43-47d5-9b5a-09ccaa4c7259', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.FI_API_KEY}`,
        'Content-Type': 'application/json',
      }
    },)
    const match = await res.json();
    console.log(match);
  } catch (error) {
    console.error(error);
  }
}


