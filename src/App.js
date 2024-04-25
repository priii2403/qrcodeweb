import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Import your CSS file for styling

const HomePage = () => {
  const navigateToFacebook = () => {
    // Replace 'https://www.facebook.com/' with your Facebook page URL
    window.location.href = 'https://www.facebook.com/';
  };

  const navigateToInstagram = () => {
    // Replace 'https://www.instagram.com/' with your Instagram page URL
    window.location.href = 'https://www.instagram.com/';
  };

  const navigateToLinkedIn = () => {
    // Replace 'https://www.linkedin.com/' with your LinkedIn page URL
    window.location.href = 'https://www.linkedin.com/';
  };

  const navigateToWhatsApp = () => {
    // Replace 'https://web.whatsapp.com/' with your WhatsApp page URL
    window.location.href = 'https://web.whatsapp.com/';
  };

  const sendEmail = () => {
    // Replace 'mailto:your.email@example.com' with your email address
    window.location.href = 'mailto:your.email@example.com';
  };
  return (
    <div className='homepage'>
    <div className='background-image'></div>
    <div className='content-container'>
      <div className='content'>
        NUTAN EXPORTS
      </div>
      <div className='cUS'>Contact Us</div>
      <div className="social-icons">
      <div>
      <a href="#" onClick={navigateToFacebook}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" onClick={navigateToInstagram}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" onClick={navigateToLinkedIn}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#" onClick={navigateToWhatsApp}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="#" onClick={sendEmail}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
      </div>
    </div>
  </div>
  );
};

export default HomePage;
