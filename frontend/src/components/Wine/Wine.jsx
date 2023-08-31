import React from "react";
import "../../App.css";
import PreviousWineSearches from "./PreviousWineSearches";
import WineGuide from "./WineGuide";
import WineRecognition from "./WineRecognition";
export default function Wine() {
  return (
    <>
      <PreviousWineSearches />
      <WineGuide />
      <WineRecognition />
    </>
  );
}
