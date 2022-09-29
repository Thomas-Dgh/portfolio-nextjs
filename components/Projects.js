import React from "react";
import cyclicImg from "../public/assets/projects/cyclic.png";
import combiloc from "../public/assets/projects/combiloc.png";
import ferme from "../public/assets/projects/ferme.png";
import ProjectItem from "./ProjectItem";


const Projects = () => {
  return (
    <div
      id="projects"
      className=" w-full dark:bg-gray-800 dark:border-gray-700 transition duration-300"
    >
      <div className=" max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#15aae0]">
          Projets
        </p>
        <h2 className="py-4 tracking-tight dark:text-white">Mes créations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* card  */}
          <ProjectItem
            title="Cy'clic"
            backgroundImg={cyclicImg}
            projectUrl="/cyclic"
          />
          <ProjectItem
            title="Combi-Loc"
            backgroundImg={combiloc}
            projectUrl="/combiloc"
          />
          <ProjectItem
            title="La Basse Touligny"
            backgroundImg={ferme}
            projectUrl="/basseTouligny"
          />
          {/* <ProjectItem
            title="Twitch"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          /> */}
          {/* ---- */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
