import AboutUs from "./AboutUs/AboutUs";
import Quote from "./Quote/Quote";

import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import SpecialMenu from "./Menu/SpecialMenu";

export default function Home() {
  return (
    <>
      <Header />
      <SpecialMenu />
      <AboutUs />
      <Quote />
      <Intro />
    </>
  );
}
