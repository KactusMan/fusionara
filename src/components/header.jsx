import React from "react";

export default function Header() {

  return (

    <div className="lg-w:[2072px] lg-h:[1065px]   back-png  mx-auto  lg:mx-auto h-20 flex  ">


    
      <div>
       <img className="relative lg:ml-[10%]" src="/assets/images/Fusionara_Logo_1.png" alt="" />
      
      </div>
      
    
      <div className="lg:flex pt-5  realtive lg:ml-[24%] lg:justify-center hidden ">
        <ul className="flex flex-row pr-2">
          <a href="/">
          <li className="text-md  roboto text-center text-{#D6D6D699} mr-14 cursor-pointer">ABOUT</li></a>
          <li className="text-md   roboto text-center text-{#D6D6D699}  mr-14 cursor-pointer">WORLD</li>
          <li className="text-md   roboto text-center text-{#D6D6D699}  mr-14 cursor-pointer">GAMEPLAN</li>
          <li className="text-md   roboto text-center text-{#D6D6D699}  mr-14 cursor-pointer">TEAM</li>
          
        </ul>
      
        
      </div>

        <div>
            <a href="https://twitter.com/fusionara">

            <img className="disc" src="/assets/images/discordicon.png" alt="" />
            </a>

            <a href="https://discord.com">
            <img className="twit" src="/assets/images/twitterlogo.png" alt="" />
            </a>
        </div>
      
      
    </div>
  );
}