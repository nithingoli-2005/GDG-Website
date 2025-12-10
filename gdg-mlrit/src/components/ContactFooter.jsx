import React from "react";
import logo from "../assets/logo.png";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* ===== TOP WHITE ABOUT BLOCK ===== */}

      {/* ===== DARK FOOTER AREA ===== */}
      {/* small negative margin so black touches the white card like in design */}
      <div className="bg-[#0d0d0d] -mt-4 pt-16 pb-12 text-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: logo + description + contact stacked */}
          <div className="flex-[1.4] space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="GDG Logo" className="h-12 w-auto" />
              <div className="leading-tight">
                <h3 className="font-semibold text-lg">
                  Google Developer Groups
                </h3>
                <p className="text-[11px] text-gray-400">On Campus • MLRIT</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-400 max-w-md leading-relaxed">
              GDGC MLRIT is a student-led community supported by Google that
              fosters learning, collaboration, and innovation in technical areas
              among university students.
            </p>
            {/* Contact under left column */}
            <div className="text-sm">
              <h4 className="font-semibold mb-3 text-gray-100">
                Reach out to us:
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-2">
                  <FaEnvelope className="mt-[2px]" />
                  <span>gdgc@mlrit.ac.in</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-[2px]" />
                  <span>
                    Laxman Reddy Aveneue, Dundigal
                    <br />
                    Hyderabad, Telangana - 500043
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: socials */}
          <div className="w-full md:w-auto md:flex md:flex-col md:justify-center md:items-start">
            <h4 className="font-semibold mb-3 text-gray-100">Follow us on:</h4>
            <div className="flex items-center gap-4 text-xl">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/gdgcmlrit?igsh=bmY1cmwxYjJoYTY5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/company/gdgcmlrit/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com/@gdgcmlrit?si=9yejXjerihbOS6Ub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
