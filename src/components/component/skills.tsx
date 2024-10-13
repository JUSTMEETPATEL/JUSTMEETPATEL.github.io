import { slugs } from "@/lib/constants";
import React from "react";
import IconCloud from "../ui/icon-cloud";


const Skills = () => {
  return (
    <>
      <div>
        <div className="mt-72"></div>
        <h1 className="md:text-7xl text-4xl mb-20 md:mx-72">
          <span className="text-purple-700">&lt;</span>Skills{" "}
          <span className="text-purple-700">/&gt;</span>
        </h1>
        <div className="container max-w-[32rem]">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </>
  );
};

export default Skills;
