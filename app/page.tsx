import Image from "next/image";
import HomeWidget from "./components/HomeWidget";
import { Services } from "./components/services";
import WhyChooseUs from "./components/chooseus";

export default function Home() {
  return (
    <>
      <HomeWidget />
      <Services />
      <WhyChooseUs />
    </>
  );
}
