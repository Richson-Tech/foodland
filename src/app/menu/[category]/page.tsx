import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-[#00A082]">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-[#facc15] sm:w-1/2 lg:w-1/3 flex flex-col justify-between group even:bg-[#f2eac8]"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER  */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="img of products" fill />
            </div>
          )}
          {/* Text CONTAINER  */}
          <div className="flex items-start justify-between font-bold">
            <h1 className="2xl uppercase p-2">{item.title}</h1>
            <h1 className="group-hover:hidden text-xl">${item.price}</h1>
            <button className="hidden group-hover:block uppercase bg-[#00A082] text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
