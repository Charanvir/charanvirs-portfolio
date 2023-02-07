import React from 'react';
import image from '../../assets/images/me.jpeg'

function About() {
    return (
        <div className='text-center aboutMeHeader'>
            <div className="logo">
                <img className="imageOfMe" alt='me' src={image}></img>
            </div>
            <div className="content mt-3">
                <div className="inner">
                    <h2>Charanvir Singh</h2>
                    <p>Junior Full Stack Developer</p>
                </div>
            </div>
            <div className='aboutMeParagraph'>
                <p>I am Charanvir Singh, a full-stack developer with a passion for continuously improving my skills and growing in my field.
                    I enjoy working on both the front-end and back-end sides of a project, giving me a comprehensive understanding of all aspects of development.
                    My background in science drives me to use my development skills to solve real-world problems in the science and medical domains.
                    I am always seeking new opportunities to learn new technologies, languages, and libraries, making me an asset to any team I work with.
                    I am driven to succeed and committed to continuous learning, making me a valuable asset in the tech industry.</p>
            </div>
            <div className='aboutMeParagraph'>
                <p>In my spare time I like to play and watch sports with my friends.
                    When I am not playing sports, I like to create projects with my growing
                    knowledge of web development and code.
                    The projects section displays projects that I have completed (alone and
                    with a team), but I am always looking to improve and update my applications to add new features and optimize my code.
                    Each project is linked to the deployed application on GitHub, and the repository for each project is included to view the
                    source code.</p>
            </div>
        </div >
    )
}

export default About;