import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default class JobDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header internal />
        <section>
          <h2>Work at Synadia</h2>

          <h3 className="inner">Business Development</h3>

        <p>
          <ul>
            <li>Employment Type: Full time</li>
            <li>Location: Remote</li>
            <li>Level: Mid to Senior</li>
          </ul>
        </p>
          <h4>Job Summary</h4>

          <p>
            The business development manager, or BDM, informs others about company products and services and acts as the point of contact for new clients and their assigned existing clients.

            <ul>
            <li>Contacting potential clients to establish rapport and arrange meetings.</li>
            <li>Planning and overseeing new marketing initiatives.</li>
            <li>Researching organizations and individuals to find new opportunities.</li>
            <li>Increasing the value of current customers while attracting new ones.</li>
            <li>Finding and developing new markets and improving sales.</li>
            <li>Attending conferences, meetings, and industry events.</li>
            </ul>
          </p>
            <h4>Job Requirements</h4>
            <p>
            We are looking for people who have a high capacity for growth and are eager to learn and make an impact in the cloud infrastructure space.
            Prior experience in this space is not a requirement, but our ideal candidates should:

            <ul>
            <li>Contacting potential clients to establish rapport and arrange meetings.</li>
            <li>Planning and overseeing new marketing initiatives.</li>
            <li>Researching organizations and individuals to find new opportunities.</li>
            <li>Increasing the value of current customers while attracting new ones.</li>
            <li>Finding and developing new markets and improving sales.</li>
            <li>Attending conferences, meetings, and industry events.</li>
            </ul>
            </p>

            <div>
            <a className="action"
            href="mailto:jobs@synadia.com?subject=Job Req | Business Development" data-text="Apply Now">
                Apply Now
              </a>
  </div>

        </section>

        <Footer simple />
        <style jsx>{`
          main {
            padding-top: 25vh;
            position: relative;
            background-image: url('/static/images/bg.png');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: 50% 2%;
          }

          section {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;

          }

          .content {
              max-width: 85%;

            }


          h2 {
            margin-top: -1em;
            margin-bottom: 2em;
          }

          p,
          h2,
          h3,
          h4 {
            line-height: 1.5em;
            text-align: left;
            max-width: none;
          }

          p {
            font-size: 1.20rem;
            text-align: left;

          }

          h3.inner {
            font-weight: 600;
            color: var(--color-secondary);
            margin-bottom: 1em;
          }

          h4 {

            font-weight: bold;
          }



          p:last-of-type {
            margin-bottom: 8rem;

          }

          .highlight {
            color: var(--color-secondary);
          }


          .action {
              position: inherit;
              bottom: 0;
              left: 50%;
              width: 65%;
              text-align: center;
              padding: 1rem;

              font-size: 1.25rem;
              font-weight: 600;
              background: var(--horizontal-gradient);
              transform: translate(-50%, 50%);
              transition: transform 200ms ease-in-out;
            }

          @media (min-width: 1024px) {
            code {
              width: 60%;
            }
          }
        `}</style>
      </main>
    );
  }
}
