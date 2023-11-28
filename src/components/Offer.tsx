import React from "react";
import Image from "next/image";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row">
      {/* TEXT CONTAINER  */}
      <div className=" flex-1">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white">
          Progressively simplify effective e-toilers and process-centric methods
          of empowermwnt. Quickly potificate parallel.
        </p>
        <button className="">Order Now</button>
      </div>
      {/* TEXT CONTAINER  */}
      <div className="flex-1 w-full relative">
        <Image
          src="/offerProduct.png"
          alt="offer pic"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
