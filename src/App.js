import React, { useState } from 'react';
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
    const [sections] = useState([
        {
            name: 'About',
        },
        {
            name: 'Contact',
        },
        {
            name: 'Portfolio',
        },
        {
            name: 'Resume',
        }
    ]);

    const [currentSection, setCurrentSection] = useState(sections[0].name)
    return (
        <div>
            <Header
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            ></Header>
            <main>
                {(() => {
                    if (currentSection === 'About') {
                        return (
                            <div><About></About></div>
                        )
                    } else if (currentSection === "Contact") {
                        return (
                            <div><Contact></Contact></div>
                        )
                    } else if (currentSection === "Portfolio") {
                        return (
                            <div><Portfolio></Portfolio></div>
                        )
                    } else if (currentSection === "Resume") {
                        return (
                            <div><Resume></Resume></div>
                        )
                    }
                })()}
            </main>
            <footer className='fixed-bottom'>
                <Footer></Footer>
            </footer>
        </div >
    )
}

export default App;