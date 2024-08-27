import Docks from "@/components/Docks";
import Experience from "@/components/Experience";
import Herosection from "@/components/HeroSection";
import MySkillSet from "@/components/MySkillSet";
import { ProjectTabs } from "@/components/ProjectTabs";
import { Testominal } from "@/components/Testominal";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative h-screen w-full ">
      <Herosection />
      <MySkillSet />

      <div className="bg-neutral-900 border relative ">
        <div className="mx-5">
          <ProjectTabs />
        </div>
        <button
          className=" absolute right-5 lg:right-10 lg:bottom:bottom-10 lg:px-6 lg:py-2 lg:bg-black bottom-1 px-2 py-1   bg-transparent
         text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
        >
          <Link href="https://github.com/Himasnhu-Khairnar">Explore More</Link>
        </button>
      </div>
      <Experience />
      <Testominal />
      <div className="fixed  bottom-10 w-full left-0">
        <Docks />
      </div>
    </div>
  );
}
