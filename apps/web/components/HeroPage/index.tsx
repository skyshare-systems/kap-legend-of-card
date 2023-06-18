"use client";

import Image from "next/image";
import Link from "next/link";

import { Oswald } from "next/font/google";
import React from "react";
const oswald = Oswald({ subsets: ["latin"] });

const HeroPage = () => {
  return (
    <main className="flex relative justify-center items-start py-24 bg-[url('/assets/background/background.webp')] bg-cover bg-center bg-fixed">
      <div className="container flex flex-col max-w-[1200px] justify-start gap-4 items-center p-4 lg:gap-8 lg:px-0">
        <div className="hero-container flex flex-col">
          <div className="banner flex flex-wrap">
            <Image
              alt=""
              src={"/assets/banner_left.webp"}
              width={604}
              height={581}
            />
            <Link href="/staking">
              <Image
                alt=""
                src={"/assets/banner_right.webp"}
                width={444}
                height={581}
              />
            </Link>
          </div>
          <span className="grow text-center text-white/50 text-[10px] leading-[12px]">
            PokerNews. (n.d.). 2023 WSOP [Online article]. Retrieved from{" "}
            <Link
              href={"https://www.pokernews.com/tours/wsop/2023-wsop/"}
              className="underline"
            >
              https://www.pokernews.com/tours/wsop/2023-wsop/
            </Link>
          </span>
        </div>
        <div className="team-container flex flex-col grow gap-2 lg:gap-4 lg:max-w-[1048px]">
          <div className="title flex">
            <span
              className={`${oswald.className} text-white grow text-center text-5xl font-semibold`}
            >
              TEAM LOC
            </span>
          </div>
          <div className="cards-container flex flex-col lg:grid grid-cols-2 grid-rows-3 place-items-center gap-x-4 gap-y-0 text-white">
            <div className="p-2 lg:-mt-14">
              <Image
                alt="profile"
                src={"/assets/profile_vincent.webp"}
                width={515}
                height={267}
              />
            </div>
            <div className="p-2 lg:mt-14">
              <Image
                alt="profile"
                src={"/assets/profile_anson.webp"}
                width={515}
                height={267}
              />
            </div>
            <div className="row-start-2 p-2 lg:-mt-14">
              <Image
                alt="profile"
                src={"/assets/profile_sparrow.webp"}
                width={515}
                height={267}
              />
            </div>
            <div className="row-start-2 p-2 lg:mt-14">
              <Image
                alt="profile"
                src={"/assets/profile_soojo.webp"}
                width={515}
                height={267}
              />
            </div>
            <div className="row-start-3 p-2 lg:-mt-14">
              <Image
                alt="profile"
                src={"/assets/profile_ivan.webp"}
                width={515}
                height={267}
              />
            </div>
            <div className="row-start-3 p-2 lg:mt-14">
              <Image
                alt="profile"
                src={"/assets/profile_nevan.webp"}
                width={515}
                height={267}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
