import React, { use } from "react";
import groupImg from "../../assets/Group.png";
import reportImg from "../../assets/report.png";

const AvailablePlayers = ({ fetchPlayerPromise }) => {
  const playersData = use(fetchPlayerPromise);

  return (
    <div className="max-w-[1320px] mx-auto mt-3 grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-5">
      {playersData.map((player) => (
        <div className="card bg-base-100 w-full shadow-sm">
          <div>
            <img src={player.image} alt="player image" className="p-4 w-full h-[200px] object-fill   " />
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
            <button className="btn">Choose Player</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
