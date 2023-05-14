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
    <Link href={href} className="px-3 py-2 hover:text-primary">
      {text}
    </Link>
  );

  return (
    <nav className="fixed w-full shadow-lg mx-auto bg-[#fff] z-[100] ">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
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
          <div className="items-center hidden space-x-2 md:flex">
            <Item href="/" text="home" />
            <Item href="/project" text="project" />
            <Item href="/skills" text="skills" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="items-center hidden space-x-6 lg:flex">
            <Link
              href="https://github.com/Paiigg?tab=repositories"
              target="_blank"
            >
              <AiFillGithub size={20} color="#000" className="cursor-pointer" />
            </Link>
            <Link href="/" target="_blank">
              <AiFillLinkedin
                size={20}
                color="#000"
                className="cursor-pointer"
              />
            </Link>
            <Link href="https://www.instagram.com/faiqlw_/" target="_blank">
              <AiOutlineInstagram
                size={20}
                color="#000"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <button className="px-6 py-2 border rounded-full border-primary">
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
        <div className="flex flex-col items-center space-y-4 text-center ">
          <BiX
            size={30}
            className="absolute md:hidden top-5 right-5"
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
          <Item href="/skills" text="skills" />
        </div>
        <button className="rounded-full text-[#fff] bg-primary py-2 px-6">
          Download CV
        </button>
      </div>
    </nav>
  );
}
