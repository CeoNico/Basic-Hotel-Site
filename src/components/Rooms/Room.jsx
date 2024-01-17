import Image from "next/image";
import React from "react";

const Room = () => {
  return (
    <div className="h-screen w-screen bg-slate-900">
      <h1 className="flex flex-col items-center text-3xl lg:text-5xl font-bold tracking-tight text-white">
        Rooms
      </h1>
      <div className="flex flex-col text-center text-balanced lg:p-24 lg:grid lg:grid-cols-2">
        <p className="font-light text-lg lg:text-2xl text-white tracking-tighter p-2 lg:justify-center">
          Nuestras habitaciones de hotel son incomparables al brindar una
          estancia verdaderamente excepcional e inolvidable. Sumérgete en la
          cima del confort y el lujo, ya que nuestras habitaciones
          meticulosamente diseñadas ofrecen una perfecta combinación de
          comodidades modernas y una decoración elegante. Cada detalle ha sido
          cuidadosamente seleccionado para garantizar una experiencia sin
          contratiempos, desde la ropa de cama mullida que garantiza un sueño
          reparador hasta la tecnología de última generación que satisface todas
          tus necesidades.
        </p>
        <div className=" flex items-center justify-center">
          <Image
            className="rounded-lg border-2 border-black "
            src="/bedroom.jpg"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Room;
