import React from 'react';
import Services from './Services'

const Main = () => {
  return (
    <main>
      <section className="section-account">
        <p className="page-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis accusamus sunt eveniet illum eligendi, illo, mollitia corporis ipsam blanditiis, minima magnam. Vero illum ad quidem nulla ullam doloribus delectus molestias?</p>
        <button className="btn btn--purple btn--create">Create your account</button>
      </section>

      <Services />

      <section className="contact">
        Contact
      </section>
    </main>
  )
}

export default Main;
