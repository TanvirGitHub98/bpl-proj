import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ fetchPlayerPromise,balance,setBalance,purchasePlayers,setPurchasePlayers }) => {
  const playersData = use(fetchPlayerPromise);

  return (
    <div className="max-w-[1320px] mx-auto mt-3 grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-5">
      {playersData.map((player) => <PlayerCard key={player.id} player={player} balance={balance} setBalance={setBalance} purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers}></PlayerCard>)}
    </div>
  );
};

export default AvailablePlayers;
