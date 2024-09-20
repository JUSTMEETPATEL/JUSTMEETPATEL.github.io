import React from "react";
import { IconSkill } from "./IconSkills";

const Skill = () => {
  return (
    <>
      <div className="mt-72"></div>
      <h1 className="md:text-7xl text-4xl mb-20 md:mx-72">
        <span className="text-indigo-700">&lt;</span>Skills{" "}
        <span className="text-indigo-700">/&gt;</span>
      </h1>
      <IconSkill />
    </>
  );
};

export default Skill;
