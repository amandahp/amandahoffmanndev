import React from 'react'
import styled from './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faProjectDiagram, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    const iconAbout = <FontAwesomeIcon icon={faUserCircle} className='icon-user' />
    const iconProjects = <FontAwesomeIcon icon={faProjectDiagram} className='icon-projects' />
    const iconContacts = <FontAwesomeIcon icon={faEnvelopeSquare} className='icon-contacts' />
    const iconGit = <FontAwesomeIcon icon={faGithub} className='icon-git' />

    const handleHome = () =>{
        window.location ='/home'
    }
    const handleAbout = () => {
        window.location = '/about'
    }

    const handleProjects = () => {
        window.location = '/projects'
    }

    const handleContact = () => {
        window.location = '/contact'
    }

    

    return(
        <div className='header'>
            <div>
                <button onClick={()=>handleHome()}  className='button-about'> {iconAbout}
                </button>
                <button onClick={()=>handleProjects()}  className='button-projects'> {iconProjects}
                </button>
                <button onClick={()=>handleContact()}  className='button-contact'> {iconContacts}
                </button>
                <button onClick={()=> window.open('https://github.com/amandahp')} className='button-git'> {iconGit}
                </button>
            </div>
        </div>

    )
}

export default Header

