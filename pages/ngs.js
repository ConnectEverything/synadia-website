import React from 'react';
import HeaderSimple from '../components/HeaderSimple';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';

const NGS_EARLY_ACCESS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwUrDs2x-DHyiUKmRw2aHrQvMsEz2lh4v0jA58uVWPSvjhkvj0R/exec';

export default class Ngs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <HeaderSimple />
        <section>
          <h2>About Synadia</h2>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, dolorem magni, corporis ipsam quisquam optio qui
              beatae architecto ex neque dolores dicta asperiores pariatur
              reprehenderit dolorum facere earum molestiae voluptatibus?
            </p>
            <div className="contact">
              <h5>Sign up for our newsletter</h5>
              <NewsletterForm url={NGS_EARLY_ACCESS_SCRIPT_URL} />
            </div>
          </div>
        </section>
        <Footer simple />
        <style jsx>{`
          main {
            background-image: url('/static/images/bg.png');
            background-repeat: no-repeat;
            background-size: 200%;
            background-position: 50% 10%;
          }

          section {
            height: 75vh;
            padding: 5rem 10px;
            margin-bottom: 2rem;
          }

          h2 {
            padding-top: 10rem;
          }

          .content {
            max-width: 800px;
            margin: 0 auto;
          }

          .contact {
            max-width: 95%;
            margin: 4rem auto;
          }

          @media (min-width: 768px) {
            main {
              background-size: contain;
            }

            .contact {
              max-width: 70%;
            }
          }
        `}</style>
      </main>
    );
  }
}
