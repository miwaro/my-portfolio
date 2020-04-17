import React from 'react';
import { Link } from "react-scroll"

const HeaderContent = () => {
  return (
    <div>
        <div className='HeaderContent-header'>
            <div className='HeaderContent-title'>
                Michael Rooze
            </div>
            <div className='HeaderContent-subtitle'>
                I am a front-end web developer passionate about creating new and unique web experiences.
            </div>
            <div className='HeaderContent-button'>
                <Link
                className='button'
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >
                View My Work
                </Link>
            </div>
        </div>
    </div>
  );
}

export default HeaderContent;