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
                <p>My name is Charanvir Singh and I am a new developer that is looking to enhance his skills and
                    acquire more knowledge in the field. I am very interested in creating web and mobile applications
                    and
                    using code to solve real world problems. I have a science and medical background, but my passion has
                    always
                    been technology and how it functions. I hope to utilize code and technology to make a difference in
                    the world and hopefully tie my knowledge back into the medical sector.</p>
            </div>
            <div className='aboutMeParagraph'>
                <p>In my spare time I like to play and watch sports with my friends. I currently play in a
                    hockey, football
                    and softball league. When I am not playing sports, I like to create projects with my growing
                    knowledge
                    of web development and code. The projects section displays projects that I have completed (alone and
                    with a team), but I am always
                    looking to
                    improve and update my applications to add new features and optimize my code. Each project is linked
                    to the deployed application on GitHub, and the repository for each project is included to view the
                    source code.</p>
            </div>
        </div >
    )
}

export default About;