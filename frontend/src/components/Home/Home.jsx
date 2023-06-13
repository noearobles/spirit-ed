import AboutUs from "./AboutUs/AboutUs";
import Quote from "./Chef/Quote";

import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import SpecialMenu from "./Menu/SpecialMenu";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Quote />
      <Intro />
    </>
  );
}
