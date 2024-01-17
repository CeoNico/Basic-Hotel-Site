import Hero from "@/components/Hero/Hero";
import Room from "@/components/Rooms/Room";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Room />
      <Testimonials />
      <Services />
    </>
  );
}
