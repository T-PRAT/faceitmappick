import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <h1 className='text-3xl font-bold text-primary font-sans'>
        faceitmapstat
      </h1>
    </>
  )
}

