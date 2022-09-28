import Head from 'next/head';

export default function Home() {
  getMatchData();
  return (
    <>
      <header className='top-0'>
        <h1 className='py-5 px-20 text-4xl font-bold text-primary'>Faceit map pick</h1>
      </header>
      <div className='flex w-100'>
        <div className='flex bg-grey w-1/3 min-w-96 items-center justify-center'> Enter match URL</div>
      </div>
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


