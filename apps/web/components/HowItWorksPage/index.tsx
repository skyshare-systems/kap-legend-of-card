import React from "react";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
import Image from "next/image";

import { Lato } from "next/font/google";
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const HowItWorksPage = () => {
  return (
    <section className="flex relative justify-center items-start pt-32 bg-[url('/assets/background/background.webp')] bg-cover bg-center bg-fixed">
      <div className="absolute bottom-0 h-[190vh] bg-black w-full "></div>
      <div className="container flex flex-col max-w-[1200px] justify-center gap-4 p-4 lg:gap-8 lg:p-24 bg-black/40 backdrop-blur-sm w-full">
        <h1
          className={`text-center ${oswald.className} text-white uppercase text-4xl font-semibold`}
        >
          How it works
        </h1>

        <div className="flex flex-col max-w-[900px] gap-5">
          <h1
            className={`${oswald.className} text-2xl text-white font-semibold`}
          >
            LoC Staking
          </h1>
          <p className={`${oswald.className} text-2xl text-white font-medium`}>
            We offer LoC community the opportunity to stake the legends in Team
            LoC in exchange for a share of their winnings.
          </p>
          <br></br>
          <br></br>

          <h1
            className={`${oswald.className} text-2xl text-white font-semibold`}
          >
            How Poker Staking Works
          </h1>

          <p className={`${lato.className} text-white text-lg`}>
            -Your NFT represents a specific percentage of a player’s stake in a
            specific tournament, i.e. NFT player staking $ value divided by the
            total $ value of the tournament buy-in.
            <br></br>
            <br></br>
            -(Use the WSOP Main Event 2023 as an example, a $30 player staking
            value equates to a 0.05% Team LoC’s stake in this $60,000 buy-in
            tournament).
            <br></br>
            <br></br>
            -Should the player win, the NFT holder’s Gross Winning equals the %
            of player total prize that corresponds to the same percentage per
            <br></br>
            <br></br>
            NFT represents. -Net winning occurs if Gross Winning surpasses
            original NFT price; if not, Net Winning is zero. Player gets 20% of
            Net Winnings as Performance Bonus. -Net Winnings will then be sent
            to NFT holder’s wallet after the players received the prize from
            WSOP
          </p>

          <Image
            src={"/assets/flowchart.webp"}
            alt={"flowchart"}
            height={1000}
            width={1000}
          />

          <p className={`${lato.className} text-white text-lg`}>
            <u>Traditional Poker Staking:</u>
            <br></br>
            <br></br>
            Players are often charging a MARKUP. (an additional percentage added
            to the buy-in when staking a player) This can cause many potential
            problems:
            <br></br>
            <br></br>
            -Unreasonable Markups: Players may set exorbitant markups that are
            disproportionate to their actual skill or potential profitability.{" "}
            <br></br>
            <br></br>-Misaligned Incentives: Higher markups may incentivize
            players to prioritize personal profit over optimal decision-making
            during the game. They might be inclined to take riskier or
            suboptimal plays.
            <br></br>
            <br></br>
            -Oversold action: Players are selling more than 100% of the share in
            a tournament, since they have charged markup, they will be
            incentified to bust the tournament to secure the markup profit.
          </p>
          <br></br>
          <br></br>
          <p className={`${lato.className} text-white text-lg`}>
            <u>LoC Unique Staking Model:</u>
            <br></br>
            <br></br>
            Team LoC DOES NOT charge any markup, NFT holders will give 20% of
            the Net Winning (Gross Winning-original NFT price) to the players as
            a Performance Bonus. This incentive model is widely used in the
            financial world, we bring this to the poker world:
            <br></br>
            <br></br>
            -No Unreasonable Markup: as part of the NFT utilities, NFT holders
            can get professional players’ action AT COST, there is no markup
            even for world-class players.
            <br></br>
            <br></br>
            -Performance-based Incentives: Players will be rewarded ONLY when
            they deliver a positive Net Winning for the NFT holders. Players are
            incentivized to deliver the best results for their backers,
            eliminating the potential moral hazard.
            <br></br>
            <br></br>
            -Buy and Claim via Crypto: Easy and fast process to avoid
            unnecessary transaction fees and admin costs. On-chain record:
            backers’ staking action is recorded on-chain and evident by a
            transferable NFT in their wallet.
          </p>
          <br></br>
          <br></br>
          <h1
            className={`${oswald.className} text-2xl text-white font-semibold`}
          >
            Sample
          </h1>
          <p className={`${lato.className} text-white text-lg`}>
            Each NFT gives you $30 worth of player staking value, i.e. 0.05%
            share of the Team’s combined total winnings for this event.
            <br></br>
            <br></br>
            If Team LoC combined winning is $10,000,000,
            <br></br>
            <br></br>
            Your Gross winning : $10,000,000 x 0.05% = $5,000<br></br>
            Original NFT staking value = $30 <br></br>
            Performance Bonus = ($50,000 - $30) x 20% = $994 <br></br>
            Your Net winnings after Perf. bonus = $5,000 - $994 = $4,006
            <br></br>
            <br></br>
            Your % return is (4,006-30) /30 = 13,253%
            <br></br>
            <br></br>
            *Please note that a portion of the Gross Winnings, specifically 30%,
            could be withheld by the US government from certain players. The
            players will file a tax refund application which normally takes 6-12
            months.
            <br></br>
            <br></br>
            In case that happens, we will first distribute the pre-tax winnings
            to the staker. Once the tax refund process is completed, the
            refunded amount, after deducting the necessary admin fees charged by
            the external service provider, will be airdropped to the NFT
            holder’s wallet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
