import React from 'react';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';
import FooterSocialItems from './FooterSocialItems';

const NEWSLETTER_SCRIPT_URL =
  'https://script.google.com/a/synadia.com/macros/s/AKfycbw_7yaqcnWQJRI3AJ5hkwLTBrKYPXPS2s_tWMfzqyTG1k4tzH4/exec';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        {!this.props.simple && (
          <div className="logo">
            <Logo />
            <p>
              &copy; {new Date().getFullYear()} Synadia Communications. <br />
              All rights reserved.
            </p>
          </div>
        )}
        {!this.props.simple && (
          <div className="contact">
            <NewsletterForm
              title="Sign up for our newsletter"
              url={NEWSLETTER_SCRIPT_URL}
              thanksMessage="Thank you for subscribing."
            />
          </div>
        )}
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
              grid-template-columns: 2fr 0.5fr 3fr;
              grid-template-areas: 'logo . contact' 'social social social';
              align-items: start;
              justify-items: start;
            }

            .contact {
              width: 100%;
              padding-bottom: 4rem;
            }

            .social {
              justify-self: center;
            }

            .social h5 {
              text-align: center;
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
