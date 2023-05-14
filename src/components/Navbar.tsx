"use client";

import Image from "next/image";
import React from "react";
import { BiMenu, BiX } from "react-icons/bi";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  interface itemProps {
    href?: string;
    text?: string;
  }

  const Item = ({ href = "", text = "text" }: itemProps) => (
    <Link href={href} className="hover:text-primary px-3 py-2">
      {text}
    </Link>
  );

  return (
    <nav className="fixed w-full shadow-lg mx-auto bg-[#fff] z-[100] ">
      <div className="flex justify-between items-center px-4 py-3 container  mx-auto">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/coding.svg"
              width={24}
              height={24}
              alt="Picture of the author"
            />
            <p className="font-semibold">it's me</p>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Item href="/" text="home" />
            <Item href="/project" text="project" />
            <Item href="/contact" text="contact" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-6">
            <AiFillGithub size={20} color="#000" className="cursor-pointer" />
            <AiFillLinkedin size={20} color="#000" className="cursor-pointer" />
            <AiOutlineInstagram
              size={20}
              color="#000"
              className="cursor-pointer"
            />
          </div>
          <button className="rounded-full border border-primary py-2 px-6">
            Download CV
          </button>
          <div onClick={handleNav}>
            <BiMenu size={30} className="md:hidden" />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "absolute md:hidden h-screen w-full z-40 bg-[#fff] top-0 right-0 flex justify-between items-center flex-col p-4 ease-in-out duration-500 "
            : "absolute md:hidden h-screen w-full z-40 bg-[#fff] top-0 flex justify-between items-center flex-col p-4 right-[-100%] ease-in-out duration-500 "
        }
      >
        <div className="flex items-center flex-col text-center space-y-4 ">
          <BiX
            size={30}
            className="md:hidden absolute top-5 right-5"
            onClick={handleNav}
          />
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/coding.svg"
              width={24}
              height={24}
              alt="Picture of the author"
            />
            <p className="font-semibold">it's me</p>
          </div>
          <Item href="/" text="home" />
          <Item href="/project" text="project" />
          <Item href="/contact" text="contact" />
        </div>
        <button className="rounded-full text-[#fff] bg-primary py-2 px-6">
          Download CV
        </button>
      </div>
    </nav>
  );
}
