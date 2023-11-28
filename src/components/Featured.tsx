import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER  */}
      <div className="w-max flex">
        {/* SINGLE ITEM  */}
        {featuredProducts.map((items) => (
          <div key={items.id} className="w-screen h-[60vh] flex flex-col items-center justify-around">
            {/* IMAGE CONTAINER  */}
            {items.img && (
                <div className="relative flex-1 w-full">
              <Image
                src={items.img}
                alt="temporary img"
                fill
                className="object-contain p-4"
              />
            </div>
            )}
            {/* TEXT CONTAINER  */}
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-xl font-bold uppercase">{items.title}</h1>
              <p>{items.desc}</p>
              <span className="text-xl font-bold">{items.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
