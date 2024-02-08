"use client";
import { CartContext } from "@/components/AppContext";
import Bars2 from "@/components/icons/Bars2";
import ShoppingCart from "@/components/icons/ShoppingCart";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const storedPage = localStorage.getItem("activePage");
    if (storedPage) {
      setActivePage(storedPage);
    }
  }, []);
  const handlePageClick = (page) => {
    setActivePage(page);
    localStorage.setItem("activePage", page);
  };
  return (
    <header className="menuHeader">
      <div className="flex items-center md:hidden justify-between">
        <Link className="text-[#FFA500] font-semibold text-2xl" href={"/"}>
          GRILL X
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-[#FFA500] text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center"
        >
          <Link
            href={"/"}
            className={`text-xl font-semibold ${
              activePage === "Home" ? "text-[#FFA500]" : "text-gray-500"
            }`}
            onClick={() => handlePageClick("Home")}
          >
            Home
          </Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"/#contact"}>Contact</Link>
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link
            href={"/"}
            className={` ${
              activePage === "Home"
                ? "text-[#FFA500] font-semibold text-2xl"
                : "text-[#FFA500] font-semibold text-2xl"
            }`}
            onClick={() => handlePageClick("Home")}
          >
            GRILL X
          </Link>
          <Link
            href={"/"}
            className={`${
              activePage === "Home" ? "text-[#FFA500]" : "text-gray-500"
            }`}
            onClick={() => handlePageClick("Home")}
          >
            Home
          </Link>
          <Link
            href={"/menu"}
            className={` ${
              activePage === "Menu" ? "text-[#FFA500]" : "text-gray-500"
            }`}
            onClick={() => handlePageClick("Menu")}
          >
            Menu
          </Link>
          <Link
            href={"/#about"}
            className={`${
              activePage === "About" ? "text-[#FFA500]" : "text-gray-500"
            }`}
            onClick={() => handlePageClick("Home")}
          >
            About
          </Link>
          <Link
            href={"/#contact"}
            className={`${
              activePage === "Contact" ? "text-[#FFA500]" : "text-gray-500"
            }`}
            onClick={() => handlePageClick("Home")}
          >
            Contact
          </Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-[#FFA500] text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
