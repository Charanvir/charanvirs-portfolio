import React from 'react';
import Navigation from '../Navigation'

function Header(props) {
    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props;


    return (
        <div>
            <header className='px-1 mt-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 text-start'>
                            <h1>Charanvir</h1>
                        </div>
                        <div className='col-9 text-center container'>
                            <Navigation
                                sections={sections}
                                currentSection={currentSection}
                                setCurrentSection={setCurrentSection}
                            ></Navigation>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;