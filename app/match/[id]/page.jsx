import React from "react";
import { resolve } from "styled-jsx/css";
import MapStat from "./MapStat";
import TabHead from "./TabHead";

const mappool = [
  "de_mirage",
  "de_dust2",
  "de_inferno",
  "de_nuke",
  "de_overpass",
  "de_vertigo",
  "de_anubis",
];

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
    console.error("playerStat not found");
    return {
      notFound: true,
    };
  } else {
    return playerStat;
  }
};

const fetchMapsData = async (matchId) => {
  const match = await fetchMap(matchId);
  const team1 = match.teams.faction1?.roster.map((player) => [player.nickname, player.player_id]);
  const team2 = match.teams.faction2?.roster.map((player) => [player.nickname, player.player_id]);
  const team1Stat = [];
  const team2Stat = [];
  for (const player of team1) {
    team1Stat.push(await fetchPlayerStat(player[1]));
  }
  for (const player of team2) {
    team2Stat.push(await fetchPlayerStat(player[1]));
  }
  const data = {
    match: match,
    team1: team1Stat,
    team2: team2Stat,
  };
  return data;
};

const getMapStat = (mapname, team) => {
  let match = 0;
  let win = 0;

  for (const player of team) {
    player.segments.map((map) => {
      if (map.label.localeCompare(mapname) === 0) {
        match += Number(map.stats.Matches);
        win += Number(map.stats.Wins);
      }
    });
  }
  const mapStat = {
    match: match,
    win: win,
  }
  return mapStat;
}
export default async function Match({ params: { id } }) {
  const data = await fetchMapsData(id);
  return (
    <div className="max-w-screen-lg mx-auto my-20 text-primary grid grid-cols-2">
      <div className="pr-5 border-r border-grey-light pb-16">
        <h2 className="text-center text-4xl p-8">Team_Chelbi</h2>
        <TabHead />
        {mappool.map((map) =>
        (<MapStat
          key={map}
          map={map}
          match={getMapStat(map, data.team1).match}
          win={getMapStat(map, data.team1).win}
        />
        )
        )}
      </div>
      <div className="ml-[23px] pb-16">
        <h2 className="text-center text-4xl p-8">Team_Maxime</h2>
        <TabHead />
        {mappool.map((map) =>
        (<MapStat
          key={map}
          map={map}
          match={getMapStat(map, data.team2).match}
          win={getMapStat(map, data.team2).win}
        />
        )
        )}
      </div>
    </div>
  );
}
