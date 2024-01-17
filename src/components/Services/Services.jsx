import React from "react";
import Accordion from "../Accordian/Accordion";

const Services = () => {
  return (
    <div className="h-fit w-full container bg-slate-900">
      <div className="w-full h-10">
        <h1 className="font-bold text-3xl text-center p-2 text-white">
          Servicios Extra
        </h1>
      </div>
      <div className="flex-col flex p-2 lg:grid lg:grid-cols-3">
        <div className="p-2">
          <Accordion
            title={"Visita Nuestra Pileta"}
            answer={
              "Nuestra pileta es una de las mejores piletas en el norte. Cuenta con 3 metros de profundidad y 6 metros de largo y ancho. Realmente una hermosa pileta con el mejor sistema de filtracion en el norte."
            }
            bg={"bg-pool"}
          />
        </div>
        <div className="p-2">
          <Accordion
            title={"Visita Nuestra Cocina"}
            answer={
              "En nuestra cocina tenemos el head chef amante de la comida listo para servite las mejores recetas caseras con los ingredientes mas frescos a tu gusto."
            }
            bg={"bg-dining"}
          />
        </div>
        <div className="p-2">
          <Accordion
            title={"Visita Nuestra Pileta"}
            answer={
              "Nuestr pileta es una de las mejores piletas. Cuenta con 3 metros de prfundidad y 6 metros de largo y ancho. Realmente una hermosa piscina con el mejor istma de filtracion en el norte."
            }
            bg={"bg-bar"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
