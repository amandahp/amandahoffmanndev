import React from 'react'
import Footer from '../../components/footer/footer'
import styles from './Home.css'

const Home = () => {
    return(
        <main>
            <div className="grid-container">
                <div className="header"></div>
                <div className="body"></div>
                <div className="footer">
                    <Footer>
                    </Footer>
                </div>
            </div>
        </main>
    )
}

export default Home