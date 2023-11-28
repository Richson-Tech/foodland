import React from "react";
import Image from "next/image";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row">
      {/* TEXT CONTAINER  */}
      <div className=" flex-1 flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowermwnt. Quickly potificate parallel.
        </p>
        <button className="bg-red-500 text-white rounded-md py-3 px-6">Order Now</button>
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
