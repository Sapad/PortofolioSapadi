import React from "react";
import ProjectsItem from "./ProjectsItem";
import Sleman from "../assets/Image/Sleman.png";
import ReactJS from "../assets/Image/ReactJS.png";
import Vue from "../assets/Image/Vue.png";
import Portofolio from "../assets/Image/Portofolio.png";
import Blog from "../assets/Image/Blog.png";
import Wedding from "../assets/Image/Wedding.png";
import Youtube from "../assets/Image/Youtube.png";
import Disney from "../assets/Image/Disney.png";

function Projects() {
  return (
    <div className="max-w-[1440px] m-auto md:pl-20 p-4 py-16">
      <h1
        id="website"
        className="text-4xl font-bold text-center text-[#001b5e]">
        Website
      </h1>
      <p className="text-center py-8 text-black">
        Website yang dibuat untuk mengukur keterampilan saya dalam web developer
        dengan menggunakan bahasa pemrograman HTML, CSS, JavaScrpit, React, PHP,
        ExpressJs, Vue.
      </p>
      <div className="grid sm:grid-cols-3 gap-8">
        <ProjectsItem
          img={Wedding}
          title="Wedding Organizer"
          bahasa="CodeIgniter, Mysql"
          github="https://github.com/Sapad/Wedding_Organizer"
        />
        <ProjectsItem
          img={Blog}
          title="Blog"
          bahasa="CodeIgniter, Mysql"
          github="https://github.com/Sapad/Blog"
        />
        <ProjectsItem
          img={Youtube}
          title="Clone Youte"
          bahasa="React JS Tailwind CSS"
          github="https://github.com/Sapad/Clone-App-Youtube"
        />
        <ProjectsItem
          img={Disney}
          title="Clone Disney+"
          bahasa="React JS Tailwind CSS"
          github="https://github.com/Sapad/clone-disney-home"
          url="https://clone-web-disney.netlify.app/"
        />
        <ProjectsItem
          img={Sleman}
          title="Wisata Sleman"
          bahasa="HTML, CSS, Javascript"
          url="https://wisatasleman.netlify.app/"
          github="https://github.com/Sapad/WisataSleman"
        />
        <ProjectsItem
          img={ReactJS}
          title="Bookstore"
          bahasa="React, ExpressJS, Bootstrap"
          github="https://github.com/Sapad/bookstore-frondend-ReactJS"
        />
        <ProjectsItem
          img={Vue}
          title="Bookstore"
          bahasa="Vue, Boostrap"
          url="https://bookstorevue.netlify.app/"
          github="https://github.com/Sapad/vue"
        />
        <ProjectsItem
          img={Portofolio}
          title="First Portofolio"
          bahasa="ReactJS, Boostrap, EmailJS"
          url="https://saptoadiyanto.netlify.app/"
          github="https://github.com/Sapad/Portofolio"
        />
      </div>
    </div>
  );
}

export default Projects;
