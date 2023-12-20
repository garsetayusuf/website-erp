import React from "react";
import { About } from "../about/About";
import { Pricing } from "../pricing/Pricing";
import { Contact } from "../contact/Contact";

export const Home = () => {
  return (
    <div className="w-full flex flex-col relative">
      <img
        src="/header-blob.png"
        alt=""
        className="absolute lg:top-[-80px] lg:h-[375px] h-[225px]"
      />
      <section className="mx-auto w-full py-12 md:py-24 lg:py-32 xl:py-20 z-[9] mt-10">
        <div className="mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Selamat datang di Sistem ERP Kami
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Sistem ERP kami menyediakan manajemen terintegrasi dari proses
                bisnis utama, difasilitasi oleh perangkat lunak dan teknologi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex flex-row items-center">
        <div className="mx-auto py-20 flex flex-col justify-center z-[1]">
          <p className="text-center">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit"
          </p>
          <img src="/image-stock.png" alt="" width={500} />
        </div>
      </div>
      <img
        src="/body-blob.png"
        alt=""
        width={700}
        className="absolute right-[-380px] md:top-[400px]"
      />

      <About />
      <Pricing />
      <Contact />
    </div>
  );
};
