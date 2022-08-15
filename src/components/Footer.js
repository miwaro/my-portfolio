import React from 'react';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer-contentContainer'>
      <p className='footer-text'>
        Handcrafted by me &copy; {year}
      </p>
    </div>
  );
}

export default Footer;