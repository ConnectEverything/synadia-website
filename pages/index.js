import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header />
        <section className="first-fold">
          <h1>
            Connect Everything
            <span>.</span>
          </h1>
        </section>
        <section id="about" className="about">
          <h3>
            At Synadia, we believe there is an opportunity to create the first
            decentralized, secure global utility, powered by NATSio, to connect
            all digital systems, services and devices.
          </h3>
          <h3>
            This offering will be decentralized by design, secure by default,
            globally available, and easy to use and manage.
          </h3>
        </section>
        <section id="team">
          <h2>Meet the Team</h2>
          <h4>
            With 100+ years of combined experience in engineering and messaging,
            the good people of Synadia provide a wealth of knowledge aimed at
            challenging how the world connects.
          </h4>
        </section>
        <Footer />
        <style jsx>{`
          .first-fold {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 105px);
            width: 100vw;
            margin: 105px auto 0 auto;
          }

          h1 span {
            position: relative;
          }

          h1 span:after {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 1.15rem;
            width: 1.15rem;
            border-radius: 100%;
            background: var(--horizontal-gradient);
            transform: translate(-17%, -140%);
          }

          .about {
            margin-bottom: 12rem;
          }

          @media (min-width: 768px) {
            h1 span:after {
              content: '';
            }
          }
        `}</style>
      </main>
    );
  }
}
