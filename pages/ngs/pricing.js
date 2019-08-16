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
        <section>
          <PricingCard
            data={{
              special: false,
              title: 'Free Tier',
              price: '0',
              messageSize: '256',
              messageUnit: 'b',
              connections: '2 + 1*',
              monthlyData: "1",
              importUnits: "5 ",
              importType: "Public",
              exportUnits: "0 ",
              exportType: "",
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
              connections: '10 + 2*',
              monthlyData: '5',
              importUnits: "10 ",
              importType: "Public",
              exportUnits: "1 ",
              exportType: "static",
              dataSharing: true,
              to: '/ngs/signup',
              ctaText: 'Signup'
            }}
          />
          <PricingCard
            data={{
              special: true,
              title: 'Project',
              price: '19',
              messageSize: '128',
              messageUnit: 'k',
              connections: '100 + 5*',
              monthlyData: '25',
              importUnits: "25 ",
              importType: "Public or Private",
              exportUnits: "10 ",
              exportType: "static",
              dataSharing: true,
              to: '/ngs/signup',
              ctaText: 'Signup'
            }}
          />
          <PricingCard
            data={{
              special: false,
              title: 'Business',
              price: '99',
              messageSize: '1',
              messageUnit: 'mb',
              connections: '1000 + 10*',
              monthlyData: '200',
              importUnits: "50 ",
              importType: "Public or Private",
              exportUnits: "25 ",
              exportType: "flexible",
              dataSharing: true,
              to: '/ngs/signup',
              ctaText: 'Signup'
            }}
          />
        </section>

        <h4>
          * Extend the NGS supercluster with your own private <a href="https://nats-io.github.io/docs/leafnodes/" target="_blank">servers</a>.

        </h4>

        <h3>
          Transparent, flexible pricing for the first decentralized, secure
          global utility to connect all digital systems, services and devices.
          Choose the plan that is best for you, upgrade at anytime. Get two months free with an annual subscription. <br />Commercial support is available for Business Plans.

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
