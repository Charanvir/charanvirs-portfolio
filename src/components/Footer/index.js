import React from "react";

function Footer({ isDarkMode }) {
  return (
    <div className="container">
      <div className="mb-3 social-media-list">
        <li className="mx-3">
          <a href="https://github.com/Charanvir" className="contact-icon">
            <i className={`bi bi-github ${isDarkMode ? "" : "dark-icon"}`}></i>
          </a>
        </li>
        <li className="mx-3">
          <a href="https://twitter.com/chsingh01" className="contact-icon">
            <i className={`bi bi-twitter ${isDarkMode ? "" : "dark-icon"}`}></i>
          </a>
        </li>
        <li className="mx-3">
          <a
            href="https://www.linkedin.com/in/charanvir-singh-4b7033222/"
            className="contact-icon"
          >
            <i
              className={`bi bi-linkedin ${isDarkMode ? "" : "dark-icon"}`}
            ></i>
          </a>
        </li>
        <li className="mx-3">
          <a
            href="https://www.instagram.com/charanvir1/"
            className="contact-icon"
          >
            <i
              className={`bi bi-instagram ${isDarkMode ? "" : "dark-icon"}`}
            ></i>
          </a>
        </li>
      </div>
    </div>
  );
}

export default Footer;
