import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} container my-6 md:my-8 md:mx-4 lg:my-12 mx-2 lg:mx-10`}>
        <div className="grid grid-cols-12">
          <div className="lg:h-[80dvh] h-auto flex flex-col justify-center col-span-12 md:col-span-5 md:order-1 order-2">
            <div className="mx-3 lg:mx-12">
              <div className="text-4xl font-bold">Saaha-AI</div>
              <div className="my-6">
                Saaha-AI system lets callers talk to AI if there are no available 911 operators, grading them on the scale of how important their call is based on the keywords and recording their location. While the responses are being gathered, it will prioritize their call and hand over the call transcript to the 911 operator.
              </div>
              <div className="flex gap-4 items-center">
                <ConnectWallet/>
                <p className="text-[#52057B] text-lg underline underline-offset-8 cursor-pointer">Continue to Chat</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 lg:order-3">
            <div className="lg:h-[80dvh] my-5 md:my-0 flex justify-center flex-col gap-3">
              <div className="flex justify-end">
                <div className="relative right-5 flex items-center cursor-pointer">
                  <div className="p-2 bg-[#52057B] border-r-4 border-white rounded-full text-white absolute -left-5 "></div>
                  <div className="text-white bg-[#52057B] p-2 px-8 rounded-full">+12707704034</div>
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
