import React from "react";
import { NameText } from "./Nametext";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="bg-neutral-900 flex flex-col items-center justify-center relative w-full min-h-screen">
      <div className="relative w-full h-screen">
        <div className="absolute top-1/4 left-4 sm:left-8 md:left-16 lg:left-32 max-w-2xl">
          <p className="text-slate-300 text-sm sm:text-base mb-2">Hello! my name is</p>
          <NameText />
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-purple-700 to-violet-900 text-transparent bg-clip-text inline-block tracking-wide leading-tight mb-4">
            I develop stuff for web
          </p>
          <p className="text-slate-300 text-sm sm:text-base w-full sm:w-[30rem]">
            Hey! I am a computer science student in my 3rd year of diploma. I have
            a strong passion for web development and enjoy creating responsive,
            user-friendly websites. My experience includes working with HTML, CSS,
            JavaScript, and popular frameworks like React and Next.js. I&apos;m
            constantly learning and experimenting with new tools and techniques to
            build modern, scalable web applications that provide a seamless user
            experience.
          </p>
          <button
          className=" my-10 lg:px-6 lg:py-2 lg:bg-black bottom-1 px-2 py-1   bg-transparent
         text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
        >
          <Link href="https://github.com/Himasnhu-Khairnar">Get Resume</Link>
        </button>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default Herosection;