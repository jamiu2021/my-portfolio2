"use client";
//import Button from "@/components/button/button";
import ContactUs from "@/components/modal/contact-us";
//import ContactUs from "@/components/main-header/contact-us";

import { useState } from "react";
export default function ContactPage() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }
  return (
    <div className="mt-20 md:mt-50">
      <div className=" mt-30">
        <h3 className="text-center text-xl md:text-2xl mb-3 mt-20 md:mb-4 text-indigo-600 uppercase">
          Contact
        </h3>
        <h1 className="text-center  text-3xl md:text-6xl mb-6">
          Got a problem to solve?
        </h1>
        <p className="text-center px-5 mb-5 md:mt-5 md:m-20">
          Ready to elevate your code base to new heights? Experience the
          exceptional expertise of a skilled mentor who effortlessly propels
          projects to the next level. Let’s partner with your needs to maximize
          your code's potential. Don't miss out on this opportunity!{" "}
          <strong>
            for more enqury, you can hit me up to get your dream web solution by
            clicking the button below
          </strong>
        </p>
        <p className="flex items-center justify-center ">
          <button
            onClick={handleStartAddNewChallenge}
            className=" px-4 py-2  md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          >
            contact us
          </button>
        </p>
        {isCreatingNewChallenge && <ContactUs onOPen={handleDone} />}
      </div>
    </div>
  );
}
