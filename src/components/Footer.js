import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <div className="info info__phone">
        <FontAwesomeIcon icon={faPhone} className="info__icons"/>
        <span>+1 800 Website</span>
      </div>
      <div className="info">
        <FontAwesomeIcon icon={faEnvelope} className="info__icons"/>
        <span>hello@mywebnow.com</span>
      </div>
      <div className="info">
        <FontAwesomeIcon icon={faMapMarker} className="info__icons"/>
        <span>1 Main St <br/> Floor 6, <br/> New York, NY 10005</span>
      </div>
    </div>

    <div className="footer-description">
      <p className="title">Company</p>
      <ul>
        <li>About us</li>
        <li>News</li>
        <li>FAQ</li>
        <li>Contact us</li>
      </ul>
    </div>

    <div className="footer-description">
      <p className="title">Services</p>
      <ul>
        <li>Web Hosting</li>
        <li>Cloud Hosting</li>
        <li>VPS Services</li>
        <li>Domain Names</li>
      </ul>
    </div>

    <div className="footer-description">
      <p className="title">Others</p>
      <ul>
        <li>Transfer Domains</li>
        <li>Customer Portals</li>
        <li>Support Portal</li>
        <li>Video Tutorials</li>
      </ul>
    </div>

    <div className="footer-social">
      <FontAwesomeIcon icon={faFacebook} className="footer-social__icons" />
      <FontAwesomeIcon icon={faYoutube} className="footer-social__icons" />
      <FontAwesomeIcon icon={faTwitter} className="footer-social__icons" />
    </div>
  </footer>
)


export default Footer;
