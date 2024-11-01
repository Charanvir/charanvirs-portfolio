import React from "react";
import budgetTrackerImage from "../../assets/images/projectImages/BudgetTracker.png";
import charanvirNetworkImage from "../../assets/images/projectImages/CharanvirNetwork.png";
import devCommerceImage from "../../assets/images/projectImages/dEvCommerce.png";
import employeeTrackerImage from "../../assets/images/projectImages/EmployeeTracker.png";
import cineflexImage from "../../assets/images/projectImages/cineflex.png";
import dragAndDrop from "../../assets/images/projectImages/dragAndDrop.png";
import farloSoftball from "../../assets/images/projectImages/farloSoftball.png";
import mlbStats from "../../assets/images/projectImages/mlbStats.png";
import soccerStadium from "../../assets/images/projectImages/soccerStadium.png";

function Project() {
  const projects = [
    {
      name: "Farlo Softball",
      image: farloSoftball,
      deployed: "https://farlo-softball.vercel.app/",
      github: "https://github.com/Charanvir/Farlo-Softball",
      techStack: [
        "React, ",
        "Next.js, ",
        "MongoDB, ",
        "Material UI, ",
        "TypeScript, ",
        "Tailwind ",
      ],
      purpose: "The official Farlo Softball team website",
    },
    {
      name: "MLB Trends Site",
      image: mlbStats,
      deployed: "https://farlo-mlb-model.streamlit.app/",
      github: "https://github.com/Charanvir/MLB-Trends-Site",
      techStack: [
        "Python, ",
        "MySQL, ",
        "pandas, ",
        "numpy, ",
        "SQLAlchemy, ",
        "Plotly ",
      ],
      purpose:
        "A site created using Python to visualize MLB stats for trends analysis",
    },
    {
      name: "Soccer Stadiums",
      image: soccerStadium,
      deployed: "https://soccer-stadiums.vercel.app/",
      github: "https://github.com/Charanvir/Soccer-Stadiums",
      techStack: ["React, ", "Next.js, ", "MongoDB "],
      purpose:
        "A Next.js React application to highlight the largest and most known soccer stadiums around the world",
    },
    {
      name: "Drag and Drop Task Manager",
      image: dragAndDrop,
      deployed: "https://charanvir.github.io/Drag-and-Drop-Projects/",
      github: "https://github.com/Charanvir/Drag-and-Drop-Projects/tree/main",
      techStack: ["React, ", "TypeScript"],
      purpose:
        "A user interactive task manager which implements Drag and Drop functionality to better visualize progress.",
    },
    {
      name: "Cineflex",
      image: cineflexImage,
      deployed: "https://frozen-oasis-34307.herokuapp.com/",
      github: "https://github.com/Project3MERN/Project-3-MERN",
      techStack: ["MERN, ", "React, ", "MongoDB, ", "Service Workers, ", "PWA"],
      purpose:
        "Cineflex is a social media platform for movie reviews. Leave reviews on popular movies and comment on others reviews",
    },
    {
      name: "Budget Tracker",
      image: budgetTrackerImage,
      deployed: "https://murmuring-harbor-62394.herokuapp.com/",
      github: "https://github.com/Charanvir/Budget-Tracker",
      techStack: [
        "PWA, ",
        "IndexedDB, ",
        "MongoDB, ",
        "Mongoose, ",
        "Express, ",
        "Service Workers",
      ],
      purpose:
        "Helps users create a budget and keep track of income and expencses. Displays a visual representation of their savings/expenditures.",
    },
    {
      name: "dEv Commerce",
      image: devCommerceImage,
      deployed: "https://infinite-shore-33919.herokuapp.com/",
      github: "https://github.com/Charanvir/E-Commerce-Website",
      techStack: [
        "Express, ",
        "BootStrap, ",
        "Handlebars.js, ",
        "MySQL, ",
        "Sequelize, ",
        "Bcrypt",
      ],
      purpose:
        "An application that allows developers to view and purchase all the tools/frameworks/hardwares for their development needs.",
    },
    {
      name: "Employee Tracker",
      image: employeeTrackerImage,
      deployed: "https://vimeo.com/705312686",
      github: "https://github.com/Charanvir/Employee-Tracker",
      techStack: ["JavaScript, ", "Jest, ", "Inquirer, ", "MySQL "],
      purpose:
        "Allows management to keep track of their employees and their companys organizational structure",
    },
    {
      name: "The Charanvir Network",
      image: charanvirNetworkImage,
      deployed: "https://vimeo.com/722839360",
      github: "https://github.com/Charanvir/The-Charanvir-Network",
      techStack: ["Express, ", "MongoDB, ", "Mongoose, ", "NoSQL"],
      purpose:
        "An easy to use API for creating a social media platform, which can be integrated into a functional frontend.",
    },
  ];
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.name} className="card col-md-5 col-10 projectCard">
          <div className="card-img-top projectImg">
            <img
              className="projectImageID"
              src={project.image}
              alt={project.name}
            />
            <div className="imageOverlay">
              <a href={project.deployed} target="blank" className="overlayLink">
                Deployed Application
              </a>
              <a href={project.github} target="blank" className="overlayLink">
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="card-body projectDetails">
            <h5 className="projectName">{project.name}</h5>
            <p className="techStack">
              <strong>Tech Stack:</strong> {project.techStack.join(", ")}
            </p>
            <p className="projectPurpose">{project.purpose}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
