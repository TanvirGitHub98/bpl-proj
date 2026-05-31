import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import { Suspense, useState } from "react";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers=async()=>{
  const players=await fetch('./players.json')
  return players.json();
}

function App() {
  const [toggle,setToggle]=useState(true)
  const fetchPlayerPromise=fetchPlayers();
  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <div className="flex justify-between max-w-[1320px] mx-auto mt-10 ">
      <div>
        <h1 className="font-bold text-xl">Available Players</h1>
      </div>
      <div className="flex border border-gray-200 rounded-xl overflow-hidden">
        
        <button onClick={()=>setToggle(true)} className={`btn py-3 px-8 rounded-none border-none font-bold text-xl ${toggle===true? "bg-[#E7FE29]": ""}`}>Available</button>
        <button onClick={()=>setToggle(false)} className={`btn py-3 px-8 rounded-none border-none font-bold ${toggle===false? "bg-[#E7FE29]": ""}`}>Selected <span>(0)</span></button>
      </div>
    </div>
    {
      toggle === true? <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <AvailablePlayers fetchPlayerPromise={fetchPlayerPromise}></AvailablePlayers>
    </Suspense>
    :
    <SelectedPlayers></SelectedPlayers>
    }



    </>
  );
}

export default App;
