import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricingCard from '../../components/PricingCard';
import AnimateLoad from '../../components/AnimateLoad';

export default class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header internal />
        <div className="background">
          <AnimateLoad delay={100}>
            <img src="/static/images/bg.png" alt="" />
          </AnimateLoad>
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
              montlyData: '1',
              dataSharing: false,
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
              montlyData: '5',
              dataSharing: true,
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
              connections: '100',
              montlyData: '25',
              dataSharing: true,
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
              connections: '1000',
              montlyData: '200',
              dataSharing: true,
              ctaText: 'Signup'
            }}
          />
        </section>

        <h3>
          Need customized options? <br className="mobile--only" />
          <a className="link" href="">
            Contact Us
          </a>
        </h3>

        <Footer simple />
        <style jsx>{`
          main {
            padding-top: 25vh;
            position: relative;
          }

          .background {
            max-width: 100%;
            position: absolute;
            top: 10vh;
          }

          section {
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
