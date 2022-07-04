import React from 'react';
import Navigation from '../Navigation'

function Header(props) {
    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props;


    return (
        <div className='mb-3 headerClass'>
            <header className='px-1 py-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-3 text-start pageTitle'>
                            <h1>Charanvir</h1>
                        </div>
                        <nav className='col-12 col-md-6 text-center container'>
                            <Navigation
                                sections={sections}
                                currentSection={currentSection}
                                setCurrentSection={setCurrentSection}
                            ></Navigation>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;