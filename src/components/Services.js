import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Services = (props) => (
  <section className="section-services">
    <h3 className="heading-secondary">Our Services</h3>
    <div className="service-list">
      <div className="service">
        <LazyLoadImage
          effect="blur"
          alt="Web Hosting"
          src="images/web-hosting.svg"
          class="service__icon"
          threshold="0"
        />
        <div className="service__text">
          <h4 className="heading-4">Web Hosting <span>&#10145;</span></h4>
          <p>A ullam cum blanditiis porro ab, eligendi officiis accusamus debitis recusandae excepturi, soluta impedit tempore, ipsa accusantium veritatis ad? Velit illo, eveniet.</p>
        </div>
      </div>

      <div className="service">
        <LazyLoadImage
          effect="blur"
          alt="Resellers"
          src="images/resellers.svg"
          class="service__icon"
          threshold="0"
        />
        <div className="service__text">
          <h4 className="heading-4">Reseller <span>&#10145;</span></h4>
          <p>A ullam cum blanditiis porro ab, eligendi officiis accusamus debitis recusandae excepturi, soluta impedit tempore, ipsa accusantium veritatis ad? Velit illo, eveniet.</p>
        </div>
      </div>

      <div className="service">
        <LazyLoadImage
          effect="blur"
          alt="VPS Hosting"
          src="images/vps-hosting.svg"
          class="service__icon"
          threshold="0"
        />
        <div className="service__text">
          <h4 className="heading-4">VPS Hosting <span>&#10145;</span></h4>
          <p>A ullam cum blanditiis porro ab, eligendi officiis accusamus debitis recusandae excepturi, soluta impedit tempore, ipsa accusantium veritatis ad? Velit illo, eveniet.</p>
        </div>
      </div>

      <div className="service">
        <LazyLoadImage
          effect="blur"
          alt="Cloud Hosting"
          src="images/cloud-hosting.svg"
          class="service__icon"
          threshold="0"
        />
        <div className="service__text">
          <h4 className="heading-4">Cloud Hosting <span>&#10145;</span></h4>
          <p>A ullam cum blanditiis porro ab, eligendi officiis accusamus debitis recusandae excepturi, soluta impedit tempore, ipsa accusantium veritatis ad? Velit illo, eveniet.</p>
        </div>
      </div>
    </div>
  </section>
)


export default Services;
