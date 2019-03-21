import React from 'react';

const Services = (props) => (
  <section className="section-services">
    <h3 className="heading-secondary">Our Services</h3>
    <div className="service-list">
      <div className="service">
        <img className="service__icon" src="images/web-hosting.svg" alt=""/>
        <div className="service__text">
          <h4 className="heading-4">Web Hosting <span>&#10145;</span></h4>
          <p>A ullam cum blanditiis porro ab, eligendi officiis accusamus debitis recusandae excepturi, soluta impedit tempore, ipsa accusantium veritatis ad? Velit illo, eveniet.</p>
        </div>
      </div>

      <div className="service">
        <img className="service__icon" src="images/resellers.svg" alt=""/>
        <div className="service__text">
          <h4 className="heading-4">Reseller <span>&#10145;</span></h4>
          <p>A ullam cum blanditiis porro ab, eligendi officiis accusamus debitis recusandae excepturi, soluta impedit tempore, ipsa accusantium veritatis ad? Velit illo, eveniet.</p>
        </div>
      </div>

      <div className="service">
        <img className="service__icon" src="images/vps-hosting.svg" alt=""/>
        <div className="service__text">
          <h4 className="heading-4">VPS Hosting <span>&#10145;</span></h4>
          <p>A ullam cum blanditiis porro ab, eligendi officiis accusamus debitis recusandae excepturi, soluta impedit tempore, ipsa accusantium veritatis ad? Velit illo, eveniet.</p>
        </div>
      </div>

      <div className="service">
        <img className="service__icon" src="images/cloud-hosting.svg" alt=""/>
        <div className="service__text">
          <h4 className="heading-4">Cloud Hosting <span>&#10145;</span></h4>
          <p>A ullam cum blanditiis porro ab, eligendi officiis accusamus debitis recusandae excepturi, soluta impedit tempore, ipsa accusantium veritatis ad? Velit illo, eveniet.</p>
        </div>
      </div>
    </div>
  </section>
)


export default Services;
