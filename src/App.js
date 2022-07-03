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

    const [currentSection, setCurrentSection] = useState(sections[0])
    return (
        <div>
            <Header
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            ></Header>
            <main>
                <section>
                    <About></About>
                    <Contact></Contact>
                    <Portfolio></Portfolio>
                    <Resume></Resume>
                </section>
            </main>
            <footer className='fixed-bottom'>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default App;