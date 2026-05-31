import "./App.css";
import "./index.css";
 import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import { Suspense, useState } from "react";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const players = await fetch("./players.json");
  return players.json();
};

const fetchPlayerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [balance, setBalance] = useState(600000000000);
  const [purchasePlayers, setPurchasePlayers] = useState([]);
  const handleDelete = (player) => {
    const filterPlayer = purchasePlayers.filter(
      (eachPlayer) => eachPlayer.id !== player.id,
    );
    setPurchasePlayers(filterPlayer);
    setBalance(balance + player.price);
  };
  return (
    <>
      <Navbar balance={balance}></Navbar>
      <HeroSection></HeroSection>
      <div className="flex justify-between max-w-[1320px] mx-auto mt-10 ">
        <div>
          <h1 className="font-bold text-xl">
            {toggle === true
              ? "Available Players"
              : `Seletected Player ${purchasePlayers.length}/6`}
          </h1>
        </div>
        <div className="flex border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setToggle(true)}
            className={`btn py-3 px-8 rounded-none border-none font-bold text-xl ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn py-3 px-8 rounded-none border-none font-bold ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>({purchasePlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <AvailablePlayers
            fetchPlayerPromise={fetchPlayerPromise}
            balance={balance}
            setBalance={setBalance}
            purchasePlayers={purchasePlayers}
            setPurchasePlayers={setPurchasePlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          purchasePlayers={purchasePlayers}
          setPurchasePlayers={setPurchasePlayers}
          handleDelete={handleDelete}
        ></SelectedPlayers>
      )}



     {/* Toaster */}
      <ToastContainer />
    </>
  );
}

export default App;
