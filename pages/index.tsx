import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import { NextPage } from "next";
import Link from "next/link";
import { TextGenerateEffect } from "../components/text-generate";

const Home: NextPage = () => {

  const words = "Our system is an innovative call management system that uses artificial intelligence (AI) to help prioritize emergency calls when no handlers are available. By analyzing the keywords and recording the location of callers, Our System can grade the importance of each call and quickly transfer the relevant information to the respective handler. This system helps emergency services to respond more efficiently and effectively to urgent situations.";
  return (
    <main className={styles.main}>
      <div className={`${styles.container} container my-6 md:my-8 md:mx-4 lg:my-12 mx-2 lg:mx-10`}>
        <div className="grid grid-cols-12">
          <div className="lg:h-[80dvh] h-auto flex flex-col justify-center col-span-12 md:col-span-5 md:order-1 order-2">
            <div className="mx-3 lg:mx-12">
              <div className="text-4xl font-bold">Emergency-AI</div>
              <TextGenerateEffect words={words} className="text-sm my-5" />
              <div className="flex gap-4 items-center">
                <ConnectWallet/>
                <Link href='/Dashboard'><p className="text-[#52057B] text-lg underline underline-offset-8 cursor-pointer">Continue to Dashboard</p></Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 lg:order-3">
            <div className="lg:h-[80dvh] my-5 md:my-0 flex justify-center flex-col gap-3 mx-7">
              <div className="flex justify-end">
                <div className="relative right-5 flex items-center cursor-pointer">
                  <div className="p-2 bg-[#52057B] border-r-4 border-white rounded-full text-white absolute -left-5 "></div>
                  <div className="text-white bg-[#52057B] p-2 px-8 rounded-full">+1 205 272 8417</div>
                </div>
              </div>
              <Image src="/images/hero-img.png" width={500} height={500} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
