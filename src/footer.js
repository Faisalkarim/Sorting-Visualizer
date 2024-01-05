import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const StickyFooter = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#282c34', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Made with <span style={{ color: 'red' }}>❤️</span> by Faisal</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
          <a href="https://www.facebook.com/faisal.ami.3/" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: '#fff', marginRight: '10px' }} /></a>
          <a href="https://twitter.com/_f_Oclk" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ color: '#fff', marginRight: '10px' }} /></a>
          <a href="https://www.instagram.com/karim.faisal.10/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: '#fff' }} /></a>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;
