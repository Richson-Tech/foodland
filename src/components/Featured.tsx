import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async ()=> {
  const res = await fetch("http://localhost:3000/api/products", {
    cache:"no-store"
  })
  // if(!res.ok) {
  //   throw new Error("Failled!");
  // }
  return res.json();
}


const Featured = async () => {
  const featuredProducts:ProductType[] = await getData();
  return (
    <div className="w-screen overflow-x-scroll text-black">
      {/* WRAPPER  */}
      <div className="w-max flex">
        {/* SINGLE ITEM  */}
        {featuredProducts.map((items) => (
          <div
            key={items.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-[#00A082] hover:text-white translation-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER  */}
            {items.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={items.img}
                  alt="temporary img"
                  fill
                  className="object-contain p-4"
                />
              </div>
            )}
            {/* TEXT CONTAINER  */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {items.title}
              </h1>
              <p className="p-4 2xl:p-8">{items.desc}</p>
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
