import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer text-neutral-content items-center justify-around p-4 bg-[#001b5e]">
      <aside className="grid-flow-col items-center">
        <a href="#main" className="pr-2">
          <IoMdHome size={30} />
        </a>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - Sapto Adiyanto
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/sapto-adiyanto-787351207/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Sapad" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.instagram.com/sap.adi28/"
          target="_blank"
          rel="noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://wa.me/6287888375865" target="_blank" rel="noreferrer">
          <FaWhatsapp className="cursor-pointer" size={30} />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
