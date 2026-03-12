import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import { useTheme } from "@/lib/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-[#FFFDF9] dark:bg-[#1f2937] fixed !w-full top-0 z-50 shadow-md transition-colors duration-300">
      <div className="flex items-center justify-between py-4 max-w-6xl px-3 md:px-4 mx-auto">
        {/* Logo */}
        <a href="/">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
            Stanley Chilaka
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-200 font-medium">
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

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile: Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="text-gray-800 dark:text-gray-200 p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            className="text-gray-800 dark:text-gray-200 text-2xl hover:bg-black/10 dark:hover:bg-white/10 !p-2 rounded-md transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="!w-8 !h-8" />
            ) : (
              <Menu className="!w-8 !h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay — always rendered, toggled with opacity/pointer-events */}
      <div
        className={`fixed inset-0 bg-black/90 dark:bg-black/90 z-40 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sliding Menu — always rendered, toggled with transform */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-[#FFFDF9] dark:bg-[#263548] z-50 flex flex-col justify-between !p-6 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top - Logo / Title */}
        <div>
          <div className="mb-6 border-b border-gray-300 dark:border-gray-700 !pb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Stanley Chilaka
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Frontend Developer
            </p>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-2 text-gray-800 dark:text-gray-200">
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:text-cyan-500 font-medium transition border-b border-gray-300 dark:border-gray-700 !py-4"
            >
              <FaReact /> Projects
            </a>
            <a
              href="#tech"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:text-cyan-500 font-medium transition border-b border-gray-300 dark:border-gray-700 !py-4"
            >
              <FaNodeJs /> Tech
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:text-cyan-500 font-medium transition border-b border-gray-300 dark:border-gray-700 !py-4"
            >
              <FaUser /> About
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:text-cyan-500 font-medium transition border-b border-gray-300 dark:border-gray-700 !py-4"
            >
              <HiOutlineMail /> Contact
            </a>
          </div>
        </div>

        {/* Footer / Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com/BigCelz"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/stanley-chilaka-50006b2a8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition text-xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
