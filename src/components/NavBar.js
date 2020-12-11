import React from 'react';
import { Link } from "react-scroll"

const NavBar = () => {
  return (
    <div>
        <div className='NavBar-navBar'>
            <div className='NavBar-item' id='NavBar-icon'></div>
            <Link
              className='NavBar-item'
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
            >
              Projects
            </Link>

            <Link
              className='NavBar-item'
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
            >
              Skills
            </Link>

            <Link
              className='NavBar-item'
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={500}
              duration={800}
            >
              About
            </Link>

            <Link
              className='NavBar-item'
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-290}
              duration={800}
            >
              Contact
            </Link>
           
        </div>
    </div>
  );
}

export default NavBar;




