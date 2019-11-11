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
        
            <h3>NGS is a global communications system built on{' '}
            <a hre="https://nats.io">NATS.io</a>. <br /> NGS is easy to use, secure
            by default, and globally available in all major cloud providers.
            <br /> Get connected and send your first message in under a
            minute.</h3>
          
        <section>
          <PricingCard
            data={{
              special: false,
              title: 'Free Tier',
              price: '0',
              messageSize: '1',
              messageUnit: 'kb',
              connections: '10',
              monthlyData: "1",
              ccardReq: false,
              to: '/ngs/signup',
              ctaText: 'Get Started'
            }}
          />
          <PricingCard
            data={{
              special: false,
              title: 'Developer',
              price: '0',
              messageSize: '4',
              messageUnit: 'kb',
              connections: '50',
              monthlyData: '5',
              ccardReq: true,
              to: '/ngs/signup',
              ctaText: 'Get Started'
            }}
          />
          <PricingCard
            data={{
              special: true,
              title: 'Project',
              price: '19',
              messageSize: '256',
              messageUnit: 'kb',
              connections: '100',
              monthlyData: '25',
              ccardReq: true,
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
              ccardReq: true,
              to: '/ngs/signup',
              ctaText: 'Get Started'
            }}
          />
        </section>

        <h4>
          All accounts include <a href="/ngs/how-it-works#streams" className="link">unlimited data sharing</a>. 
          Developer, project and business accounts can extend the NGS supercluster with your own private <a href="https://nats-io.github.io/docs/leafnodes/" target="_blank">servers</a>.
        </h4>

        <h3>
          Transparent, flexible pricing for the first decentralized, secure
          global utility to connect all digital systems, services and devices.
          Choose the plan that is best for you, upgrade at anytime. <br />Commercial support is available for Business Plans.

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

          section2 {
                      max-width: 1920px;
                      margin: 0 auto;
                      flex-wrap: wrap;
                    }

          .imports {
                      font-size: 1.25rem;
                      letter-spacing: -0.59px;

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

          p,
          h4 {
            display: block;
            max-width: 80%;
          }

        `}</style>
      </main>
    );
  }
}
