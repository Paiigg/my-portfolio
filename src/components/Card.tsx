import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiTailwindcss, SiReact, SiNextdotjs } from "react-icons/si";

export default function Card({
  src,
  href,
  title,
  desc,
}: {
  src: string;
  href: string;
  title: string;
  desc: string;
}) {
  interface itemProps {
    src: string;
  }

  const ItemImage = ({ src }: itemProps) => (
    <Image
      src={src}
      width={350}
      height={300}
      alt="Picture of the author"
      className="rounded-lg object-cover "
    />
  );
  return (
    <div>
      <div className="shadow-2xl relative rounded-lg">
        <ItemImage src={src} />
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <div className="bg-[#EFFAFA] p-2 rounded-lg shadow-lg">
            <SiReact size={20} color="#38B2AC" />
          </div>
          <div className="bg-[#EFFAFA] p-2 rounded-lg shadow-lg">
            <SiTailwindcss size={20} color="#38B2AC" />
          </div>
          <div className="bg-[#EFFAFA] p-2 rounded-lg shadow-lg">
            <SiNextdotjs size={20} color="#000" />
          </div>
        </div>
        <div className="flex md:items-center flex-col md:flex-row justify-between gap-3 p-3 ">
          <div className="">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm w-[200px] text-secondary/70">{desc}</p>
          </div>
          <Link
            href="https://aking-nft.vercel.app/"
            target="_blank"
            className="rounded-full w-full md:w-auto text-center bg-primary py-2 px-6 text-[#fff]"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
