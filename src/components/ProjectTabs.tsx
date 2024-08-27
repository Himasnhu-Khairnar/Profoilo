"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { Link2 } from "lucide-react";
import Link from "next/link";
export function ProjectTabs() {
  const tabs = [
    {
      title: "Careplus",
      value: "careplus",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Careplus <span className="text-xl">Doctor Appointment App with sms messaging </span> </p>
          <DummyContent src='/careplus.png' />
          <Link href="https://github.com/Himasnhu-Khairnar/Doctor-Appointment-next-js" className="absolute text-lg right-2 bottom-2 "><Link2/></Link>
        </div>
      ),
    },
    {
      title: "Music Website",
      value: "Music",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Music Website  <span className="text-xl">Music Classes Website with stuning ui design (acernity ui)</span></p>
          <DummyContent src='/musicalwebsite.png'/>
          <Link href="https://github.com/Himasnhu-Khairnar/MusicClasses-next-js-aceternity" className="absolute text-lg right-2 bottom-2 "><Link2></Link2></Link>

        </div>
      ),
    },
    {
      title: "Blogify",
      value: "blogify",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Blogify <span className="text-xl">Blog website made with firebase </span></p>
          <DummyContent src="/blog.png"/>
          <Link href="https://github.com/Himasnhu-Khairnar/blog-app-react-js" className="absolute text-lg right-3 bottom-2"><Link2></Link2></Link>

        </div>
      ),
    },
    {
      title: "Shopper",
      value: "shopper",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Shopper  <span className="text-xl">Shopping website , context api used for state management</span></p>
          <DummyContent src='/shopper.png'/>
          <Link href="https://github.com/Himasnhu-Khairnar/React-Shopping-Site" className="absolute text-lg right-3 bottom-2"><Link2></Link2></Link>

        </div>
      ),
    },
    {
      title: "Chat bot",
      value: "chat",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Chat bot <span className="text-xl">Chat bot made with gemini ai api </span></p>
          <DummyContent src='/chatbot.png'/>
          <Link href="https://github.com/Himasnhu-Khairnar/React_Ai_ChatBot_Promptify" className="absolute text-lg right-3 bottom-2"><Link2></Link2></Link>

        </div>
      ),
    },
  ];

  return (
    <div className="h-[25rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 ">
      <h2 className="text-4xl font-bold mb-10">My Work</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({src}:{src:string}) => {
  return (
    <Image
      src={src}
      alt="dummy image"
      width={1000}
      height={1000}
      className="object-cover object-left-top h-[90%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
