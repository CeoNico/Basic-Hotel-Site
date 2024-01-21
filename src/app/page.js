import Accordion from "@/components/Accordian/Accordion";
import Hero from "@/components/Hero/Hero";
import Room from "@/components/Rooms/Room";
import Services from "@/components/Services/Services";
import Location from "@/components/Location/Location";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Room />
      <Services />
      <Location />
    </>
  );
}
