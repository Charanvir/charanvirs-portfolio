import React, { useState } from "react";
import Navigation from "../Navigation";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

function Header(props) {
  const {
    sections = [],
    currentSection,
    setCurrentSection,
    isDarkMode,
    setIsDarkMode,
  } = props;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="headerClass">
      <header
        className="px-3 py-2"
        style={{
          backgroundColor: isDarkMode ? "#1a2f2f" : "#f5f5dc",
          borderBottom: isDarkMode ? "4px solid #f5d491" : "4px solid #1a2f2f",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 text-start pageTitle">
              <h1
                style={{
                  fontSize: "1.8rem",
                  color: isDarkMode ? "#f5d491" : "#343d46",
                }}
              >
                Charanvir
              </h1>
            </div>
            <div className="col-6 text-end">
              <button
                className="toggle-icon-button"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button
                className="menu-icon-button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaBars />
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="row">
              <div className="col-12 text-center">
                <Navigation
                  sections={sections}
                  currentSection={currentSection}
                  setCurrentSection={setCurrentSection}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
