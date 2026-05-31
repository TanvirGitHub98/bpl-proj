import React from 'react';
import "../../App.css";
import "../../index.css";
import navLogo from "../../assets/logo.png";
import coinImg from "../../assets/coin.png"

const Navbar = (props) => {
    return (
        
        <>
              <div className="navbar max-w-[1320px] m-auto">
                <div className="flex-1 items-center">
                  <img className="w-[72px] h-[72px]" src={navLogo} alt="navLogo" />
                </div>
                <div className="flex items-center gap-10">
                  <ul className="flex gap-10 sora-font text-[#131313]/70 ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Schedules</a></li>
                  </ul>
                  <button className="btn border-2 bg-white rounded-xl">
                    <span>0</span>
                    <span>Coin</span>
                    <span>
                      <img src={coinImg} alt="coin image" />
                    </span>
                  </button>
                </div>
              </div>
        </>
    );
};

export default Navbar;