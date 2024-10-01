import Collaboration from "@/(components)/Collaboration/Collaboration";
import Hero from "@/(components)/Hero/Hero";
import OpenAi from "@/(components)/OpenAi/OpenAi";
import Tabs from "@/(components)/Tabs/Tabs";
import VideoSlider from "@/(components)/VideoSlider/VideoSlider";
import Work from "@/(components)/Work/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Collaboration />
      <OpenAi />
      <VideoSlider />
      <Tabs />
      <Work />
    </>
  );
}
