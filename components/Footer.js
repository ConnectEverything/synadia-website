import React from 'react';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';
import FooterSocialItems from './FooterSocialItems';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className="logo">
          <Logo />
          <p>&copy; {new Date().getFullYear()} Synadia. All rights reserved.</p>
        </div>
        <div className="contact">
          <h5>Sign up for our newsletter</h5>
          <NewsletterForm />
        </div>
        <div className="social">
          <h5>Connect with us</h5>
          <FooterSocialItems />
        </div>
        <style jsx>{`
          footer {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas: 'contact' 'social' 'logo';
            grid-column-gap: 2vw;
            align-items: center;
            justify-items: center;
            width: 80vw;
            margin: 0 auto;
            margin-top: 5rem;
            padding: 3.49rem 0;
            border-top: 2px solid #052034;
          }

          .logo {
            grid-area: logo;
          }

          .contact {
            grid-area: contact;
          }

          .social {
            grid-area: social;
          }

          @media (min-width: 768px) {
            footer {
              grid-template-columns: 1fr 1fr 3fr;
              grid-template-areas: 'logo . contact' 'copyright . social';
              align-items: start;
              justify-items: start;
            }

            .contact {
              width: 100%;
              padding-bottom: 4rem;
            }
          }

          @media (min-width: 1400px) {
            footer {
              margin: 0 auto;
              max-width: 1400px;
            }
          }
        `}</style>
      </footer>
    );
  }
}
