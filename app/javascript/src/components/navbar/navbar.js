import React from 'react'
import { GiBurningSkull } from 'react-icons/gi'
import { AiTwotoneMessage, AiOutlineUser } from 'react-icons/ai'
import './navbar.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <div className='navbar'>
                <span className='navbar-icon'>
                    <Link to='profile'> <AiOutlineUser /> </Link>
                </span>
                <span className='navbar-icon'>
                    <Link to='/swipe'> <GiBurningSkull /> </Link>
                </span>
                <span className='navbar-icon'>
                    <Link to='/message'> <AiTwotoneMessage /> </Link>
                </span>
            </div>

    )
}

export default Navbar