import React from 'react'

export default function match({ data }) {
	return (
		<div>match</div>
	)
}

export async function getServferSideProps() {
	const res = await fetch(`https://open.faceit.com/data/v4/matches/1-493f22c0-5a71-4488-b81e-255ea32df240`, {
		headers: { 'Authorization': 'Bearer ' + process.env.FI_API_KEY }
	});
	const data = await res.json();
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		data: data
	}
}
