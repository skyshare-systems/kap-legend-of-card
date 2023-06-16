"use client";
import { Lato } from "next/font/google";
import Image from "next/image";
import React from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const FooterPage = () => {
  return (
    <footer className="flex justify-center items-center py-12 bg-black border-t-2 border-yellow-500">
      <div className="container max-w-[800px] flex justify-center lg:justify-between items-center flex-wrap gap-4">
        <span
          className={`${lato.className} text-white text-lg font-medium order-2 lg:order-1`}
        >
          ©2022 TEZZA LABS PTE. LTD
        </span>
        <Image
          alt="footer_logo"
          src={"/assets/footer_logo.webp"}
          width={185}
          height={133}
          className="order-1 h-28 w-auto lg:h-auto lg:order-2"
        ></Image>
      </div>
    </footer>
  );
};

export default FooterPage;
