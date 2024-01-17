import React from "react";
import Services from "../Services/Services";
import Card from "../Card/Card";

const Testimonials = () => {
  return (
    <div className="h-fit lg:h-screen w-full bg-slate-600">
      <h1 className="flex items-center justify-center font-bold text-4xl text-white bg-black rounded-lg p-2 bg-opacity-30">
        Nuestros Clientes
      </h1>
      <div className="flex-col lg:grid lg:grid-cols-2 flex text-center p-12 gap-2">
        <Card name={"John Doe"} message={"Excellente hotel, el dueno un capo total! Ningun problema y muy hermoso lugar"} rating={"3.5/5.0"} />
        <Card name={"Mary Jane"} message={"Hotel de primera, realmente sorpendido con la elegancia de este hotel ubicaco en tartagal"} rating={"4.3/5.0"} />
        <Card name={"Peter Parker"} message={"Muy buen hotel, tiene linda pileta, bar y riquizimas comida en la cocina. 10/10"} rating={"4.5/5.0"} />
        <Card name={"Peter Griffin"} message={"Bruh this shit sucks "} rating={"5.0/5.0"} />
      </div>
    </div>
  );
};

export default Testimonials;
