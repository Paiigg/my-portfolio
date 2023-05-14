import Card from "@/components/Card";
import React from "react";

export default function Project() {
  return (
    <div className="container mx-auto p-4 flex items-center flex-col justify-center ">
      <h3 className="font-bold text-4xl mt-20 ">My Project</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Card
          src="/assets/project1.png"
          href="/"
          title="NFT Website"
          desc="NFT Web build with React, and Tailwind"
        />
        <Card
          src="/assets/project2.png"
          href="/"
          title="Movie Website"
          desc="NFT Web build with React, MovieDB API, and Tailwind"
        />
        <Card
          src="/assets/project4.png"
          href="/"
          title="Crypto Website"
          desc="NFT Web build with React, CoinGecko API, and Tailwind"
        />
        <Card
          src="/assets/project3.png"
          href="/"
          title="Landingpage Website"
          desc="NFT Web build with React, and Tailwind"
        />
        <Card
          src="/assets/project5.png"
          href="/"
          title="Blog Website"
          desc="NFT Web build with React, a Rest API, and Tailwind"
        />
        <Card
          src="/assets/project6.png"
          href="/"
          title="GameStore Website"
          desc="NFT Web build with React, RAWG API, and Tailwind"
        />
      </div>
    </div>
  );
}
