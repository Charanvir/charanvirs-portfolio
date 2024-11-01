import React, { useState } from "react";
import resume from "../../assets/Charanvir Resume.pdf";

function Resume() {
  const skills = {
    programmingLanguages: [
      "JavaScript",
      "Python",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
    ],
    frontEnd: [
      "React",
      "Next.JS",
      "APIs",
      "Responsive Design",
      "Bootstrap",
      "jQuery",
    ],
    backEnd: [
      "Node.js",
      "Express",
      "Flask",
      "Django",
      "GraphQL",
      "REST APIs",
      "Postgres",
      "MySQL",
      "NoSQL",
      "MongoDB",
      "Sequelize",
      "Mongoose",
      "Jest",
      "Pandas",
      "Service Workers",
      "IndexedDB",
      "Insomnia",
      "Elasticsearch",
      "Redis",
    ],
    devOps: [
      "Docker",
      "Jenkins",
      "Git",
      "CI/CD",
      "AWS",
      "Azure",
      "GitHub Actions",
      "Nginx",
    ],
    scripting: ["Shell Scripting", "Python Scripting"],
    other: [
      "Test Driven Development (TDD)",
      "Object-Oriented Programming (OOP)",
      "Data Structures and Algorithms",
      "Microservices Architecture",
      "Software Development Life Cycle (SDLC)",
      "Agile Methodologies",
      "Problem Solving",
      "Debugging",
      "Technical Communication",
    ],
  };

  const [selectedSkillType, setSelectedSkillType] = useState(null);

  return (
    <div className="resumePage">
      <div className="resumeSection">
        <p>
          View my resume via the following link:{" "}
          <a rel="noreferrer noopener" target="_blank" href={resume}>
            Resume
          </a>
        </p>
        <p>
          View my Python projects portfolio via the following link:{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://charanvir-python-portfolio-home-gyb486.streamlit.app/"
          >
            Python Projects
          </a>
        </p>
      </div>
      <div className="skillsContainer">
        <div className="buttonContainer">
          <button
            className="skillButton"
            onClick={() => setSelectedSkillType("programmingLanguages")}
          >
            View Programming Languages
          </button>
          <button
            className="skillButton"
            onClick={() => setSelectedSkillType("frontEnd")}
          >
            View Front End Skills
          </button>
          <button
            className="skillButton"
            onClick={() => setSelectedSkillType("backEnd")}
          >
            View Back End Skills
          </button>
          <button
            className="skillButton"
            onClick={() => setSelectedSkillType("devOps")}
          >
            View DevOps Skills
          </button>
          <button
            className="skillButton"
            onClick={() => setSelectedSkillType("scripting")}
          >
            View Scripting Skills
          </button>
          <button
            className="skillButton"
            onClick={() => setSelectedSkillType("other")}
          >
            View Other Skills
          </button>
        </div>
        {selectedSkillType && (
          <div className="skillsSection">
            <h2>
              {selectedSkillType === "programmingLanguages"
                ? "Programming Languages"
                : selectedSkillType === "frontEnd"
                ? "Front End Skills"
                : selectedSkillType === "backEnd"
                ? "Back End Skills"
                : selectedSkillType === "devOps"
                ? "DevOps Skills"
                : selectedSkillType === "scripting"
                ? "Scripting Skills"
                : "Other Skills"}
            </h2>
            <div className="skillGrid">
              {skills[selectedSkillType].map((skill, index) => (
                <div
                  key={skill}
                  className={`skillItem skillAnimation skillDelay${index % 5}`}
                >
                  {" "}
                  {/* Add delay classes for staggered animations */}
                  {skill}
                </div>
              ))}
            </div>
            <button
              className="closeButton"
              onClick={() => setSelectedSkillType(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume;
