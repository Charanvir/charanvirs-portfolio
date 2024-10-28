import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [sections] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0].name);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="pageContainer">
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <main className="contentWrapper">
        {(() => {
          if (currentSection === "About") {
            return (
              <div>
                <About />
              </div>
            );
          } else if (currentSection === "Portfolio") {
            return (
              <div>
                <Portfolio />
              </div>
            );
          } else if (currentSection === "Contact") {
            return (
              <div>
                <Contact />
              </div>
            );
          } else if (currentSection === "Resume") {
            return (
              <div>
                <Resume />
              </div>
            );
          }
        })()}
      </main>
      <footer className="footerWrapper">
        <Footer isDarkMode={isDarkMode} />
      </footer>
    </div>
  );
}

export default App;
