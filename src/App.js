import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <div>
            <header className='fixed-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Header></Header>
                        </div>
                    </div>
                </div>
            </header>
            <main>

            </main>
            <footer className='fixed-bottom'>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default App;