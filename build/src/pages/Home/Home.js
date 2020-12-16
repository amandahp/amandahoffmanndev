import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import  './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    const iconCodder = <FontAwesomeIcon icon={faFileCode} className='icon-code' />
    return(
        <main>
            <div className="grid-container">
                <div className="header"></div>
                    <Header>
                    </Header>
                <div className="body">
                    <div className='div-button'>
                        <button onClick={()=> window.open('https://github.com/amandahp')} className='button-log'> {iconCodder}
                        </button>
                    </div>
                    <div className='text-name'>
                        <a href="https://www.linkedin.com/in/amanda-h-660bab130/" className='amanda-name'>Amanda Hoffmann</a>
                        <hr className='row-first'/>
                        <h6 className='text-row'>Full Stack Web Developer </h6>
                        <hr className='row-second'/>
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

export default Home