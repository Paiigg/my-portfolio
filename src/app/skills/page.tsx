import React from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="container flex flex-col items-center justify-center h-screen p-4 mx-auto ">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">My SKills</h3>
        <p className="text-sm text-secondary/70 ">
          Technology and framework that I use in creating websites
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
        <FaHtml5 size={70} color="#E34C26" />
        <FaCss3Alt size={70} color="#264de4" />
        <SiJavascript size={70} color="#f0db4f" />
        <SiTypescript size={70} color=" #007acc" />
        <SiTailwindcss size={70} color="#38B2AC" />
        <SiReact size={70} color="#38B2AC" />
        <SiNextdotjs size={70} color="#000" />
      </div>
    </div>
  );
}
