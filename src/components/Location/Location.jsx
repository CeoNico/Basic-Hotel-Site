import React from "react";
import Services from "../Services/Services";
import Card from "../Card/Card";
import Accordion, { AccordianItem } from "../Accordian/Accordion";
import Image from "next/image";

const Location = () => {
  return (
    <div className="min-h-fit w-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-4">
          <h1 className="font-bold text-2xl text-center">
             Ubicacion y Horario
          </h1>
          <p className="font-light text-lg py-2">
            Nuestro hotel esta ubicado en Tartagal, Salta. Tartagal esta entre General Enrique Mosconi y Aguaray. 
            La direccion es Calle Warnes 456, entre Sarmiento y Aroaz.
          </p>
          <p className="font-light text-lg py-2">
            Trabajmos lunes a lunes de horario corrido desde las 9AM hasta las
            5PM. Veni y disfruta tu viaje al norte Argentino con nosotros.
          </p>
          <div className="flex items-center justify-center">
            <button className="rounded p-2 bg-black text-white hover:bg-blue-400 transition duration-300">
              Reserva Ahora
            </button>
          </div>
        </div>
          <div className="flex items-center justify-center">
            <Image
              className="rounded-xl shadow-lg shadow-slate-900 hover:scale-105 py-3 transition duration-200 ease-in"
              src="/googlemaps.png"
              height={475}
              width={475}
            />
          </div>
      </div>
    </div>
  );
};

export default Location;
