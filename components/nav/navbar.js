import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/logo2.png";
import { SlBasketLoaded } from "react-icons/sl";
import { FaBars, FaTimes } from "react-icons/fa";

import NavLinks from "./nav-links";
import Button from "../ui/button";
import ButtonLinkRound from "../ui/button-round";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { list } = useSelector((state) => state.cart);

  function onNavClick() {
    setIsOpen(!isOpen);
  }

  function onClick() {
    console.log("click");
  }

  return (
    <nav className="fixed top-0 z-50 w-screen bg-white">
      <div className="flex items-center justify-between px-5 md:px-28">
        {/* Desktop nav Display */}
        <div className="at z-50 flex w-full justify-between p-5 md:w-auto">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="h-12 w-8 object-cover md:cursor-pointer"
            />
          </Link>
          <div className="flex items-center md:hidden">
            <Button onClick={onNavClick}>
              {!isOpen ? <FaBars /> : <FaTimes />}
            </Button>
          </div>
        </div>

        <ul className="hidden items-center gap-8 font-[poppins] capitalize md:flex">
          <li>
            <Link href="/" className="inline-block px-3 py-7">
              home
            </Link>
          </li>
          <NavLinks />

          <li>
            <Link href="blog" className="inline-block px-3 py-7">
              Blog
            </Link>
          </li>

          <li>
            <Link href="aboutme" className="inline-block px-3 py-7">
              About Me
            </Link>
          </li>
        </ul>
        <div className="relative hidden md:flex">
          <span className="absolute -right-3 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-400 text-white">
            {list?.length}
          </span>
          <ButtonLinkRound link="cart">
            <SlBasketLoaded />
          </ButtonLinkRound>
        </div>

        {/* Mobile Nav Display */}
        <ul
          className={`absolute bottom-0 top-10 h-screen w-full bg-white py-24 pl-4 font-semibold duration-500 md:hidden ${
            isOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          <li onClick={onNavClick}>
            <Link
              href="/"
              className="inline-block px-3 py-7 hover:text-emerald-600"
            >
              home
            </Link>
          </li>
          <NavLinks onClick={onNavClick} />

          <li onClick={onNavClick}>
            <Link
              href="blog"
              className="inline-block px-3 py-7 hover:text-emerald-600"
            >
              Blog
            </Link>
          </li>

          <li onClick={onNavClick}>
            <Link
              href="aboutme"
              className="inline-block px-3 py-7 hover:text-emerald-600"
            >
              About Me
            </Link>
          </li>
          <div className="relative flex w-8 items-center py-5">
            <span className="absolute -right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-400 text-white">
              {list?.length}
            </span>
            <ButtonLinkRound link="cart">
              <SlBasketLoaded onClick={onNavClick} />{" "}
            </ButtonLinkRound>
          </div>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
