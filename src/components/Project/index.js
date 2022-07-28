import React, { useEffect } from 'react';
import projectimg1 from '../../assets/images/projectImages/BudgetTracker.png'
import projectimg2 from '../../assets/images/projectImages/CharanvirNetwork.png'
import projectimg3 from '../../assets/images/projectImages/dEvCommerce.png'
import projectimg4 from '../../assets/images/projectImages/EmployeeTracker.png'
import projectimg5 from '../../assets/images/projectImages/FoodFestival.png'
import projectimg6 from '../../assets/images/projectImages/PhotoPort.png'
import projectimg7 from '../../assets/images/projectImages/TechBlog.png'
import projectimg8 from '../../assets/images/projectImages/WeatherDashboard.png'
import projectimg9 from '../../assets/images/projectImages/cineflex.png'
import Aos from 'aos';
import "aos/dist/aos.css"

function Project() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const projects = [
        {
            name: 'Budget Tracker',
            image: projectimg1,
            deployed: 'https://murmuring-harbor-62394.herokuapp.com/',
            github: 'https://github.com/Charanvir/Budget-Tracker',
            techStack: ['PWA, ', 'IndexedDB, ', 'MongoDB, ', 'Mongoose, ', 'Express, ', 'Service Workers'],
            purpose: 'Helps users create a budget and keep track of income and expencses. Displays a visual representation of their savings/expenditures.'
        },
        {
            name: 'Cineflex',
            image: projectimg9,
            deployed: 'https://frozen-oasis-34307.herokuapp.com/',
            github: 'https://github.com/Project3MERN/Project-3-MERN',
            techStack: ['MERN, ', 'React, ', 'MongoDB, ', 'Service Workers, ', 'PWA'],
            purpose: 'Cineflex is a social media platform for movie reviews. Leave reviews on popular movies and comment on others reviews'
        },

        {
            name: 'Food Festival',
            image: projectimg5,
            deployed: 'https://charanvir.github.io/Food-Festival/index.html',
            github: 'https://github.com/Charanvir/Food-Festival',
            techStack: ['Express, ', 'Service Workers, ', 'IndexedDB, ', 'Webpack, ', 'PWA'],
            purpose: 'Mock application for a food festival, allowing users to keep track of events during the festival, and ticket information.'
        },
        {
            name: 'Weather Dashboard',
            image: projectimg8,
            deployed: 'https://charanvir.github.io/Weather-Dashboard/',
            github: 'https://github.com/Charanvir/Weather-Dashboard',
            techStack: ["HTML, ", "CSS, ", "JavaScript, ", "API, "],
            purpose: 'Allows users to keep track of weather in their area and areas they may be visiting, so they can plan their days accordingly.'
        },
        {
            name: 'Photo Port',
            image: projectimg6,
            deployed: 'https://charanvir.github.io/photo-port/',
            github: 'https://github.com/Charanvir/photo-port',
            techStack: ['React, ', 'JavaScript, ', 'HTML, ', "CSS"],
            purpose: 'Mock application showcasing a photography portfolio for a talented photographer.'
        },
        {
            name: 'dEv Commerce',
            image: projectimg3,
            deployed: 'https://infinite-shore-33919.herokuapp.com/',
            github: 'https://github.com/Charanvir/E-Commerce-Website',
            techStack: ["Express, ", "BootStrap, ", "Handlebars.js, ", 'MySQL, ', 'Sequelize, ', "Bcrypt"],
            purpose: 'An application that allows developers to view and purchase all the tools/frameworks/hardwares for their development needs.'
        },
        {
            name: 'Tech Blog',
            image: projectimg7,
            deployed: 'https://rocky-waters-55819.herokuapp.com/',
            github: 'https://github.com/Charanvir/Tech-Blog-',
            techStack: ["MySQL, ", "Express, ", "Sequelize, ", "Handlebars.js, ", "Heroku"],
            purpose: "Allows users to gives their thoughts on technological topics, as well as create/view replies to others posts."
        },
        {
            name: 'Employee Tracker',
            image: projectimg4,
            deployed: 'https://vimeo.com/705312686',
            github: 'https://github.com/Charanvir/Employee-Tracker',
            techStack: ['JavaScript, ', 'Jest, ', 'Inquirer, ', "MySQL "],
            purpose: 'Allows management to keep track of their employees and their companys organizational structure'
        },
        {
            name: 'The Charanvir Network',
            image: projectimg2,
            deployed: 'https://vimeo.com/722839360',
            github: 'https://github.com/Charanvir/The-Charanvir-Network',
            techStack: ['Express, ', 'MongoDB, ', 'Mongoose, ', "NoSQL"],
            purpose: 'An easy to use API for creating a social media platform, which can be integrated into a functional frontend.'
        },

    ]
    return (
        <div className='row'>
            {projects.map((project) => {
                return (
                    <div data-aos="flip-up" key={project.name} className="card col-md-5 col-10 projectDiv animation" >
                        <div className="card-body projectTitle">
                            <p className="card-text projectName">{project.name}</p>
                        </div>
                        <div className='projectImg'>
                            <img className='projectImageID' src={project.image} alt={project.name}></img>
                            <div className='imageOverlay'>
                                <a href={project.deployed} className='deployedText'>Deployed Application</a>
                                <br></br>
                                <a href={project.github} className='githubText'>GitHub Repository</a>
                                <div className='techStackDiv'>
                                    <span className='techStack'>Tech Stack Used: </span>{project.techStack}
                                </div>
                                <span className='deployedText'>{project.purpose}</span>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Project;