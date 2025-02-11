import React, { useState } from "react";
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
  const [activeId, setActiveId] = useState("main");

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSetActive = (id) => {
    setActiveId(id);
    setNav(false); // Close nav after selection
  };

  return (
    <div>
      <AiOutlineMenu
        className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer"
        onClick={handleNav}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          {[
            { id: "main", icon: <AiOutlineHome size={20} />, text: "Home" },
            {
              id: "Experience",
              icon: <MdOutlineWork size={20} />,
              text: "Experience",
            },
            {
              id: "project",
              icon: <AiOutlineProject size={20} />,
              text: "Project",
            },
            {
              id: "website",
              icon: <AiOutlineFundProjectionScreen size={20} />,
              text: "Website",
            },
            {
              id: "contact",
              icon: <IoIosContact size={20} />,
              text: "Contact",
            },
          ].map((item) => (
            <a
              key={item.id}
              onClick={() => handleSetActive(item.id)}
              href={`#${item.id}`}
              className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 
              ${
                activeId === item.id ? "bg-[#001b5e] text-white" : "bg-gray-100"
              }`}>
              {item.icon}
              <span className="pl-4">{item.text}</span>
            </a>
          ))}
        </div>
      ) : (
        <div className="md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            {[
              { id: "main", icon: <AiOutlineHome size={20} /> },
              { id: "Experience", icon: <MdOutlineWork size={20} /> },
              { id: "project", icon: <AiOutlineProject size={20} /> },
              {
                id: "website",
                icon: <AiOutlineFundProjectionScreen size={20} />,
              },
              { id: "contact", icon: <IoIosContact size={20} /> },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveId(item.id)}
                className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease duration-100 
                ${
                  activeId === item.id
                    ? "bg-[#001b5e] text-white"
                    : "bg-gray-100"
                }`}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
