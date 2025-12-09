import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0D0D0D]/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="GDG Logo" className="h-10 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold text-base">
              Google Developer Groups
            </span>
            <span className="text-[11px] text-gray-400 leading-none">
              OnCampus • MLRIT
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-white text-[#0D0D0D] px-4 py-2 rounded-full font-medium"
                : "text-gray-200 hover:text-white transition font-medium text-base px-4 py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-[#0D0D0D] px-4 py-2 rounded-full font-medium"
                : "text-gray-200 hover:text-white transition font-medium text-base px-4 py-2"
            }
          >
            About
          </NavLink>
          <button className="text-gray-200 hover:text-white transition font-medium text-base px-4 py-2">
            Events
          </button>
          <button className="text-gray-200 hover:text-white transition font-medium text-base px-4 py-2">
            Contact
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden w-full bg-black/70 backdrop-blur-lg py-4 space-y-4 text-center border-t border-white/10">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block w-full bg-white text-[#0D0D0D] font-medium py-2 rounded"
                : "block w-full text-gray-200 hover:text-white font-medium py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block w-full bg-white text-[#0D0D0D] font-medium py-2 rounded"
                : "block w-full text-gray-200 hover:text-white font-medium py-2"
            }
          >
            About
          </NavLink>
          <button className="block w-full text-gray-200 hover:text-white font-medium py-2">
            Events
          </button>
          <button className="block w-full text-gray-200 hover:text-white font-medium py-2">
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
