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
        <li><a href="/about-us">About us</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
    </div>

    <div className="footer-description">
      <p className="title">Services</p>
      <ul>
        <li><a href="/webhosting">Web Hosting</a></li>
        <li><a href="/cloud-hosting">Cloud Hosting</a></li>
        <li><a href="/vps-services">VPS Services</a></li>
        <li><a href="/domain-names">Domain Names</a></li>
      </ul>
    </div>

    <div className="footer-description">
      <p className="title">Others</p>
      <ul>
        <li><a href="/transfer-domain">Transfer Domains</a></li>
        <li><a href="/customer-portals">Customer Portals</a></li>
        <li><a href="/support-portal">Support Portal</a></li>
        <li><a href="/video-tutorial">Video Tutorials</a></li>
      </ul>
    </div>

    <div className="footer-social">
      <a href="/facebook"><FontAwesomeIcon icon={faFacebook} className="footer-social__icons" /></a>
      <a href="/youtube"><FontAwesomeIcon icon={faYoutube} className="footer-social__icons" /></a>
      <a href="/twitter"><FontAwesomeIcon icon={faTwitter} className="footer-social__icons" /></a>
    </div>
  </footer>
)


export default Footer;
