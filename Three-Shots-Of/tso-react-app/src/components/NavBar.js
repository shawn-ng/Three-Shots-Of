import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <section className='navbar'>
            <div className='navbar-brand'>
                <Link to='/home' className='navbar-item'>
            </div>
        </section>
    )
}

export default NavBar