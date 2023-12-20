import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const PricingList = ({ pricelist, type }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const descriptionElements = document.querySelectorAll("#deskripsi");
    const fiturElements = document.querySelectorAll("#fitur");

    if (document.body.offsetWidth >= 768) {
      let maxHeight = 0;
      descriptionElements.forEach((element) => {
        maxHeight = Math.max(maxHeight, element.clientHeight);
      });

      descriptionElements.forEach((element) => {
        element.style.height = `${maxHeight}px`;
      });

      let fiturMaxHeight = 0;
      fiturElements.forEach((element) => {
        fiturMaxHeight = Math.max(fiturMaxHeight, element.clientHeight);
      });

      fiturElements.forEach((element) => {
        element.style.height = `${fiturMaxHeight}px`;
      });
    }

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pricelist]);

  return (
    <div
      id="child"
      className="flex lg:flex-row md:flex-row flex-col gap-5 overflow-x-auto"
      style={{
        width:
          windowWidth >= 768
            ? windowWidth <= 1024
              ? `${windowWidth - 48}px`
              : "100%"
            : "100%",
      }}
    >
      <div className="mx-auto bg-gray-50 border-2 border-gray-100 rounded-3xl p-5 max-lg:min-w-[300px] md:min-w-[350px] max-w-[375px] flex flex-col gap-4">
        <div className="flex flex-row gap-5 font-bold items-center">
          <div className="p-3 bg-[#1c65ffcb] rounded-2xl">
            <Icon icon="tabler:badge" color="white" width={35} />
          </div>
          <div className="text-left">
            <p className="text-xl">Tier 1</p>
            <p className="text-gray-500 text-sm">Basic</p>
          </div>
        </div>
        <div
          id="deskripsi"
          className="text-gray-600 text-sm font-medium text-left"
        >
          Layanan Tier 1 Basic mencakup Pencatatan barang masuk, keluar, dan
          hasil keuntungan menjadi lebih mudah dengan solusi efisien dan
          sederhana.
        </div>
        <div className="py-2">
          {type === "month"
            ? pricelist &&
              pricelist.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="text-3xl font-extrabold text-left text-[#1c65ffcb]">
                      {item.tier === "tier 1" && `Rp. ${`${item.harga}`}`}
                    </div>
                    <div className="text-base font-bold text-left">
                      {item.tier === "tier 1" && "Per Bulan"}
                    </div>
                  </div>
                );
              })
            : pricelist &&
              pricelist.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="text-3xl font-extrabold text-left text-gray-500 line-through">
                      {item.tier === "tier 1" && `Rp. ${item.harga}`}
                    </div>
                    <div className="text-3xl font-extrabold text-left text-[#1c65ffcb]">
                      {item.tier === "tier 1" && `Rp. ${item.diskon}`}
                    </div>
                    <div className="text-base font-bold text-left">
                      {item.tier === "tier 1" && "Per Tahun"}
                    </div>
                  </div>
                );
              })}
        </div>
        <div id="fitur" className="text-left pb-4">
          <p className="font-bold text-gray-400 text-sm">
            FItur yang akan anda dapatkan
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm font-medium pt-1">
            <li>Mencatat barang masuk</li>
            <li>Mencatat barang keluar</li>
            <li>Mencatat hasil keuntungan</li>
          </ul>
        </div>
        <button className="p-2 bg-[#1c65ffcb] rounded-2xl text-white font-bold w-full">
          Beli Sekarang
        </button>
      </div>
      <div className="mx-auto bg-gray-50 border-2 border-gray-100 rounded-3xl p-5 max-lg:min-w-[300px] md:min-w-[350px] max-w-[375px] flex flex-col gap-4">
        <div className="flex flex-row gap-5 font-bold items-center">
          <div className="p-3 bg-[#ff1c88cb] rounded-2xl">
            <Icon icon="tabler:badge" color="white" width={35} />
          </div>
          <div className="text-left">
            <p className="text-xl">Tier 2</p>
            <p className="text-gray-500 text-sm">Business</p>
          </div>
        </div>
        <div
          id="deskripsi"
          className="text-gray-600 text-sm font-medium text-left"
        >
          Layanan Tier 2 Bisnis dengan fokus pada pertumbuhan dan optimalisasi,
          kami menyediakan solusi yang canggih untuk manajemen inventaris,
          penjualan, dan laporan keuangan.
        </div>
        <div className="py-2">
          {type === "month"
            ? pricelist &&
              pricelist.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="text-3xl font-extrabold text-left text-[#ff1c88cb]">
                      {item.tier === "tier 2" && `Rp. ${item.harga}`}
                    </div>
                    <div className="text-base font-bold text-left">
                      {item.tier === "tier 2" && "Per Bulan"}
                    </div>
                  </div>
                );
              })
            : pricelist &&
              pricelist.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="text-3xl font-extrabold text-left text-gray-500 line-through">
                      {item.tier === "tier 2" && `Rp. ${item.harga}`}
                    </div>
                    <div className="text-3xl font-extrabold text-left text-[#ff1c88cb]">
                      {item.tier === "tier 2" && `Rp. ${item.diskon}`}
                    </div>
                    <div className="text-base font-bold text-left">
                      {item.tier === "tier 2" && "Per Tahun"}
                    </div>
                  </div>
                );
              })}
        </div>
        <div id="fitur" className="text-left pb-4">
          <p className="font-bold text-gray-400 text-sm">
            FItur yang akan anda dapatkan
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm font-medium pt-1">
            <li>Mencatat barang masuk dan keluar</li>
            <li>Mencatat hasil keuntungan</li>
            <li>Dapat mengagnalisa hasil penjualan dengan Chart</li>
            <li>Support 7x24 Jam</li>
          </ul>
        </div>
        <button className="p-2 bg-[#ff1c88cb] rounded-2xl text-white font-bold w-full">
          Beli Sekarang
        </button>
      </div>
      <div className="mx-auto bg-gray-50 border-2 border-gray-100 rounded-3xl p-5 max-lg:min-w-[300px] md:min-w-[350px] max-w-[375px] flex flex-col gap-4">
        <div className="flex flex-row gap-5 font-bold items-center">
          <div className="p-3 bg-[#a51cffcb] rounded-2xl">
            <Icon icon="tabler:badge" color="white" width={35} />
          </div>
          <div className="text-left">
            <p className="text-xl">Tier 3</p>
            <p className="text-gray-500 text-sm">Entrepreneur</p>
          </div>
        </div>
        <div
          id="deskripsi"
          className="text-gray-600 text-sm font-medium text-left"
        >
          Layanan Tier 3 Entrepreneur mencakup untuk mendukung perjalanan
          kewirausahaan Anda dengan solusi-solusi yang inovatif.
        </div>
        <div className="py-2">
          {type === "month"
            ? pricelist &&
              pricelist.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="text-3xl font-extrabold text-left text-[#a51cffcb]">
                      {item.tier === "tier 3" && `Rp. ${item.harga}`}
                    </div>
                    <div className="text-base font-bold text-left">
                      {item.tier === "tier 3" && "Per Bulan"}
                    </div>
                  </div>
                );
              })
            : pricelist &&
              pricelist.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="text-3xl font-extrabold text-left text-gray-500 line-through">
                      {item.tier === "tier 3" && `Rp. ${item.harga}`}
                    </div>
                    <div className="text-3xl font-extrabold text-left text-[#a51cffcb]">
                      {item.tier === "tier 3" && `Rp. ${item.diskon}`}
                    </div>
                    <div className="text-base font-bold text-left">
                      {item.tier === "tier 3" && "Per Tahun"}
                    </div>
                  </div>
                );
              })}
        </div>
        <div id="fitur" className="text-left pb-4">
          <p className="font-bold text-gray-400 text-sm">
            FItur yang akan anda dapatkan
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm font-medium pt-1">
            <li>Mencatat barang masuk dan keluar</li>
            <li>Mencatat hasil keuntungan</li>
            <li>Dapat mengagnalisa hasil penjualan dengan Chart</li>
            <li>Support 7x24 Jam</li>
            <li>Export data ke Excel</li>
            <li>AI prediksi pengasilan</li>
          </ul>
        </div>
        <button className="p-2 bg-[#a51cffcb] rounded-2xl text-white font-bold w-full">
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default PricingList;
