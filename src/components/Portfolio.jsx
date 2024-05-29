import React from "react";
import Voting from "../assets/portfolio/voting.png";
import Netflix1 from "../assets/portfolio/netflix1.png";
import Netflix2 from "../assets/portfolio/netflix2.png";
import Weather from "../assets/portfolio/weather.png";
import Game from "../assets/portfolio/game.png";
import Color from "../assets/portfolio/color.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Voting,
    
    },
  
    {
      id: 2,
      src: Netflix1,
    },
    {
      id: 3,
      src: Netflix2,
    },
    {
      id: 4,
      src: Weather,
    },
    {
      id: 5,
      src: Game,
    },
    {
      id: 6,
      src: Color,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-900 via-black to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;