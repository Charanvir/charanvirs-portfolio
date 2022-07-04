import React from 'react';

function Navigation(props) {
    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props;

    return (

        <div className='row'>
            {sections.map((section) => (
                <li
                    className={`navLinks px-1 mt-3 col-3 ${currentSection === section.name && 'selectedNav'}`}
                    key={section.name}
                >
                    <span
                        onClick={() => {
                            setCurrentSection(section.name);
                            console.log(currentSection)
                        }}
                    >
                        {(section.name)}
                    </span>
                </li>
            ))}
        </div>

    )
}

export default Navigation;