import React from 'react';
import AOS from 'aos';
import HeaderSimple from '../components/HeaderSimple';
import ParticleWave from '../components/ParticleWave';

class error extends React.Component {
  componentDidMount() {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-in-out'
    });
  }

  render() {
    return (
      <section>
        <HeaderSimple />
        <ParticleWave static />
        <h1 className="word" data-aos="fade-up" data-aos-delay="0">
          404
        </h1>
        <h3 className="word" data-aos="fade-up" data-aos-delay="150">
          Page not found
        </h3>
        <a
          data-aos="fade-up"
          data-aos-delay="650"
          href="/"
          data-text="Back to homepage"
          className="button"
        >
          Back to homepage
        </a>
        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 200px);
            width: 100vw;
            margin: 0 auto;
            overflow: hidden !important;
            padding: 0 10px;
          }

          h1 {
            margin: 0;
          }

          .button {
            margin-top: 1em;
            min-height: 55px;
          }

          @media (min-width: 768px) {
            section {
              height: calc(100vh - 105px);
            }
          }
        `}</style>
      </section>
    );
  }
}

export default error;
