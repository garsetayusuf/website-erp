import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const Menus = [
  { nama: "HOME", link: "/" },
  { nama: "ABOUT", link: "/#about" },
  { nama: "PRICING", link: "/#pricing" },
  { nama: "CONTACT", link: "/#contact" },
  { nama: "LOGIN", link: "/login" },
];

const kontak = [
  {
    nama: "test@gmail.com",
    icon: "clarity:email-solid",
    url: "mailto:test@gmail.com",
  },
  {
    nama: "Telegram",
    icon: "cib:telegram-plane",
    url: "https://web.telegram.org/",
  },
  {
    nama: "0838-xxxx-xxxx",
    icon: "dashicons:whatsapp",
    url: "https://www.whatsapp.com",
  },
];

const ikutiKami = [
  {
    nama: "Facebook",
    icon: "fa6-brands:square-facebook",
    url: "https://www.facebook.com",
  },
  {
    nama: "Instagram",
    icon: "fa6-brands:instagram",
    url: "https://www.instagram.com",
  },
  {
    nama: "Twitter",
    icon: "fa6-brands:twitter",
    url: "https://twitter.com/",
  },
];

export const Contact = () => {
  return (
    <div id="contact" className={"relative bg-[#1c65ffcb] rounded-none"}>
      <div className="container relative mx-auto px-5 xl:px-8 p-5">
        <div className="grid min-[1023px]::grid-cols-3 md:grid-cols-6 grid-cols-2 min-[640px]:grid-flow-col min-[640px]:gap-10">
          <div className="md:col-span-2 col-span-1 text-center text-white font-normal md:text-center hidden md:block lg:block min-w-0">
            <h1 className="text-lg md:text-2xl font-semibold pb-5 text-center">
              Menu
            </h1>
            <ul>
              {Menus.map((data, index) => (
                <li
                  className="py-2 text-base 2xl:text-lg font-normal cursor-pointer md:text-center md:text-xl text-center min-w-0"
                  key={index}
                >
                  <a href={data.link}>{data.nama}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 col-span-1 text-center text-white min-w-0">
            <h1 className="text-lg md:text-2xl font-semibold min-[640px]:pb-5 text-center">
              Kontak
            </h1>
            <ul>
              {kontak.map((data, index) => (
                <li
                  className="py-2 text-base 2xl:text-lg font-normal cursor-pointer md:text-center md:text-xl text-center min-w-0"
                  key={index}
                >
                  <Link href={data.url}>
                    <div className="flex flex-row justify-center items-center">
                      <Icon
                        icon={data.icon}
                        className={" mr-3 text-xl md:text-xl"}
                      />
                      <span className="text-sm md:text-xl 2xl:text-lg font-normal my-auto ">
                        {data.nama}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 col-span-1 max-[640px]:text-center text-white min-w-0">
            <h1 className="text-lg md:text-2xl font-semibold min-[640px]:pb-5 text-center">
              Ikuti Kami
            </h1>
            <ul className="text-center">
              {ikutiKami.map((data, index) => (
                <li
                  className="py-2 text-base 2xl:text-lg font-normal cursor-pointer md:text-center md:text-xl text-center min-w-0"
                  key={index}
                >
                  <Link href={data.url}>
                    <div className="flex flex-row justify-center items-center ">
                      <Icon
                        icon={data.icon}
                        className={" mr-3 text-xl md:text-xl"}
                      />
                      <span className="text-sm md:text-xl 2xl:text-lg font-normal my-auto ">
                        {data.nama}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
