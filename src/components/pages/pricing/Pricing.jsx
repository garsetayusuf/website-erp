import React, { useState } from "react";
import "./Pircing.css";
import PricingList from "./PricingList";

export const Pricing = () => {
  const [activeButton, setActiveButton] = useState("month");
  const month = [
    { tier: "tier 1", harga: "100.000,00" },
    { tier: "tier 2", harga: "150.000,00" },
    { tier: "tier 3", harga: "300.000,00" },
  ];

  const year = [
    { tier: "tier 1", harga: "1.200.000,00", diskon: "1.100.000,00" },
    { tier: "tier 2", harga: "1.800.000,00", diskon: "1.700.000,00" },
    { tier: "tier 3", harga: "3.600.000,00", diskon: "3.400.000,00" },
  ];

  const handleButtonClick = (button) => {
    setActiveButton(button);
    let element = document.getElementById(button);
    if (element) {
      element.classList.add("active");
    }
  };

  return (
    <section id="pricing" className="w-full py-12 md:py-12 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-row justify-center items-center space-y-4 text-center">
          <img
            src="/pricing-blob.png"
            alt=""
            className="absolute lg:right-[-400px] right-[-220px] h-[540px]"
          />
          <div className="space-y-2 relative">
            <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Harga
            </h1>
            <p className="pb-12 mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Get more from Crafrwork with our flexible subscription plans.
              Choose from montly or yearly option and get access to our entire
              library of high-quality digital asset.
            </p>
            <div className="w-max mx-auto bg-gray-100 p-1 text-black rounded-full flex flex-row font-bold border-2 border-gray-100">
              <button
                id="month"
                className={activeButton === "month" ? "active" : ""}
                onClick={() => handleButtonClick("month")}
              >
                Bulanan
              </button>
              <button
                id="year"
                className={activeButton === "year" ? "active" : ""}
                onClick={() => handleButtonClick("year")}
              >
                Tahunan
              </button>
            </div>
            <div className="pt-5 overflow-x-auto">
              <PricingList
                pricelist={activeButton === "month" ? month : year}
                type={activeButton === "month" ? "month" : "year"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
