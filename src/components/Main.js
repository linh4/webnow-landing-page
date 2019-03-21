import React from 'react';
import Services from './Services'

const Main = () => (
  <main>
    <section className="section-account">
      <p className="page-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis accusamus sunt eveniet illum eligendi, illo, mollitia corporis ipsam blanditiis, minima magnam. Vero illum ad quidem nulla ullam doloribus delectus molestias?</p>
      <button className="btn btn--purple btn--create">Create your account</button>
    </section>

    <Services />

    <section className="section-contact">
      <div className="contact--left">
        <p className="contact--left-top">Are you ready?</p>
        <p className="contact--left-bottom">create an account, or contact us</p>
      </div>
      <div className="contact--right">
        <button className="btn btn--purple btn--create">Create your account</button>
        <button className="btn btn--white btn--contact">Contact us</button>
      </div>
    </section>
  </main>
)


export default Main;
