import React from "react";
import Image from "next/image";
import anubis from "../../../public/anubis.png";
export default function MapStat({ map, match, win }) {
  const img = `https://cdn.faceit.com/static/stats_assets/csgo/maps/200x125/csgo-votable-maps-${map}-200x125.jpg`;
  return (
    <div className="bg-grey w-full flex justify-between h-14 items-center mb-2 rounded-sm">
      <div className="flex m-3 items-center">
        <Image
          src={img}
          alt={map}
          width={80}
          height={100}
          className="rounded-sm"
        />
        <p className="pl-3">{map}</p>
      </div>
      <p className="m-3">{match}</p>
      <p className="m-3">{Number((win * 100) / match).toFixed(1)}</p>
    </div>
  );
}
