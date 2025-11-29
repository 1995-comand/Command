import React from "react";
import girl from "../assets/girl.png"

const Section = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


        <div className="w-full flex justify-center">

          <img
            src={girl}
            alt="Why Createx"
            className="rounded-lg shadow-md w-[500px]"
          />
        </div>

        <div className="flex flex-col gap-6">

          <p className="text-sm font-semibold text-gray-500 tracking-widest">
            WHO WE ARE
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Why Createx?
          </h2>

          <ul className="flex flex-col gap-3 text-gray-700">

            <li className="flex gap-3">
              <span className="text-[#FF3F3A] text-lg">✔</span>
              A fermentum in morbi pretium aliquam adipiscing donec tempus.
            </li>

            <li className="flex gap-3">
              <span className="text-[#FF3F3A] text-lg">✔</span>
              Vulputate placerat amet pulvinar lorem nisl.
            </li>

            <li className="flex gap-3">
              <span className="text-[#FF3F3A] text-lg">✔</span>
              Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
            </li>

            <li className="flex gap-3">
              <span className="text-[#FF3F3A] text-lg">✔</span>
              Etiam duis lobortis in fames ultrices commodo nibh.
            </li>

            <li className="flex gap-3">
              <span className="text-[#FF3F3A] text-lg">✔</span>
              Tincidunt sagittis neque sem ac eget.
            </li>

            <li className="flex gap-3">
              <span className="text-[#FF3F3A] text-lg">✔</span>
              Ultrices amet est justo egestas suspendisse quis pulvinar volutpat dapibus tortor.
            </li>

          </ul>

          <button className="w-fit px-6 py-3 bg-[#FF3F3A] text-white font-semibold rounded-md mt-4 hover:bg-[#ff524b] transition">
            More about us
          </button>

        </div>

      </div>
    </section>
  );
};

export default Section;
