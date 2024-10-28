import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const {
    sections = [],
    currentSection,
    setCurrentSection,
    isDarkMode,
    setIsDarkMode,
  } = props;

  return (
    <div className="headerClass">
      <header
        className="px-3 py-4"
        style={{
          backgroundColor: isDarkMode ? "#1a2f2f" : "#f5f5dc",
          borderBottom: isDarkMode ? "4px solid #f5d491" : "4px solid #1a2f2f",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 text-start pageTitle">
              <h1 style={{ color: isDarkMode ? "#f5d491" : "#343d46" }}>
                Charanvir
              </h1>
            </div>
            <div className="col-12 col-md-5 text-center">
              <Navigation
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
              />
            </div>
            <div className="col-12 col-md-3 text-end">
              <button
                className="toggle-icon-button"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <i className={`bi ${isDarkMode ? "bi-sun" : "bi-moon"}`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
