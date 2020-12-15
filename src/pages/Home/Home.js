import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import styles from './Home.css'

const Home = () => {
    return(
        <main>
            <div className="grid-container">
                <div className="header"></div>
                    <Header>
                    </Header>
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