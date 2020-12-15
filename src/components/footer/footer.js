import React from 'react'
import styles from './footer.css'
import Heart from '../../utils/icons/heart-solid.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const icon = <FontAwesomeIcon icon={faHeart} className='icon-heart' />
    return(
        <div className='footer'>
            <p className='text-made-with'>Made with {icon} by Amanda Hoffmann </p> 
        </div>
    )
}

export default Footer