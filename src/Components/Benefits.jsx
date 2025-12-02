import React from "react";
import benefits from '../assets/benefits.png'

const Benefits = () => {
  return (
    <section className="w-full py-20">

      <div className="text-center mb-14">
        <p className="text-sm tracking-widest text-gray-500">OUR BENEFITS</p>
        <h1 className="text-3xl font-bold mt-2">That's how we do it</h1>
      </div>

      <div className="flex justify-center gap-10 mb-16 flex-wrap">
        <button className="border border-red-400 text-red-500 px-6 py-2 rounded-md flex items-center gap-2">
          <span>★</span> Experienced Tutors
        </button>
        <button className="text-gray-600 flex items-center gap-2">
          <span>💬</span> Feedback & Support
        </button>
        <button className="text-gray-600 flex items-center gap-2">
          <span>📚</span> 24/7 Online Library
        </button>
        <button className="text-gray-600 flex items-center gap-2">
          <span>👥</span> Community
        </button>
      </div>

  
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 gap-10 flex-col md:flex-row">
        

        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">Only practicing tutors</h2>
          <p className="text-gray-600 leading-7">
            Aenean quam est lobortis et nisi non fames dictum suspendisse. Morbi 
            mauris eros massa et dolor sit sociis mollis augue. Neque sodales 
            tortor sit nam massa fermentum diam congue volutpat. Nulla nisl 
            accumsan id dignissim nascetur amet.
          </p>
        </div>


        <div>
          <img
            src={benefits}
            alt="Tutors"
            className="w-[420px] md:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
