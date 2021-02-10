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
                    Front-end Web Developer
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
                        aria-label="View My Work"
                    >
                        View My Work
                </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;