import React, { useState } from 'react';
import '../Navbar/navBar.css';
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";



function NavBar() {
    const [active, setActive] = useState('navBar');
    const showNav= () => {
        setActive('navBar activeNavbar')
    }

    const removeNav= () => {
        setActive('navBar')
    }


  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href="#" className='logo flex'>
                    <h1>
                        <MdTravelExplore  className="icon"/>
                        Travel
                    </h1>
                </a>
            </div>
            <div className={active}>
                <ul className="navLists flex">

                    <li className='navItem'>
                        <a href="#navLink" className='navLink'>Home</a>
                    </li>

                    <li className='navItem'>
                        <a href="#navLink" className='navLink'>Packages</a>
                    </li>

                    <li className='navItem'>
                        <a href="#navLink" className='navLink'>Shop</a>
                    </li>

                    <li className='navItem'>
                        <a href="#navLink" className='navLink'>About</a>
                    </li>

                    <li className='navItem'>
                        <a href="#navLink" className='navLink'>Pages</a>
                    </li>

                    <li className='navItem'>
                        <a href="#navLink" className='navLink'>News</a>
                    </li>

                    <li className='navItem'>
                        <a href="#navLink" className='navLink'>Contact</a>
                    </li>
                    <button className='btn'>
                        <a href="#">BOOK NOW</a>
                    </button>
                </ul>
                <div onClick={removeNav} className="closeNavbar">
                    <IoIosCloseCircle  className="icon"/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots />
            </div>
        </header>
    </section>
  )
}

export default NavBar