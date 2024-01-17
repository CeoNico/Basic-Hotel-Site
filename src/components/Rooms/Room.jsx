import Image from "next/image";
import React from "react";

const Room = () => {
  return (
    <div className="h-screen w-screen bg-slate-900">
      <div className="container flex-col flex text-center">
        <div className="">
          <h1 className="text-white text-4xl font-bold tracking-tight mt-2 p-16 lg:text-5xl">
            Nuestras Habitaciones
          </h1>
        </div>
        <div>
          <p className="p-4 -mt-6 text-white font-light tracking-tight lg:text-2xl">
            Nuestras habitaciones de hotel son incomparables al brindar una
            estancia verdaderamente excepcional e inolvidable. Sumérgete en la
            cima del confort y el lujo, ya que nuestras habitaciones
            meticulosamente diseñadas ofrecen una perfecta combinación de
            comodidades modernas y una decoración elegante. Cada detalle ha sido
            cuidadosamente seleccionado para garantizar una experiencia sin
            contratiempos, desde la ropa de cama mullida que garantiza un sueño
            reparador hasta la tecnología de última generación que satisface
            todas tus necesidades.
          </p>
        </div>
        <div className="w-sceen border-2">
            <div className="border-2 border-cyan-200 h-56 w-full">
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
