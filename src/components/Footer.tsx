"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [Year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);

  return (
    <div className="flex items-center justify-between h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-[#00A082] ">
      <Link
        href="/"
        className="text-xl font-bold md:text-lg lg:text-xl xl:text-2xl"
      >
        FOODLAND
      </Link>
      <p className=" flex flex-col items-center justify-between text-base font-['Work_Sans'] md:text-lg lg:text-xl xl:text-2xl ">
        <div className="">
          All Rights Reserved
          <sup className="text-base font-bold">&copy;</sup>
        </div>
        <span className=" text-sm font-semibold pl-2">
          RICHSON TECH. <span className="pl-2">{Year}</span>{" "}
        </span>
      </p>
    </div>
  );
};

export default Footer;
