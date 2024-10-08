"use client";
import React, { useState } from "react";
import Header from "../../components/Header";
import { FaSearch, FaFilter } from "react-icons/fa";
import { styles } from "../../utils/styles";
import { games } from "../../utils/games";
import GameCard from "../../components/Shop/GameCard";
import Footer from "../Home/Footer";
import { staatliches } from "../../utils/font";

const filterOptions = [
    {
        label: 'Action',
        value: 'action'
    },
    {
        label: 'Adventure',
        value: 'adventure'
    },
    {
        label: 'RPG',
        value: 'rpg'
    },
    {
        label: 'Isometric',
        value: 'isometric'
    },
    {
        label: 'Arcade',
        value: 'arcade'
    },
    {
        label: 'Simulation',
        value: 'simulation'
    },
]

function Shop() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <div className="w-[100vw] bg-cover bg-center bg-no-repeat flex flex-col items-center shop">
      <Header />
      
      <div className="w-[90%] m-auto mt-[100px] flex flex-col justify-evenly gap-7 !pb-20">
        <div className="flex flex-row gap-7">
            <div className="w-[40%] 800px:w-[50%] mt-5 relative mb-1">
                <input 
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className={`${styles.input} px-9 !py-2 bg-transparent w-[100%] placeholder:text-white`} 
                />
                <FaSearch
                    className="absolute bottom-2 left-2 z-1 cursor-pointer text-white"
                    size={20}
                />
            </div>
            <div className="w-[20%] 800px:w-[30%] mt-5 relative mb-1">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className={`${styles.input} dropdown bg-transparent !py-2 px-8 border border-white placeholder:text-white`}
                >
                    <option className="bg-transparent" value="" disabled>
                    Filter
                    </option>
                    {filterOptions.map((option) => (
                    <option key={option.value} className="bg-transparent" value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
                <FaFilter
                    className="absolute bottom-3 800px:bottom-2 left-2 z-1 cursor-pointer text-white"
                    size={20}
                />
            </div>
        </div>

        <div className="mt-12">
            <h2 className={`${staatliches.className} ml-6 800px:ml-0 uppercase text-2xl 800px:text-3xl`}>Latest</h2>
        </div>

        <div className="flex flex-row ml-6 800px:ml-0 flex-wrap justify-center">
            {
                games.map((game) => (
                    <div className="w-[100%] 800px:w-[50%] 1100px:w-[25%]">
                        <GameCard game={game} />
                    </div>
                ))
            }
        </div>
      </div>

      <div className="bottom-0 w-[100vw]">
        <Footer />
      </div>
    </div>
  );
}

export default Shop;
