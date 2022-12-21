import React from "react";
import Image from "next/image";
import anubis from "../../../public/anubis.png";
export default function MapStat() {
  return (
    <div className="bg-grey w-full flex justify-between h-14 items-center mb-2 rounded-sm">
      <div className="flex m-3 items-center">
        <Image
          src={anubis}
          alt="Picture of the author"
          width={70}
          height={100}
          className="rounded-sm"
        />
        <p className="pl-3">anubis</p>
      </div>
      <p className="m-3">1432</p>
      <p className="m-3">54 %</p>
    </div>
  );
}
