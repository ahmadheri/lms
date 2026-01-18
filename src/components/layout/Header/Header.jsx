import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import "./Header.css";
import { useState } from "react";
import Button from "../../ui/Button/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/challenges", label: "Challenges" },
    { to: "/about", label: "Tentang Kami" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* HEADER NAV */}
          <nav className="header-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* LOGIN BUTTON */}
          <Button
            className="login-button"
            icon={<FaCircleUser />}
            text="Login"
          />

          {/* HAMBURGER ICON */}
          <div
            className={`hamburger-icon ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {/* SIDEBAR MENU */}
          {open && (
            <>
              <div
                className="overlay"
                onClick={() => setOpen(false)}
              ></div>
              <nav className={`sidebar-menu ${open ? "sidebar-open" : ""}`}>
                {/* Sidebar Content */}
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </>
          )}
        </div>
      </header>
    </>
  );
}
