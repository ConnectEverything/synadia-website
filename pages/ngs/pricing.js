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
        <h2>Welcome to NGS!</h2>
        <div className="content">
        <p>
            <h3>NGS is a global communications system built on{' '}
            <a hre="https://nats.io">NATS.io</a>. <br /> NGS is easy to use, secure
            by default, and globally available in all major cloud providers.
            <br /> Get connected and send your first message in under a
            minute.</h3>
            </p>
          </div>
        <section>
          <PricingCard
            data={{
              special: false,
              title: 'Free Tier',
              price: '0',
              messageSize: '256',
              messageUnit: 'b',
              connections: '2',
              monthlyData: '1',
              dataSharing: false,
              to: '/ngs/signup',
              ctaText: 'Get Started'
            }}
          />
          <PricingCard
            data={{
              special: false,
              title: 'Developer',
              price: '0',
              messageSize: '2',
              messageUnit: 'k',
              connections: '10',
              monthlyData: '5',
              dataSharing: true,
              to: '/ngs/signup',
              ctaText: 'Get Started'
            }}
          />
          <PricingCard
            data={{
              special: true,
              title: 'Project',
              price: '19',
              messageSize: '128',
              messageUnit: 'k',
              connections: '100',
              monthlyData: '25',
              dataSharing: true,
              to: '/ngs/signup',
              ctaText: 'Get Started'
            }}
          />
          <PricingCard
            data={{
              special: false,
              title: 'Business',
              price: '99',
              messageSize: '1',
              messageUnit: 'mb',
              connections: '1000',
              monthlyData: '200',
              dataSharing: true,
              to: '/ngs/signup',
              ctaText: 'Get Started'
            }}
          />
        </section>

        <h3>
          Transparent, flexible pricing for the first decentralized, secure
          global utility to connect all digital systems, services and devices.
          Choose the plan that is best for you, upgrade at anytime.
        </h3>

        <h3>
          Need customized options? <br className="mobile--only" />
          <a className="link" href="mailto:info@synadia.com">
            Contact Us
          </a>
        </h3>

        <Footer simple />
        <style jsx>{`
          main {
            padding-top: 15vh;
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

          h2 {
            font-weight: normal;
          }

          h3 {
            margin-top: 2rem;
            margin-bottom: 2rem;
            max-width: 1920px;
            margin: 0 auto;
            padding: 2rem 3rem 4rem 3rem;
          }
        `}</style>
      </main>
    );
  }
}
