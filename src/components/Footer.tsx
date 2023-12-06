"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);

  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-[#00A082] flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        FOODLAND
      </Link>
      <p className="flex flex-row items-center justify-center text-base mt-20 font-['Work_Sans'] ">
        Copyright<sup className="text-base font-bold">&copy;</sup> All Rights
        Reserved{" "}
        <span className="font-semibold pl-2">
          {" "}
          RICHSON TECH. <span className="pl-2">{Year}</span>{" "}
        </span>
      </p>
    </div>
  );
};

export default Footer;
