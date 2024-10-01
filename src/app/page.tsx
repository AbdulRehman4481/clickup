import Collaboration from "@/(components)/Collaboration/Collaboration";
import Hero from "@/(components)/Hero/Hero";
import OpenAi from "@/(components)/OpenAi/OpenAi";
import Tabs from "@/(components)/Tabs/Tabs";
import Work from "@/(components)/Work/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Collaboration />
      <OpenAi />
      <Tabs />
      <Work />
    </>
  );
}
