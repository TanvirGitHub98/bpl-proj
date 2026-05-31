import React, { useState } from "react";
import groupImg from "../../assets/Group.png";
import reportImg from "../../assets/report.png";
import { toast } from "react-toastify";

const PlayerCard = ({ player, balance, setBalance,purchasePlayers,setPurchasePlayers }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleBalance = (playerData) => {
    if(purchasePlayers.length === 6)
    {
      toast("6 Players already selected")
      return 
    }
    else if (balance < playerData.price) {
       toast("Insufficient Balance!!!")
      return
    }
    else  {
      setIsSelected(true);
      setBalance(balance - playerData.price);
      setPurchasePlayers([...purchasePlayers,playerData])
      return
    }
 
  };
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <div>
          <img
            src={player.image}
            alt="player image"
            className="p-4 w-full h-[200px] object-fill   "
          />
        </div>
        <div className="flex gap-2 m-2">
          <img src={groupImg} alt="Group Image" />
          <h2 className="font-bold">{player.name}</h2>
        </div>
        <div className="flex justify-between m-2 items-center border-b-1 border-gray-400 pb-3">
          <div className="flex gap-2 items-center ">
            <img
              className="w-[20px] h-[20px] object-cover"
              src={reportImg}
              alt="report Image"
            />
            <p>{player.country}</p>
          </div>
          <div>
            <button className="btn">{player.role}</button>
          </div>
        </div>

        <div className="flex justify-between m-2 items-center">
          <span className="font-bold">Rating</span>
          <span>5</span>
        </div>
        <div className="flex justify-between m-2 items-center">
          <span className="font-bold">{player.battingHand}</span>
          <span>{player.bowlingHand}</span>
        </div>
        <div className="flex justify-between m-2 items-center">
          <span className="font-bold">Price: ${player.price}</span>
          <button
            disabled={isSelected}
            onClick={() => handleBalance(player)}
            className="btn"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
