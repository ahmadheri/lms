import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import "../styles/Header.css";
import { useState } from "react";
import Button from "./Button";

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
          {/* <h1 className="header-logo">MyApp</h1> */}

          {/* SIDEBAR MENU */}
          {open && (
              <nav className={`sidebar-menu ${open ? "sidebar-open" : ""}`}>
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
            ) && <div className="overlay">onClick={() => setOpen(false)}</div>}

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

          {/* HAMBURGER MENU */}
          <div
            className={`hamburger-menu ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </header>
    </>
  );
}
