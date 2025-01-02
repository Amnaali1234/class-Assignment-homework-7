"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold ml-4 md:ml-10">DATA FETCHING</h1>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose size={26} /> : <FiMenu size={26} />}
          </button>

          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 md:p-0 ${
              isMenuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <li>
              <Link
                href="/"
                className="block md:inline hover:underline text-lg font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block md:inline hover:underline text-lg font-semibold"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/books"
                className="block md:inline hover:underline text-lg font-semibold"
              >
                Books
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
