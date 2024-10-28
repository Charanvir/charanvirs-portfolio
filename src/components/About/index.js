import React from "react";
import image from "../../assets/images/me.jpeg";

function About() {
  return (
    <div className="text-center aboutMeHeader">
      <div className="logo">
        <img className="imageOfMe" alt="me" src={image}></img>
      </div>
      <div className="content mt-3">
        <div className="inner">
          <h2>Charanvir Singh</h2>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div className="aboutMeParagraph">
        <p>
          I am Charanvir Singh, a full-stack developer with a strong foundation
          in software engineering and a passion for creating comprehensive
          software solutions. I bring expertise in JavaScript, TypeScript,
          Python, React, SQL, and NoSQL, with experience spanning frontend and
          backend development. My skills also include integrating technologies
          such as REST APIs, GraphQL, Docker, and Git to enhance application
          performance and user experience.
        </p>
      </div>
      <div className="aboutMeParagraph">
        <p>
          In my current role as a Software Application Developer at Case IQ, I
          contribute to full-stack development, debugging, and optimizing
          application performance. My work involves collaborating closely with
          clients to resolve issues and enhance system stability, ensuring that
          their needs are translated into efficient technical solutions.
          Previously, I developed user-friendly, responsive websites for Almaari
          Decor using React and TypeScript, which enhanced the company's online
          presence.
        </p>
      </div>
      <div className="aboutMeParagraph">
        <p>
          I am also a Teaching Assistant at 2U, where I mentor students on web
          development best practices and assist with topics including
          JavaScript, React, SQL, and Test-Driven Development. My experience in
          teaching has further solidified my understanding of fundamental
          development concepts and best practices, allowing me to bring a
          mentorship-oriented approach to my professional environment.
        </p>
      </div>
      <div className="aboutMeParagraph">
        <p>
          I am driven by my desire to solve real-world problems using
          technology, and I am always seeking opportunities to learn new
          languages, frameworks, and tools. My commitment to clean, efficient
          code, and my focus on continuous learning, make me a valuable asset to
          any team. I am ready to contribute innovative solutions and tackle new
          challenges in a dynamic software development environment.
        </p>
      </div>
    </div>
  );
}

export default About;
