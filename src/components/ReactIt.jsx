import React from "react";
import fortnite from "../images/fortnite.png";
import mask1 from "../images/mask1.png";
import mask2 from "../images/mask2.png";
import mask3 from "../images/mask3.png";

const ReactIt = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="max-w-screen-lg mx-auto p-4 text-center text-2xl font-roboto capitalize leading-10 tracking-wide">
        Epic Games: An American video game and software developer and publisher
        based in Cary, North Carolina.
      </div>
      <div className="flex justify-center">
        <img className="max-w-full h-auto" src={fortnite} alt="" />
      </div>
      <div className="max-w-screen-lg mx-auto p-4 text-white text-[13 px] leading-27 tracking-0 text-center">
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator-made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </div>
      <div className="max-w-screen-lg mx-auto p-4 cursor-pointer bg-white text-black text-19 leading-29 tracking-[0.9599999785423279px] text-center">
        Visit Website
      </div>

      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto p-4">
        <div className="mb-4 md:mb-0 md:mr-4">
          <img className="w-full h-[347px]" src={mask1} alt="" />
          <div className="text-white text-[13 px] mt-4">
            Discover even more ways to play across thousands of creator-made
            game genres
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:mr-4">
          <img className="w-full h-[347px]" src={mask2} alt="" />
          <div className="text-white mt-4 text-[13  px]">
            Team up with friends by sprinting, climbing and smashing your way to
            earn your Victory Royale
          </div>
        </div>
        <div>
          <img className="w-full h-[347px]" src={mask3} alt="" />
          <div className="text-white mt-4 text-[13  px]">
            Explore large, destructible environments where no two games are ever
            the same.
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1142px] mx-auto text-center">
        <div className="w-full h-[48px]   text-2xl flex justify-center">
          Our Contribution
        </div>
        <div className="w-full max-w-[1142px] text-[13  px] h-81px opacity-80 font-[Poppins]">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </div>
      </div>

      <div className="flex font-extralight justify-center gap-5 mt-8">
        <div className="text-center">
          <div className="text-4xl ">5M</div>
          <div>Daily User Engagements</div>
        </div>
        <div className="text-center">
          <div className="text-4xl ">$500K</div>
          <div>Revenue Surge for a Platform</div>
        </div>
        <div className="text-center">
          <div className="text-4xl">10K</div>
          <div>ROAS on all our marketing campaigns</div>
        </div>
      </div>

      <div className="  mt-8">
        <div className=" flex justify-center  h-[48px] ">
          Interested in delving deeper into the project?
        </div>
        <div className=" text-center flex justify-center h-[99px] mt-4 font-[400]">
          If you'd like to explore further details about our initiatives or any
          of our affiliated brands, don't hesitate to connect. You can reach out
          to us via email at hello@abc.com or give us a call at +91 480
          20802730.
        </div>
      </div>

     

      <div className="flex py-6 gap-2">
        <div className=" p-4 border w-[170px] border-white">
          Run us on Skype
        </div>

        <div className="bg-white w-[170px] p-4 text-center text-neutral-900">
          Contact Us
        </div>


      </div>
      <div className=" py-4 opacity-90 text-white text-[13px] font-light  leading-relaxed">
        © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </div>
    </div>
  );
};

export default ReactIt;
