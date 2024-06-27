import { React, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        className=" fixed top-4 right-4 z-[99] md:hidden"
        onClick={handleNav}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            id="main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100
              shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 ${activeId === 'main' ? 'bg-gray-900' : ''}">
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            id="Experience"
            href="#Experience"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100">
            <MdOutlineWork size={20} />
            <span className="pl-4">Experience</span>
          </a>
          <a
            onClick={handleNav}
            id="project"
            href="#project"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100
              shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100">
            <AiOutlineProject size={20} />
            <span className="pl-4">Project </span>
          </a>
          <a
            onClick={handleNav}
            href="#website"
            id="Website"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100
              shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100">
            <AiOutlineFundProjectionScreen size={20} />
            <span className="pl-4">Website</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            id="contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100
              shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100">
            <IoIosContact size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div className="md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 
              p-4 cursor-pointer hover:scale-110 ease duration-100">
              <AiOutlineHome size={20} />
            </a>
            <a
              href="#Experience"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease duration-100">
              <MdOutlineWork size={20} />
            </a>
            <a
              href="#project"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 
              p-4 cursor-pointer hover:scale-110 ease duration-100">
              <AiOutlineProject size={20} />
            </a>
            <a
              href="#website"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 
              p-4 cursor-pointer hover:scale-110 ease duration-100">
              <AiOutlineFundProjectionScreen size={20} />
            </a>
            <a
              href="#contact"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 
              p-4 cursor-pointer hover:scale-110 ease duration-100">
              <IoIosContact size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
