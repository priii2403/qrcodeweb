import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TypingEffect from "./TypingEffect"; // Import TypingEffect component
import "./App.css"; // Import your CSS file for styling

const HomePage = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const navigateToFacebook = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=61558386894174";
  };

  const navigateToInstagram = () => {
    window.location.href = "https://www.instagram.com/nutan_exports/";
  };

  const navigateToLinkedIn = () => {
    window.location.href =
      "https://www.linkedin.com/company/102413267/admin/feed/posts/";
  };

  const navigateToWhatsApp = () => {
    const phoneNumber = "919016708332";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappUrl;
  };

  const sendEmail = () => {
    window.location.href = "mailto:nutanexports01@gmail.com";
  };
  const navigateToTwitter = () => {
    window.location.href = "https://twitter.com/home";
  };

  const handleImageLoad = () => {
    setBackgroundLoaded(true);
  };

  return (
    <div className="homepage">
      {!backgroundLoaded && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <div className="background-image" onLoad={handleImageLoad}></div>

      <div className={`content-container ${backgroundLoaded ? "loaded" : ""}`}>
        <div className="content">
          <TypingEffect text="NUTAN EXPORTS" />
        </div>
        <div className="cUS">Contact Us</div>
        <div className="social-icons">
          <div>
            <a  href={() => false}onClick={navigateToFacebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a h href={() => false}onClick={navigateToInstagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a  href={() => false}onClick={navigateToLinkedIn}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a  href={() => false}onClick={navigateToWhatsApp}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a  href={() => false}onClick={navigateToTwitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a  href={() => false}onClick={sendEmail}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
