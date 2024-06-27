import React from "react";

function ProjectsItem({ img, title, bahasa, url, github }) {
  return (
    <div
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group 
    hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {" "}
        {/* membuat hover gambar dan tulisan */}
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{bahasa}</p>
        <div className="flex flex-row gap-2 justify-center">
          {url && (
            <a
              href={url}
              className="btn btn-website hover:bg-[#001b5e] hover:text-white  bg-white text-[#001b5e]"
              target="_blank"
              rel="noopener noreferrer">
              Website
            </a>
          )}
          {github && (
            <a
              href={github}
              className="btn btn-github hover:bg-[#001b5e] hover:text-white  bg-white text-[#001b5e]"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsItem;
