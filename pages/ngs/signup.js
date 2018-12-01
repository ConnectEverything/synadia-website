import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricingCard from '../../components/PricingCard';

export default class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header internal />
        <section>
          <p />
        </section>

        <h3>
          Need customized options? <br className="mobile--only" />
          <a className="link" href="mailto:info@synadia.com">
            Contact Us
          </a>
        </h3>

        <Footer simple />
        <style jsx>{`
          main {
            padding-top: 25vh;
            position: relative;
            background-image: url('/static/images/bg.png');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: 50% 10%;
          }

          section {
            max-width: 1920px;
            margin: 0 auto;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
          }

          h3 {
            margin-top: 6rem;
            margin-bottom: 5rem;
          }
        `}</style>
      </main>
    );
  }
}
