import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <main className="w-screen h-screen bg-hero bg-cover bg-center">
        <Navbar />
      <div className="flex items-center justify-center flex-col h-full">
        <div className="text-center w-full py-24">
          <h1 className="text-white font-bold text-3xl">
            Hace tus suenos una realidad
          </h1>
          <p className="text-white font-light text-xl">
            En nuestro hotel es posible
          </p>
          <div className="flex items-center justify-center pt-5">
            <button className="text-lg bg-black/70 p-2 text-white rounded-lg">
              Reserva Tu Fecha Hoy
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
