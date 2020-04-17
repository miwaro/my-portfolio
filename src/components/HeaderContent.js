import React from 'react';
import PropTypes from 'prop-types';

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
                <a href='#portfolio' className='button'>View My Work</a>
            </div>
        </div>
    </div>
  );
}

export default HeaderContent;