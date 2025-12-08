import React from "react";
import "./MobileNavLinks.css"; // We'll add styling below

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

const MobileNavLinks = ({ onClose }) => {
  return (
    <div className="mobile-nav-overlay">
      <div className="mobile-nav-links">
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className="nav-link"
            onClick={onClose} // Close portal on click
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavLinks;
