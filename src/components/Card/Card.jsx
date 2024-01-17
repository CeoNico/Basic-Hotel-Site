import React from "react";

const Card = ({name, message, rating}) => {
  return (
    <div className=" border-4 border-black rounded-lg bg-white">
        <h1 className="font-bold text-xl ">{name}</h1>
        <div className="p-10 flex flex-col text-center">
            <p className="font-light tracking-tight text-lg">{message}</p>
            <span className="text-sm font-bold">{rating}</span>
        </div>
    </div>
  );
};

export default Card;
