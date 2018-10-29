import React from 'react';
import AOS from 'aos';
import Header from '../components/Header';
import ParticleWave from '../components/Particles/ParticleWave';

class error extends React.Component {
  componentDidMount() {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out'
    });
  }

  render() {
    return (
      <section>
        <Header />
        <ParticleWave static />
        <h1>
          <div className="word">
            <div className="letter" data-aos="fade-up" data-aos-delay="0">
              4
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="50">
              0
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="100">
              4
            </div>
          </div>
        </h1>
        <h3>
          <div className="word">
            <div className="letter" data-aos="fade-up" data-aos-delay="150">
              P
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="200">
              a
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="250">
              g
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="300">
              e
            </div>
          </div>
          {` `}
          <div className="word">
            <div className="letter" data-aos="fade-up" data-aos-delay="350">
              n
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="400">
              o
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="450">
              t
            </div>
          </div>
          {` `}
          <div className="word">
            <div className="letter" data-aos="fade-up" data-aos-delay="500">
              f
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="550">
              o
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="600">
              u
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="750">
              n
            </div>
            <div className="letter" data-aos="fade-up" data-aos-delay="800">
              d
            </div>
          </div>
        </h3>
        <a
          data-aos="fade-up"
          data-aos-delay="850"
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
