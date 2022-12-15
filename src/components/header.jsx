import React from "react";

export default function Header() {

  return (

    <div className="lg-w:[2072px] lg-h:[1065px]   back-png  mx-auto  lg:mx-auto h-20 flex  ">


    
      <div>
        <ul className="flex ">
          <a href="/">
          <li className="lg:flex pt-5 pl-5 roboto lg:ml-[40%] lg:justify-center hidden">FUSIONARA</li></a>
          </ul>
      
      </div>
      
    
      <div className="lg:flex pt-5 pl-5 realtive lg:ml-[31%] lg:justify-center hidden ">
        <ul className="flex flex-row pr-2">
          <a href="/">
          <li className="text-md  roboto text-center text-{#D6D6D699} mr-14 cursor-pointer">ABOUT</li></a>
          <li className="text-md   roboto text-center text-{#D6D6D699}  mr-14 cursor-pointer">WORLD</li>
          <li className="text-md   roboto text-center text-{#D6D6D699}  mr-14 cursor-pointer">GAMEPLAN</li>
          <li className="text-md   roboto text-center text-{#D6D6D699}  mr-14 cursor-pointer">TEAM</li>
          <li className="text-md      text-{#D6D6D699} roboto lg:ml-[45%]  ">TWITTER</li>
          <li className="text-md    roboto   lg:ml-[10%]  ">DISCORD</li>
        </ul>
      
        
      </div>


      
      
    </div>
  );
}