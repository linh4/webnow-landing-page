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
        <li><a href="#">About us</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </div>

    <div className="footer-description">
      <p className="title">Services</p>
      <ul>
        <li><a href="#">Web Hosting</a></li>
        <li><a href="#">Cloud Hosting</a></li>
        <li><a href="#">VPS Services</a></li>
        <li><a href="#">Domain Names</a></li>
      </ul>
    </div>

    <div className="footer-description">
      <p className="title">Others</p>
      <ul>
        <li><a href="#">Transfer Domains</a></li>
        <li><a href="#">Customer Portals</a></li>
        <li><a href="#">Support Portal</a></li>
        <li><a href="#">Video Tutorials</a></li>
      </ul>
    </div>

    <div className="footer-social">
      <a href="#"><FontAwesomeIcon icon={faFacebook} className="footer-social__icons" /></a>
      <a href="#"><FontAwesomeIcon icon={faYoutube} className="footer-social__icons" /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} className="footer-social__icons" /></a>
    </div>
  </footer>
)


export default Footer;
