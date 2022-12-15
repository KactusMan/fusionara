
import React from "react";
import Header from "./components/header";
import MidSection from "./components/middle-section";
import Hero from "./components/hero";
import Split from "./components/split";
import Black from "./components/black-box";


export default function DefaultLayout() {
  return (
    <div className="max-w-[100%] max-h-[200%]">
      <Header />
      <MidSection/>
      <Hero/>
      <Split/>
      <Black/>
      
    </div>
  );
}
