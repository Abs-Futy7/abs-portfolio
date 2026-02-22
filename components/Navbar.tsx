"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ButtonMaagic from "./ui/ButtonMaagic";
import { FaFileDownload } from "react-icons/fa";

interface NavbarItem {
  name: string;
  link: string;
}

interface NavbarProps {
  items: NavbarItem[];
}

function Navbar({ items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative w-[95%] max-w-[1200px] mx-auto p-[1px] rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 mt-6">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        <nav className="flex justify-between items-center w-full px-3 sm:px-4 py-1 sm:py-2 rounded-2xl bg-slate-950 backdrop-blur-lg">
          {/* Logo or brand */}
          <div className="flex items-center justify-center text-white font-semibold font-[Helvetica] text-xl sm:text-2xl">
            Abs<span className="text-2xl sm:text-3xl text-purple-400">.</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex gap-2 lg:gap-4 text-[15px] lg:text-[16px] text-white">
              {items.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.link.replace("/", "")}`}
                    className="px-3 lg:px-5 py-1.5 lg:py-2 rounded-full font-light transition-all hover:font-bold hover:text-purple-400 hover:shadow-lg focus:outline-none"
                  >
                    {item.name}
                  </a>
                </li>
                
              ))}
            </ul>
            
            {/* Desktop Download CV Button */}
            <div className="ml-2">
              <ButtonMaagic
                title="Download CV"
                icon={<FaFileDownload size={16} className="ml-2" />}
                position="right"
                downloadFile="/MD_Abu_Bakar_Siddique_resume.pdf"
                otherClasses="h-10 text-md "
              />
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile dropdown menu (if open) */}
      {isOpen && (
        <div className="md:hidden mt-2 w-[90%] max-w-[400px] mx-auto rounded-xl bg-slate-900/90 backdrop-blur-lg p-4 text-white shadow-lg space-y-2">
          {items.map((item) => (
            <a
              key={item.name}
              href={`#${item.link.replace("/", "")}`}
              className="block px-4 py-2 rounded hover:bg-purple-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Download CV Button */}
          <div className="pt-2">
            <ButtonMaagic
              title="Download CV"
              icon={<FaFileDownload size={16} className="ml-2" />}
              position="right"
              downloadFile="/MD_Abu_Bakar_Siddique_resume.pdf"
              otherClasses="h-10 text-sm w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
