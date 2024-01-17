"use client"
import React, { useState } from "react";

const Accordion = ({ title, answer, bg }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={`${bg} border-2 border-indigo-500 rounded-xl p-2 bg-cover bg-center `}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="font-bold text-white text-xl bg-black bg-opacity-50 rounded-sm px-2">{title}</span>
         {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 p-24"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-bold text-xl text-white bg-black bg-opacity-30 rounded-lg text-center">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;



{/*<svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg> */}