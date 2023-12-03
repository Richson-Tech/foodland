import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3" href={`product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER  */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="img" fill />
            </div>
          )}
          {/* Text CONTAINER  */}
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
