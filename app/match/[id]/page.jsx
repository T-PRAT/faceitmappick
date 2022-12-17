import React from 'react'

const fetchMatch = async (matchId) => {
	console.log(matchId)
	const res = await fetch(`https://open.faceit.com/data/v4/matches/${matchId}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${process.env.FI_API_KEY}`,
			'Content-Type': 'application/json',
		}
	},)
	const match = await res.json()
	if (!match) {
		return {
			notFound: true,
		};
	}
	const team1 = match.teams.faction1.roster.map(player => player.player_id)
	const team2 = match.teams.faction2.roster.map(player => player.player_id)
	console.log(team1);
	console.log(team2);
	//match.teams.faction1.roster.map(player => { console.log(player); })
	return match
}

export default async function Match({ params: { id } }) {
	const match = await fetchMatch(id)
	return (
		<div>match</div>
	)
}
