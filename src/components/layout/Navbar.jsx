import { useState } from "react";
import { HiMenu, HiOutlineMail, HiX } from "react-icons/hi";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFFDF9] fixed !w-full top-0 z-50 shadow-md">
      <div className=" mx-auto !flex !justify-between items-center !py-4 !px-6">
        {/* Logo  */}
        <a href="/">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Stanley Chilaka
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-800 font-medium">
          <a href="#projects" className="hover:text-cyan-500 transition">
            Projects
          </a>
          <a href="#tech" className="hover:text-cyan-500 transition">
            Tech
          </a>
          <a href="#about" className="hover:text-cyan-500 transition">
            About
          </a>
          <a href="#contact" className="hover:text-cyan-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 text-2xl hover:bg-black/10 !p-2 rounded-md transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="!w-8 !h-8" />
          ) : (
            <HiMenu className="!w-8 !h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu  */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/90 z-40  md:hidden lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sliding Menu */}
          <div
            className={`fixed top-0 left-0 w-60 h-full bg-[#FFFDF9] z-50 transform transition-transform duration-200 !ease-in-out flex flex-col justify-between !p-6 md:hidden lg:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Top - Logo / Title */}
            <div className="mb-6 border-b border-gray-600 !pb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Stanley Chilaka
              </h2>
              <p className="text-sm text-gray-600">Frontend Developer</p>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col !gap-8">
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-cyan-500 font-medium transition border-b border-gray-600 !pb-4"
              >
                <FaReact /> Projects
              </a>
              <a
                href="#tech"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-cyan-500 font-medium transition border-b border-gray-600 !pb-4"
              >
                <FaNodeJs /> Tech
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-cyan-500 font-medium transition border-b border-gray-600 !pb-4"
              >
                <FaUser /> About
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-cyan-500 font-medium transition border-b border-gray-600 !pb-4"
              >
                <HiOutlineMail /> Contact
              </a>
            </div>

            {/* Footer / Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/BigCelz"
                className="text-gray-800 hover:text-cyan-500 transition text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/stanley-chilaka-50006b2a8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-800 hover:text-cyan-500 transition text-xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
