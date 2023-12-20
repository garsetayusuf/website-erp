import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const Menus = [
    { nama: "HOME", link: "/" },
    { nama: "ABOUT", link: "/#about" },
    { nama: "PRICING", link: "/#pricing" },
    { nama: "CONTACT", link: "/#contact" },
    { nama: "LOGIN", link: "/login" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenAnimated, setMenuOpenAnimated] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const variants = {
    open: {
      opacity: document.body.offsetWidth >= 768 ? 0 : 1,
      height: document.body.offsetWidth >= 768 ? "" : "100vh",
    },
    closed: {
      opacity: document.body.offsetWidth >= 768 ? 1 : 0,
      height: document.body.offsetWidth >= 768 ? 1 : 0,
    },
  };

  const rotateValue = menuOpen ? 90 : 0;

  const handleClick = (type) => {
    if (type === "close") {
      setMenuOpenAnimated(!menuOpenAnimated);
      setTimeout(() => {
        setMenuOpen(!menuOpen);
      }, 200);
    } else {
      setMenuOpen(!menuOpen);
      setMenuOpenAnimated(!menuOpenAnimated);
    }
  };

  return (
    <nav
      className={`fixed w-full z-10 ${scrolled ? "bg-white" : ""} ${
        menuOpen ? "bg-white" : ""
      }`}
    >
      <div className="px-5 flex flex-row w-full items-center">
        <Icon
          icon="ph:gear"
          width={document.body.offsetWidth < 1024 ? 35 : 50}
          color={scrolled ? "black" : "white"}
        />
        {Menus.map((menu) => (
          <a
            key={menu.nama}
            href={menu.link}
            className={`${scrolled ? "text-black" : "text-white"} title-home`}
          >
            {menu.link === "/" && menu.nama}
          </a>
        ))}
      </div>

      <motion.div
        className="menu"
        initial={false}
        animate={{
          rotate: document.body.offsetWidth >= 768 ? null : rotateValue,
          x: document.body.offsetWidth >= 768 ? null : menuOpen ? 0 : 0,
          y: document.body.offsetWidth >= 768 ? null : menuOpen ? 10 : -10,
          z: document.body.offsetWidth >= 768 ? null : menuOpen ? -20 : 20,
        }}
        onClick={() => (menuOpen ? handleClick("close") : handleClick("open"))}
      >
        <Icon
          icon={menuOpen ? "ion:close" : "ion:menu"}
          color="black"
          className="menu"
        />
      </motion.div>

      <motion.ul
        className={`${menuOpen ? "open" : "close"} px-5`}
        variants={variants}
        initial="closed"
        animate={menuOpenAnimated ? "open" : "closed"}
      >
        {Menus.map(
          (menu) =>
            menu.link !== "/" && (
              <li
                key={menu.nama}
                className={
                  menu.link === "/login"
                    ? "border-2 border-[#00ffff] rounded-lg hover:border-[#1d4ed8]"
                    : "pr-3"
                }
              >
                <a
                  href={menu.link}
                  className={menu.link === "/login" ? "text-[#00ffff]" : ""}
                  onClick={() => {
                    if (document.body.offsetWidth <= 768) {
                      setMenuOpenAnimated(!menuOpenAnimated);
                      setTimeout(() => {
                        setMenuOpen(!menuOpen);
                      }, 200);
                    }
                  }}
                >
                  {menu.link !== "/" && menu.nama}
                </a>
              </li>
            )
        )}
      </motion.ul>
    </nav>
  );
};
