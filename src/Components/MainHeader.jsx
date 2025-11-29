import React from "react";
import hero from "../assets/hero.png"

const MainHeader = () => {
  return (
    <section className="w-full bg-[#ffe8e4] pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="flex flex-col gap-5 justify-center">

          <button className="flex items-center gap-2 text-sm font-medium">
            <span className="w-10 h-10 bg-white text-[#FF3F3A] flex items-center justify-center rounded-full shadow">
              ▶
            </span>
            Play showreel
          </button>

     
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Enjoy studying <br />
            with Createx <br />
            Online Courses
          </h1>

          
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-3 border border-[#FF3F3A] text-[#FF3F3A] rounded-md font-semibold hover:bg-[#FF3F3A]  hover:text-white ">
              About us
            </button>
            <button className="px-6 py-3 border  border-[#FF3F3A] text-[#FF3F3A] rounded-md font-semibold hover:bg-[#FF3F3A]  hover:text-white ">
              Explore courses
            </button>
          </div>
        </div>

    
        <div className="flex justify-center">
        
          <img
            src={hero}
            alt="Hero Illustration"
            className="w-[450px]"
          />
        </div>

      </div>
    </section>
  );
};

export default MainHeader;
