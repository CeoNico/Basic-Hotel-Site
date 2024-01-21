import React from "react";
import Accordion, { AccordianItem } from "../Accordian/Accordion";

const Services = () => {
  return (
    <div className="min-h-fit w-screen">
      <div className="p-4">
        <h1 className="text-center font-bold text-2xl">
          Servicios Destacados
        </h1>
      </div>
      <div className="p-4 lg:px-10 flex items-center justify-center">
        <Accordion className="max-w-full lg:min-w-full">
          <AccordianItem value="1" trigger="Nuestra Pileta">
            <div className="bg-pool bg-center bg-cover h-[400px] lg:h-[500px] rounded shadow-lg border-t border-t-slate-800 shadow-slate-950 lg:">
            </div>
            <p className="px-4 py-6 font-semibold text-lg">
              Nuestra pileta cuenta con dos metros de profundidad 4 metros de
              larga y 2 metros de ancha. Es una de las mejores piletes en el
              norte argentino. Veni disfrutala hoy
            </p>
          </AccordianItem>
          <AccordianItem value="2" trigger="Nuestra Cocina">
            <div className="bg-dining bg-cover bg-center h-[300px] lg:h-[400px] rounded shadow-lg border-t border-t-slate-800 shadow-slate-950 lg:">
            </div>
            <p className="px-4 py-6 font-semibold text-lg">
              Nuestra pileta cuenta con dos metros de profundidad 4 metros de
              larga y 2 metros de ancha. Es una de las mejores piletes en el
              norte argentino. Veni disfrutala hoy
            </p>
          </AccordianItem>
          <AccordianItem value="3" trigger="Nuestro Bar">
            <div className="bg-bar bg-cover bg-center h-48 lg:h-[500px] rounded shadow-lg border-t border-t-slate-800 shadow-slate-950 lg:">
            </div>
            <p className="px-4 py-6 font-semibold text-lg">
              Nuestra pileta cuenta con dos metros de profundidad 4 metros de
              larga y 2 metros de ancha. Es una de las mejores piletes en el
              norte argentino. Veni disfrutala hoy
            </p>
          </AccordianItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Services;
