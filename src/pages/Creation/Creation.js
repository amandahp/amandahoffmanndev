import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './Creation.css'


const Creation = () => {
    return(
        <main>
            <div className="grid-container">
                <div className="header"></div>
                    <Header>
                    </Header>
                <div className="body-creation">
                    <div class="element">
                    <div className='bar'>
                        <div className='text-progress'><p>In progress...</p></div>
                        <div class="progress">
                            <div class="progress-value"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer>
                    </Footer>
                </div>
            </div>
        </main>
    )
}

export default Creation