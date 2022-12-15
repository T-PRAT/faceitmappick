import React from 'react'

export default function Match(props) {
	return (
		<div>match</div>
	)
}

/*export async function getServerSideProps() {
	const res = api.matchHistory('1-2bc625da-1a43-47d5-9b5a-09ccaa4c7259')
	return {
		props: {
			data: match
		}
	}
	const res = await fetch('https://open.faceit.com/data/v4/matches/1-2bc625da-1a43-47d5-9b5a-09ccaa4c7259', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${process.env.FI_API_KEY}`,
			'Content-Type': 'application/json',
		}
	},)
	const match = await res.json();
	if (!match) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			data: match
		}
	}
}*/
