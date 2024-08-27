import React from "react"
import { SkillCloud } from "./SkillsCloud";
import { SparklesTextSkill } from "./SparkleTextSkill";

const MySkillSet = () => {
  return (
    <div className="relative bg-neutral-900 items-center flex flex-col">
      <SkillCloud />

        <SparklesTextSkill/>

    </div>
  );
};

export default MySkillSet;
