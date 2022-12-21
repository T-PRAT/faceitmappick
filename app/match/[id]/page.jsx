import React from "react";
import MapStat from "./MapStat";
import TabHead from "./TabHead";

const fetchMap = async (matchId) => {
  const res = await fetch(
    `https://open.faceit.com/data/v4/matches/${matchId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.FI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  const match = await res.json();
  if (!match) {
    return {
      notFound: true,
    };
  } else {
    return match;
  }
};

const fetchPlayerStat = async (playerId) => {
  const res = await fetch(
    `https://open.faceit.com/data/v4/players/${playerId}/stats/csgo`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.FI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  const playerStat = await res.json();
  if (!playerStat) {
    return {
      notFound: true,
    };
  } else {
    return playerStat;
  }
};

const fetchMapsData = async (matchId) => {
  const match = await fetchMap(matchId);
  //console.log(match);
  const team1 = match.teams.faction1.roster.map(async (player) => {
    const playerStat = await fetchPlayerStat(player.player_id);
    return playerStat;
  });
  const team2 = match.teams.faction2.roster.map((player) => player.player_id);
  //team2 = match.teams.faction2.roster.map((player) => player.nickname);
  console.log(team1);
  console.log(team2);
  //match.teams.faction1.roster.map(player => { console.log(player); })
  const data = {
    match: match,
    team1: team1,
    team2: team2,
  };
  return data;
};

export default async function Match({ params: { id } }) {
  //const data = await fetchMapsData(id);
  console.log();
  return (
    <div className="max-w-screen-lg mx-auto my-20 text-primary grid grid-cols-2">
      <div className="pr-5 border-r border-grey-light pb-16">
        <h2 className="text-center text-4xl p-8">Team_Chelbi</h2>
        <TabHead />
        <MapStat />
        <MapStat />
        <MapStat />
        <MapStat />
      </div>
      <div className="ml-[23px] pb-16">
        <h2 className="text-center text-4xl p-8">Team_Maxime</h2>
        <TabHead />
        <MapStat />
        <MapStat />
        <MapStat />
        <MapStat />
      </div>
    </div>
  );
}
