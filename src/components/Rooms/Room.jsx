import Image from "next/image";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets:['latin']
})



const Room = () => {
  return (
    <div className={`h-fit lg:h-screen w-screen bg-slate-800 ${gabarito.className}`}>
      <h1 className="p-6 flex flex-col items-center text-3xl lg:text-5xl font-bold tracking-tight text-white">
        Nuestras Habitaciones
      </h1>
      <div className="flex flex-col text-balanced p-4 lg:p-10 lg:grid lg:grid-cols-2">
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
        <div className="flex items-center justify-center py-4 pl-2">
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
